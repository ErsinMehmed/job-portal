//  "type": "module",
import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import chalk from "chalk";
import User from "../models/user.js";
import Role from "../models/role.js";

dotenv.config({ path: new URL("../.env", import.meta.url) });

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DB Connected"))
  .catch((error) => console.log("DB Connection Failed", error.message));

const generateFakeUser = async (roles) => {
  const randomRole = roles[Math.floor(Math.random() * roles.length)];

  const email = faker.internet.email();
  const hashedPassword = await bcrypt.hash(email, 10);

  let userData = {
    email: email,
    password: hashedPassword,
    role: randomRole._id,
    city: faker.location.city(),
    phone_number: faker.phone.number(),
  };

  if (randomRole.name === "Employer") {
    userData = {
      ...userData,
      name: faker.company.name(),
      vat_number: faker.finance.accountNumber({ length: 10 }),
      company_size: `${generateMinMaxNumber(5, 5, 50)}-${generateMinMaxNumber(
        10,
        50,
        500
      )}`,
      company_created: faker.date.past(),
      company_description: faker.lorem.sentences({ min: 2, max: 8 }),
    };
  } else {
    userData = {
      ...userData,
      name: faker.person.fullName(),
      birthday: faker.date.past(),
      personal_number: faker.number.int({
        min: 1000000000,
        max: 9999999999,
      }),
    };
  }

  return userData;
};

const generateMinMaxNumber = (step, min, max) => {
  const randomNumber = faker.number.int({ min: min, max: max });
  const roundedNumber = Math.round(randomNumber / step) * step;

  return roundedNumber;
};

const importUserData = async () => {
  try {
    await User.deleteMany();

    const roles = await Role.find().select("_id name");

    const fakeUsersPromises = Array.from({ length: 5 }, () =>
      generateFakeUser(roles)
    );

    const fakeUsers = await Promise.all(fakeUsersPromises);
    await User.insertMany(fakeUsers);

    console.log(
      `${chalk.bold(
        "UsersSeeder.js"
      )} .......................................................................................... ${chalk.bold.green(
        "DONE"
      )}`
    );
    process.exit(0);
  } catch (error) {
    console.log(
      `${chalk.bold(
        error.message
      )} .......................................................................................... ${chalk.bold.red(
        "FAILED"
      )}`
    );
    process.exit(1);
  }
};

importUserData();
