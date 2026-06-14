import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

/**
 * POST /api/contact
 *
 * Stub endpoint for the contact form. Validates input server-side and
 * returns success — but does not yet send an email or store the message
 * anywhere. Wire this up to a provider (Resend, Postmark, SendGrid, etc.)
 * before relying on it in production.
 */
export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !message) {
    return NextResponse.json(
      { error: "Name and message are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }

  // TODO: send email via provider, e.g.:
  // await resend.emails.send({
  //   from: "Portfolio <noreply@zabirkhan.example.com>",
  //   to: process.env.CONTACT_FORM_RECIPIENT!,
  //   subject: `New inquiry from ${name}`,
  //   text: message,
  //   replyTo: email,
  // });

  return NextResponse.json({ ok: true });
}
