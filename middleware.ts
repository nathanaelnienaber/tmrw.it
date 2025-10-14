import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const STUDIO_HOST = "studio.tmrw.it";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");
  const hostname = host?.replace(/:\d+$/, "").toLowerCase();

  if (hostname === STUDIO_HOST && request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/studio";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
