const VK_API_VERSION = "5.199";

const vkRecipients = {
  "Дарья Ярунова": "220592250",
  "Станислав Чемякин": "33678710",
  "Ксения Степанова": "7316156",
  "Алексей Секачев": "266095750",
  "Надежда Ромичева": "90859047",
  "Андрей Радаев": "55479797",
  "Анастасия Панкова": "54221452",
  "Полина Останина": "179554392",
  "Екатерина Овсянникова": "479131659",
  "Анна Никовская": "224826955",
  "Надежда Наумова": "481125194",
  "Ирина Мухамедзянова": "141621250",
  "Карина Москаленко": "468802330",
  "Камила Милицанова": "387347147",
  "Арина Лоушкина": "387362590",
  "Алексей Кортосов": "249776019",
  "Арина Кондратьева": "265685921",
  "Екатерина Киселева": "356922306",
  "Анастасий Кесов": "37389451",
  "Денис Калчаков": "71351726",
  "Аделина Калиновская": "204884404",
  "Станислав Игнатов": "181335259",
  "Иван Забалуев": "223610893",
  "Татьяна Герасименко": "58438490",
  "Екатерина Гейнбихнер": "189248926",
  "Юлия Галкина": "572070479",
  "Денис Воробьев": "218485938",
  "Данил Батинов": "164686320",
  "Николай Баранюк": "176226575",
  "Анастасия Агафонова": "403987007",
  "Галина Васильева": "385395876",
  "Александр Бокслер": "137236719",
  "Александр Скорняков": "33300714",
  "Сергей Попов": "280566145",
  "Рустам Латыпов": "714232397",
  "Арслан Гаджиев": "82942833",
  "Кристина Анастасова": "142821425",
  "Анна Алыбина": "427803819",
  "Иван Бережной": "73315529",
  "Сергей Чирков": "16504601",
};

const vkIdCache = new Map();

function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Notify-Key");
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 100000) {
        reject(new Error("Payload is too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

function normalizeVkHandle(value) {
  return String(value || "")
    .trim()
    .replace(/^https?:\/\/vk\.com\//i, "")
    .replace(/^@/, "")
    .replace(/^id(?=\d+$)/i, "");
}

async function callVk(method, params, token) {
  const url = new URL(`https://api.vk.com/method/${method}`);
  Object.entries({ ...params, access_token: token, v: VK_API_VERSION }).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  const response = await fetch(url);
  const data = await response.json();
  if (data.error) {
    throw new Error(`${method}: ${data.error.error_msg}`);
  }
  return data.response;
}

async function resolveUserId(handle, token) {
  const normalized = normalizeVkHandle(handle);
  if (!normalized) return null;
  if (/^\d+$/.test(normalized)) return normalized;
  if (vkIdCache.has(normalized)) return vkIdCache.get(normalized);

  const resolved = await callVk("utils.resolveScreenName", { screen_name: normalized }, token);
  if (!resolved || resolved.type !== "user") {
    throw new Error(`VK user not found: ${normalized}`);
  }

  const id = String(resolved.object_id);
  vkIdCache.set(normalized, id);
  return id;
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function pickRecipients(event) {
  const ticket = event.ticket || {};
  if (event.type === "ticket_created") {
    return unique(["Александр Скорняков", "Кристина Анастасова", ticket.assigneeName]);
  }
  if (event.type === "ticket_in_progress" || event.type === "ticket_done") {
    return unique([ticket.requester]);
  }
  return [];
}

function formatMessage(event) {
  const ticket = event.ticket || {};
  const priority = ticket.priorityLabel || ticket.priority || "не указан";
  const assignee = ticket.assigneeName || "не назначен";

  if (event.type === "ticket_created") {
    return [
      `Новая заявка ${ticket.id}`,
      `Локация: ${ticket.location}`,
      `Заявитель: ${ticket.requester}`,
      `Проблема: ${ticket.description}`,
      `Приоритет: ${priority}`,
      `Ответственный: ${assignee}`,
      ticket.dueText ? `SLA: ${ticket.dueText}` : "",
    ].filter(Boolean).join("\n");
  }

  if (event.type === "ticket_in_progress") {
    return [
      `Заявка ${ticket.id} взята в работу`,
      `Локация: ${ticket.location}`,
      `Ответственный: ${assignee}`,
      `Проблема: ${ticket.description}`,
    ].join("\n");
  }

  if (event.type === "ticket_done") {
    return [
      `Заявка ${ticket.id} закрыта`,
      `Локация: ${ticket.location}`,
      `Ответственный: ${assignee}`,
      `Проблема: ${ticket.description}`,
      ticket.completionProofName ? `Фото подтверждения: ${ticket.completionProofName}` : "",
    ].filter(Boolean).join("\n");
  }

  return "";
}

async function sendVkMessage(name, message, token) {
  const handle = vkRecipients[name];
  if (!handle) {
    return { name, skipped: true, reason: "recipient_not_configured" };
  }

  const userId = await resolveUserId(handle, token);
  await callVk("messages.send", {
    user_id: userId,
    random_id: String(Date.now() + Math.floor(Math.random() * 100000)),
    message,
  }, token);

  return { name, userId, sent: true };
}

module.exports = async function handler(req, res) {
  setCors(res);

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== "POST") {
    res.statusCode = 405;
    res.json({ ok: false, error: "Method not allowed" });
    return;
  }

  const expectedKey = process.env.NOTIFY_CLIENT_KEY;
  if (expectedKey && req.headers["x-notify-key"] !== expectedKey) {
    res.statusCode = 401;
    res.json({ ok: false, error: "Unauthorized" });
    return;
  }

  const token = process.env.VK_GROUP_TOKEN;
  if (!token) {
    res.statusCode = 500;
    res.json({ ok: false, error: "VK_GROUP_TOKEN is not configured" });
    return;
  }

  try {
    const event = await readBody(req);
    const message = formatMessage(event);
    if (!message) {
      res.statusCode = 400;
      res.json({ ok: false, error: "Unknown notification type" });
      return;
    }

    const recipients = pickRecipients(event);
    const results = [];
    for (const name of recipients) {
      try {
        results.push(await sendVkMessage(name, message, token));
      } catch (error) {
        results.push({ name, sent: false, error: error.message });
      }
    }

    res.statusCode = 200;
    res.json({ ok: true, results });
  } catch (error) {
    res.statusCode = 500;
    res.json({ ok: false, error: error.message });
  }
};
