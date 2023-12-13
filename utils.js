export function validateFields(object, fieldRules) {
  const errors = {};

  for (const field in fieldRules) {
    const rules = fieldRules[field];
    const value = object[field];

    if (field.toLowerCase() === "email" && value) {
      validateEmail(field, value, errors);
    }

    if (
      (field.toLowerCase() === "password" ||
        field.toLowerCase() === "passwordRep") &&
      value
    ) {
      validatePassword(field, value, errors);
    }

    if (rules.required && (value === "" || value === null)) {
      errors[field] = "Полето е задължително.";
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
  }

  return Object.keys(errors).length === 0 ? null : errors;
}

function validateEmail(field, value, errors) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailPattern.test(value)) {
    errors[field] = "Въведете валиден имейл адрес.";
  }
}

function validatePassword(field, value, errors) {
  const passwordRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$"
  );

  if (!passwordRegex.test(value)) {
    if (!value.match(/[a-zа-я]/)) {
      errors[field] = "Липсва малка буква.";
    } else if (!value.match(/[A-ZА-Я]/)) {
      errors[field] = "Липсва голяма буква.";
    } else if (!value.match(/[0-9]/)) {
      errors[field] = "Липсва цифра.";
    } else if (!value.match(/[^a-zA-Z0-9]/)) {
      errors[field] = "Липсва специален знак.";
    }
  }
}

export function isAdActive(date) {
  const adExpiredDate = new Date(date);
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  return adExpiredDate > oneMonthAgo;
}

export function getWords(text, count) {
  const words = text.split(/\s+/);
  const selectedWords = words.slice(0, count);
  const paragraph = selectedWords.join(" ");

  return paragraph;
}

export function getRemainingWords(text, startWordIndex) {
  const words = text.split(/\s+/);
  const remainingWords = words.slice(startWordIndex);
  const paragraph = remainingWords.join(" ");

  return paragraph;
}

export function formatCurrency(amount, fractionDigits) {
  const formatter = new Intl.NumberFormat("bg-BG", {
    style: "currency",
    currency: "BGN",
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });

  return formatter.format(amount);
}
