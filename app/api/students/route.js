import connectMongoDB from "@/libs/mongodb";
import Student from "@/models/student";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    name,
    personal_number,
    birthday,
    faculty_number,
    faculty,
    email,
    password,
    group,
  } = await request.json();

  await connectMongoDB();
  await Student.create({
    name,
    personal_number,
    birthday,
    faculty_number,
    faculty,
    email,
    password,
    group,
  });

  return NextResponse.json({ message: "Student Created" }, { status: 201 });
}

export async function GET(request) {
  const page = request.nextUrl.searchParams.get("page") || 1;
  const perPage = request.nextUrl.searchParams.get("per_page") || 10;
  const nameFilter = request.nextUrl.searchParams.get("name");
  const facultyNumberFilter =
    request.nextUrl.searchParams.get("faculty_number");
  const personalNumberFilter =
    request.nextUrl.searchParams.get("personal_number");

  await connectMongoDB();

  const queryBuilder = Student.find().populate({
    path: "group",
    select: "name number course",
  });

  if (nameFilter) {
    queryBuilder.where("name", new RegExp(nameFilter, "i"));
  }

  if (facultyNumberFilter) {
    queryBuilder.where("faculty_number", facultyNumberFilter);
  }

  if (personalNumberFilter) {
    queryBuilder.where("personal_number", personalNumberFilter);
  }

  const totalStudents = await Student.find(queryBuilder).countDocuments();
  const students = await queryBuilder.skip((page - 1) * perPage).limit(perPage);

  const pagination = {
    current_page: parseInt(page),
    total_pages: Math.ceil(totalStudents / perPage),
    total_results: totalStudents,
    per_page: parseInt(perPage),
  };

  return NextResponse.json({ students, pagination });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");

  await connectMongoDB();
  await Student.findByIdAndDelete(id);

  return NextResponse.json({ message: "Student deleted" }, { status: 200 });
}
