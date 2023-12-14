import { makeObservable, observable, action } from "mobx";
import authAction from "@/actions/authAction";

class User {
  user = {};

  constructor() {
    makeObservable(this, {
      user: observable,
      setUser: action,
    });
  }

  setUser = (data) => {
    this.user = data;
  };

  loadCurrentUserData = async () => {
    this.setUser(await authAction.authUser());
  };
}

export default new User();
