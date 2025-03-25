import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const allowedOrigins = [
    "https://funimedesu.vercel.app",
    "http://localhost:3000",
  ];
  const origin = req.headers.get("origin");
  const apiKey = req.headers.get("x-api-key"); 
  const isAllowedOrigin = origin && allowedOrigins.includes(origin);

  if (req.method === "OPTIONS") {
    const res = new NextResponse(null, { status: 204 });
    if (isAllowedOrigin) {
      res.headers.set("Access-Control-Allow-Origin", origin);
    }
    res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization, x-api-key");
    return res;
  }


  if (!apiKey || apiKey !== process.env.NEXT_PUBLIC_API_SECRET_KEY) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  const res = NextResponse.next();
  if (isAllowedOrigin) {
    res.headers.set("Access-Control-Allow-Origin", origin);
  }
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization, x-api-key");

  return res;
}

export const config = {
  matcher: "/api/:path*",
};
