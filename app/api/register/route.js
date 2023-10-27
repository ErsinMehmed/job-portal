import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import UserRole from "@/models/userRole";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { validateFields } from "../../utils";
import { generateRegisterRules } from "../../../rules/register";

export async function POST(request) {
  const data = await request.json();

  const registerRules = generateRegisterRules(data.role);

  const validationErrors = validateFields(data, registerRules);

  if (validationErrors) {
    return NextResponse.json({ status: false, errorFields: validationErrors });
  }

  if (data.password !== data.passwordRep) {
    return NextResponse.json({
      status: false,
      status_code: 1,
    });
  }

  await connectMongoDB();

  const userExist = await User.findOne({ email: data.email });

  if (userExist) {
    return NextResponse.json({
      status: false,
      status_code: 2,
    });
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const newUser = await User.create({
    ...data,
    password: hashedPassword,
  });

  if (data.role && newUser) {
    await UserRole.create({
      user: newUser._id,
      role: data.role,
    });
  }

  return NextResponse.json({ status: true, status_code: 3 }, { status: 201 });
}
