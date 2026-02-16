import { NextResponse } from "next/server";
import companyData from "@/app/constants/companyData.json";

type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

const COMPANY_CONTEXT = JSON.stringify(companyData);

function summarizeList(label: string, items: string[]) {
  return `${label}: ${items.slice(0, 6).join("; ")}`;
}

function localCompanyAnswer(question: string): string {
  const q = question.toLowerCase();

  if (q.match(/contact|email|phone|call|address|location|office|hour/)) {
    return [
      "Contact options:",
      `- Emails: ${companyData.company.emails.join(", ")}`,
      `- Phones: ${companyData.company.phones.join(", ")}`,
      `- Address: ${companyData.company.headquarters}`,
      `- Hours: ${companyData.company.workingHours}`,
      "- Social: LinkedIn, Facebook, YouTube, Twitter (see site footer).",
    ].join("\n");
  }

  if (q.match(/service|offer|do you/i)) {
    const titles =
      companyData.home.offerings.services?.map((s) => s.title) ?? [];
    return [
      "Core services we offer:",
      ...titles.map((t) => `- ${t}`),
      "- Need details? Ask about a specific service or industry.",
    ].join("\n");
  }

  if (q.match(/product/)) {
    const products = companyData.products.catalog.items?.map(
      (p) => `${p.title} (${p.tag})`
    );
    return [
      "Ready-to-deploy products:",
      ...(products ?? []).map((p) => `- ${p}`),
      "- Ask for a product name to hear features/benefits.",
    ].join("\n");
  }

  if (q.match(/project/)) {
    const products = companyData.products.catalog.items?.map(
      (p) => `${p.title} — ${p.description}`
    );
    return [
      "We showcase our work through ready-to-deploy products and custom builds:",
      ...(products ?? []).slice(0, 9).map((p) => `- ${p}`),
      "- We also do bespoke platforms; share your domain and we’ll map a similar project.",
    ].join("\n");
  }

  if (q.match(/mission|vision/)) {
    const mv = companyData.about.missionVision.items;
    return mv
      .map((item) => `${item.title}: ${item.description}`)
      .join("\n\n");
  }

  if (q.match(/differentiator|why|unique|different/)) {
    return summarizeList("What makes us different", companyData.company.differentiators);
  }

  if (q.match(/leader|ceo|founder|team/)) {
    const leaders = companyData.company.leadership.map(
      (l) => `${l.name} - ${l.title}`
    );
    return summarizeList("Leadership", leaders);
  }

  if (q.match(/faq|question/)) {
    const faqs = companyData.faq.items.slice(0, 5).map(
      (f) => `${f.question} — ${f.answer}`
    );
    return ["Top FAQs:", ...faqs.map((f) => `- ${f}`)].join("\n");
  }

  return [
    companyData.company.summary,
    summarizeList("Key services", companyData.home.offerings.services.map((s) => s.title)),
    summarizeList("Products", companyData.products.catalog.items.map((p) => p.title)),
    summarizeList("Differentiators", companyData.company.differentiators),
    `Contact: ${companyData.company.emails.join(", ")} | ${companyData.company.phones.join(", ")} | ${companyData.company.headquarters}`,
  ].join("\n");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const messages = body?.messages as ChatMessage[] | undefined;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages array is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    const lastUser = [...messages].reverse().find((m) => m.role === "user");

    // Fallback if no API key
    if (!apiKey) {
      const reply = lastUser
        ? localCompanyAnswer(lastUser.content)
        : companyData.company.summary;
      return NextResponse.json({ reply });
    }

    const recentMessages = messages.slice(-8); // cap history

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
      content:
              "You are Carriastic AI. Answer succinctly (max 6 sentences), prefer bullet lists, and keep tone friendly, confident, and action-oriented.",
          },
          {
            role: "system",
            content:
              "Ground every answer in the company data below. If the exact detail is missing, respond with the closest available services/products and invite the user to share specifics instead of saying you lack information.\n\nCompany data JSON:\n" +
              COMPANY_CONTEXT,
          },
          ...recentMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        ],
        temperature: 0.2,
        max_tokens: 360,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      const fallback = lastUser
        ? localCompanyAnswer(lastUser.content)
        : companyData.company.summary;
      return NextResponse.json(
        { reply: fallback, warning: "LLM unavailable, served local data.", detail: error },
        { status: 200 }
      );
    }

    const data = await response.json();
    const reply =
      data?.choices?.[0]?.message?.content ??
      (lastUser ? localCompanyAnswer(lastUser.content) : "I couldn't generate a response right now. Please try again.");

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error", error);
    return NextResponse.json(
      {
        reply: "I'm having trouble reaching the model right now. Here's what I can share from our docs:\n" +
          companyData.company.summary,
      },
      { status: 200 }
    );
  }
}
