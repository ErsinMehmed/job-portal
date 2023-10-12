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
      const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%^&*])[A-Za-z\d@#$!%^&*]{8,}$/;

      if (value && !passwordPattern.test(value)) {
        errors[field] =
          "Паролата трябва да съдържа поне една малка буква, една главна буква, една цифра и един специален знак.";
      }
    }
  }

  return Object.keys(errors).length === 0 ? null : errors;
}
