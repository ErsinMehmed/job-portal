import { RoleEnums } from "../enums/role";

export function generateRegisterRules(userRole) {
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
      vat_number: { required: true, type: "string", minLength: 10 },
    };
  } else {
    registerRules = {
      ...registerRules,
      birthday: { required: true },
      city: { required: true, type: "string" },
      // personal_number: {
      //   required: true,
      //   minLength: 10,
      //   type: "string",
      // },
    };
  }

  return registerRules;
}
