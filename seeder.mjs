//  "type": "module" in package.json
import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import Ad from "./models/ad.js";

mongoose
  .connect(
    "mongodb+srv://ersinhyusein:RVTKw9rooiMrHZ6t@cluster0.qvngyyn.mongodb.net/university_portal",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("DB Connected"))
  .catch((error) => console.log("DB Connection Failed", error.message));

const generateFakeAd = () => {
  const jobPositions = [
    "Software Developer",
    "Data Analyst",
    "Marketing Manager",
    "Sales Representative",
    "Project Manager",
    "Graphic Designer",
    "Accountant",
    "HR Specialist",
    "Customer Support Agent",
    "Product Manager",
  ];

  const jobTypes = ["Full-Time", "Part-Time", "Contract"];

  return {
    title: faker.lorem.words(3),
    location: faker.location.streetAddress(),
    position: jobPositions[Math.floor(Math.random() * jobPositions.length)],
    employment_type: jobTypes[Math.floor(Math.random() * jobTypes.length)],
    summary: faker.lorem.sentence(),
    field: faker.person.jobArea(),
    details: faker.lorem.paragraph(),
    minimum_salary: Math.floor(Math.random() * (10000 - 700 + 1) + 700),
    maximum_salary: Math.floor(Math.random() * (10000 - 700 + 1) + 700),
  };
};

const importData = async () => {
  try {
    await Ad.deleteMany();

    const fakeAds = Array.from({ length: 100 }, generateFakeAd);

    await Ad.insertMany(fakeAds);

    console.log("Data imported");
    process.exit(0); // Success code
  } catch (error) {
    console.error("Data not imported", error.message);
    process.exit(1); // Failure code
  }
};

importData();
