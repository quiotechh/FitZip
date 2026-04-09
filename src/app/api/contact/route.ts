import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, topic, message } = await req.json();

  if (!name || !email || !topic || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  // TODO: wire up nodemailer here
  // await sendEmail({ name, email, topic, message });

  console.log("Contact form submission:", { name, email, topic, message });

  return NextResponse.json({ success: true }, { status: 200 });
}
