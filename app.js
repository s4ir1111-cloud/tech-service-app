const employees = [
  { id: 1, name: "Дарья Ярунова", department: "Структурные подразделения(Кофейни)", email: "dariayarynova@gmail.com", phone: "+7 909 194-18-33" },
  { id: 5, name: "Станислав Чемякин", department: "Структурные подразделения(Кофейни)", email: "s.chemyakin@gardencoffee.ru", phone: "+7 982 905-37-19" },
  { id: 11, name: "Ксения Степанова", department: "Структурные подразделения(Кофейни)", email: "vidniy.sad@yandex.ru", phone: "+7 922 487-00-56" },
  { id: 17, name: "Алексей Секачев", department: "Структурные подразделения(Кофейни)", email: "Ivanchaos331@gmail.com", phone: "+7 904 493-32-54" },
  { id: 18, name: "Надежда Ромичева", department: "Структурные подразделения(Кофейни)", email: "n.romicheva@gardencoffee.ru", phone: "+7 922 079-74-70" },
  { id: 19, name: "Андрей Радаев", department: "Структурные подразделения(Кофейни)", email: "inon.good@gmail.com", phone: "+7 919 921-79-94" },
  { id: 23, name: "Анастасия Панкова", department: "Структурные подразделения(Кофейни)", email: "Denisova.andrevna@gmail.com", phone: "+7 922 046-44-52" },
  { id: 24, name: "Полина Останина", department: "Структурные подразделения(Кофейни)", email: "polina.ostanina@list.ru", phone: "+7 904 480-36-73" },
  { id: 26, name: "Екатерина Овсянникова", department: "Структурные подразделения(Кофейни)", email: "katy0en0k@gmail.com", phone: "+7 912 393-02-04" },
  { id: 27, name: "Анна Никовская", department: "Структурные подразделения(Кофейни)", email: "a.nikovskaya@gardencoffee.ru", phone: "+7 982 787-31-20" },
  { id: 28, name: "Надежда Наумова", department: "Структурные подразделения(Кофейни)", email: "nnaumova290@gmail.com", phone: "+7 982 778-27-21" },
  { id: 30, name: "Ирина Мухамедзянова", department: "Структурные подразделения(Кофейни)", email: "sotosh@vk.com", phone: "+7 982 942-25-67" },
  { id: 31, name: "Карина Москаленко", department: "Структурные подразделения(Кофейни)", email: "lalyfibe@gmail.com", phone: "+7 982 787-51-70" },
  { id: 34, name: "Камила Милицанова", department: "Структурные подразделения(Кофейни)", email: "miliczanova@bk.ru", phone: "+7 919 939-62-12" },
  { id: 36, name: "Арина Лоушкина", department: "Структурные подразделения(Кофейни)", email: "aronatotoro@gmail.com", phone: "" },
  { id: 39, name: "Алексей Кортосов", department: "Структурные подразделения(Кофейни)", email: "aleksey.kortosov@mail.ru", phone: "+7 919 931-54-48" },
  { id: 40, name: "Арина Кондратьева", department: "Структурные подразделения(Кофейни)", email: "arina030813@icloud.com", phone: "+7 932 322-52-66" },
  { id: 41, name: "Екатерина Киселева", department: "Структурные подразделения(Кофейни)", email: "kiselevabod02@mail.ru", phone: "+7 912 999-56-58" },
  { id: 42, name: "Анастасий Кесов", department: "Структурные подразделения(Кофейни)", email: "kesov77@yandex.ru", phone: "+7 922 480-49-44" },
  { id: 45, name: "Денис Калчаков", department: "Структурные подразделения(Кофейни)", email: "d.kalchakov@gardencoffee.ru", phone: "+7 992 309-09-72" },
  { id: 2, name: "Наталья Шакуто", department: "Отдел финансового планирования и учета", email: "", phone: "+7 922 395-02-81" },
  { id: 8, name: "Ирина Тютикова", department: "Тренинг-центр", email: "i.tutikova@gardencoffee.ru", phone: "+7 982 673-16-79" },
  { id: 14, name: "Александр Скорняков", department: "Проектирование инфраструктуры", email: "a.skornyakov@gardencoffee.ru", phone: "+7 919 930-27-32" },
  { id: 21, name: "Сергей Попов", department: "Проектирование инфраструктуры", email: "", phone: "+7 982 987-97-71" },
  { id: 37, name: "Рустам Латыпов", department: "Проектирование инфраструктуры", email: "Rustam0913@yandex.ru", phone: "+7 922 263-89-29" },
  { id: 58, name: "Арслан Гаджиев", department: "Отдел стандартизации и снабжения", email: "a.gadjiev@gardencoffee.ru", phone: "+7 919 948-32-28" },
  { id: 9, name: "Михаил Турченко", department: "Отдел стандартизации и снабжения", email: "misaturcenko32@mail.ru", phone: "" },
  { id: 71, name: "Кристина Анастасова", department: "Отдел франчайзинга и сервиса", email: "office@gardencoffee.ru", phone: "" },
  { id: 72, name: "Анна Алыбина", department: "Отдел франчайзинга и сервиса", email: "a.alybina@gardencoffee.ru", phone: "+7 922 471-11-48" },
  { id: 73, name: "Гузель Соколова", department: "Администрация", email: "", phone: "" },
  { id: 68, name: "Иван Бережной", department: "Отдел операционной деятельности", email: "top-manager@gardencoffee.ru", phone: "" },
];

const cafeManagers = [
  { id: "yarunova", name: "Дарья Ярунова", location: "Гагарина" },
  { id: "chemyakin", name: "Станислав Чемякин", location: "Океан" },
  { id: "stepanova", name: "Ксения Степанова", location: "Видный" },
  { id: "sekachev", name: "Алексей Секачев", location: "Советская" },
  { id: "romicheva", name: "Надежда Ромичева", location: "Мельница, Парус", locations: ["Мельница", "Парус"] },
  { id: "radaev", name: "Андрей Радаев", location: "Свердлова" },
  { id: "pankova", name: "Анастасия Панкова", location: "Калинка" },
  { id: "ostanina", name: "Полина Останина", location: "World Class" },
  { id: "ovsyannikova", name: "Екатерина Овсянникова", location: "Свердлова" },
  { id: "nikovskaya", name: "Анна Никовская", location: "Арсиб" },
  { id: "naumova", name: "Надежда Наумова", location: "Калинка" },
  { id: "muhamedzyanova", name: "Ирина Мухамедзянова", location: "Советская" },
  { id: "moskalenko", name: "Карина Москаленко", location: "Мельница" },
  { id: "militsanova", name: "Камила Милицанова", location: "Евро" },
  { id: "loushkina", name: "Арина Лоушкина", location: "Драм" },
  { id: "kortosov", name: "Алексей Кортосов", location: "Арсиб" },
  { id: "kondrateva", name: "Арина Кондратьева", location: "Панорама" },
  { id: "kiseleva", name: "Екатерина Киселева", location: "World Class" },
  { id: "kesov", name: "Анастасий Кесов", location: "Новин" },
  { id: "kalchakov", name: "Денис Калчаков", location: "Евро" },
  { id: "kalinovskaya", name: "Аделина Калиновская", location: "Домашний" },
  { id: "ignatov", name: "Станислав Игнатов", location: "Гагарина" },
  { id: "zabaluev", name: "Иван Забалуев", location: "Панорама" },
  { id: "gerasimenko", name: "Татьяна Герасименко", location: "Парус" },
  { id: "geynbikhner", name: "Екатерина Гейнбихнер", location: "Новин" },
  { id: "galkina", name: "Юлия Галкина", location: "Домашний" },
  { id: "vorobyev", name: "Денис Воробьев", location: "Прео" },
  { id: "batinov", name: "Данил Батинов", location: "Океан" },
  { id: "baranyuk", name: "Николай Баранюк", location: "Драм" },
  { id: "agafonova", name: "Анастасия Агафонова", location: "Видный" },
];

