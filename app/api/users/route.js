import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();

  await connectMongoDB();

  await User.create(data);

  return NextResponse.json({ message: "User Created" }, { status: 201 });
}

export async function GET(request) {
  const page = request.nextUrl.searchParams.get("page") || 1;
  const perPage = request.nextUrl.searchParams.get("per_page") || 10;
  const nameFilter = request.nextUrl.searchParams.get("name");
  const personalNumberFilter =
    request.nextUrl.searchParams.get("personal_number");

  await connectMongoDB();

  const queryBuilder = User.find().populate({
    path: "role",
    select: "name",
  });

  if (nameFilter) {
    queryBuilder.where("name", new RegExp(nameFilter, "i"));
  }

  if (personalNumberFilter) {
    queryBuilder.where("personal_number", personalNumberFilter);
  }

  const totalUsers = await User.find(queryBuilder).countDocuments();
  const users = await queryBuilder.skip((page - 1) * perPage).limit(perPage);

  const pagination = {
    current_page: parseInt(page),
    total_pages: Math.ceil(totalUsers / perPage),
    total_results: totalUsers,
    per_page: parseInt(perPage),
  };

  return NextResponse.json({ users, pagination });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");

  await connectMongoDB();
  await User.findByIdAndDelete(id);

  return NextResponse.json({ message: "User deleted" }, { status: 200 });
}
