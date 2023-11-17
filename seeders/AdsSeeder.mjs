//  "type": "module",
import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import dotenv from "dotenv";
import chalk from "chalk";
import Ad from "../models/ad.js";
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

const generateFakeAd = (users) => {
  const jobTypes = [
    "Постоянна работа",
    "Временна работа",
    "Стаж",
    "Работа по задание/Freelancer",
  ];
  const randomUser = users[Math.floor(Math.random() * users.length)];

  return {
    title: faker.person.jobTitle(),
    location: faker.location.city(),
    position: faker.person.jobType(),
    employment_type: jobTypes[Math.floor(Math.random() * jobTypes.length)],
    summary: faker.lorem.sentence(),
    field: faker.person.jobArea(),
    details: faker.person.jobDescriptor(),
    salary: faker.number.int({ min: 700, max: 10000 }),
    expired: faker.date.between({
      from: "2023-05-01T00:00:00.000Z",
      to: faker.date.recent(),
    }),
    creator: randomUser._id,
  };
};

const importData = async () => {
  try {
    await Ad.deleteMany();

    const employerRole = await Role.findOne({ name: "Employer" });

    const users = await User.find({ role: employerRole._id }).select("_id");

    const fakeAdsPromises = Array.from({ length: 100 }, () =>
      generateFakeAd(users)
    );

    const fakeAds = await Promise.all(fakeAdsPromises);

    await Ad.insertMany(fakeAds);

    console.log(
      `${chalk.bold(
        "AdsSeeder.mjs"
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

importData();
