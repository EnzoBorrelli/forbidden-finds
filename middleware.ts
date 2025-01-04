// pages/_middleware.ts
import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const url = req.nextUrl.clone();

  // Check if the request is for the /dashboard route
  if (url.pathname === "/dashboard") {
    // Check if the user is authenticated and has the admin role
    if (token && token.role == "admin") {
      return NextResponse.next(); // Allow the request to proceed
    }
    // Redirect to /denegado if not an admin
    url.pathname = "/denegado";
    return NextResponse.redirect(url);
  }
}
