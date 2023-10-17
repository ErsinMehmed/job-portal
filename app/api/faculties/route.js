import connectMongoDB from "@/libs/mongodb";
import Faculty from "@/models/faculty";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name } = await request.json();

  await connectMongoDB();
  await Faculty.create({
    name,
  });

  return NextResponse.json({ message: "Faculty Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();

  const faculties = await Faculty.find().select("_id name");

  return NextResponse.json(faculties);
}
