import { BsCoin, BsMegaphone, BsPencil, BsCodeSlash } from "react-icons/bs";

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

const fields = [
  { label: "Intranet" },
  { label: "Functionality" },
  { label: "Configuration" },
  { label: "Usability" },
  { label: "Applications" },
  { label: "Security" },
  { label: "Interactions" },
  { label: "Communications" },
  { label: "Solutions" },
  { label: "Directives" },
  { label: "Accounts" },
  { label: "Program" },
  { label: "Web" },
  { label: "Mobility" },
  { label: "Marketing" },
  { label: "Creative" },
  { label: "Operations" },
  { label: "Brand" },
  { label: "Infrastructure" },
  { label: "Division" },
  { label: "Branding" },
  { label: "Markets" },
  { label: "Research" },
  { label: "Metrics" },
  { label: "Quality" },
  { label: "Optimization" },
  { label: "Paradigm" },
  { label: "Manager" },
  { label: "Facilitator" },
  { label: "Coordinator" },
  { label: "Director" },
  { label: "Agent" },
  { label: "Orchestrator" },
  { label: "Specialist" },
  { label: "Analyst" },
  { label: "Strategist" },
  { label: "Data" },
  { label: "Tactics" },
  { label: "Factors" },
  { label: "Group" },
  { label: "Integration" },
  { label: "Identity" },
  { label: "Implementation" },
  { label: "Response" },
];

const categories = [
  {
    title: "Счетоводство / Финанси",
    positions: "(2 отворени позиции)",
    icon: <BsCoin className='w-9 h-9 text-blue-500' />,
  },
  {
    title: "Маркетинг",
    positions: "(85 отворени позиции)",
    icon: <BsMegaphone className='w-9 h-9 text-blue-500' />,
  },
  {
    title: "Дизайн",
    positions: "(26 отворени позиции)",
    icon: <BsPencil className='w-9 h-9 text-blue-500' />,
  },
  {
    title: "Програмиране",
    positions: "(51 отворени позиции)",
    icon: <BsCodeSlash className='w-9 h-9 text-blue-500' />,
  },
];

export {
  perPageResult,
  statuses,
  fields,
  employmentTypes,
  homePageLinks,
  homePageAuthLinks,
  categories,
};
