import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import dotenv from "dotenv";
import Ad from "./models/ad.js";
import User from "./models/user.js";

dotenv.config({ path: new URL("./.env", import.meta.url) });

mongoose
  .connect(String(process.env.MONGODB_URI), {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((error) => console.log("DB Connection Failed", error.message));

const generateFakeAd = (users) => {
  const jobTypes = ["Full-Time", "Part-Time", "Contract"];
  const randomUser = users[Math.floor(Math.random() * users.length)];

  return {
    title: faker.person.jobTitle(),
    location: faker.location.city(),
    position: faker.person.jobType(),
    employment_type: jobTypes[Math.floor(Math.random() * jobTypes.length)],
    summary: faker.lorem.sentence(),
    field: faker.person.jobArea(),
    details: faker.person.jobDescriptor(),
    minimum_salary: Math.floor(Math.random() * (10000 - 700 + 1) + 700),
    maximum_salary: Math.floor(Math.random() * (10000 - 700 + 1) + 700),
    creator: randomUser._id,
  };
};

const importData = async () => {
  try {
    await Ad.deleteMany();

    const users = await User.find().select("_id");

    const fakeAdsPromises = Array.from({ length: 100 }, () =>
      generateFakeAd(users)
    );

    const fakeAds = await Promise.all(fakeAdsPromises);

    await Ad.insertMany(fakeAds);

    console.log("Data imported");
    process.exit(0);
  } catch (error) {
    console.error("Data not imported", error.message);
    process.exit(1);
  }
};

importData();
