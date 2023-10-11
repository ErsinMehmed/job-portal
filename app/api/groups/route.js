import connectMongoDB from "@/libs/mongodb";
import Group from "@/models/group";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, number, course } = await request.json();

  await connectMongoDB();
  await Group.create({
    name,
    number,
    course,
  });

  return NextResponse.json({ message: "Group Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();

  const groups = await Group.find();

  return NextResponse.json({ groups });
}
