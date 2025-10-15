import { NextResponse } from "next/server";

const CONTACT_EMAIL = "hello@tmrw.it";
const RESEND_ENDPOINT = "https://api.resend.com/emails";

const HTML_ESCAPE_LOOKUP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

function assertEnv(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => HTML_ESCAPE_LOOKUP[character] ?? character);
}

function formatHtml(text: string) {
  return text
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${escapeHtml(paragraph).replace(/\n/g, "<br />")}</p>`)
    .join("\n");
}

export async function POST(request: Request) {
  try {
    const { name, email, notes } = (await request.json()) as {
      name?: string;
      email?: string;
      notes?: string;
    };

    if (!name || !email || !notes) {
      return NextResponse.json({ error: "Please complete all fields." }, { status: 400 });
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedNotes = notes.trim();

    if (!trimmedName || !trimmedEmail || !trimmedNotes) {
      return NextResponse.json({ error: "Please complete all fields." }, { status: 400 });
    }

    const apiKey = assertEnv("RESEND_API_KEY", process.env.RESEND_API_KEY);
    const from = assertEnv("RESEND_FROM", process.env.RESEND_FROM);

    const safeName = escapeHtml(trimmedName);
    const safeEmail = escapeHtml(trimmedEmail);

    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [CONTACT_EMAIL],
        reply_to: trimmedEmail,
        subject: `New contact request from ${trimmedName}`,
        text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nNotes:\n${trimmedNotes}`,
        html: `
          <h2>New contact request</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <h3>Notes</h3>
          ${formatHtml(trimmedNotes)}
        `,
      }),
    });

    if (!response.ok) {
      let errorMessage = "Unable to send your message right now. Please try again later.";
      try {
        const data = (await response.json()) as { message?: string; error?: string };
        errorMessage = data.error ?? data.message ?? errorMessage;
      } catch {
        // Ignore JSON parse errors and use default message.
      }
      return NextResponse.json({ error: errorMessage }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact email", error);

    const message =
      error instanceof Error && error.message.startsWith("Missing required environment variable")
        ? "Email service is not configured."
        : "We couldn't send your message. Please try again later.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
