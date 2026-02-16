"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { FaRocketchat, FaTimes } from "react-icons/fa";
import { useLanguage } from "../../i18n/LanguageProvider";

type ChatMessage = { role: "user" | "assistant"; content: string };

const STORAGE_KEY = "carriastic-chat-history";

const ChatbotModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { t } = useLanguage();
  const chatbot = t.chatbot;
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const starterMessage: ChatMessage = useMemo(
    () => ({
      role: "assistant",
      content: chatbot.previewBot,
    }),
    [chatbot.previewBot]
  );

  useEffect(() => {
    if (!isOpen) return;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as ChatMessage[];
        setMessages(parsed.length ? parsed : [starterMessage]);
      } catch {
        setMessages([starterMessage]);
      }
    } else {
      setMessages([starterMessage]);
    }
  }, [isOpen, starterMessage]);

  useEffect(() => {
    if (!messages.length) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const hasUserConversation = useMemo(
    () => messages.some((message) => message.role === "user"),
    [messages]
  );

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      return;
    }

    const timeout = setTimeout(() => setShouldRender(false), 220);
    return () => clearTimeout(timeout);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;
      if (!container.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  const handleSend = async (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || isLoading) return;
    setError("");
    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user" as const, content },
    ];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const data = await res.json();
      setMessages([
        ...nextMessages,
        { role: "assistant" as const, content: data.reply as string },
      ]);
    } catch (err) {
      console.error(err);
      setError("We hit a snag. Please try again in a moment.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!shouldRender) return null;

  const modalMotionClass = isOpen
    ? "opacity-100 translate-y-0 scale-100"
    : "opacity-0 translate-y-2 scale-[0.98]";

  return (
    <div className="fixed bottom-4 right-0 z-50 flex w-full md:max-w-[520px] px-3 md:bottom-6 md:right-6 md:px-0">
      <div
        ref={containerRef}
        className={`relative w-full overflow-hidden rounded-[28px] border border-primary/60 bg-[#120024]/95 shadow-[0_28px_80px_rgba(8,0,20,0.55)] backdrop-blur transition-[opacity,transform] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] ${modalMotionClass}`}
      >
        <div className="relative z-10 flex h-[82vh] flex-col overflow-hidden font-spaceGrotesk text-slate-100">
          {/* Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-primary/35 bg-primary px-6 py-2 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-primaryLight/40 bg-primaryLight/10 shadow-[0_10px_30px_rgba(55,0,84,0.35)]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primaryLight/55 via-transparent to-[#c199ff]/35 blur-sm" />
                <FaRocketchat size={22} className="relative z-10 text-[#f5e9ff]" />
              </div>
                <div className="flex items-center justify-center gap-2">
                  <h3 className="text-2xl font-semibold text-white">
                    {chatbot.title}
                  </h3>
                </div>
            </div>
            <button
              onClick={onClose}
              aria-label={chatbot.closeLabel}
              className="rounded-full border border-primary/40 bg-[#1a012b]/80 p-2 text-slate-200 transition hover:-translate-y-0.5 hover:border-primaryLight/70 hover:text-white"
            >
              <FaTimes size={16} />
            </button>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
            {!hasUserConversation && (
              <div className="rounded-2xl border border-primary/45 bg-white/5 px-4 py-4 shadow-[0_16px_42px_rgba(0,0,0,0.25)]">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-[#c3b0d8]">
                  <span>{chatbot.quickPromptsLabel}</span>
                </div>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {[
                    {
                      label: chatbot.prompts.website,
                    },
                    {
                      label: chatbot.prompts.marketing,
                    },
                    { label: chatbot.prompts.fresher, },
                  ].map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleSend(item.label)}
                      className="group relative overflow-hidden rounded-xl border border-primary/40 bg-[#1a012b]/70 px-4 py-3 text-left text-sm text-slate-100 transition hover:-translate-y-0.5 hover:border-primaryLight/70"
                    >
                      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(122,47,181,0.28)_0%,rgba(18,0,36,0)_55%)] opacity-0 transition group-hover:opacity-100" />
                      <span className="relative flex items-start justify-between gap-3">
                        <span className="flex-1 text-base leading-snug">{item.label}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="relative overflow-hidden rounded-2xl border border-primary/50 bg-gradient-to-b from-[#18022d] to-[#0f011f] px-4 py-4 shadow-[0_18px_46px_rgba(8,0,20,0.38)]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(122,47,181,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(122,47,181,0.06)_1px,transparent_1px)] bg-[size:26px_26px] opacity-40" />
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-[#bfa5d7]">
                <span>{chatbot.conversationPreview}</span>
              </div>
              <div className="relative mt-4 flex flex-col gap-4 text-sm">
                <div className="absolute left-6 top-2 bottom-4 w-px bg-primary/45" />
                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}-${message.content.slice(0, 8)}`}
                    className={`relative flex gap-3 ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.25)] ${
                        message.role === "user"
                          ? "border border-primaryLight/35 bg-gradient-to-br from-[#221034] via-[#170824] to-[#0f031b] text-[#f7efff]"
                          : "border border-primary/45 bg-[#150023]/85 text-slate-100"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-center gap-2 text-xs text-[#cbb6e2]">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-primaryLight" />
                    Generating response...
                  </div>
                )}
                {error && (
                  <div className="rounded-lg border border-primaryLight/55 bg-primaryLight/10 px-3 py-2 text-xs text-[#f3e8ff]">
                    {error}
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 z-20 border-t border-primary/35 bg-[#0f011f]/95 px-6 pb-6 pt-4 backdrop-blur">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-[#c3b0d8]">
                <span>{chatbot.messageLabel}</span>
              </div>
              <div className="flex gap-3 rounded-2xl border border-primary/45 bg-[#160327]/80 p-3 shadow-[0_14px_34px_rgba(8,0,20,0.32)]">
                <textarea
                  className="max-h-32 min-h-[56px] w-full resize-none bg-transparent text-sm text-slate-100 placeholder:text-white/80 focus:outline-none"
                  rows={2}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder={chatbot.messagePlaceholder}
                />
                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={() => handleSend()}
                    disabled={isLoading || !input.trim()}
                    className="group relative rounded-xl bg-gradient-to-r from-primaryLight via-[#9b5fe0] to-[#f3e8ff] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(55,0,84,0.32)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isLoading ? "Sending..." : chatbot.sendLabel}
                      <span className="text-xs font-medium">↗</span>
                    </span>
                    <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0)_60%)] opacity-0 transition group-hover:opacity-100" />
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#c3b0d8]">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primaryLight" />
                  {chatbot.footerModel}
                </span>
                <span className="text-[#a88fd0]">{chatbot.footerSecurity}</span>
              </div>
              <p className="text-[11px] leading-relaxed text-[#c3b0d8]/90">
                {chatbot.footerWarning}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotModal;
