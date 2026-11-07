
import React, { useEffect, useState } from "react";
import {
  Heart,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  MapPin,
  Sparkles,
  Check,
  BadgeCheck,
  Compass,
  UserRound,
  Send,
  ChevronLeft,
} from "lucide-react";

const backgroundImages = [
  "https://i.pinimg.com/736x/54/89/b9/5489b94e2df5101def55f0554972f959.jpg",
  "https://i.pinimg.com/1200x/22/aa/02/22aa029a2468102610b6b402d742dcaf.jpg",
  "https://i.pinimg.com/736x/33/29/94/3329941fb35d7e18410e5fe7b115d476.jpg",
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1600&q=85",
];

const PROFILE_IMAGE =
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=90";

function BackgroundSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#090612]">
      {backgroundImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            active === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt=""
            loading="eager"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1600&q=85";
            }}
            className={`h-full w-full object-cover object-center ${
              active === index ? "kundwa-zoom" : ""
            }`}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-[#090612]/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#090612]/60 via-[#170c22]/15 to-[#090612]/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#090612]/10 via-transparent to-[#090612]/80" />

      <style>{`
        @keyframes kundwaZoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }

        .kundwa-zoom {
          animation: kundwaZoom 5s ease-out forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .kundwa-zoom { animation: none; }
        }
      `}</style>
    </div>
  );
}

