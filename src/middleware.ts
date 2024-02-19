import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // redirect the user to the home page if the id is not present
  if (!request.nextUrl.searchParams.get("id")) {
    return NextResponse.rewrite(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/url"],
};
