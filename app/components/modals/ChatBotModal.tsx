"use client";

import { FaRocketchat, FaTimes } from "react-icons/fa";
import { useLanguage } from "../../i18n/LanguageProvider";

const ChatbotModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { t } = useLanguage();
  const chatbot = t.chatbot;
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-0 md:bottom-6 md:right-6 z-50 flex w-full max-w-[460px] px-2 md:px-0">
      <div className="relative w-full overflow-hidden rounded-2xl border border-primaryLight/30 bg-slate-950/90 shadow-[0_20px_60px_rgba(122,47,181,0.35)] backdrop-blur">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_12%_0%,rgba(122,47,181,0.26)_0%,rgba(15,23,42,0)_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:26px_26px] opacity-40" />
        <div className="pointer-events-none absolute -top-20 -right-24 h-52 w-52 rounded-full bg-primaryLight/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-52 w-52 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primaryLight/60 to-transparent" />

        <div className="relative z-10 flex max-h-[85vh] flex-col gap-6 overflow-y-auto p-6 font-spaceGrotesk text-slate-100">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-primaryLight/40 bg-primaryLight/10">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primaryLight/40 via-transparent to-primary/30 blur-sm" />
                <FaRocketchat
                  size={22}
                  className="relative z-10 text-primaryLight/90"
                />
              </div>
              <div className="space-y-1">
                
                <h3 className="text-xl font-semibold text-white">
                  {chatbot.title}
                </h3>
                <p className="text-sm text-slate-300">
                  {chatbot.subtitle}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label={chatbot.closeLabel}
              className="fixed right-4 rounded-full border border-slate-700/70 bg-slate-900/60 p-2 text-slate-300 transition hover:border-primaryLight/60 hover:text-white"
            >
              <FaTimes size={18} />
            </button>
          </div>

          <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-slate-400">
              <span>{chatbot.conversationPreview}</span>
              
            </div>
            <div className="mt-4 space-y-3 text-xs">
              <div className="ml-auto w-[85%] rounded-xl bg-primaryLight/15 px-3 py-2 text-primaryLight/90">
                {chatbot.previewUser}
              </div>
              <div className="w-[85%] rounded-xl border border-slate-700/70 bg-slate-900/60 px-3 py-2 text-slate-200">
                {chatbot.previewBot}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-slate-400">
              <span>{chatbot.quickPromptsLabel}</span>
              <span className="text-primaryLight/80">
                {chatbot.quickPromptsHint}
              </span>
            </div>
            <div className="grid gap-3">
              <button
                onClick={() => alert(chatbot.prompts.website)}
                className="group relative overflow-hidden rounded-xl border border-slate-800/70 bg-slate-950/60 px-4 py-3 text-left text-sm text-slate-200 transition hover:border-primaryLight/60 hover:text-white"
              >
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(122,47,181,0.18)_0%,rgba(15,23,42,0)_55%)] opacity-0 transition group-hover:opacity-100" />
                <span className="relative flex items-start justify-between gap-3">
                  {chatbot.prompts.website}
                  <span className="text-[10px] uppercase tracking-[0.3em] text-primaryLight/70">
                    {chatbot.prompts.websiteTag}
                  </span>
                </span>
              </button>
              <button
                onClick={() => alert(chatbot.prompts.marketing)}
                className="group relative overflow-hidden rounded-xl border border-slate-800/70 bg-slate-950/60 px-4 py-3 text-left text-sm text-slate-200 transition hover:border-primaryLight/60 hover:text-white"
              >
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(122,47,181,0.18)_0%,rgba(15,23,42,0)_55%)] opacity-0 transition group-hover:opacity-100" />
                <span className="relative flex items-start justify-between gap-3">
                  {chatbot.prompts.marketing}
                  <span className="text-[10px] uppercase tracking-[0.3em] text-primaryLight/70">
                    {chatbot.prompts.marketingTag}
                  </span>
                </span>
              </button>
              <button
                onClick={() => alert(chatbot.prompts.fresher)}
                className="group relative overflow-hidden rounded-xl border border-slate-800/70 bg-slate-950/60 px-4 py-3 text-left text-sm text-slate-200 transition hover:border-primaryLight/60 hover:text-white"
              >
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(122,47,181,0.18)_0%,rgba(15,23,42,0)_55%)] opacity-0 transition group-hover:opacity-100" />
                <span className="relative flex items-start justify-between gap-3">
                  {chatbot.prompts.fresher}
                  <span className="text-[10px] uppercase tracking-[0.3em] text-primaryLight/70">
                    {chatbot.prompts.fresherTag}
                  </span>
                </span>
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-slate-400">
              <span>{chatbot.messageLabel}</span>
              <span className="text-slate-500">{chatbot.messageHint}</span>
            </div>
            <textarea
              className="w-full rounded-xl border border-slate-800/70 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-primaryLight/70 focus:outline-none focus:ring-2 focus:ring-primaryLight/30"
              rows={3}
              placeholder={chatbot.messagePlaceholder}
            />
            <button
              onClick={() => alert(chatbot.sendAlert)}
              className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-primaryLight via-[#6d36dc] to-primary px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(122,47,181,0.35)] transition hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {chatbot.sendLabel}
                <span className="text-xs font-medium">↗</span>
              </span>
              <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0)_60%)] opacity-0 transition group-hover:opacity-100" />
            </button>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primaryLight" />
              {chatbot.footerModel}
            </span>
            <span className="text-slate-500">{chatbot.footerSecurity}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotModal;
