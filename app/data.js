import { FcGraduationCap } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";

const faculties = [
  { name: "Финансово-счетоводен факултет" },
  { name: "Стопански факултет" },
  { name: `Факултет "Информатика"` },
  { name: `Факултет "Управление"` },
];

const departments = [
  { name: "Обща икономическа теория", faculty: 0 },
  { name: "Счетоводна отчетност", faculty: 0 },
  { name: "Правни науки", faculty: 0 },
  { name: "Финанси", faculty: 0 },
  { name: "Бизнес, инвестиции, недвижими имоти", faculty: 1 },
  { name: "Икономика и управление на търговията и услугите", faculty: 1 },
  { name: "Индустриален бизнес и логистика", faculty: 1 },
  { name: "Аграрна икономика", faculty: 1 },
  { name: "Стокознание", faculty: 1 },
  { name: "Статистика и приложна математика", faculty: 2 },
  { name: "Езиково обучение и спорт", faculty: 2 },
  { name: "Информатика", faculty: 2 },
  { name: "Международни икономически отношения", faculty: 3 },
  { name: "Икономика и организация на туризма", faculty: 3 },
  { name: "Управление и администрация", faculty: 3 },
  { name: "Маркетинг", faculty: 3 },
];

const userKind = [
  {
    text: "Студент",
    icon: <FcGraduationCap style={{ fontSize: "10rem" }} />,
  },
  {
    text: "Преподавател",
    icon: <FcBriefcase style={{ fontSize: "10rem" }} />,
  },
];

export { faculties, departments, userKind };
