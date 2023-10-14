import { makeObservable, observable, action } from "mobx";

class Common {
  errorFields = {};
  errorMessage = "";
  successMessage = "";

  constructor() {
    makeObservable(this, {
      errorFields: observable,
      errorMessage: observable,
      successMessage: observable,
      setErrorFields: action,
      setErrorMessage: action,
      setSuccessMessage: action,
    });
  }

  setErrorFields = (errorFields) => {
    this.errorFields = errorFields;
  };

  setErrorMessage = (errorMessage) => {
    this.errorMessage = errorMessage;
  };

  setSuccessMessage = (successMessage) => {
    this.successMessage = successMessage;
  };
}

export default new Common();
