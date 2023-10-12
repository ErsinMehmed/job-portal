import connectMongoDB from "@/libs/mongodb";
import Teacher from "@/models/teacher";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { validateFields } from "../../utils";

export async function POST(request) {
  const { name, faculty, email, password, passwordRep } = await request.json();

  const fieldRules = {
    name: { required: true, minLength: 3, maxLength: 255, type: "string" },
    faculty: { required: true, type: "string" },
    email: { required: true, minLength: 5, maxLength: 255, type: "string" },
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

  const validationErrors = validateFields(
    { name, faculty, email, password, passwordRep },
    fieldRules
  );

  if (validationErrors) {
    request.session = validationErrors;
    return NextResponse.json({ errors: validationErrors });
  }

  if (password !== passwordRep) {
    return NextResponse.json({ message: "Въведените пароли не съвпадат" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await connectMongoDB();
  await Teacher.create({ name, faculty, email, password: hashedPassword });

  return NextResponse.json(
    { message: "Преподавателя е създаден" },
    { status: 201 }
  );
}