const departmentManagers = [
  { id: "shakuto", name: "Наталья Шакуто", location: "Бухгалтерия", roleName: "Руководитель бухгалтерии" },
  { id: "tutikova", name: "Ирина Тютикова", location: "Тренинг-центр", roleName: "Руководитель тренинг-центра" },
  { id: "office-head", name: "Иван Бережной", location: "Офис", roleName: "Руководитель офиса" },
];

const requesters = [...new Set([
  ...cafeManagers.map((manager) => manager.name),
  ...departmentManagers.map((manager) => manager.name),
  "Юлия Зуева",
  "Галина Васильева",
  "Александр Бокслер",
  "Иван Бережной",
  "Заготовочный цех",
])];

const locations = [...new Set([
  ...cafeManagers.flatMap((manager) => getUserLocations(manager)), "Гарден Кофе Сургут", "Гарден Кофе Тобольск", "Кондитерский цех", "Обжарочный цех",
  "Заготовочный цех", "Склад снабжения", "Бухгалтерия", "Офис", "Тренинг-центр", "Софиленд", "Новая точка"
])];

const defaultRequesterByLocation = cafeManagers.reduce((map, manager) => {
  getUserLocations(manager).forEach((location) => {
    if (!map[location]) map[location] = manager.name;
  });
  return map;
}, {
  ...departmentManagers.reduce((map, manager) => {
    getUserLocations(manager).forEach((location) => {
      if (!map[location]) map[location] = manager.name;
    });
    return map;
  }, {}),
  "Гарден Кофе Сургут": "Юлия Зуева",
  "Гарден Кофе Тобольск": "Юлия Зуева",
  "Кондитерский цех": "Галина Васильева",
  "Обжарочный цех": "Александр Бокслер",
  "Заготовочный цех": "Заготовочный цех",
});

const notificationEndpoint = window.TECH_SERVICE_NOTIFY_ENDPOINT
  || (window.location.hostname.endsWith("vercel.app") ? "/api/notify" : "");
const notificationClientKey = window.TECH_SERVICE_NOTIFY_KEY || "";
const storageKeys = {
  tickets: "garden-tech-service:tickets:v2",
  archive: "garden-tech-service:archive:v2",
  chat: "garden-tech-service:chat:v1",
  templates: "garden-tech-service:templates:v1",
  session: "garden-tech-service:session:v1",
};

const users = [
  {
    id: "skornyakov",
    name: "Александр Скорняков",
    label: "Александр Скорняков · инженер",
    role: "engineer",
    roleName: "Инженер технической службы",
    permissions: "full",
    authCode: "1400",
  },
  {
    id: "berezhnoy",
    name: "Иван Бережной",
    label: "Иван Бережной · операционный руководитель",
    role: "director",
    roleName: "Операционный руководитель",
    permissions: "full",
    authCode: "6800",
  },
  {
    id: "cafe-director",
    name: "Кристина Анастасова",
    label: "Кристина Анастасова · франчайзинг и сервис",
    role: "director",
    roleName: "Руководитель сервиса",
    permissions: "full",
    authCode: "7100",
  },
  {
    id: "alybina-admin",
    name: "Анна Алыбина",
    label: "Анна Алыбина · администратор",
    role: "admin",
    roleName: "Администратор",
    permissions: "full",
    authCode: "7200",
  },
  {
    id: "sokolova-admin",
    name: "Гузель Соколова",
    label: "Гузель Соколова · администратор",
    role: "admin",
    roleName: "Администратор",
    permissions: "full",
    authCode: "7300",
  },
  ...cafeManagers.map((manager) => ({
    ...manager,
    label: `${manager.name} · управляющая`,
    role: "manager",
    roleName: "Управляющая кофейни",
    permissions: "own",
    authCode: getAuthCodeForName(manager.name),
  })),
  ...departmentManagers.map((manager) => ({
    ...manager,
    label: `${manager.name} · ${manager.location.toLowerCase()}`,
    role: "manager",
    permissions: "own",
    authCode: getAuthCodeForName(manager.name),
  })),
  {
    id: "vasilyeva",
    name: "Галина Васильева",
    label: "Галина Васильева · цех",
    role: "manager",
    roleName: "Ответственная за цех",
    permissions: "own",
    location: "Кондитерский цех",
    authCode: "3333",
  },
  {
    id: "boksler",
    name: "Александр Бокслер",
    label: "Александр Бокслер · обжарочный цех",
    role: "manager",
    roleName: "Ответственный за цех",
    permissions: "own",
    location: "Обжарочный цех",
    authCode: "4444",
  },
];

const engineers = [
  {
    id: "skornyakov",
    employeeId: 14,
    name: "Александр Скорняков",
    role: "Инженер инфраструктуры",
    skills: ["electrical", "hvac", "construction", "network"],
    capacity: 8,
  },
  {
    id: "popov",
    employeeId: 21,
    name: "Сергей Попов",
    role: "Сантехник / аварийный выезд",
    skills: ["plumbing", "construction"],
    capacity: 7,
  },
  {
    id: "latypov",
    employeeId: 37,
    name: "Рустам Латыпов",
    role: "Сервис оборудования",
    skills: ["equipment", "coffee", "refrigeration"],
    capacity: 7,
  },
  {
    id: "gadjiev",
    employeeId: 58,
    name: "Арслан Гаджиев",
    role: "Запчасти и снабжение",
    skills: ["supplies", "equipment"],
    capacity: 6,
  },
  {
    id: "turchenko",
    employeeId: 9,
    name: "Михаил Турченко",
    role: "Стандартизация и снабжение",
    skills: ["supplies", "quality"],
    capacity: 6,
  },
  {
    id: "alybina",
    employeeId: 72,
    name: "Анна Алыбина",
    role: "Сервис-координатор",
    skills: ["coordination", "franchise", "quality"],
    capacity: 9,
  },
];

users.push(...engineers.map((engineer) => ({
  id: `contractor-${engineer.id}`,
  name: engineer.name,
  label: `${engineer.name} · подрядчик`,
  role: "contractor",
  roleName: "Подрядчик",
  permissions: "assigned",
  assignee: engineer.id,
  authCode: String(engineer.employeeId).padStart(4, "0"),
})));

let currentUser = users.find((user) => user.id === localStorage.getItem(storageKeys.session)) || users[0];

