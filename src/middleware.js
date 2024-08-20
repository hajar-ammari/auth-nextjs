import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  // console.log("middleware path:", path, "request:", request);
  // Check if the path is a public path
  const isPublicPath = path === "/" || path === "/authentication";
  const token = request.cookies.get("token") || "";
  // Public paths shouldn't be accessed if the token exists
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/profile", request.nextUrl));
  }
  // Return the original request if the path is private and the token doesn't exist
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/authentication", request.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/profile", "/authentication"],
};
