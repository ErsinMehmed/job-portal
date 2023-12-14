import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // if (
    //   req.nextUrl.pathname === "/dashboard/ads" &&
    //   req.nextauth.token?.role !== "Employee"
    // ) {
    //   return new NextResponse("You are not authorized!");
    // }
  },
  {
    callbacks: {
      authorized: (params) => {
        let { token } = params;
        return !!token;
      },
    },
  }
);

// export const config = { matcher: [] };
export const config = {
  matcher: ["/dashboard", "/dashboard/ads", "/dashboard/ads/create"],
};