const categories = {
  plumbing: {
    label: "Сантехника",
    sla: { critical: 4, high: 12, normal: 36, low: 72 },
    keywords: ["труба", "вода", "потек", "течь", "кран", "сифон", "мойк", "унитаз", "канализац", "засор"],
  },
  electrical: {
    label: "Электрика",
    sla: { critical: 3, high: 8, normal: 24, low: 48 },
    keywords: ["свет", "розет", "электр", "автомат", "щит", "провод", "искр", "выбивает", "ламп"],
  },
  equipment: {
    label: "Оборудование",
    sla: { critical: 5, high: 10, normal: 30, low: 72 },
    keywords: ["кофемаш", "кофе", "посудомой", "печь", "блендер", "касс", "не включ", "сломал", "оборуд"],
  },
  refrigeration: {
    label: "Холодильники",
    sla: { critical: 4, high: 8, normal: 24, low: 48 },
    keywords: ["холод", "мороз", "витрин", "температур", "компрессор"],
  },
  hvac: {
    label: "Вентиляция",
    sla: { critical: 8, high: 16, normal: 48, low: 96 },
    keywords: ["вентиляц", "кондиционер", "жарко", "холодно", "воздух", "вытяж"],
  },
  supplies: {
    label: "Запчасти",
    sla: { critical: 12, high: 24, normal: 72, low: 120 },
    keywords: ["закупить", "запчаст", "фильтр", "деталь", "расходник", "нет в наличии", "поставк"],
  },
  construction: {
    label: "Ремонт помещения",
    sla: { critical: 12, high: 24, normal: 72, low: 120 },
    keywords: ["двер", "пол", "плитк", "стен", "потолок", "ремонт", "мебель", "фасад"],
  },
  quality: {
    label: "Качество / регламент",
    sla: { critical: 12, high: 24, normal: 48, low: 96 },
    keywords: ["санпин", "проверка", "качество", "регламент", "жалоб", "стандарт"],
  },
  coordination: {
    label: "Координация",
    sla: { critical: 8, high: 16, normal: 48, low: 96 },
    keywords: ["согласовать", "подрядчик", "доступ", "документы", "франчайз"],
  },
};

let tickets = reviveTickets(loadStored(storageKeys.tickets, []));
let archivedTickets = reviveTickets(loadStored(storageKeys.archive, []));
let chatMessages = reviveStoredDates(loadStored(storageKeys.chat, []), ["createdAt"]);
let templates = reviveStoredDates(loadStored(storageKeys.templates, []), ["nextDate", "createdAt"]);
let activeFilter = "all";
let personFilter = "all";
let contractorFilter = "all";
let assigneeTouched = false;
let requestPhotoProof = null;
let pendingCompletionTicketId = null;
let pendingCompletionProof = null;
let pendingEditTicketId = null;

function makeTicket(location, requester, description, priority = "normal", createdShiftHours = 0, status = "new", assigneeOverride = null) {
  const category = detectCategory(description);
  const createdAt = addHours(new Date(), createdShiftHours);
  const assignee = assigneeOverride || chooseAssignee(category, priority);
  const dueAt = addHours(createdAt, categories[category].sla[priority]);
  const updatedAt = addHours(createdAt, status === "waiting" ? 1 : Math.min(6, Math.abs(createdShiftHours) / 2));

  return {
    id: `TS-${Math.floor(1000 + Math.random() * 9000)}`,
    location,
    requester,
    description,
    priority,
    category,
    assignee,
    status,
    createdAt,
    updatedAt,
    dueAt,
    visitRequired: "yes",
    deletedAt: null,
    completionResult: "",
    completionComment: "",
    deferredUntil: "",
  };
}

