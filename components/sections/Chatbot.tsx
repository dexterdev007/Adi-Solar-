"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sun, Send, ExternalLink, Calculator } from "lucide-react";

/* ─────────────────── Types ─────────────────── */
type Message = {
  id: string;
  text: string | ReactNode;
  sender: "bot" | "user";
  buttons?: ButtonDef[];
};

type ButtonDef = {
  label: string;
  /** What the button does when tapped */
  action:
    | { type: "send"; text: string }            // send text into chat
    | { type: "link"; href: string }             // open link
    | { type: "navigate"; href: string };        // internal navigation
};

/* ─────────────────── Helpers ─────────────────── */
const id = () => Date.now().toString() + Math.random().toString(36).slice(2, 5);

const BTN = {
  save:      { label: "💰 How much will I save?",          action: { type: "send" as const, text: "save" } },
  suitable:  { label: "🏠 Is solar right for my home?",    action: { type: "send" as const, text: "suitable" } },
  visit:     { label: "📋 I want a free site visit",       action: { type: "send" as const, text: "visit" } },
  calc:      { label: "Open Solar Calculator",              action: { type: "navigate" as const, href: "/solar-calculator" } },
  tryCalc:   { label: "Try the Calculator",                 action: { type: "navigate" as const, href: "/solar-calculator" } },
  whatsapp:  { label: "WhatsApp AdiSolar",                  action: { type: "link" as const, href: "https://wa.me/918882088600" } },
  bookVisit: { label: "Book free site visit",               action: { type: "send" as const, text: "visit" } },
  own:       { label: "I own it",                           action: { type: "send" as const, text: "own" } },
  rent:      { label: "I'm renting",                        action: { type: "send" as const, text: "rent" } },
  open:      { label: "Mostly Open",                        action: { type: "send" as const, text: "open" } },
  shaded:    { label: "Heavily Shaded",                     action: { type: "send" as const, text: "shaded" } },
  yesBook:   { label: "Yes, book it!",                      action: { type: "send" as const, text: "visit" } },
  yes:       { label: "Yes",                                action: { type: "send" as const, text: "yes" } },
  no:        { label: "No thanks",                          action: { type: "send" as const, text: "no" } },
};

