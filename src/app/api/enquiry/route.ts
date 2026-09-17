import { NextResponse } from "next/server";

// PLACEHOLDER API ROUTE — wire this up to a real CRM/email/database before launch.
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // TODO: replace with real persistence (DB insert, CRM API call, email notification, etc.)
    console.log("New admission enquiry received:", body);

    return NextResponse.json({ ok: true, message: "Enquiry received." }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }
}
