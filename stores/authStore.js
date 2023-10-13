import { makeObservable, observable, action } from "mobx";
import authApi from "../api/auth";
import commonStore from "./commonStore";

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
    const teacherExists = await fetch("api/teacher-exists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: this.teacherData.email }),
    });

    const { teacher } = await teacherExists.json();

    if (teacher) {
      return { message: "Потребителят съществува" };
    }

    const response = await authApi.createTeacherApi(this.teacherData);

    const message = await response.json();

    if (message.hasOwnProperty("errorFields")) {
      commonStore.setErrorFields(message.errorFields);
    }
  };
}

export default new Auth();
