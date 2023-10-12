import { makeObservable, observable, action } from "mobx";

class Common {
  errorFields = {};

  constructor() {
    makeObservable(this, {
      errorFields: observable,
      setErrorFields: action,
    });
  }

  setErrorFields = (errorFields) => {
    this.errorFields = errorFields;
  };
}

export default new Common();
