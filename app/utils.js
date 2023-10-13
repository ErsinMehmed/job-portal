export function validateFields(object, fieldRules) {
  const errors = {};

  for (const field in fieldRules) {
    const rules = fieldRules[field];
    const value = object[field];

    if (rules.required && (value === "" || value === null)) {
      errors[field] = "Полето е задължително поле.";
    }

    if (rules.minLength && value && value.length < rules.minLength) {
      errors[field] = `Полето трябва съдържа поне ${rules.minLength} символа.`;
    }

    if (rules.maxLength && value && value.length > rules.maxLength) {
      errors[
        field
      ] = `Полето трябва да бъде по-кратко или равно на ${rules.maxLength} символа.`;
    }

    if (rules.type && typeof value !== rules.type) {
      errors[field] = `Полето трябва да бъде от тип ${rules.type}.`;
    }

    if (field.toLowerCase() === "email" && value) {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!emailPattern.test(value)) {
        errors[field] = "Въведете валиден имейл адрес.";
      }
    }

    if (
      field.toLowerCase() === "password" ||
      field.toLowerCase() === "passwordrep"
    ) {
      const passwordRegex = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$"
      );

      if (!passwordRegex.test(value)) {
        if (!value.match(/[a-zа-я]/)) {
          errors[field] = "Липсва малка буква.";
        }
        if (!value.match(/[A-ZА-Я]/)) {
          errors[field] = "Липсва голяма буква.";
        }
        if (!value.match(/[0-9]/)) {
          errors[field] = "Липсва цифра.";
        }
        if (!value.match(/[^a-zA-Z0-9]/)) {
          errors[field] = "Липсва специален знак.";
        }
      }
    }
  }

  return Object.keys(errors).length === 0 ? null : errors;
}
