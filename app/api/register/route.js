import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { validateFields } from "../../utils";

export async function POST(request) {
  // const { name, role, city, vat_number, email, password, passwordRep } =
  //   await request.json();
  return NextResponse.json(await request.json());

  const validationErrors = validateFields(
    { name, vat_number, email, password, passwordRep },
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

  const userExist = await User.findOne({ email });

  if (userExist) {
    return NextResponse.json({
      status: false,
      status_code: 2,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({
    name,
    vat_number,
    email,
    password: hashedPassword,
  });

  return NextResponse.json({ status: true, status_code: 3 }, { status: 201 });
}
