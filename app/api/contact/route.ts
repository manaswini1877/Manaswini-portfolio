import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, honeypot } = body;

    // Honeypot spam check: if filled, reject or silently succeed to thwart bots
    if (honeypot) {
      return NextResponse.json(
        { error: "Spam detected." },
        { status: 400 }
      );
    }

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    if (name.trim().length > 100) {
      return NextResponse.json(
        { error: "Name must be 100 characters or less." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    if (message.trim().length > 5000) {
      return NextResponse.json(
        { error: "Message must be 5000 characters or less." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable.");
      return NextResponse.json(
        {
          error:
            "Email service is not configured yet. Please email directly at manaswinirani28@gmail.com",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const toEmail = "manaswinirani28@gmail.com";
    const fromSender =
      process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    const { data, error } = await resend.emails.send({
      from: fromSender,
      to: [toEmail],
      replyTo: email.trim(),
      subject: `New Portfolio Message from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #0f1117; color: #f8fafc; border-radius: 12px; border: 1px solid #27272a;">
          <div style="border-bottom: 1px solid #27272a; padding-bottom: 16px; margin-bottom: 20px;">
            <h2 style="color: #a78bfa; margin: 0; font-size: 20px;">New Portfolio Contact Message</h2>
            <p style="color: #94a3b8; font-size: 13px; margin: 4px 0 0 0;">Received from your personal website</p>
          </div>
          <div style="margin-bottom: 16px;">
            <strong style="color: #c4b5fd; font-size: 14px;">Sender Name:</strong>
            <p style="margin: 4px 0 0 0; font-size: 15px; color: #f1f5f9;">${escapeHtml(
              name.trim()
            )}</p>
          </div>
          <div style="margin-bottom: 16px;">
            <strong style="color: #c4b5fd; font-size: 14px;">Sender Email:</strong>
            <p style="margin: 4px 0 0 0; font-size: 15px; color: #f1f5f9;"><a href="mailto:${escapeHtml(
              email.trim()
            )}" style="color: #818cf8; text-decoration: none;">${escapeHtml(
        email.trim()
      )}</a></p>
          </div>
          <div style="margin-bottom: 20px;">
            <strong style="color: #c4b5fd; font-size: 14px;">Message:</strong>
            <div style="margin-top: 8px; padding: 16px; background-color: #18181b; border-radius: 8px; border: 1px solid #27272a; font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap;">${escapeHtml(
              message.trim()
            )}</div>
          </div>
          <div style="border-top: 1px solid #27272a; padding-top: 16px; font-size: 12px; color: #64748b;">
            <p style="margin: 0;">Hit "Reply" in your email client to reply directly to ${escapeHtml(
              name.trim()
            )} (${escapeHtml(email.trim())}).</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent!", id: data?.id },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
