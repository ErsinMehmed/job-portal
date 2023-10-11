import connectMongoDB from "@/libs/mongodb";
import Teacher from "@/models/teacher";
import { NextResponse } from "next/server";

export async function POST(request) {
  await connectMongoDB();
  const { email } = await request.json();
  const teacher = await Teacher.findOne({ email }).select("_id");

  console.log("teacher: ", teacher);

  return NextResponse.json({ teacher });
}
