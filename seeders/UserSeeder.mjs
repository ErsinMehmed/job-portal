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
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
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
  };

  if (randomRole.name === "Employer") {
    userData = {
      ...userData,
      name: faker.company.name(),
      vat_number: faker.finance.accountNumber({ length: 10 }),
    };
  } else {
    userData = {
      ...userData,
      name: faker.person.fullName(),
      birthday: faker.date.past(),
      city: faker.location.city(),
      personal_number: faker.number.int({
        min: 1000000000,
        max: 9999999999,
      }),
    };
  }

  return userData;
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
