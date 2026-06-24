const employees = [
  { id: 1, name: "Дарья Ярунова", department: "Структурные подразделения(Кофейни)", email: "dariayarynova@gmail.com", phone: "+7 909 194-18-33" },
  { id: 5, name: "Станислав Чемякин", department: "Структурные подразделения(Кофейни)", email: "s.chemyakin@gardencoffee.ru", phone: "+7 982 905-37-19" },
  { id: 11, name: "Ксения Степанова", department: "Структурные подразделения(Кофейни)", email: "vidniy.sad@yandex.ru", phone: "+7 922 487-00-56" },
  { id: 14, name: "Александр Скорняков", department: "Проектирование инфраструктуры", email: "a.skornyakov@gardencoffee.ru", phone: "+7 919 930-27-32" },
  { id: 21, name: "Сергей Попов", department: "Проектирование инфраструктуры", email: "", phone: "+7 982 987-97-71" },
  { id: 37, name: "Рустам Латыпов", department: "Проектирование инфраструктуры", email: "Rustam0913@yandex.ru", phone: "+7 922 263-89-29" },
  { id: 58, name: "Арслан Гаджиев", department: "Отдел стандартизации и снабжения", email: "a.gadjiev@gardencoffee.ru", phone: "+7 919 948-32-28" },
  { id: 9, name: "Михаил Турченко", department: "Отдел стандартизации и снабжения", email: "misaturcenko32@mail.ru", phone: "" },
  { id: 71, name: "Кристина Анастасова", department: "Отдел франчайзинга и сервиса", email: "office@gardencoffee.ru", phone: "" },
  { id: 72, name: "Анна Алыбина", department: "Отдел франчайзинга и сервиса", email: "a.alybina@gardencoffee.ru", phone: "+7 922 471-11-48" },
  { id: 68, name: "Иван Бережной", department: "Отдел операционной деятельности", email: "top-manager@gardencoffee.ru", phone: "" },
];

const requesters = [
  "Дарья Ярунова", "Станислав Чемякин", "Ксения Степанова", "Алексей Секачев", "Надежда Ромичева",
  "Андрей Радаев", "Анастасия Панкова", "Полина Останина", "Анна Никовская", "Ирина Мухамедзянова",
  "Карина Москаленко", "Денис Калчаков", "Станислав Игнатов", "Юлия Зуева", "Николай Баранюк",
  "Галина Васильева", "Александр Бокслер", "Иван Бережной"
];

const locations = [
  "Кофейня Видный сад", "Кофейня Сургут", "Кондитерский цех", "Обжарочный цех",
  "Склад снабжения", "Офис", "Тренинг-центр", "Новая точка"
];

