import { getDataFromToken } from "@/helpers/data-from-token";
import { NextResponse } from "next/server";
import User from "@/models/user-model";
import { connect } from "@/config/db-config";

connect();

export async function GET(req) {
  try {
    const userId = await getDataFromToken(req);
    const user = await User.findOne({ _id: userId }).select("-password");
    return NextResponse.json({ message: "User found", data: user });
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    return NextResponse.status(500).json({
      message: "Error fetching user data",
    });
  }
}
