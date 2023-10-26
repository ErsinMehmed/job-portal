import { FcGraduationCap } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";

const usersRole = [{ name: "Служител" }, { name: "Работодател" }];

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

export { usersRole, userKind };
