const registerEmployeerRules = {
  name: { required: true, minLength: 3, maxLength: 255, type: "string" },
  role: { required: true },
  vat_number: { required: true, type: "string" },
  email: {
    required: true,
    minLength: 5,
    maxLength: 255,
    type: "string",
  },
  password: {
    required: true,
    minLength: 8,
    maxLength: 255,
    type: "string",
  },
  passwordRep: {
    required: true,
    minLength: 8,
    maxLength: 255,
    type: "string",
  },
};

const registerEmployeeRules = {
  name: { required: true, minLength: 3, maxLength: 255, type: "string" },
  role: { required: true },
  city: { required: true, type: "string" },
  email: {
    required: true,
    minLength: 5,
    maxLength: 255,
    type: "string",
  },
  password: {
    required: true,
    minLength: 8,
    maxLength: 255,
    type: "string",
  },
  passwordRep: {
    required: true,
    minLength: 8,
    maxLength: 255,
    type: "string",
  },
};

export { registerEmployeerRules, registerEmployeeRules };
