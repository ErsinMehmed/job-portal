import { makeObservable, observable, action } from "mobx";
import authApi from "@/api/auth";
import commonStore from "./commonStore";
import { RegisterEnums } from "../enums/status";

class Auth {
  teacherData = {
    name: "",
    faculty: "",
    email: "",
    password: "",
    passwordRep: "",
  };

  constructor() {
    makeObservable(this, {
      teacherData: observable,
      setTeacherData: action,
    });
  }

  setTeacherData = (teacherData) => {
    this.teacherData = teacherData;
  };

  handleSubmit = async () => {
    commonStore.setErrorFields({});
    commonStore.setErrorMessage("");
    commonStore.setSuccessMessage("");

    const res = await authApi.createTeacherApi(this.teacherData);

    const response = await res.json();

    switch (response.status_code) {
      case RegisterEnums.PASSWORD_NOT_MATCH:
        commonStore.setErrorMessage("Въведените пароли не съвпадат");
        commonStore.setErrorFields({
          password: true,
          passwordRep: true,
        });

        break;
      case RegisterEnums.TEACHER_EXIST:
        commonStore.setErrorMessage("Потребителят вече съществува");
        commonStore.setErrorFields({
          email: true,
        });

        break;
      case RegisterEnums.USER_CREATED:
        commonStore.setSuccessMessage("Потребителят е създаден");
        this.teacherData = {
          name: "",
          faculty: "",
          email: "",
          password: "",
          passwordRep: "",
        };

        break;
      default:
        commonStore.setErrorFields(response.errorFields);
    }
  };
}

export default new Auth();