const users = [
  {
    id: "skornyakov",
    name: "Александр Скорняков",
    label: "Александр Скорняков · инженер",
    role: "engineer",
    roleName: "Инженер технической службы",
    permissions: "full",
  },
  {
    id: "berezhnoy",
    name: "Иван Бережной",
    label: "Иван Бережной · операционный руководитель",
    role: "director",
    roleName: "Операционный руководитель",
    permissions: "full",
  },
  {
    id: "stepanova",
    name: "Ксения Степанова",
    label: "Ксения Степанова · управляющая",
    role: "manager",
    roleName: "Управляющая кофейни",
    permissions: "own",
    location: "Кофейня Видный сад",
  },
  {
    id: "zueva",
    name: "Юлия Зуева",
    label: "Юлия Зуева · управляющая",
    role: "manager",
    roleName: "Управляющая кофейни",
    permissions: "own",
    location: "Кофейня Сургут",
  },
  {
    id: "vasilyeva",
    name: "Галина Васильева",
    label: "Галина Васильева · цех",
    role: "manager",
    roleName: "Ответственная за цех",
    permissions: "own",
    location: "Кондитерский цех",
  },
  {
    id: "boksler",
    name: "Александр Бокслер",
    label: "Александр Бокслер · обжарочный цех",
    role: "manager",
    roleName: "Ответственный за цех",
    permissions: "own",
    location: "Обжарочный цех",
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

let currentUser = users[0];

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

let tickets = [];

tickets = [
  makeTicket("Кофейня Видный сад", "Ксения Степанова", "Труба потекла под барной мойкой, вода уходит на пол", "critical", -6, "in_progress"),
  makeTicket("Кондитерский цех", "Екатерина Пушкарева", "Печь периодически выключается, нужна диагностика оборудования", "high", -10, "new"),
  makeTicket("Обжарочный цех", "Александр Бокслер", "Нужен фильтр и плановая закупка расходников для кофемашины", "normal", -42, "waiting"),
  makeTicket("Кофейня Сургут", "Юлия Зуева", "В холодильной витрине растет температура", "critical", -2, "in_progress"),
  makeTicket("Офис", "Иван Бережной", "В переговорной не работает свет и выбивает автомат", "high", -26, "in_progress"),
  makeTicket("Новая точка", "Анна Алыбина", "Подрядчику нужен доступ для ремонта двери", "normal", -31, "waiting"),
];

let activeFilter = "all";

function makeTicket(location, requester, description, priority = "normal", createdShiftHours = 0, status = "new") {
  const category = detectCategory(description);
  const createdAt = addHours(new Date(), createdShiftHours);
  const assignee = chooseAssignee(category, priority);
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
    visitRequired: true,
  };
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
  const active = tickets.filter((ticket) => ticket.assignee === engineerId && !["done", "cancelled"].includes(ticket.status));
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
  return { new: "Новая", in_progress: "В работе", waiting: "Ожидает", done: "Готово" }[status];
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

function isOwnTicket(ticket) {
  return ticket.requester === currentUser.name || ticket.location === currentUser.location;
}

function getVisibleTickets() {
  return hasFullAccess() ? tickets : tickets.filter(isOwnTicket);
}

function populateSelects() {
  document.querySelector("#locationInput").innerHTML = locations.map((location) => `<option>${location}</option>`).join("");
  document.querySelector("#requesterInput").innerHTML = requesters.map((name) => `<option>${name}</option>`).join("");
  document.querySelector("#roleInput").innerHTML = users.map((user) => `<option value="${user.id}">${user.label}</option>`).join("");
}

function updateDecision() {
  const text = document.querySelector("#descriptionInput").value.trim();
  const priority = document.querySelector("#priorityInput").value;
  const box = document.querySelector("#decisionBox");

  if (!text) {
    box.innerHTML = `
      <span>Маршрутизация</span>
      <strong>Введите проблему, чтобы увидеть кандидата</strong>
      <p>Система сопоставит текст с категориями работ, SLA и текущей загрузкой инженеров.</p>
    `;
    return;
  }

  const category = detectCategory(text);
  const assigneeId = chooseAssignee(category, priority);
  const engineer = engineers.find((item) => item.id === assigneeId);
  const sla = categories[category].sla[priority];

  box.innerHTML = `
    <span>Маршрутизация</span>
    <strong>${categories[category].label} → ${engineer.name}</strong>
    <p>${engineer.role}. SLA: ${sla} ч. Причина: совпадение ключевых признаков и минимальная текущая загрузка среди подходящих специалистов.</p>
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
    if (activeFilter === "overdue") return isOverdue(ticket);
    if (activeFilter === "stale") return isStale(ticket);
    return true;
  });

  list.innerHTML = visible
    .sort((a, b) => a.dueAt - b.dueAt)
    .map((ticket) => {
      const engineer = engineers.find((item) => item.id === ticket.assignee);
      const flags = [
        isOverdue(ticket) ? `<span class="tag danger">Просрочено</span>` : "",
        isStale(ticket) ? `<span class="tag warning">Зависла</span>` : "",
        ticket.status === "done" ? `<span class="tag ok">Закрыта</span>` : "",
      ].join("");

      return `
        <article class="ticket">
          <div>
            <strong>${ticket.id} · ${categories[ticket.category].label}</strong>
            <p>${ticket.description}</p>
            <div class="tags">
              <span class="tag">${ticket.location}</span>
              <span class="tag">${priorityLabel(ticket.priority)}</span>
              <span class="tag">${statusLabel(ticket.status)}</span>
              <span class="tag">до ${formatDate(ticket.dueAt)}</span>
              <span class="tag">${engineer.name}</span>
              ${flags}
            </div>
          </div>
          <div class="ticket-actions ${hasFullAccess() ? "" : "hidden"}">
            <button data-action="progress" data-id="${ticket.id}">В работу</button>
            <button data-action="done" data-id="${ticket.id}">Закрыть</button>
          </div>
        </article>
      `;
    })
    .join("") || `<p class="empty">Нет заявок по выбранному фильтру.</p>`;
}

function renderEngineers() {
  document.querySelector("#engineerList").innerHTML = engineers
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
  renderEngineers();
  renderAnalytics();
  updateDecision();
}

function applyRoleInterface() {
  const fullAccess = hasFullAccess();
  document.body.dataset.role = currentUser.role;
  document.querySelector("#roleInput").value = currentUser.id;
  document.querySelector("#sidebarRole").textContent = currentUser.roleName;
  document.querySelector("#pageTitle").textContent = fullAccess
    ? "Автоматическое распределение заявок"
    : "Заявки вашей кофейни";
  document.querySelector("#roleEyebrow").textContent = fullAccess
    ? "Оперативный контроль"
    : currentUser.location || "Рабочее место";
  document.querySelector("#requestTitle").textContent = fullAccess
    ? "Опишите проблему"
    : "Новая заявка в техслужбу";
  document.querySelector("#ticketsTitle").textContent = fullAccess
    ? "Заявки в работе"
    : "Мои заявки и статусы";

  document.querySelectorAll("[data-full-only]").forEach((element) => {
    element.classList.toggle("hidden", !fullAccess);
  });

  const locationInput = document.querySelector("#locationInput");
  const requesterInput = document.querySelector("#requesterInput");
  locationInput.disabled = !fullAccess;
  requesterInput.disabled = !fullAccess;

  if (!fullAccess) {
    locationInput.value = currentUser.location;
    requesterInput.value = currentUser.name;
    activeFilter = "all";
    document.querySelectorAll(".segmented button").forEach((button) => {
      button.classList.toggle("active", button.dataset.filter === "all");
    });
  }
}

function addTicketFromForm(event) {
  event.preventDefault();
  const location = hasFullAccess() ? document.querySelector("#locationInput").value : currentUser.location;
  const requester = hasFullAccess() ? document.querySelector("#requesterInput").value : currentUser.name;
  const description = document.querySelector("#descriptionInput").value.trim();
  const priority = document.querySelector("#priorityInput").value;
  const visitRequired = document.querySelector("#visitInput").value === "yes";

  if (!description) return;

  const ticket = makeTicket(location, requester, description, priority, 0, "new");
  ticket.visitRequired = visitRequired;
  tickets = [ticket, ...tickets];
  event.target.reset();
  renderAll();
  document.querySelector("#tickets").scrollIntoView({ behavior: "smooth", block: "start" });
}

function seedFlow() {
  const samples = [
    ["Кофейня Видный сад", "Дарья Ярунова", "Засорилась канализация, вода плохо уходит", "high"],
    ["Кондитерский цех", "Галина Васильева", "Нужно согласовать закупку запчастей для печи", "normal"],
    ["Офис", "Иван Бережной", "Кондиционер шумит и не охлаждает переговорную", "normal"],
    ["Обжарочный цех", "Александр Бокслер", "Не включается кофемолка после скачка электричества", "critical"],
  ];
  const sample = samples[Math.floor(Math.random() * samples.length)];
  tickets = [makeTicket(...sample), ...tickets];
  renderAll();
}

document.addEventListener("input", (event) => {
  if (["descriptionInput", "priorityInput"].includes(event.target.id)) updateDecision();
});

document.querySelector("#ticketForm").addEventListener("submit", addTicketFromForm);
document.querySelector("#roleInput").addEventListener("change", (event) => {
  currentUser = users.find((user) => user.id === event.target.value) || users[0];
  renderAll();
  document.querySelector("#new-ticket").scrollIntoView({ behavior: "smooth", block: "start" });
});
document.querySelector("#seedButton").addEventListener("click", seedFlow);
document.querySelector("#quickPipe").addEventListener("click", () => {
  document.querySelector("#descriptionInput").value = "Труба потекла под мойкой, вода быстро набирается на полу";
  document.querySelector("#priorityInput").value = "critical";
  updateDecision();
  document.querySelector("#new-ticket").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector(".segmented").addEventListener("click", (event) => {
  if (!event.target.matches("button")) return;
  activeFilter = event.target.dataset.filter;
  document.querySelectorAll(".segmented button").forEach((button) => button.classList.toggle("active", button === event.target));
  renderTickets();
});

document.querySelector("#ticketList").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const ticket = tickets.find((item) => item.id === button.dataset.id);
  if (!ticket) return;

  if (button.dataset.action === "progress") ticket.status = "in_progress";
  if (button.dataset.action === "done") ticket.status = "done";
  ticket.updatedAt = new Date();
  renderAll();
});

populateSelects();
renderAll();
