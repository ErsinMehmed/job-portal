import connectMongoDB from "@/libs/mongodb";
import Teacher from "@/models/teacher";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { validateFields } from "../../utils";
import { registerRules } from "../../../rules/register";

export async function POST(request) {
  const { name, faculty, email, password, passwordRep } = await request.json();

  const validationErrors = validateFields(
    { name, faculty, email, password, passwordRep },
    registerRules
  );

  if (validationErrors) {
    return NextResponse.json({ status: false, errorFields: validationErrors });
  }

  if (password !== passwordRep) {
    return NextResponse.json({
      status: false,
      status_code: 1,
    });
  }

  await connectMongoDB();

  const existingTeacher = await Teacher.findOne({ email });

  if (existingTeacher) {
    return NextResponse.json({
      status: false,
      status_code: 2,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await Teacher.create({ name, faculty, email, password: hashedPassword });

  return NextResponse.json({ status: true, status_code: 3 }, { status: 201 });
}
