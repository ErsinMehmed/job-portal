import { RoleEnums } from "../enums/role";

export function generateRegisterRules(userRole) {
  console.log(userRole === RoleEnums.EMPLOYER);
  let registerRules = {
    name: { required: true, minLength: 3, maxLength: 255, type: "string" },
    role: { required: true },
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

  if (userRole === RoleEnums.EMPLOYER) {
    registerRules = {
      ...registerRules,
      vat_number: { required: true, type: "string" },
    };
  } else {
    registerRules = {
      ...registerRules,
      birthday: { required: true, type: "string" },
      city: { required: true, type: "string" },
    };
  }

  console.log(registerRules);

  return registerRules;
}
