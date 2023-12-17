import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const dynamic = 'force-dynamic'
export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);

  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const message = searchParams.get("message");

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, message: "Missing required fields" },
      { status: 400 }
    );
  }

  const mail = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["hellojavaa@gmail.com"],
    subject: "PORTOFOLIO - " + name + " - " + email,
    text: "" + message,
  });

  if (mail.error) {
    return NextResponse.json(
      { success: false, message: "Error sending email" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, message: "Email sent" });
}
