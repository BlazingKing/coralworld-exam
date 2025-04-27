import { NextResponse } from "next/server";
import passportData from "@/mock/passport.json";

export async function GET() {
  return NextResponse.json(passportData);
}
