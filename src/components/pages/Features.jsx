
import React from "react";
import {
  Heart,
  ArrowUpRight,
  MessageCircle,
  MessagesSquare,
  Smartphone,
  Crown,
  ChartNoAxesCombined,
  BellRing,
  RefreshCw,
  Sparkles,
  Check,
  ShieldCheck,
  Zap,
} from "lucide-react";

// ==========================================
// KUNDWA FEATURES DATA
// ==========================================

const features = [
  {
    id: "01",
    icon: RefreshCw,
    title: "Swipe Cards",
    description:
      "Tinder-style swiping. See who matches your preferences instantly.",
    iconColor: "text-sky-300",
    iconBg: "bg-sky-400/10",
    iconBorder: "border-sky-400/20",
    tag: "Discover",
  },
  {
    id: "02",
    icon: MessagesSquare,
    title: "Free Unlimited Chat",
    description:
      "Chat with anyone on the platform for free — no limits, no daily fees.",
    iconColor: "text-rose-300",
    iconBg: "bg-rose-500/15",
    iconBorder: "border-rose-400/25",
    tag: "100% Free",
    featured: true,
  },
  {
    id: "03",
    icon: Smartphone,
    title: "WhatsApp Unlock",
    description:
      "Get someone’s WhatsApp number. VIP gets 2 free unlocks per week.",
    iconColor: "text-emerald-300",
    iconBg: "bg-emerald-500/10",
    iconBorder: "border-emerald-400/20",
    tag: "Connect",
  },
  {
    id: "04",
    icon: Crown,
    title: "VIP Membership",
    description:
      "Full access — free unlimited chat, see who liked you, VIP badge & more.",
    iconColor: "text-amber-300",
    iconBg: "bg-amber-500/10",
    iconBorder: "border-amber-400/20",
    tag: "Premium",
  },
  {
    id: "05",
    icon: ChartNoAxesCombined,
    title: "Compatibility Score",
    description:
      "See your match % before connecting. Based on interests & city.",
    iconColor: "text-violet-300",
    iconBg: "bg-violet-500/10",
    iconBorder: "border-violet-400/20",
    tag: "Smart Matching",
  },
  {
    id: "06",
    icon: BellRing,
    title: "Real-time Alerts",
    description:
      "Instant notifications for likes, matches and new messages.",
    iconColor: "text-teal-300",
    iconBg: "bg-teal-500/10",
    iconBorder: "border-teal-400/20",
    tag: "Stay Updated",
  },
];

// ==========================================
// FEATURE CARD
// ==========================================

function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <article
      className={`group relative flex min-h-[175px] flex-col overflow-hidden rounded-[20px] border p-5 transition-all duration-300 hover:-translate-y-1 lg:min-h-0 ${
        feature.featured
          ? "border-rose-400/35 bg-gradient-to-br from-[#351526]/90 via-[#211122]/90 to-[#140c20]/95"
          : "border-white/10 bg-[#150e21]/85 hover:border-rose-400/30"
      }`}
    >
      {/* Decorative number */}
      <span className="pointer-events-none absolute right-4 top-3 text-[43px] font-black leading-none text-white/[0.04]">
        {feature.id}
      </span>

      {/* Icon and tag */}
      <div className="relative flex items-center justify-between gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${feature.iconBg} ${feature.iconBorder} transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon
            size={21}
            strokeWidth={1.8}
            className={feature.iconColor}
          />
        </div>

        <span
          className={`rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide ${
            feature.featured
              ? "border-rose-400/25 bg-rose-500/10 text-rose-300"
              : "border-white/10 bg-white/[0.04] text-white/45"
          }`}
        >
          {feature.tag}
        </span>
      </div>

      {/* Content */}
      <div className="relative mt-4">
        <h3 className="text-[16px] font-extrabold tracking-tight text-white transition-colors group-hover:text-rose-200">
          {feature.title}
        </h3>

        <p className="mt-2 text-[12px] leading-[19px] text-white/60">
          {feature.description}
        </p>
      </div>

      {/* Bottom accent */}
      <div className="relative mt-auto pt-4">
        <div className="flex items-center justify-between border-t border-white/10 pt-3">
          <span className="flex items-center gap-1.5 text-[10px] font-medium text-white/45">
            <Check size={12} className="text-rose-400" />
            Included Feature
          </span>

          <ArrowUpRight
            size={15}
            className="text-white/35 transition-colors group-hover:text-rose-400"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-rose-500 to-orange-400 transition-all duration-500 group-hover:w-full" />
    </article>
  );
}

// ==========================================
// MAIN FEATURES COMPONENT
// ==========================================

export default function Features() {
  return (
    <section
      id="features"
      className="relative isolate flex min-h-screen scroll-mt-16 flex-col justify-center overflow-hidden bg-[#090612] px-4 py-10 text-white sm:px-6 lg:px-10 lg:py-8"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-rose-600/[0.06] blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-violet-600/[0.07] blur-[110px]" />

      <div className="relative mx-auto w-full max-w-[1320px]">
        {/* =====================================
            HEADING
        ===================================== */}
        <div className="mb-7 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div className="max-w-[760px]">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-rose-400/20 bg-rose-500/[0.08] px-3.5 py-1.5">
              <Sparkles size={12} className="text-rose-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-rose-200">
                Explore Kundwa Features
              </span>
            </div>

            <h2 className="text-[clamp(1.9rem,3.2vw,2.8rem)] font-black leading-[1.12] tracking-[-0.04em]">
              Everything You Need{" "}
              <span className="bg-gradient-to-r from-[#ff426a] via-[#ff737b] to-[#ffad73] bg-clip-text text-transparent">
                to Find Real Love.
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-[13px] leading-6 text-white/60">
              Discover thoughtfully designed features that make
              meeting, matching, and connecting with people across
              Rwanda simple and enjoyable.
            </p>
          </div>

          <div className="hidden shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 xl:flex">
            <Heart
              size={17}
              fill="currentColor"
              className="text-rose-400"
            />
            <span className="text-xs font-semibold text-white/75">
              Discover • Match • Connect
            </span>
          </div>
        </div>

        {/* =====================================
            SIX FEATURE CARDS
        ===================================== */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}
        </div>

        {/* =====================================
            COMPACT TRUST STRIP
        ===================================== */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl border border-white/10 bg-[#140d20]/70 px-5 py-4">
          <div className="flex items-center gap-2 text-[11px] font-medium text-white/60">
            <ShieldCheck size={15} className="text-emerald-400" />
            Verified Profiles
          </div>

          <div className="flex items-center gap-2 text-[11px] font-medium text-white/60">
            <MessageCircle size={15} className="text-rose-400" />
            Free Unlimited Chat
          </div>

          <div className="flex items-center gap-2 text-[11px] font-medium text-white/60">
            <Zap size={15} className="text-amber-400" />
            Instant Notifications
          </div>

          <div className="flex items-center gap-2 text-[11px] font-medium text-white/60">
            <Heart size={15} className="text-violet-400" />
            Meaningful Connections
          </div>
        </div>
      </div>
    </section>
  );
}
