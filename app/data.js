const perPageResult = [5, 10, 15, 20];

const statuses = [{ value: "Активна" }, { value: "Изтекла" }];

const employmentTypes = [
  { value: "Постоянна работа" },
  { value: "Временна работа" },
  { value: "Работа по задание/Freelancer" },
  { value: "Стаж" },
];

const homePageLinks = [
  { link: "/", text: "Начало" },
  { link: "/find-job", text: "Обяви" },
  { link: "/employers", text: "Компании" },
  { link: "/blog", text: "Блог" },
];

const homePageAuthLinks = [
  {
    link: "/profile",
    text: "Моят профил",
  },
  { link: "/files", text: "Моите файлове" },
  { link: "/applications", text: "Кандидаствания" },
  { link: "/messages", text: "Съобщения" },
];

const dashboardCategories = [
  { label: "Търговия и Продажби" },
  { label: "Производство" },
  { label: "Ресторанти, Заведения, Хотели, Туризъм" },
  { label: "Административни, Офис и Бизнес дейности" },
  { label: "Шофьори, Куриери" },
  { label: "Инженери и Техници" },
  { label: "Физически/Ръчен труд" },
  { label: "Архитектура, Строителство" },
  { label: "Здравеопазване и Фармация" },
  { label: "Логистика, Спедиция" },
  { label: "Ремонтни и Монтажни дейности" },
  { label: "Счетоводство, Одит, Финанси" },
  { label: "Банки, Кредитиране, Застраховане" },
  { label: "Автомобили, Автосервизи, Бензиностанции" },
  {
    label: "Центрове за обслужване на клиенти и бизнес услуги (ВРО, ІТО и др.)",
  },
  { label: "Маркетинг, Реклама, ПР" },
  { label: "Забавление, Промоции, Спорт, Салони за красота" },
  { label: "Почистване, Градинарство, Услуги за домакинството" },
  { label: "Енергетика, ВиК, Комунални услуги" },
  { label: "Образование, Курсове, Преводи" },
  { label: "Сигурност и Охрана" },
  { label: "Телекоми" },
  { label: "Мениджмънт" },
  { label: "Човешки ресурси (HR)" },
  { label: "Дизайн, Криейтив, Изкуство" },
  { label: "Изследователска и Развойна дейност (R&D)" },
  { label: "Недвижими имоти" },
  { label: "Държавна администрация, Институции" },
  { label: "Селско и горско стопанство, Рибовъдство" },
  { label: "Медии, Издателство" },
  { label: "Право, Юридически услуги" },
  { label: "Организации с нестопанска цел" },
  { label: "Авиация, Летища и Авиолинии" },
  { label: "Морски и Речен транспорт" },
  { label: "Информационни технологии" },
];

export {
  perPageResult,
  statuses,
  dashboardCategories,
  employmentTypes,
  homePageLinks,
  homePageAuthLinks,
};
