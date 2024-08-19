import { connect } from "@/config/db-config";
import User from "@/models/user-model";
import {NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { username, email, password } = reqBody;

    console.log(reqBody);

    // Check if user email already exists
    const existingUserEmail = await User.findOne({ email });
    if (existingUserEmail) {
      return NextResponse.json(
        { error: "User email already exists" },
        { status: 400 }
      );
    }

    // Check if username already exists
    const existingUsername = await User.findOne({ email });
    if (existingUsername) {
      return NextResponse.json(
        { error: "Username already exists" },
        { status: 400 }
      );
    }

    // Hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create a new user and save it to the database
    const user = new User({ username, email, password: hashedPassword });
    console.log("user to save to database", user);
    user.save();

    return NextResponse.json(
      { message: "User created successfully", success: true, user },
      { status: 201 }
    );
  } catch (error) {
    NextResponse.json({ error: error(error) }, { status: 500 });
  }
}
