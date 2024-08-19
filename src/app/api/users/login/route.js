import { connect } from "@/config/db-config";
import User from "@/models/user-model";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const { username, password } = reqBody;
    console.log(reqBody);

    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json(
        { error: "Username doesn't exists" },
        { status: 400 }
      );
    }

    // Compare passwords
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // Create token data
    const tokenData = {
      id: user._id,
      username: user.username,
    };

    const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const res = NextResponse.json({
      message: "Login successful",
      success: true,
    });
    res.cookies.set("token", token, { httpOnly: true });
    return res;
  } catch (error) {
    NextResponse.json({ error: error(error) }, { status: 500 });
  }
}
