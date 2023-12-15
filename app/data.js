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
import { AiOutlineHome } from "react-icons/ai";
import { IoDocumentsOutline } from "react-icons/io5";

const perPageResult = [5, 10, 15, 20];

const statuses = [{ value: "Активна" }, { value: "Изтекла" }];

const educationTypes = [
  { value: "Средно образование" },
  { value: "Бакалавър" },
  { value: "Магистър" },
  { value: "Доктор" },
];

const languages = ["Английски", "Немски", "Френски", "Испански", "Италиански"];

const experience = [
  { value: "Без опит" },
  { value: "до 1 година" },
  { value: "от 1 до 2" },
  { value: "от 2 до 3" },
  { value: "от 3 до 4" },
  { value: "от 4 до 5" },
  { value: "от 5 до 10+" },
];

const employmentTypes = [
  { value: "Постоянна работа" },
  { value: "Временна работа" },
  { value: "Работа по задание/Freelancer" },
  { value: "Стаж" },
];

const employment = [
  { value: "Пълно работно време" },
  { value: "Непълно работно време" },
  { value: "Гъвкаво работно време" },
  { value: "Подходяща за студенти" },
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
  { link: "/favorite-ad", text: "Запазени обяви" },
  { link: "/applications", text: "Кандидаствания" },
  { link: "/messages", text: "Съобщения" },
];

const dashboardLinks = [
  {
    link: "/dashboard",
    text: "Табло",
    icon: <AiOutlineHome className="w-5 h-5" />,
  },
  {
    link: "/dashboard/ads",
    text: "Обяви",
    icon: <IoDocumentsOutline className="w-5 h-5" />,
  },
];

const badgeColors = [
  "bg-slate-300",
  "bg-neutral-300",
  "bg-stone-300",
  "bg-yellow-300",
  "bg-amber-300",
  "bg-orange-300",
  "bg-lime-300",
  "bg-emerald-300",
  "bg-cyan-300",
  "bg-sky-300",
  "bg-blue-300",
  "bg-indigo-300",
  "bg-purple-300",
  "bg-red-300",
  "bg-pink-300",
  "bg-rose-300",
];

const buttonColors = [
  "bg-slate-500 hover:bg-slate-600",
  "bg-neutral-500 hover:bg-neutral-600",
  "bg-stone-500 hover:bg-stone-600",
  "bg-yellow-500 hover:bg-yellow-600",
  "bg-amber-500 hover:bg-amber-600",
  "bg-orange-500 hover:bg-orange-600",
  "bg-lime-500 hover:bg-lime-600",
  "bg-emerald-500 hover:bg-emerald-600",
  "bg-cyan-500 hover:bg-cyan-600",
  "bg-sky-500 hover:bg-sky-600",
  "bg-blue-500 hover:bg-blue-600",
  "bg-indigo-500 hover:bg-indigo-600",
  "bg-purple-500 hover:bg-purple-600",
  "bg-red-500 hover:bg-red-600",
  "bg-pink-500 hover:bg-pink-600",
  "bg-rose-500 hover:bg-rose-600",
];

const workPositions = [
  { label: "Мениджър човешки ресурси" },
  { label: "Програмист" },
  { label: "Уеб дизайнер" },
  { label: "Маркетинг специалист" },
  { label: "Финансов анализатор" },
  { label: "Преподавател" },
  { label: "Медицинска сестра" },
  { label: "Счетоводител" },
  { label: "Софтуерен инженер" },
  { label: "Електротехник" },
  { label: "Архитект" },
  { label: "Юрист" },
  { label: "Графичен дизайнер" },
  { label: "Системен администратор" },
  { label: "Продавач консултант" },
  { label: "Административен асистент" },
  { label: "Фармацевт" },
  { label: "Лекар" },
  { label: "Оператор на производствена линия" },
  { label: "Консултант клиенти" },
  { label: "Хардуерен инженер" },
  { label: "Психолог" },
  { label: "Социален работник" },
  { label: "Геодезист" },
  { label: "Механик" },
  { label: "Адвокат" },
  { label: "Строителен инженер" },
  { label: "Работник в областта на образованието" },
  { label: "Продуктов мениджър" },
  { label: "Електрик" },
  { label: "Фитнес инструктор" },
  { label: "Техник по компютърни мрежи" },
  { label: "Главен финансов директор" },
  { label: "Статистик" },
  { label: "Търговски представител" },
  { label: "Логистик" },
  { label: "Интериорен дизайнер" },
  { label: "Медицински лаборант" },
  { label: "Художник" },
  { label: "Оперативен директор" },
  { label: "Техник по автоклиматизация" },
  { label: "Мениджър проекти" },
  { label: "Геолог" },
  { label: "Полицай" },
  { label: "Лингвист" },
  { label: "Механик-автомонтьор" },
  { label: "Телевизионен журналист" },
  { label: "Ресторантьор" },
  { label: "Еколог" },
  { label: "Стюардеса" },
  { label: "Мениджър качество" },
  { label: "Въздухоплавател" },
  { label: "Инженер по автоматизация" },
  { label: "Дентален хигиеник" },
  { label: "Психотерапевт" },
  { label: "Градинар" },
  { label: "Интернет маркетинг специалист" },
  { label: "Секретар" },
  { label: "Съдебен изпълнител" },
  { label: "Фотограф" },
  { label: "Рекламен агент" },
  { label: "Астроном" },
  { label: "Таксиметров шофьор" },
  { label: "Психиатър" },
  { label: "Барман" },
  { label: "Учител по физическо възпитание" },
  { label: "Физиотерапевт" },
  { label: "Техник по електроника" },
  { label: "Оператор на каса" },
  { label: "Индустриален дизайнер" },
  { label: "Застрахователен агент" },
  { label: "Гимназиален учител" },
  { label: "Брокер недвижими имоти" },
  { label: "Касиер" },
  { label: "Журналист" },
  { label: "Медицински представител" },
  { label: "Техник по хладилна техника" },
  { label: "Танцьор" },
  { label: "Фитнес треньор" },
  { label: "Политик" },
  { label: "Биолог" },
  { label: "Авиационен инженер" },
  { label: "Рецепционист" },
  { label: "Туристически агент" },
  { label: "Траверс" },
  { label: "Техник по телекомуникации" },
  { label: "Офис мениджър" },
  { label: "Кинолог" },
  { label: "Сценарист" },
  { label: "Лаборант" },
  { label: "Ветеринарен лекар" },
  { label: "Психологически консултант" },
  { label: "Илюстратор" },
  { label: "Билетопродавач" },
  { label: "Астрофизик" },
  { label: "Реставратор" },
  { label: "Банкер" },
  { label: "Инспектор качество" },
  { label: "Инструктор по карате" },
  { label: "Доставчик на храна" },
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
  workPositions,
  dashboardCategories,
  employmentTypes,
  homePageLinks,
  homePageAuthLinks,
  dashboardLinks,
  categoriesData,
  buttonColors,
  badgeColors,
  educationTypes,
  languages,
  employment,
  experience,
};
