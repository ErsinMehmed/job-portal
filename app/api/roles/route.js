import connectMongoDB from "@/libs/mongodb";
import Role from "@/models/role";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name } = await request.json();

  await connectMongoDB();

  await Role.create({
    name,
  });

  return NextResponse.json({ message: "Role Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();

  const roles = await Role.find();

  return NextResponse.json({ roles });
}
