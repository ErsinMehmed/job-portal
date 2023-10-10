import connectMongoDB from "@/libs/mongodb";
import Student from "@/models/student";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newName: name,
    newBirthday: birthday,
    newFacultyNumber: faculty_number,
    newFaculty: faculty,
    newEmail: email,
    newPassword: password,
    newGroupId: group_id,
  } = await request.json();

  await connectMongoDB();
  await Student.findByIdAndUpdate(id, {
    name,
    birthday,
    faculty_number,
    faculty,
    email,
    password,
    group_id,
  });

  return NextResponse.json({ message: "Student updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;

  await connectMongoDB();

  const student = await Student.findOne({ _id: id });

  return NextResponse.json({ student }, { status: 200 });
}
