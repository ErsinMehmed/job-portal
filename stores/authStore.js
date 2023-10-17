import { makeObservable, observable, action } from "mobx";
import authApi from "@/api/auth";
import commonStore from "./commonStore";
import { RegisterEnums } from "../enums/status";
import { validateFields } from "../app/utils";
import { registerRules } from "../rules/register";

class Auth {
  teacherData = {
    name: "",
    faculty: "",
    email: "",
    password: "",
    passwordRep: "",
  };

  loginData = {
    email: "",
    password: "",
  };

  constructor() {
    makeObservable(this, {
      teacherData: observable,
      loginData: observable,
      setTeacherData: action,
      setLoginData: action,
    });
  }

  setTeacherData = (teacherData) => {
    this.teacherData = teacherData;
  };

  setLoginData = (loginData) => {
    this.loginData = loginData;
  };

  createTeacherProfile = async () => {
    commonStore.setErrorFields({});
    commonStore.setErrorMessage("");
    commonStore.setSuccessMessage("");

    const errorFields = validateFields(this.teacherData, registerRules);

    if (errorFields) {
      commonStore.setErrorFields(errorFields);
      return;
    }

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

  login = async (e) => {
    e.preventDefault();

    const res = await authApi.login(this.loginData);

    if (res.error) {
      commonStore.setErrorMessage("Потребителят не съществува");
      commonStore.setErrorFields({
        error: true,
      });
      return;
    }
  };
}

export default new Auth();
