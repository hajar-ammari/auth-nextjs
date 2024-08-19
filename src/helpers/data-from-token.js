import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function getDataFromToken(req) {
  try {
    const encodedToken = req.cookies.get("token").value || "";
    const decodeToken = jwt.verify(encodedToken, process.env.JWT_SECRET);
    return decodeToken.id;
  } catch (error) {
    console.error("Error in getDataFromToken:", error.message);
  }
}
