import connectMongoDB from "@/libs/mongodb";
import Teacher from "@/models/teacher";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const { name, faculty, email, password, passwordRep } =
      await request.json();

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
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
