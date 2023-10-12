export function validateFields(object, fieldRules) {
  const errors = {};

  for (const field in fieldRules) {
    const rules = fieldRules[field];
    const value = object[field]; // Дефинирайте value като стойността на полето

    // Проверка дали полето съществува
    if (rules.required && (value === "" || value === null)) {
      errors[field] = `${field} е задължително поле и не е предоставено.`;
    }

    // Проверка на минималната дължина (ако е определена)
    if (rules.minLength && value && value.length < rules.minLength) {
      errors[
        field
      ] = `${field} трябва да бъде поне ${rules.minLength} символа.`;
    }

    // Проверка на дължината на стойността (ако е определена)
    if (rules.maxLength && value && value.length > rules.maxLength) {
      errors[
        field
      ] = `${field} трябва да бъде по-кратко или равно на ${rules.maxLength} символа.`;
    }

    // Проверка на типа на полето (ако е определен)
    if (rules.type && typeof value !== rules.type) {
      errors[field] = `${field} трябва да бъде от тип ${rules.type}.`;
    }
  }

  return Object.keys(errors).length === 0 ? null : errors;
}