function loadStored(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "null");
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function saveStored(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function reviveStoredDates(items, fields) {
  return items.map((item) => {
    const next = { ...item };
    fields.forEach((field) => {
      if (next[field]) next[field] = new Date(next[field]);
    });
    return next;
  });
}

function reviveTickets(items) {
  return reviveStoredDates(items, ["createdAt", "updatedAt", "dueAt", "deletedAt"]);
}

function persistState() {
  saveStored(storageKeys.tickets, tickets);
  saveStored(storageKeys.archive, archivedTickets);
  saveStored(storageKeys.chat, chatMessages);
  saveStored(storageKeys.templates, templates);
}

function addHours(date, hours) {
  const next = new Date(date);
  next.setHours(next.getHours() + hours);
  return next;
}

function detectCategory(text) {
  const normalized = text.toLowerCase();
  let best = { category: "coordination", score: 0 };

  Object.entries(categories).forEach(([key, category]) => {
    const score = category.keywords.reduce((sum, word) => sum + (normalized.includes(word) ? 1 : 0), 0);
    if (score > best.score) best = { category: key, score };
  });

  return best.category;
}

function currentLoad(engineerId, draftCategory = null, priority = "normal") {
  const priorityWeight = { critical: 2.2, high: 1.6, normal: 1, low: 0.6 };
  const active = tickets.filter((ticket) => ticket.assignee === engineerId && !isClosedStatus(ticket.status));
  const ticketLoad = active.reduce((sum, ticket) => sum + priorityWeight[ticket.priority], 0);
  const draftLoad = draftCategory ? priorityWeight[priority] : 0;
  return ticketLoad + draftLoad;
}

function chooseAssignee(category, priority = "normal") {
  const candidates = engineers.filter((engineer) => engineer.skills.includes(category));
  const pool = candidates.length ? candidates : engineers.filter((engineer) => engineer.skills.includes("coordination"));

  return pool
    .map((engineer) => ({
      id: engineer.id,
      score: currentLoad(engineer.id, category, priority) / engineer.capacity,
      skillDepth: engineer.skills.length,
    }))
    .sort((a, b) => a.score - b.score || a.skillDepth - b.skillDepth)[0].id;
}

function formatDate(date) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function priorityLabel(priority) {
  return { critical: "Авария", high: "Высокий", normal: "Обычный", low: "Низкий" }[priority];
}

function statusLabel(status) {
  return {
    new: "Новая",
    in_progress: "В работе",
    waiting: "Ожидает",
    done: "Выполнено",
    not_approved: "Не согласовано",
    deferred: "Отложено",
    archived: "Архив",
  }[status] || status;
}

function visitLabel(value) {
  return { yes: "Да", no: "Нет", unsure: "Сомневаюсь", true: "Да", false: "Нет" }[String(value)] || "Да";
}

const nameCollator = new Intl.Collator("ru-RU", { sensitivity: "base" });

function compareByName(a, b) {
  return nameCollator.compare(a.name, b.name) || nameCollator.compare(a.label || "", b.label || "");
}

function makeFallbackAuthCode(name) {
  const seed = Array.from(String(name || "")).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return String(1000 + (seed % 9000));
}

function getAuthCodeForName(name, fallback) {
  const employee = employees.find((item) => item.name === name);
  return employee ? String(employee.id).padStart(4, "0") : (fallback || makeFallbackAuthCode(name));
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getTicketNotificationPayload(ticket) {
  const engineer = engineers.find((item) => item.id === ticket.assignee);
  return {
    id: ticket.id,
    location: ticket.location,
    requester: ticket.requester,
    description: ticket.description,
    priority: ticket.priority,
    priorityLabel: priorityLabel(ticket.priority),
    category: categories[ticket.category].label,
    status: ticket.status,
    statusLabel: statusLabel(ticket.status),
    assigneeName: engineer?.name || "Не назначен",
    dueText: `до ${formatDate(ticket.dueAt)}`,
    requestPhotoName: ticket.requestPhoto?.name || "",
    requestPhotoCapturedAt: ticket.requestPhoto?.capturedAt || "",
    completionProofName: ticket.completionProof?.name || "",
    completionProofCapturedAt: ticket.completionProof?.capturedAt || "",
    completionResult: ticket.completionResult || "",
    completionResultLabel: statusLabel(ticket.completionResult || ticket.status),
    completionComment: ticket.completionComment || "",
    deferredUntil: ticket.deferredUntil || "",
  };
}

async function sendNotification(type, ticket) {
  if (!notificationEndpoint) return;

  try {
    const headers = { "Content-Type": "application/json" };
    if (notificationClientKey) headers["X-Notify-Key"] = notificationClientKey;

    const response = await fetch(notificationEndpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({
        type,
        ticket: getTicketNotificationPayload(ticket),
      }),
    });

    if (!response.ok) {
      console.warn("VK notification failed", await response.text());
    }
  } catch (error) {
    console.warn("VK notification failed", error);
  }
}

function isOverdue(ticket) {
  return new Date() > ticket.dueAt && ticket.status !== "done";
}

function isStale(ticket) {
  return addHours(ticket.updatedAt, 24) < new Date() && ticket.status !== "done";
}

function hasFullAccess() {
  return currentUser.permissions === "full";
}

function isAdmin() {
  return hasFullAccess();
}

function getUserLocations(user) {
  if (user.locations) return user.locations;
  return user.location ? [user.location] : [];
}

function getPreferredLocation(user) {
  return getUserLocations(user)[0] || locations[0];
}

function isOwnTicket(ticket) {
  if (currentUser.permissions === "assigned") return ticket.assignee === currentUser.assignee;
  return ticket.requester === currentUser.name || getUserLocations(currentUser).includes(ticket.location);
}

function getVisibleTickets() {
  return hasFullAccess() ? tickets : tickets.filter(isOwnTicket);
}

function getVisibleArchive() {
  return hasFullAccess() ? archivedTickets : archivedTickets.filter(isOwnTicket);
}

function isClosedStatus(status) {
  return ["done", "not_approved"].includes(status);
}

function getSortedUsers() {
  return [...users].sort(compareByName);
}

function userMatchesQuery(user, query) {
  const haystack = [user.name, user.label, user.roleName, user.location, ...(user.locations || [])]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return haystack.includes(query.toLowerCase());
}

function renderUserOptions(userList) {
  return userList
    .map((user) => `<option value="${escapeHtml(user.id)}">${escapeHtml(user.label)}</option>`)
    .join("");
}

function updateLoginUserOptions() {
  const input = document.querySelector("#loginSearchInput");
  const select = document.querySelector("#loginUserInput");
  const previousValue = select.value || currentUser.id;
  const query = input.value.trim();
  const matchingUsers = getSortedUsers().filter((user) => !query || userMatchesQuery(user, query));

  select.innerHTML = matchingUsers.length
    ? renderUserOptions(matchingUsers)
    : `<option value="">Сотрудник не найден</option>`;

  if (matchingUsers.some((user) => user.id === previousValue)) {
    select.value = previousValue;
  } else if (matchingUsers[0]) {
    select.value = matchingUsers[0].id;
  }
}

function populateSelects() {
  const sortedUsers = getSortedUsers();
  const sortedEngineers = [...engineers].sort(compareByName);

  updateLoginUserOptions();
  document.querySelector("#roleInput").innerHTML = renderUserOptions(sortedUsers);
  document.querySelector("#assigneeInput").innerHTML = sortedEngineers
    .map((engineer) => `<option value="${engineer.id}">${engineer.name} · ${engineer.role}</option>`)
    .join("");
  document.querySelector("#templateAssigneeInput").innerHTML = document.querySelector("#assigneeInput").innerHTML;
  document.querySelector("#templateLocationInput").innerHTML = locations.map((location) => `<option>${location}</option>`).join("");
  ["#editLocationInput"].forEach((selector) => {
    document.querySelector(selector).innerHTML = locations.map((location) => `<option>${location}</option>`).join("");
  });
  document.querySelector("#editRequesterInput").innerHTML = requesters.map((name) => `<option>${name}</option>`).join("");
  document.querySelector("#editAssigneeInput").innerHTML = document.querySelector("#assigneeInput").innerHTML;
  document.querySelector("#personFilterInput").innerHTML = `<option value="all">Все</option>${sortedUsers.map((user) => `<option value="${escapeHtml(user.name)}">${escapeHtml(user.name)}</option>`).join("")}`;
  document.querySelector("#contractorFilterInput").innerHTML = `<option value="all">Все</option>${sortedEngineers.map((engineer) => `<option value="${escapeHtml(engineer.id)}">${escapeHtml(engineer.name)}</option>`).join("")}`;
  document.querySelector("#chatRecipientInput").innerHTML = `<option value="all">Всем</option>${renderUserOptions(sortedUsers)}`;
  updateRequestScope();
}

function updateRequestScope() {
  const fullAccess = hasFullAccess();
  const scopedLocations = locations;
  const scopedRequesters = fullAccess ? requesters : [currentUser.name];
  const locationInput = document.querySelector("#locationInput");
  const requesterInput = document.querySelector("#requesterInput");
  const selectedLocation = locationInput.value;
  const selectedRequester = requesterInput.value;
  const preferredLocation = getPreferredLocation(currentUser);

  locationInput.innerHTML = scopedLocations.map((location) => `<option>${location}</option>`).join("");
  requesterInput.innerHTML = scopedRequesters.map((name) => `<option>${name}</option>`).join("");
  locationInput.value =
    fullAccess && scopedLocations.includes(selectedLocation)
      ? selectedLocation
      : scopedLocations.includes(preferredLocation)
        ? preferredLocation
        : scopedLocations[0];
  requesterInput.value = fullAccess && scopedRequesters.includes(selectedRequester) ? selectedRequester : scopedRequesters[0];
  syncRequesterToLocation();
  locationInput.disabled = false;
  requesterInput.disabled = false;
}

function syncRequesterToLocation() {
  const locationInput = document.querySelector("#locationInput");
  const requesterInput = document.querySelector("#requesterInput");
  const defaultRequester = defaultRequesterByLocation[locationInput.value];

  if (!hasFullAccess()) {
    requesterInput.value = currentUser.name;
    return;
  }

  if (defaultRequester && requesters.includes(defaultRequester)) {
    requesterInput.value = defaultRequester;
  }
}

function updateDecision() {
  const text = document.querySelector("#descriptionInput").value.trim();
  const priority = document.querySelector("#priorityInput").value;
  const assigneeInput = document.querySelector("#assigneeInput");
  const box = document.querySelector("#decisionBox");
  const category = text ? detectCategory(text) : "coordination";
  const recommendedAssigneeId = chooseAssignee(category, priority);

  if (!assigneeTouched || !assigneeInput.value) {
    assigneeInput.value = recommendedAssigneeId;
  }

  if (!text) {
    box.innerHTML = `
      <span>Маршрутизация</span>
      <strong>Введите проблему, чтобы увидеть кандидата</strong>
      <p>Система сопоставит текст с категориями работ, SLA и текущей загрузкой инженеров.</p>
    `;
    return;
  }

  const engineer = engineers.find((item) => item.id === assigneeInput.value) || engineers.find((item) => item.id === recommendedAssigneeId);
  const recommendedEngineer = engineers.find((item) => item.id === recommendedAssigneeId);
  const sla = categories[category].sla[priority];
  const routeNote =
    engineer.id === recommendedAssigneeId
      ? "Выбран рекомендованный исполнитель по специализации и загрузке."
      : `Рекомендация системы: ${recommendedEngineer.name}. Назначение изменено вручную.`;

  box.innerHTML = `
    <span>Маршрутизация</span>
    <strong>${categories[category].label} → ${engineer.name}</strong>
    <p>${engineer.role}. SLA: ${sla} ч. ${routeNote}</p>
  `;
}

function renderMetrics() {
  const visibleTickets = getVisibleTickets();
  const open = visibleTickets.filter((ticket) => !["done", "cancelled"].includes(ticket.status));
  const overdue = visibleTickets.filter(isOverdue);
  const stale = visibleTickets.filter(isStale);
  const loadPercent = Math.round(
    engineers.reduce((sum, engineer) => sum + Math.min(100, (currentLoad(engineer.id) / engineer.capacity) * 100), 0) / engineers.length
  );

  document.querySelector("#metricOpen").textContent = open.length;
  document.querySelector("#metricOverdue").textContent = overdue.length;
  document.querySelector("#metricStale").textContent = stale.length;
  document.querySelector("#metricLoad").textContent = `${loadPercent}%`;
}

function renderTickets() {
  const list = document.querySelector("#ticketList");
  const visible = getVisibleTickets().filter((ticket) => {
    const query = document.querySelector("#ticketSearchInput").value.trim().toLowerCase();
    if (activeFilter === "new") return ticket.status === "new";
    if (activeFilter === "in_progress") return ticket.status === "in_progress";
    if (activeFilter === "overdue") return isOverdue(ticket);
    if (activeFilter === "stale") return isStale(ticket);
    return true;
  }).filter((ticket) => {
    const query = document.querySelector("#ticketSearchInput").value.trim().toLowerCase();
    const engineer = engineers.find((item) => item.id === ticket.assignee);
    const haystack = [
      ticket.id,
      ticket.location,
      ticket.requester,
      ticket.description,
      engineer?.name,
      categories[ticket.category]?.label,
      formatDate(ticket.createdAt),
    ].join(" ").toLowerCase();
    if (query && !haystack.includes(query)) return false;
    if (personFilter !== "all" && ticket.requester !== personFilter && engineer?.name !== personFilter) return false;
    if (contractorFilter !== "all" && ticket.assignee !== contractorFilter) return false;
    return true;
  });

  list.innerHTML = visible
    .sort((a, b) => a.dueAt - b.dueAt)
    .map((ticket) => {
      const engineer = engineers.find((item) => item.id === ticket.assignee);
      const flags = [
        isOverdue(ticket) ? `<span class="tag danger">Просрочено</span>` : "",
        isStale(ticket) ? `<span class="tag warning">Зависла</span>` : "",
        ticket.requestPhoto ? `<span class="tag">Фото проблемы</span>` : "",
        isClosedStatus(ticket.status) ? `<span class="tag ok">Закрыта</span>` : "",
        ticket.status === "deferred" ? `<span class="tag warning">Отложена</span>` : "",
        ticket.completionProof ? `<span class="tag ok">Фото подтверждено</span>` : "",
      ].join("");
      const requestPhoto = ticket.requestPhoto
        ? `
          <div class="completion-proof">
            <img src="${ticket.requestPhoto.dataUrl}" alt="Фото проблемы ${ticket.id}" />
            <div>
              <strong>Фото проблемы</strong>
              <span>${escapeHtml(ticket.requestPhoto.name)} · ${formatDate(new Date(ticket.requestPhoto.capturedAt))}</span>
            </div>
          </div>
        `
        : "";
      const completionProof = ticket.completionProof
        ? `
          <div class="completion-proof">
            <img src="${ticket.completionProof.dataUrl}" alt="Фото подтверждения ${ticket.id}" />
            <div>
              <strong>Подтверждение выполнения</strong>
              <span>${escapeHtml(ticket.completionProof.name)} · ${formatDate(new Date(ticket.completionProof.capturedAt))}</span>
            </div>
          </div>
        `
        : "";
      const completionNote = ticket.completionComment || ticket.completionResult
        ? `
          <div class="completion-proof text-proof">
            <div>
              <strong>Результат: ${statusLabel(ticket.completionResult || ticket.status)}</strong>
              <span>${escapeHtml(ticket.completionComment || "Комментарий не указан")}${ticket.deferredUntil ? ` · до ${formatDate(new Date(ticket.deferredUntil))}` : ""}</span>
            </div>
          </div>
        `
        : "";
      const actionButtons =
        isClosedStatus(ticket.status)
          ? ""
          : `
            <button data-action="progress" data-id="${ticket.id}">В работу</button>
            <button data-action="done" data-id="${ticket.id}">Закрыть</button>
          `;
      const adminButtons = isAdmin()
        ? `
          <button data-action="edit" data-id="${ticket.id}">Редактировать</button>
          <button data-action="archive" data-id="${ticket.id}">В архив</button>
          <button data-action="delete" data-id="${ticket.id}">Удалить</button>
        `
        : "";

      return `
        <article class="ticket">
          <div>
            <strong>${ticket.id} · ${categories[ticket.category].label}</strong>
            <p>${ticket.description}</p>
            <div class="tags">
              <span class="tag">Кофейня: ${ticket.location}</span>
              <span class="tag">Дата: ${formatDate(ticket.createdAt)}</span>
              <span class="tag">${priorityLabel(ticket.priority)}</span>
              <span class="tag">${statusLabel(ticket.status)}</span>
              <span class="tag">Выезд: ${visitLabel(ticket.visitRequired)}</span>
              <span class="tag">до ${formatDate(ticket.dueAt)}</span>
              <span class="tag">${engineer?.name || "Не назначен"}</span>
              ${flags}
            </div>
            ${requestPhoto}
            ${completionProof}
            ${completionNote}
          </div>
          <div class="ticket-actions ${hasFullAccess() ? "" : "hidden"}">
            ${actionButtons}
            ${adminButtons}
          </div>
        </article>
      `;
    })
    .join("") || `<p class="empty">Нет заявок по выбранному фильтру.</p>`;
}

function renderEngineers() {
  document.querySelector("#engineerList").innerHTML = engineers
    .slice()
    .sort(compareByName)
    .map((engineer) => {
      const load = currentLoad(engineer.id);
      const percent = Math.round((load / engineer.capacity) * 100);
      const employee = employees.find((item) => item.id === engineer.employeeId);
      return `
        <article class="engineer">
          <div class="engineer-top">
            <div>
              <strong>${engineer.name}</strong>
              <small>${engineer.role}</small>
            </div>
            <strong>${percent}%</strong>
          </div>
          <div class="loadbar"><span class="${percent > 85 ? "hot" : ""}" style="width:${Math.min(percent, 100)}%"></span></div>
          <small>${employee?.phone || employee?.email || "контакты уточняются"} · ${engineer.skills.map((skill) => categories[skill]?.label).filter(Boolean).join(", ")}</small>
        </article>
      `;
    })
    .join("");
}

function renderArchive() {
  const list = document.querySelector("#archiveList");
  const visible = getVisibleArchive();
  list.innerHTML = visible
    .sort((a, b) => new Date(b.deletedAt || b.updatedAt) - new Date(a.deletedAt || a.updatedAt))
    .map((ticket) => {
      const engineer = engineers.find((item) => item.id === ticket.assignee);
      return `
        <article class="ticket">
          <div>
            <strong>${ticket.id} · ${categories[ticket.category]?.label || "Заявка"}</strong>
            <p>${ticket.description}</p>
            <div class="tags">
              <span class="tag">Кофейня: ${ticket.location}</span>
              <span class="tag">Дата: ${formatDate(ticket.createdAt)}</span>
              <span class="tag">${statusLabel(ticket.status)}</span>
              <span class="tag">${engineer?.name || "Не назначен"}</span>
              <span class="tag warning">Архив: ${ticket.deletedAt ? formatDate(ticket.deletedAt) : "без даты"}</span>
            </div>
          </div>
          <div class="ticket-actions ${isAdmin() ? "" : "hidden"}">
            <button data-archive-action="restore" data-id="${ticket.id}">Восстановить</button>
          </div>
        </article>
      `;
    })
    .join("") || `<p class="empty">В архиве пока нет заявок.</p>`;
}

function renderChat() {
  const list = document.querySelector("#chatList");
  const visible = chatMessages.filter((message) => {
    if (hasFullAccess()) return true;
    return message.to === "all" || message.to === currentUser.id || message.fromId === currentUser.id;
  });

  list.innerHTML = visible
    .slice(-40)
    .map((message) => `
      <article class="chat-message">
        <strong>${escapeHtml(message.fromName)} → ${message.to === "all" ? "всем" : escapeHtml(users.find((user) => user.id === message.to)?.name || "адресат")}</strong>
        <span>${formatDate(message.createdAt)}</span>
        <p>${escapeHtml(message.text)}</p>
      </article>
    `)
    .join("") || `<p class="empty">Сообщений пока нет.</p>`;
}

function renderTemplates() {
  const list = document.querySelector("#templateList");
  list.innerHTML = templates
    .sort((a, b) => new Date(a.nextDate) - new Date(b.nextDate))
    .map((template) => {
      const engineer = engineers.find((item) => item.id === template.assignee);
      const reminderAt = addHours(new Date(template.nextDate), -24 * Number(template.reminderDays || 3));
      const reminderSoon = reminderAt <= new Date();
      return `
        <article class="engineer">
          <div class="engineer-top">
            <div>
              <strong>${escapeHtml(template.title)}</strong>
              <small>${escapeHtml(template.location)} · ${frequencyLabel(template.frequency)}</small>
            </div>
            <strong>${formatDate(template.nextDate)}</strong>
          </div>
          <p>${escapeHtml(template.description || "Описание не указано")}</p>
          <div class="tags">
            <span class="tag">${engineer?.name || "Исполнитель не назначен"}</span>
            <span class="tag ${reminderSoon ? "warning" : ""}">Напоминание за ${template.reminderDays} дн.</span>
          </div>
          <div class="ticket-actions">
            <button data-template-action="create" data-id="${template.id}">Создать заявку</button>
            <button data-template-action="delete" data-id="${template.id}">Удалить</button>
          </div>
        </article>
      `;
    })
    .join("") || `<p class="empty">Плановых задач пока нет.</p>`;
}

function frequencyLabel(value) {
  return { weekly: "еженедельно", monthly: "ежемесячно", quarterly: "ежеквартально" }[value] || value;
}

function renderAnalytics() {
  const counts = Object.fromEntries(Object.keys(categories).map((category) => [category, 0]));
  tickets.forEach((ticket) => counts[ticket.category] += 1);
  const max = Math.max(...Object.values(counts), 1);

  document.querySelector("#categoryBars").innerHTML = Object.entries(counts)
    .filter(([, count]) => count > 0)
    .sort((a, b) => b[1] - a[1])
    .map(([category, count]) => `
      <div class="bar-row">
        <div><span>${categories[category].label}</span><strong>${count}</strong></div>
        <div class="bar"><span style="width:${Math.round((count / max) * 100)}%"></span></div>
      </div>
    `)
    .join("");

  const overload = engineers.filter((engineer) => currentLoad(engineer.id) / engineer.capacity > 0.85);
  const avgLoad = engineers.reduce((sum, engineer) => sum + currentLoad(engineer.id) / engineer.capacity, 0) / engineers.length;
  const monthlyDemand = Math.round(tickets.length * 4.2);
  const neededPeople = Math.max(0, Math.ceil((avgLoad - 0.78) * engineers.length));

  document.querySelector("#forecastBox").innerHTML = `
    <div class="forecast-card"><strong>${monthlyDemand}</strong><span>ожидаемых заявок в месяц при текущем темпе</span></div>
    <div class="forecast-card"><strong>${neededPeople}</strong><span>дополнительных исполнителей потребуется при росте нагрузки</span></div>
    <div class="forecast-card"><strong>${overload.length}</strong><span>сотрудников близко к перегрузке</span></div>
  `;

  const topCategory = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
  const recommendations = [
    topCategory ? `Запланировать профилактику по направлению «${categories[topCategory[0]].label}»: оно встречается чаще остальных.` : "",
    tickets.some(isOverdue) ? "Ежедневно разбирать просроченные заявки до 11:00 и фиксировать причину задержки." : "Просрочек нет: текущий SLA выдерживается.",
    overload.length ? `Перераспределить новые заявки с ${overload.map((item) => item.name).join(", ")} на менее загруженных сотрудников.` : "Загрузка команды в пределах нормы.",
  ].filter(Boolean);

  document.querySelector("#recommendations").innerHTML = recommendations
    .map((item) => `<div class="recommendation">${item}</div>`)
    .join("");
}

function renderAll() {
  applyRoleInterface();
  renderMetrics();
  renderTickets();
  renderArchive();
  renderChat();
  renderTemplates();
  renderEngineers();
  renderAnalytics();
  updateDecision();
}

function applyRoleInterface() {
  const fullAccess = hasFullAccess();
  document.body.dataset.role = currentUser.role;
  document.querySelector("#roleInput").value = currentUser.id;
  document.querySelector(".role-switch").classList.toggle("hidden", !fullAccess);
  document.querySelector("#sidebarRole").textContent = currentUser.roleName;
  document.querySelector("#pageTitle").textContent = fullAccess
    ? "Автоматическое распределение заявок"
    : currentUser.permissions === "assigned"
      ? "Мои назначенные заявки"
    : "Заявки вашей кофейни";
  document.querySelector("#roleEyebrow").textContent = fullAccess
    ? "Оперативный контроль"
    : currentUser.permissions === "assigned"
      ? "Рабочее место подрядчика"
    : currentUser.location || "Рабочее место";
  document.querySelector("#requestTitle").textContent = fullAccess
    ? "Опишите проблему"
    : "Новая заявка в техслужбу";
  document.querySelector("#ticketsTitle").textContent = fullAccess
    ? "Заявки в работе"
    : currentUser.permissions === "assigned"
      ? "Мои задачи"
    : "Мои заявки и статусы";

  document.querySelectorAll("[data-full-only]").forEach((element) => {
    element.classList.toggle("hidden", !fullAccess);
  });

  updateRequestScope();

  if (!fullAccess) {
    activeFilter = "all";
    document.querySelectorAll(".segmented button").forEach((button) => {
      button.classList.toggle("active", button.dataset.filter === "all");
    });
  }
}

function showAuthIfNeeded() {
  document.querySelector("#authScreen").hidden = Boolean(localStorage.getItem(storageKeys.session));
}

function login(event) {
  event.preventDefault();
  const user = users.find((item) => item.id === document.querySelector("#loginUserInput").value);
  const code = document.querySelector("#loginCodeInput").value.trim();
  if (!user) {
    document.querySelector("#authError").textContent = "Сотрудник не найден.";
    return;
  }

  if (!user || code !== user.authCode) {
    document.querySelector("#authError").textContent = "Неверный код доступа.";
    return;
  }

  currentUser = user;
  localStorage.setItem(storageKeys.session, user.id);
  document.querySelector("#authError").textContent = "";
  document.querySelector("#authScreen").hidden = true;
  renderAll();
}

function logout() {
  localStorage.removeItem(storageKeys.session);
  document.querySelector("#loginCodeInput").value = "";
  document.querySelector("#authScreen").hidden = false;
}

function readPhotoFile(file, previewSelector, onReady) {
  const preview = document.querySelector(previewSelector);

  if (!file) return;

  if (!file.type.startsWith("image/")) {
    preview.innerHTML = `<span>Нужно выбрать изображение.</span>`;
    onReady(null);
    return;
  }

  if (file.size > 8 * 1024 * 1024) {
    preview.innerHTML = `<span>Фото слишком большое. Максимум 8 МБ.</span>`;
    onReady(null);
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    const proof = {
      name: file.name || "Фото",
      type: file.type,
      size: file.size,
      dataUrl: reader.result,
      capturedAt: new Date().toISOString(),
    };
    preview.innerHTML = `
      <img src="${proof.dataUrl}" alt="Предпросмотр фото" />
      <span>${escapeHtml(proof.name)}</span>
    `;
    onReady(proof);
  };
  reader.readAsDataURL(file);
}

function resetRequestPhoto() {
  requestPhotoProof = null;
  document.querySelector("#requestPhotoInput").value = "";
  document.querySelector("#requestCameraInput").value = "";
  document.querySelector("#requestPhotoPreview").innerHTML = `<span>Фото ещё не выбрано</span>`;
}

function handleRequestPhoto(event) {
  readPhotoFile(event.target.files?.[0], "#requestPhotoPreview", (proof) => {
    requestPhotoProof = proof;
  });
}

function addTicketFromForm(event) {
  event.preventDefault();
  const location = document.querySelector("#locationInput").value;
  const requester = hasFullAccess() ? document.querySelector("#requesterInput").value : currentUser.name;
  const description = document.querySelector("#descriptionInput").value.trim();
  const priority = document.querySelector("#priorityInput").value;
  const visitRequired = document.querySelector("#visitInput").value;
  const assignee = document.querySelector("#assigneeInput").value;

  if (!description) return;
  if (!requestPhotoProof) {
    document.querySelector("#requestPhotoPreview").innerHTML = `<span>Добавьте фото проблемы перед созданием заявки.</span>`;
    return;
  }

  const ticket = makeTicket(location, requester, description, priority, 0, "new", assignee);
  ticket.visitRequired = visitRequired;
  ticket.requestPhoto = requestPhotoProof;
  tickets = [ticket, ...tickets];
  persistState();
  sendNotification("ticket_created", ticket);
  event.target.reset();
  assigneeTouched = false;
  resetRequestPhoto();
  renderAll();
  document.querySelector("#tickets").scrollIntoView({ behavior: "smooth", block: "start" });
}

function seedFlow() {
  tickets = reviveTickets(loadStored(storageKeys.tickets, []));
  archivedTickets = reviveTickets(loadStored(storageKeys.archive, []));
  renderAll();
}

function resetCompletionModal() {
  pendingCompletionProof = null;
  document.querySelector("#completionConfirm").disabled = true;
  document.querySelector("#completionPhotoInput").value = "";
  document.querySelector("#completionCameraInput").value = "";
  document.querySelector("#completionCommentInput").value = "";
  document.querySelector("#completionResultInput").value = "done";
  document.querySelector("#completionDeferredInput").value = "";
  document.querySelector("#completionPreview").innerHTML = `<span>Фото ещё не выбрано</span>`;
}

function openCompletionModal(ticket) {
  pendingCompletionTicketId = ticket.id;
  resetCompletionModal();
  updateCompletionState();
  document.querySelector("#completionTitle").textContent = `Закрыть заявку ${ticket.id}`;
  document.querySelector("#completionModal").hidden = false;
}

function closeCompletionModal() {
  document.querySelector("#completionModal").hidden = true;
  pendingCompletionTicketId = null;
  resetCompletionModal();
}

function handleCompletionPhoto(event) {
  readPhotoFile(event.target.files?.[0], "#completionPreview", (proof) => {
    pendingCompletionProof = proof;
    updateCompletionState();
  });
}

function updateCompletionState() {
  const comment = document.querySelector("#completionCommentInput").value.trim();
  const result = document.querySelector("#completionResultInput").value;
  const deferredUntil = document.querySelector("#completionDeferredInput").value;
  document.querySelector("#completionDeferredInput").disabled = result !== "deferred";
  document.querySelector("#completionConfirm").disabled = !(pendingCompletionProof || comment) || (result === "deferred" && !deferredUntil);
}

function confirmTicketCompletion() {
  const ticket = tickets.find((item) => item.id === pendingCompletionTicketId);
  if (!ticket) return;
  const comment = document.querySelector("#completionCommentInput").value.trim();
  const result = document.querySelector("#completionResultInput").value;
  const deferredUntil = document.querySelector("#completionDeferredInput").value;
  if (!(pendingCompletionProof || comment)) return;
  if (result === "deferred" && !deferredUntil) return;

  ticket.status = result === "done" ? "done" : result;
  ticket.completionResult = result;
  ticket.completionProof = pendingCompletionProof;
  ticket.completionComment = comment;
  ticket.deferredUntil = result === "deferred" ? deferredUntil : "";
  ticket.updatedAt = new Date();
  if (result === "deferred") {
    ticket.dueAt = new Date(deferredUntil);
  }
  persistState();
  sendNotification("ticket_done", ticket);
  closeCompletionModal();
  renderAll();
}

function archiveTicket(ticket, reason = "archived") {
  tickets = tickets.filter((item) => item.id !== ticket.id);
  archivedTickets = [{ ...ticket, archiveReason: reason, deletedAt: new Date(), status: ticket.status || "archived" }, ...archivedTickets];
  persistState();
}

function restoreTicket(ticketId) {
  const ticket = archivedTickets.find((item) => item.id === ticketId);
  if (!ticket) return;
  archivedTickets = archivedTickets.filter((item) => item.id !== ticketId);
  const restored = { ...ticket, deletedAt: null, archiveReason: "", status: ticket.status === "archived" ? "new" : ticket.status };
  tickets = [restored, ...tickets];
  persistState();
  renderAll();
}

function openEditModal(ticket) {
  pendingEditTicketId = ticket.id;
  document.querySelector("#editTitle").textContent = `Редактировать ${ticket.id}`;
  document.querySelector("#editLocationInput").value = ticket.location;
  document.querySelector("#editRequesterInput").value = ticket.requester;
  document.querySelector("#editAssigneeInput").value = ticket.assignee;
  document.querySelector("#editPriorityInput").value = ticket.priority;
  document.querySelector("#editStatusInput").value = ticket.status;
  document.querySelector("#editVisitInput").value = String(ticket.visitRequired || "yes");
  document.querySelector("#editDescriptionInput").value = ticket.description;
  document.querySelector("#editModal").hidden = false;
}

function closeEditModal() {
  pendingEditTicketId = null;
  document.querySelector("#editModal").hidden = true;
}

function saveEditedTicket(event) {
  event.preventDefault();
  const ticket = tickets.find((item) => item.id === pendingEditTicketId);
  if (!ticket) return;
  ticket.location = document.querySelector("#editLocationInput").value;
  ticket.requester = document.querySelector("#editRequesterInput").value;
  ticket.assignee = document.querySelector("#editAssigneeInput").value;
  ticket.priority = document.querySelector("#editPriorityInput").value;
  ticket.status = document.querySelector("#editStatusInput").value;
  ticket.visitRequired = document.querySelector("#editVisitInput").value;
  ticket.description = document.querySelector("#editDescriptionInput").value.trim();
  ticket.category = detectCategory(ticket.description);
  ticket.updatedAt = new Date();
  persistState();
  closeEditModal();
  renderAll();
}

function addChatMessage(event) {
  event.preventDefault();
  const text = document.querySelector("#chatMessageInput").value.trim();
  const to = document.querySelector("#chatRecipientInput").value;
  if (!text) return;
  chatMessages = [...chatMessages, {
    id: `MSG-${Date.now()}`,
    fromId: currentUser.id,
    fromName: currentUser.name,
    to,
    text,
    createdAt: new Date(),
  }];
  document.querySelector("#chatMessageInput").value = "";
  persistState();
  renderChat();
}

function addTemplate(event) {
  event.preventDefault();
  const template = {
    id: `TPL-${Date.now()}`,
    title: document.querySelector("#templateTitleInput").value.trim(),
    location: document.querySelector("#templateLocationInput").value,
    frequency: document.querySelector("#templateFrequencyInput").value,
    nextDate: new Date(document.querySelector("#templateDateInput").value),
    reminderDays: document.querySelector("#templateReminderInput").value,
    assignee: document.querySelector("#templateAssigneeInput").value,
    description: document.querySelector("#templateDescriptionInput").value.trim(),
    createdAt: new Date(),
  };
  if (!template.title || Number.isNaN(template.nextDate.getTime())) return;
  templates = [template, ...templates];
  event.target.reset();
  setDefaultTemplateDate();
  persistState();
  renderTemplates();
}

function createTicketFromTemplate(template) {
  const description = `${template.title}. ${template.description || "Плановая задача"}`.trim();
  const ticket = makeTicket(template.location, currentUser.name, description, "normal", 0, "new", template.assignee);
  ticket.visitRequired = "yes";
  tickets = [ticket, ...tickets];
  template.nextDate = getNextTemplateDate(template.nextDate, template.frequency);
  persistState();
  sendNotification("ticket_created", ticket);
  renderAll();
}

function getNextTemplateDate(date, frequency) {
  const next = new Date(date);
  if (frequency === "weekly") next.setDate(next.getDate() + 7);
  if (frequency === "monthly") next.setMonth(next.getMonth() + 1);
  if (frequency === "quarterly") next.setMonth(next.getMonth() + 3);
  return next;
}

function setDefaultTemplateDate() {
  const next = new Date();
  next.setDate(next.getDate() + 7);
  document.querySelector("#templateDateInput").value = next.toISOString().slice(0, 10);
}

document.addEventListener("input", (event) => {
  if (["descriptionInput", "priorityInput"].includes(event.target.id)) updateDecision();
});

document.querySelector("#loginForm").addEventListener("submit", login);
document.querySelector("#loginSearchInput").addEventListener("input", updateLoginUserOptions);
document.querySelector("#logoutButton").addEventListener("click", logout);
document.querySelector("#ticketForm").addEventListener("submit", addTicketFromForm);
document.querySelector("#requestPhotoInput").addEventListener("change", handleRequestPhoto);
document.querySelector("#requestCameraInput").addEventListener("change", handleRequestPhoto);
document.querySelector("#locationInput").addEventListener("change", syncRequesterToLocation);
document.querySelector("#locationInput").addEventListener("input", syncRequesterToLocation);
document.querySelector("#assigneeInput").addEventListener("change", () => {
  assigneeTouched = true;
  updateDecision();
});
document.querySelector("#assigneeInput").addEventListener("input", () => {
  assigneeTouched = true;
  updateDecision();
});
function handleRoleChange(event) {
  const nextUser = users.find((user) => user.id === event.target.value) || users[0];
  if (nextUser.id === currentUser.id) return;

  const code = window.prompt(`Введите код доступа для пользователя: ${nextUser.name}`);
  if (code !== nextUser.authCode) {
    window.alert("Неверный код доступа. Пользователь не изменен.");
    event.target.value = currentUser.id;
    return;
  }

  currentUser = nextUser;
  localStorage.setItem(storageKeys.session, currentUser.id);
  assigneeTouched = false;
  renderAll();
  document.querySelector("#new-ticket").scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelector("#roleInput").addEventListener("change", handleRoleChange);
document.querySelector("#seedButton").addEventListener("click", seedFlow);
document.querySelector("#quickPipe").addEventListener("click", () => {
  document.querySelector("#descriptionInput").value = "Труба потекла под мойкой, вода быстро набирается на полу";
  document.querySelector("#priorityInput").value = "critical";
  assigneeTouched = false;
  updateDecision();
  document.querySelector("#new-ticket").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector(".segmented").addEventListener("click", (event) => {
  if (!event.target.matches("button")) return;
  activeFilter = event.target.dataset.filter;
  document.querySelectorAll(".segmented button").forEach((button) => button.classList.toggle("active", button === event.target));
  renderTickets();
});
document.querySelector("#ticketSearchInput").addEventListener("input", renderTickets);
document.querySelector("#personFilterInput").addEventListener("change", (event) => {
  personFilter = event.target.value;
  renderTickets();
});
document.querySelector("#contractorFilterInput").addEventListener("change", (event) => {
  contractorFilter = event.target.value;
  renderTickets();
});

document.querySelector("#ticketList").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const ticket = tickets.find((item) => item.id === button.dataset.id);
  if (!ticket) return;

  if (button.dataset.action === "progress") {
    ticket.status = "in_progress";
    ticket.updatedAt = new Date();
    persistState();
    sendNotification("ticket_in_progress", ticket);
    renderAll();
  }
  if (button.dataset.action === "done") {
    openCompletionModal(ticket);
  }
  if (button.dataset.action === "edit" && isAdmin()) {
    openEditModal(ticket);
  }
  if (button.dataset.action === "archive" && isAdmin()) {
    archiveTicket(ticket, "archived");
    renderAll();
  }
  if (button.dataset.action === "delete" && isAdmin()) {
    archiveTicket(ticket, "deleted");
    renderAll();
  }
});

document.querySelector("#completionPhotoInput").addEventListener("change", handleCompletionPhoto);
document.querySelector("#completionCameraInput").addEventListener("change", handleCompletionPhoto);
document.querySelector("#completionCommentInput").addEventListener("input", updateCompletionState);
document.querySelector("#completionResultInput").addEventListener("change", updateCompletionState);
document.querySelector("#completionDeferredInput").addEventListener("input", updateCompletionState);
document.querySelector("#completionConfirm").addEventListener("click", confirmTicketCompletion);
document.querySelector("#completionCancel").addEventListener("click", closeCompletionModal);
document.querySelector("#completionBack").addEventListener("click", closeCompletionModal);
document.querySelector("#completionModal").addEventListener("click", (event) => {
  if (event.target.id === "completionModal") closeCompletionModal();
});
document.querySelector("#editForm").addEventListener("submit", saveEditedTicket);
document.querySelector("#editCancel").addEventListener("click", closeEditModal);
document.querySelector("#editBack").addEventListener("click", closeEditModal);
document.querySelector("#editModal").addEventListener("click", (event) => {
  if (event.target.id === "editModal") closeEditModal();
});
document.querySelector("#archiveList").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (button?.dataset.archiveAction === "restore") restoreTicket(button.dataset.id);
});
document.querySelector("#chatForm").addEventListener("submit", addChatMessage);
document.querySelector("#templateForm").addEventListener("submit", addTemplate);
document.querySelector("#templateList").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const template = templates.find((item) => item.id === button.dataset.id);
  if (!template) return;
  if (button.dataset.templateAction === "create") createTicketFromTemplate(template);
  if (button.dataset.templateAction === "delete") {
    templates = templates.filter((item) => item.id !== template.id);
    persistState();
    renderTemplates();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !document.querySelector("#completionModal").hidden) closeCompletionModal();
  if (event.key === "Escape" && !document.querySelector("#editModal").hidden) closeEditModal();
});

populateSelects();
setDefaultTemplateDate();
showAuthIfNeeded();
renderAll();
