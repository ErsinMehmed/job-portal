import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  await connectMongoDB();

  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const user = await User.findOne({ _id: session.user.id }).populate({
    path: "role",
    select: "name",
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const userData = {
    _id: user._id,
    name: user.name,
    company_size: user.company_size,
    vat_number: user.vat_number,
    phone_number: user.phone_number,
    role: user.role.name,
    company_created: user.company_created,
    company_description: user.company_description,
    city: user.city,
  };

  return NextResponse.json(userData);
}
