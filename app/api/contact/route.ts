import { NextResponse } from "next/server";
import { Resend } from "resend";

const DEFAULT_CONTACT_RECIPIENT = "hello@tmrw.it";
const DEFAULT_FROM_ADDRESS = `TMRW Studio <${DEFAULT_CONTACT_RECIPIENT}>`;

function parseRecipientList(value: string | undefined) {
  return (value ?? "")
    .split(",")
    .map((entry) => entry.trim())
    .filter((entry) => entry.length > 0);
}

const contactRecipients = parseRecipientList(
  process.env.CONTACT_EMAIL_RECIPIENTS ??
    process.env.CONTACT_RECIPIENTS ??
    process.env.CONTACT_EMAIL ??
    DEFAULT_CONTACT_RECIPIENT,
);

const HTML_ESCAPE_LOOKUP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

const resendClient = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const fromAddress =
  process.env.RESEND_FROM ?? process.env.RESEND_FROM_EMAIL ?? process.env.RESEND_FROM_ADDRESS ?? DEFAULT_FROM_ADDRESS;

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => HTML_ESCAPE_LOOKUP[character] ?? character);
}

function formatHtml(text: string) {
  return text
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${escapeHtml(paragraph).replace(/\n/g, "<br />")}</p>`)
    .join("\n");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function normalizeResendErrorMessage(message: string) {
  const normalized = message.trim();

  if (!normalized) {
    return "We couldn't send your message. Please try again later.";
  }

  if (/domain/i.test(normalized) && /verify|authenticated?/i.test(normalized)) {
    return "Email delivery isn't configured yet. Please verify your from domain in Resend or contact us directly.";
  }

  if (/api key/i.test(normalized)) {
    return "Email delivery isn't configured yet. Please add your Resend API key.";
  }

  return normalized;
}

type ResendSendResult = Awaited<ReturnType<Resend["emails"]["send"]>>;

function extractResendError(result: ResendSendResult | undefined, fallback?: unknown) {
  if (result && "error" in result && result.error) {
    return result.error;
  }

  return fallback instanceof Error ? fallback : null;
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

    if (!isValidEmail(trimmedEmail)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!resendClient) {
      return NextResponse.json(
        {
          error: `Email service is not configured. Please contact us directly at ${DEFAULT_CONTACT_RECIPIENT}.`,
        },
        { status: 503 },
      );
    }

    if (contactRecipients.length === 0) {
      return NextResponse.json(
        {
          error:
            `Email service is configured but no recipients are set. Please contact us directly at ${DEFAULT_CONTACT_RECIPIENT} while we fix this.`,
        },
        { status: 503 },
      );
    }

    const safeName = escapeHtml(trimmedName);
    const safeEmail = escapeHtml(trimmedEmail);

    let sendResult: ResendSendResult | undefined;

    try {
      sendResult = await resendClient.emails.send({
        from: fromAddress,
        to: contactRecipients,
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
      });
    } catch (sendError) {
      console.error("Resend threw when sending contact email", sendError);

      const message = normalizeResendErrorMessage(
        sendError instanceof Error ? sendError.message : String(sendError ?? ""),
      );

      return NextResponse.json({ error: message }, { status: 502 });
    }

    const resendError = extractResendError(sendResult);

    if (resendError) {
      console.error("Resend error when sending contact email", resendError);

      const message = normalizeResendErrorMessage(
        resendError && typeof resendError === "object" && "message" in resendError && resendError.message
          ? String(resendError.message)
          : String(resendError ?? ""),
      );

      return NextResponse.json({ error: message }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact email", error);

    const message =
      error instanceof Error && error.name === "SyntaxError"
        ? "Invalid request body."
        : "We couldn't send your message. Please try again later.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
