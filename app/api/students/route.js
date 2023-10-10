import connectMongoDB from "@/libs/mongodb";
import Student from "@/models/student";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, birthday, faculty_number, faculty, email, password, group_id } =
    await request.json();

  await connectMongoDB();
  await Student.create({
    name,
    birthday,
    faculty_number,
    faculty,
    email,
    password,
    group_id,
  });

  return NextResponse.json({ message: "Student Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();

  const students = await Student.find();

  return NextResponse.json({ students });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");

  await connectMongoDB();
  await Student.findByIdAndDelete(id);

  return NextResponse.json({ message: "Student deleted" }, { status: 200 });
}
