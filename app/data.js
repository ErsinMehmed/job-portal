import {
  BsCoin,
  BsMegaphone,
  BsTruck,
  BsCodeSlash,
  BsPeople,
  BsHeartPulse,
  BsBuilding,
  BsCashStack,
  BsShield,
  BsReception4,
  BsKanban,
} from "react-icons/bs";
import { PiCarProfile } from "react-icons/pi";

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

const categoriesIconClasses = "w-9 h-9 text-blue-500 group-hover:text-white";
const categoriesData = [
  {
    title: "Счетоводство и Финанси",
    icon: <BsCoin className={categoriesIconClasses} />,
  },
  {
    title: "Маркетинг, Реклама, ПР",
    icon: <BsMegaphone className={categoriesIconClasses} />,
  },
  {
    title: "Информационни технологии",
    icon: <BsCodeSlash className={categoriesIconClasses} />,
  },
  {
    title: "Логистика, Спедиция",
    icon: <BsTruck className={categoriesIconClasses} />,
  },
  {
    title: "Шофьори, Куриери",
    icon: <PiCarProfile className={categoriesIconClasses} />,
  },
  {
    title: "Човешки ресурси (HR)",
    icon: <BsPeople className={categoriesIconClasses} />,
  },
  {
    title: "Здравеопазване и Фармация",
    icon: <BsHeartPulse className={categoriesIconClasses} />,
  },
  {
    title: "Недвижими имоти",
    icon: <BsBuilding className={categoriesIconClasses} />,
  },
  {
    title: "Търговия и Продажби",
    icon: <BsCashStack className={categoriesIconClasses} />,
  },
  {
    title: "Сигурност и Охрана",
    icon: <BsShield className={categoriesIconClasses} />,
  },
  {
    title: "Телекоми",
    icon: <BsReception4 className={categoriesIconClasses} />,
  },
  {
    title: "Мениджмънт",
    icon: <BsKanban className={categoriesIconClasses} />,
  },
];

export {
  perPageResult,
  statuses,
  dashboardCategories,
  employmentTypes,
  homePageLinks,
  homePageAuthLinks,
  categoriesData,
};