function MobilePreview() {
  const [liked, setLiked] = useState(false);
  const [activeTab, setActiveTab] = useState("Discover");
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    { id: 1, from: "them", text: "Hey! Nice to meet you 😊" },
    { id: 2, from: "me", text: "Hi Amina! How are you?" },
    {
      id: 3,
      from: "them",
      text: "I'm great! How's your day going?",
    },
  ]);

  const tabs = [
    { label: "Discover", icon: Heart },
    { label: "Explore", icon: Compass },
    { label: "Chats", icon: MessageCircle },
    { label: "Me", icon: UserRound },
  ];

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        from: "me",
        text: message.trim(),
      },
    ]);

    setMessage("");
  };

  return (
    <div className="relative mx-auto w-full max-w-[275px]">
      <div className="absolute -left-9 top-24 z-20 hidden rounded-xl border border-rose-400/25 bg-[#190c22]/90 px-3 py-2 shadow-xl backdrop-blur-xl sm:block">
        <div className="flex items-center gap-2 text-[11px] font-bold text-rose-300">
          <Heart size={13} fill="currentColor" />
          New Like!
        </div>
      </div>

      <div className="absolute -right-9 top-40 z-20 hidden rounded-xl border border-emerald-400/25 bg-[#190c22]/90 px-3 py-2 shadow-xl backdrop-blur-xl sm:block">
        <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-300">
          <Sparkles size={13} />
          It's a Match!
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[39px] border-[6px] border-[#30243d] bg-[#100b1c] shadow-[0_25px_70px_rgba(0,0,0,0.55)]">
        <div className="absolute left-1/2 top-0 z-30 h-[15px] w-[75px] -translate-x-1/2 rounded-b-2xl bg-[#30243d]" />

        <div className="flex h-[50px] items-end justify-between bg-[#100b1c] px-4 pb-2.5">
          <span className="text-[13px] font-black tracking-tight">
            Kundwa<span className="text-rose-500">.com</span>
          </span>

          <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-2 py-1 text-[9px] font-bold text-amber-300">
            ★ VIP · 7d
          </span>
        </div>

        {activeTab === "Chats" ? (
          <div className="flex h-[370px] flex-col bg-[#130d20]">
            <div className="flex items-center gap-3 border-b border-white/10 px-3 py-3">
              <button
                type="button"
                onClick={() => setActiveTab("Discover")}
                aria-label="Back to discover"
                className="text-white/60"
              >
                <ChevronLeft size={18} />
              </button>

              <img
                src={PROFILE_IMAGE}
                alt="Amina"
                className="h-8 w-8 rounded-full object-cover"
              />

              <div>
                <p className="text-xs font-bold">Amina</p>
                <p className="text-[10px] text-emerald-400">
                  Online
                </p>
              </div>
            </div>

            <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-3 py-4">
              {messages.map((item) => (
                <div
                  key={item.id}
                  className={`flex ${
                    item.from === "me"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 text-[11px] leading-5 ${
                      item.from === "me"
                        ? "rounded-br-sm bg-rose-500 text-white"
                        : "rounded-bl-sm bg-white/10 text-white/85"
                    }`}
                  >
                    {item.text}
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={sendMessage}
              className="flex items-center gap-2 border-t border-white/10 p-3"
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-3 py-2.5 text-[11px] text-white outline-none placeholder:text-white/35 focus:border-rose-400/40"
              />

              <button
                type="submit"
                aria-label="Send message"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-500"
              >
                <Send size={15} />
              </button>
            </form>
          </div>
        ) : (
          <>
            <div className="relative h-[310px] overflow-hidden bg-gradient-to-b from-violet-900 to-rose-900">
              <img
                src={PROFILE_IMAGE}
                alt="Sample dating app profile"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#130817]/95" />

              <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full border border-emerald-400/30 bg-[#092e2b]/85 px-2.5 py-1.5 text-[10px] font-bold text-emerald-300 backdrop-blur-lg">
                <Heart
                  size={11}
                  fill="#f43f5e"
                  className="text-rose-500"
                />
                88% Match
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-[22px] font-black tracking-tight">
                    Amina, 24
                  </h3>

                  <BadgeCheck
                    size={18}
                    fill="#22c55e"
                    className="text-white"
                  />
                </div>

                <div className="mt-2 flex items-center gap-3 text-[11px] text-white/80">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-rose-400" />
                    Kigali
                  </span>
                  <span>·</span>
                  <span>Nurse</span>
                </div>

                <p className="mt-2 text-[10px] leading-4 text-white/80">
                  Good conversations, genuine smiles and meaningful
                  connections.
                </p>
              </div>
            </div>

            <div className="bg-[#100b1c] px-3 pb-3 pt-3">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setLiked(!liked)}
                  className={`flex flex-1 items-center justify-center gap-1 rounded-full border py-2.5 text-[10px] font-bold transition ${
                    liked
                      ? "border-rose-400 bg-rose-500 text-white"
                      : "border-rose-500/40 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20"
                  }`}
                >
                  <Heart
                    size={12}
                    fill={liked ? "currentColor" : "none"}
                  />
                  {liked ? "Liked" : "Like Profile"}
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("Chats")}
                  className="flex flex-1 items-center justify-center gap-1 rounded-full border border-violet-400/40 bg-violet-500/20 py-2.5 text-[10px] font-bold text-violet-200 transition hover:bg-violet-500/30"
                >
                  <MessageCircle size={12} />
                  Chat Free
                </button>
              </div>
            </div>
          </>
        )}

        <div className="grid grid-cols-4 border-t border-white/10 bg-[#0c0817] py-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.label;

            return (
              <button
                type="button"
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`flex flex-col items-center gap-1 text-[9px] transition ${
                  active ? "text-rose-400" : "text-white/40"
                }`}
              >
                <Icon
                  size={16}
                  fill={
                    active && tab.label === "Discover"
                      ? "currentColor"
                      : "none"
                  }
                />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#090612] text-white"
    >
      <BackgroundSlideshow />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 py-14 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[30px] border border-white/15 bg-[#100b1b]/25 shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-[3px]">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#100919]/35 via-[#160c20]/10 to-transparent" />

          <div className="relative grid items-center gap-8 px-6 py-10 md:grid-cols-[1.1fr_0.9fr] md:gap-6 md:px-9 lg:px-14 lg:py-12">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-400/25 bg-rose-500/10 px-4 py-2 backdrop-blur-md">
                <Heart
                  size={13}
                  fill="currentColor"
                  className="text-rose-400"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-rose-200 sm:text-xs">
                  Rwanda's Dating Experience
                </span>
              </div>

              <h1 className="max-w-xl text-[clamp(2.4rem,4.2vw,4.2rem)] font-black leading-[1.1] tracking-[-0.05em]">
                Your Journey
                <br />
                To{" "}
                <span className="bg-gradient-to-r from-[#ff426a] via-[#ff737b] to-[#ffad73] bg-clip-text text-transparent">
                  Real Love.
                </span>
              </h1>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/80 sm:text-base">
                Finding someone special should feel exciting, not
                complicated. Create your profile, discover verified
                singles, and build meaningful connections across Rwanda.
              </p>

              <div className="mt-7 space-y-3.5">
                {[
                  "Meet verified singles across Rwanda",
                  "Simple one-time account activation",
                  "Swipe, match and chat for free",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/85"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-rose-400/25 bg-rose-500/15">
                      <Check size={13} className="text-rose-300" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/register"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#f51e50] to-[#ff6268] px-6 py-3.5 text-sm font-bold shadow-[0_12px_30px_rgba(245,30,80,0.25)] transition-all duration-300 hover:-translate-y-1"
                >
                  <Heart size={16} fill="currentColor" />
                  Create Account
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#kundwa-steps"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold backdrop-blur-md transition hover:bg-white/15"
                >
                  How It Works
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/20 pt-5">
                <div className="flex items-center gap-2 text-xs text-white/75">
                  <ShieldCheck size={15} className="text-emerald-400" />
                  Verified Profiles
                </div>

                <div className="flex items-center gap-2 text-xs text-white/75">
                  <MapPin size={15} className="text-rose-400" />
                  Rwanda Focused
                </div>

                <div className="flex items-center gap-2 text-xs text-white/75">
                  <MessageCircle size={15} className="text-violet-400" />
                  Free Chat
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center py-4 md:py-0">
              <div className="pointer-events-none absolute h-[350px] w-[300px] rounded-full bg-rose-500/10 blur-[85px]" />
              <div className="relative z-10 w-full">
                <MobilePreview />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
