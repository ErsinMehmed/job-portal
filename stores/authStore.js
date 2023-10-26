import { makeObservable, observable, action } from "mobx";
import authApi from "@/apis/auth";
import roleApi from "@/apis/role";
import commonStore from "./commonStore";
import { RegisterEnums } from "../enums/status";
import { RoleEnums } from "../enums/role";
import { validateFields } from "../app/utils";
import { generateRegisterRules } from "../rules/register";

class Auth {
  userData = {
    name: "",
    role: "",
    vat_number: "",
    city: "",
    email: "",
    password: "",
    passwordRep: "",
  };

  loginData = {
    email: "",
    password: "",
  };

  roles = {};

  constructor() {
    makeObservable(this, {
      userData: observable,
      loginData: observable,
      roles: observable,
      setUserData: action,
      setLoginData: action,
      setRole: action,
    });
  }

  setUserData = (userData) => {
    this.userData = userData;
  };

  setLoginData = (loginData) => {
    this.loginData = loginData;
  };

  setRole = (roles) => {
    this.roles = roles;
  };

  loadRoles = async () => {
    this.setRole(await roleApi.getRoles());
  };

  createUserProfile = async () => {
    commonStore.setErrorFields({});
    commonStore.setErrorMessage("");
    commonStore.setSuccessMessage("");

    console.log(generateRegisterRules(this.userData.role));
    return;

    const errorFields = validateFields(registerRules, this.userData);
    console.log(errorFields);

    if (errorFields) {
      commonStore.setErrorFields(errorFields);
      return;
    }

    const response = await authApi.createUserApi(this.userData);

    switch (response.status_code) {
      case RegisterEnums.PASSWORD_NOT_MATCH:
        commonStore.setErrorMessage("Въведените пароли не съвпадат");
        commonStore.setErrorFields({
          password: true,
          passwordRep: true,
        });

        break;
      case RegisterEnums.USER_EXIST:
        commonStore.setErrorMessage("Потребителят вече съществува");
        commonStore.setErrorFields({
          email: true,
        });

        break;
      case RegisterEnums.USER_CREATED:
        commonStore.setSuccessMessage("Потребителят е създаден");
        this.userData = {
          name: "",
          role: "",
          vat_number: "",
          city: "",
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
