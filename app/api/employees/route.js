import connectMongoDB from "@/libs/mongodb";
import Employee from "@/models/employee";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, personal_number, birthday, city, email, password, group } =
    await request.json();

  await connectMongoDB();
  await Employee.create({
    name,
    personal_number,
    birthday,
    city,
    email,
    password,
    group,
  });

  return NextResponse.json({ message: "Employee Created" }, { status: 201 });
}

export async function GET(request) {
  const page = request.nextUrl.searchParams.get("page") || 1;
  const perPage = request.nextUrl.searchParams.get("per_page") || 10;
  const nameFilter = request.nextUrl.searchParams.get("name");
  const personalNumberFilter =
    request.nextUrl.searchParams.get("personal_number");

  await connectMongoDB();

  const queryBuilder = Employee.find().populate({
    path: "group",
    select: "name number",
  });

  if (nameFilter) {
    queryBuilder.where("name", new RegExp(nameFilter, "i"));
  }

  if (personalNumberFilter) {
    queryBuilder.where("personal_number", personalNumberFilter);
  }

  const totalEmployees = await Employee.find(queryBuilder).countDocuments();
  const employee = await queryBuilder.skip((page - 1) * perPage).limit(perPage);

  const pagination = {
    current_page: parseInt(page),
    total_pages: Math.ceil(totalEmployees / perPage),
    total_results: totalEmployees,
    per_page: parseInt(perPage),
  };

  return NextResponse.json({ employee, pagination });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");

  await connectMongoDB();
  await Employee.findByIdAndDelete(id);

  return NextResponse.json({ message: "Employee deleted" }, { status: 200 });
}
