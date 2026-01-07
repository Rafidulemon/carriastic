import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactFormSchema } from "@/app/lib/contact-form-schema";

export const runtime = "nodejs";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const formatOptional = (value?: string) => {
  const trimmed = value?.trim();
  return trimmed ? trimmed : "Not provided";
};

export async function POST(request: Request) {
  const emailUser = process.env.NEXT_PUBLIC_EMAIL_USER;
  const emailPass = process.env.NEXT_PUBLIC_EMAIL_PASS?.replace(/\s+/g, "");
  const emailReceiver = process.env.NEXT_PUBLIC_EMAIL_RECEIVER;

  if (!emailUser || !emailPass || !emailReceiver) {
    return NextResponse.json(
      { error: "Email configuration is missing." },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid form data." },
      { status: 400 }
    );
  }

  const {
    name,
    email,
    company,
    phone,
    service,
    budget,
    timeline,
    subject,
    message,
  } = parsed.data;

  const sanitizedMessage = escapeHtml(message).replace(/\r?\n/g, "<br />");
  const safeSubject = subject?.trim() ? subject.trim() : "General inquiry";

  const adminText = [
    `Full name: ${name}`,
    `Work email: ${email}`,
    `Company: ${formatOptional(company)}`,
    `Phone: ${phone}`,
    `Service focus: ${formatOptional(service)}`,
    `Estimated budget: ${formatOptional(budget)}`,
    `Timeline: ${formatOptional(timeline)}`,
    `Project summary: ${formatOptional(subject)}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const adminHtml = `
    <p><strong>Full name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Work email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(formatOptional(company))}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Service focus:</strong> ${escapeHtml(formatOptional(service))}</p>
    <p><strong>Estimated budget:</strong> ${escapeHtml(formatOptional(budget))}</p>
    <p><strong>Timeline:</strong> ${escapeHtml(formatOptional(timeline))}</p>
    <p><strong>Project summary:</strong> ${escapeHtml(
      formatOptional(subject)
    )}</p>
    <p><strong>Message:</strong><br />${sanitizedMessage}</p>
  `;

  const clientText = `Dear ${name},

Thank you for contacting Carriastic. We appreciate you reaching out and have received your inquiry. Our team is reviewing the details and will respond as soon as possible with the next steps.

Kind regards,
Carriastic Team`;

  const clientHtml = `
    <p>Dear ${escapeHtml(name)},</p>
    <p>Thank you for contacting Carriastic. We appreciate you reaching out and have received your inquiry. Our team is reviewing the details and will respond as soon as possible with the next steps.</p>
    <p>Kind regards,<br />Carriastic Team</p>
  `;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  try {
    await Promise.all([
      transporter.sendMail({
        from: `Carriastic <${emailUser}>`,
        to: emailReceiver,
        replyTo: email,
        subject: `New contact inquiry: ${safeSubject}`,
        text: adminText,
        html: adminHtml,
      }),
      transporter.sendMail({
        from: `Carriastic <${emailUser}>`,
        to: email,
        subject: "We have received your inquiry",
        text: clientText,
        html: clientHtml,
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to send message at this time." },
      { status: 500 }
    );
  }
}