/* ─────────────────── Component ─────────────────── */
export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [flow, setFlow] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({ name: "", phone: "", city: "" });
  const [greeted, setGreeted] = useState(false);
  const [proactiveSent, setProactiveSent] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  /* Auto-scroll */
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  /* Trigger 1 — subtle pulse after 45 s */
  useEffect(() => {
    const t = setTimeout(() => { if (!isOpen) setPulse(true); }, 45000);
    return () => clearTimeout(t);
  }, [isOpen]);

  /* Trigger 2 — scroll depth 60 % proactive message */
  useEffect(() => {
    const handler = () => {
      const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (pct > 0.6 && !proactiveSent && !isOpen) {
        setPulse(true);
        setProactiveSent(true);
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [proactiveSent, isOpen]);

  /* Push bot messages with a small typing delay */
  const pushBot = (text: string, buttons?: ButtonDef[]) => {
    setTimeout(() => {
      setMessages(prev => [
        ...prev.map(m => ({ ...m, buttons: undefined })),   // hide old buttons
        { id: id(), sender: "bot", text, buttons },
      ]);
    }, 500);
  };

  /* Greeting — runs once when the user first opens the chat */
  const greet = () => {
    if (greeted) return;
    setGreeted(true);
    setMessages([{
      id: id(),
      sender: "bot",
      text: "Hi there! 👋 I'm Surya, your solar guide from AdiSolar.\nWhether you're just curious about solar or ready to get a quote — I'm here to help.\n\nWhat brings you here today?",
      buttons: [BTN.save, BTN.suitable, BTN.visit],
    }]);
  };

  /* ─── Main router ─── */
  const route = (raw: string) => {
    const t = raw.trim().toLowerCase();

    /* ── Top-level intents (always recognised) ── */
    if (t === "save" || t.includes("how much") || t.includes("save") || t.includes("cost") || t.includes("price") || t.includes("kitna kharcha")) {
      setFlow("cost"); setStep(1);
      pushBot("Great question! To give you a rough idea — what's your approximate monthly electricity bill?");
      return;
    }
    if (t === "suitable" || t.includes("right for my") || t.includes("suitable") || t.includes("solar lagwa")) {
      setFlow("feasibility"); setStep(1);
      pushBot("I'll ask you two quick things and give you an honest answer.\nFirst — do you own the property, or are you renting?", [BTN.own, BTN.rent]);
      return;
    }
    if (t === "visit" || t.includes("free site visit") || t.includes("book") || t.includes("site visit")) {
      setFlow("site_visit"); setStep(1);
      pushBot("Wonderful! I just need three quick things from you.\n\nWhat is your full name?");
      return;
    }
    if (t.includes("subsidy") || t.includes("yojana") || t.includes("government") || t.includes("subsidy milegi")) {
      pushBot("Great news — the PM Surya Ghar Muft Bijli Yojana gives residential customers up to ₹78,000 in central subsidy.\n\n🟢 First 2 kW → ₹30,000/kW\n🟢 Next 1 kW → ₹18,000/kW\n🔝 Maximum: ₹78,000\n\nAdiSolar handles the entire paperwork for you!", [BTN.visit, BTN.save]);
      return;
    }

    /* ── Flow: Cost ── */
    if (flow === "cost") {
      if (step === 1) {
        const bill = raw.replace(/[^\d]/g, "") || raw;
        setStep(2);
        pushBot(
          `Nice — with a ₹${bill} bill, you're looking at savings of roughly ₹300–400/month.\n\nOver 25 years, that's ₹90,000–₹1,20,000 in savings — and you can get there for under ₹1.5 lakh after govt. subsidy.\n\nWant the exact numbers? Our calculator does it in 10 seconds 👇`,
          [BTN.calc, BTN.bookVisit]
        );
        return;
      }
      // After step 2 the buttons handle navigation / restart
    }

    /* ── Flow: Feasibility ── */
    if (flow === "feasibility") {
      if (step === 1) {
        if (t === "rent" || t.includes("rent")) {
          setStep(3);
          pushBot("Good to know. Solar works best if you own the property, since the system is installed permanently.\n\nIf your landlord is open to it, we can absolutely make it work — it increases property value by 4–6%!\n\nWant me to help set that up?", [BTN.yesBook, BTN.no]);
        } else {
          setStep(2);
          pushBot("Perfect — you're already 50% there! 🎉\n\nSecond question — roughly how much sun does your rooftop get?", [BTN.open, BTN.shaded]);
        }
        return;
      }
      if (step === 2) {
        if (t === "shaded" || t.includes("shade")) {
          pushBot("A heavily shaded roof can still work with the right panel placement — our engineer can assess it for free.\n\nShould we book a visit?", [BTN.yesBook]);
        } else {
          pushBot("Sounds like your roof could be a great candidate! 🌞\n\nShould I book a free site visit?", [BTN.yesBook]);
        }
        setFlow(null); setStep(0);
        return;
      }
      if (step === 3) {
        setFlow(null); setStep(0);
        if (t === "no" || t.includes("no")) {
          pushBot("No worries! If you change your mind, I'm right here. 😊", [BTN.save, BTN.tryCalc]);
        }
        return;
      }
    }

    /* ── Flow: Site Visit ── */
    if (flow === "site_visit") {
      if (step === 1) {
        setUserData(d => ({ ...d, name: raw.trim() }));
        setStep(2);
        pushBot(`Thanks, ${raw.trim()}! And your phone number?`);
        return;
      }
      if (step === 2) {
        setUserData(d => ({ ...d, phone: raw.trim() }));
        setStep(3);
        pushBot("Got it. Lastly, which city or area are you in?");
        return;
      }
      if (step === 3) {
        const finalName = userData.name;
        const finalPhone = userData.phone;
        // Submit to API
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: finalName,
            phone: finalPhone,
            message: `City: ${raw.trim()} | Chatbot Lead`,
            source: "chatbot_surya",
          }),
        }).catch(() => {});

        setFlow(null); setStep(0);
        setUserData({ name: "", phone: "", city: "" });
        pushBot(`Done, ${finalName}! 🎉\n\nOur team will call you within 24 hours to schedule the visit. You'll also get a WhatsApp confirmation shortly.\n\nIs there anything specific you'd like the engineer to focus on?`);
        return;
      }
    }

    /* ── Hinglish catch ── */
    if (/bhai|hai|kya|kaise|lagwa|chahiye|batao/i.test(t)) {
      pushBot("Bilkul! Let me help you with that 😊\n\nAre you looking for a cost estimate or want to book a free site visit?", [BTN.save, BTN.visit]);
      return;
    }

    /* ── Polite exits ── */
    if (t.includes("not interested") || t.includes("no thanks") || t.includes("maybe later") || t === "no") {
      pushBot("Understood — we'll be here whenever you're ready! Good luck 😊");
      setFlow(null); setStep(0);
      return;
    }

    /* ── Human handoff ── */
    if (t.includes("talk to") || t.includes("person") || t.includes("human") || t.includes("call")) {
      pushBot("I think our team can help you better directly.\nThe fastest way to reach us is WhatsApp — you'll get a response in minutes. 📲", [BTN.whatsapp]);
      return;
    }

    /* ── Fallback — still helpful ── */
    pushBot("I can help with a few things:\n\n💰 Cost & savings estimate\n🏠 Whether solar suits your home\n📋 Booking a free site visit\n\nJust tap one below or type your question!", [BTN.save, BTN.suitable, BTN.visit]);
  };

  /* ─── Handle user input ─── */
  const handleSend = (text: string) => {
    if (!text.trim()) return;
    setMessages(prev => [
      ...prev.map(m => ({ ...m, buttons: undefined })),
      { id: id(), sender: "user", text: text.trim() },
    ]);
    setInputValue("");
    setPulse(false);
    route(text);
  };

  const handleOpen = () => {
    setIsOpen(true);
    setPulse(false);
    greet();
  };

  /* ─── Render ─── */
  return (
    <>
      {/* ── Floating bubble ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={handleOpen}
            className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer ${pulse ? "animate-pulse ring-4 ring-primary/30" : ""}`}
          >
            <Sun className="w-6 h-6" />
            <span className="font-semibold text-sm">Chat with Surya</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Chat window ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[380px] h-[500px] max-h-[80vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-border overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary px-4 py-3 flex items-center justify-between text-white shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold leading-tight text-sm">Surya</h3>
                  <p className="text-[11px] text-white/70">AdiSolar Guide</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-surface/50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-primary text-white rounded-br-sm"
                        : "bg-white border border-border shadow-sm text-text-primary rounded-bl-sm"
                    }`}
                  >
                    {typeof msg.text === "string"
                      ? msg.text.split("\n").map((line, i) => (
                          <span key={i} className="block min-h-[16px]">{line}</span>
                        ))
                      : msg.text}
                  </div>

                  {/* Buttons */}
                  {msg.buttons && msg.buttons.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2 max-w-[85%]">
                      {msg.buttons.map((btn) => {
                        if (btn.action.type === "link") {
                          return (
                            <a
                              key={btn.label}
                              href={btn.action.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 bg-[#25D366] text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:scale-105 transition-transform"
                            >
                              {btn.label} <ExternalLink className="w-3 h-3" />
                            </a>
                          );
                        }
                        if (btn.action.type === "navigate") {
                          return (
                            <a
                              key={btn.label}
                              href={btn.action.href}
                              className="flex items-center gap-1 bg-accent text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:scale-105 transition-transform"
                            >
                              {btn.label} <Calculator className="w-3 h-3" />
                            </a>
                          );
                        }
                        return (
                          <button
                            key={btn.label}
                            onClick={() => handleSend(btn.action.type === "send" ? btn.action.text : "")}
                            className="bg-white border border-accent/40 text-accent hover:bg-accent hover:text-white px-3 py-1.5 rounded-full text-xs font-medium transition-colors shadow-sm cursor-pointer"
                          >
                            {btn.label}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-border flex items-end gap-2 shrink-0">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend(inputValue);
                  }
                }}
                placeholder="Type a message..."
                className="flex-1 min-h-[44px] max-h-32 bg-surface border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                rows={1}
              />
              <button
                onClick={() => handleSend(inputValue)}
                disabled={!inputValue.trim()}
                className="w-11 h-11 shrink-0 bg-primary disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Send message"
              >
                <Send className="w-5 h-5 ml-0.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
