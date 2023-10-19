import { FcGraduationCap } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";

const faculties = [
  { name: "Информатика" },
  { name: "Маркетинг" },
  { name: "Математика" },
  { name: "Стопански" },
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

export { faculties, userKind };
