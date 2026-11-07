
import React from "react";
import {
  Rocket,
  Smartphone,
  Star,
  Crown,
  Check,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CreditCard,
  Heart,
  Zap,
  BadgeCheck,
} from "lucide-react";

// ==========================================
// KUNDWA PRICING DATA
// ==========================================

const plans = [
  {
    id: "01",
    icon: Rocket,
    name: "Registration",
    price: "2,000",
    period: "One-time account activation",
    description:
      "Start your journey and discover meaningful connections.",
    details: [
      "Free unlimited chat",
      "Full profile + 6 photos",
      "Browse all verified singles",
      "Like & match with others",
      "MTN MoMo or Airtel Money",
    ],
    action: "Get Started",
    featured: true,
    iconColor: "text-rose-300",
    iconBg: "bg-rose-500/15",
    iconBorder: "border-rose-400/25",
  },
  {
    id: "02",
    icon: Smartphone,
    name: "WhatsApp Unlock",
    price: "3,000",
    period: "Per profile · permanent",
    description:
      "Take your connection further with direct WhatsApp access.",
    details: [
      "Free unlimited chat included",
      "Get their WhatsApp number",
      "Direct to WhatsApp after payment",
      "VIP: 2 free unlocks/week",
      "One-time per profile",
    ],
    action: "Get WhatsApp",
    iconColor: "text-violet-300",
    iconBg: "bg-violet-500/15",
    iconBorder: "border-violet-400/25",
  },
  {
    id: "03",
    icon: Star,
    name: "VIP Membership",
    price: "5,000",
    period: "Per week",
    description:
      "Unlock premium features and stand out from the crowd.",
    details: [
      "Free unlimited chat",
      "2 free WhatsApp unlocks/week",
      "See who liked you",
      "VIP badge + priority visibility",
    ],
    action: "Go VIP",
    gold: true,
    iconColor: "text-amber-300",
    iconBg: "bg-amber-500/15",
    iconBorder: "border-amber-400/25",
  },
  {
    id: "04",
    icon: Crown,
    name: "Monthly VIP",
    price: "20,000",
    period: "30 days · best value",
    description:
      "Enjoy a full month of premium dating without weekly top-ups.",
    details: [
      "Free unlimited chat",
      "4 free WhatsApp numbers/month",
      "See who liked you",
      "VIP badge + priority visibility",
      "No weekly top-ups needed",
    ],
    action: "Go Monthly VIP",
    gold: true,
    bestValue: true,
    iconColor: "text-amber-300",
    iconBg: "bg-amber-500/15",
    iconBorder: "border-amber-400/25",
  },
];

// ==========================================
// PRICING CARD COMPONENT
// ==========================================

function PricingCard({ plan }) {
  const Icon = plan.icon;

  return (
    <article
      className={`group relative flex min-h-[565px] flex-col overflow-hidden rounded-[28px] border p-6 transition-all duration-500 hover:-translate-y-2 sm:p-7 lg:min-h-[590px] ${
        plan.featured
          ? "border-rose-400/40 bg-gradient-to-b from-[#301322] via-[#1b1022] to-[#120c1d] shadow-[0_20px_60px_rgba(244,35,83,0.12)]"
          : plan.gold
          ? "border-amber-400/20 bg-gradient-to-b from-[#241b21] via-[#18111f] to-[#110c1b] hover:border-amber-400/40"
          : "border-white/10 bg-gradient-to-b from-[#1a1228] to-[#100b1c] hover:border-violet-400/30"
      }`}
    >
      {/* Decorative glow */}
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-[75px] ${
          plan.gold
            ? "bg-amber-500/10"
            : plan.featured
            ? "bg-rose-500/15"
            : "bg-violet-500/10"
        }`}
      />

      {/* Decorative number */}
      <span className="pointer-events-none absolute right-6 top-7 text-[65px] font-black leading-none text-white/[0.035]">
        {plan.id}
      </span>

      {/* Top badge */}
      {plan.featured && (
        <div className="absolute right-5 top-5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-400/25 bg-rose-500/15 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-wide text-rose-200">
            <Sparkles size={11} />
            Most Popular
          </span>
        </div>
      )}

      {plan.bestValue && (
        <div className="absolute right-5 top-5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/15 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-wide text-amber-200">
            <Star size={11} fill="currentColor" />
            Best Value
          </span>
        </div>
      )}

      {/* =====================================
          ICON AND PLAN NAME
      ===================================== */}
      <div className="relative z-10">
        <div
          className={`flex h-[60px] w-[60px] items-center justify-center rounded-[19px] border ${plan.iconBg} ${plan.iconBorder} transition-all duration-500 group-hover:scale-110`}
        >
          <Icon
            size={28}
            strokeWidth={1.8}
            className={plan.iconColor}
          />
        </div>

        <h3 className="mt-6 text-[21px] font-extrabold tracking-tight text-white">
          {plan.name}
        </h3>

        <p className="mt-3 min-h-[48px] text-[13px] leading-6 text-white/50">
          {plan.description}
        </p>
      </div>

      {/* =====================================
          PRICE SECTION
      ===================================== */}
      <div className="relative z-10 mt-6 border-b border-white/10 pb-6">
        <div className="flex items-baseline gap-2">
          <span
            className={`text-[43px] font-black leading-none tracking-[-0.055em] ${
              plan.gold ? "text-amber-200" : "text-white"
            }`}
          >
            {plan.price}
          </span>

          <span
            className={`text-[13px] font-bold ${
              plan.gold ? "text-amber-400" : "text-rose-400"
            }`}
          >
            RWF
          </span>
        </div>

        <p className="mt-3 text-[12px] font-medium text-white/45">
          {plan.period}
        </p>
      </div>

      {/* =====================================
          PLAN FEATURES
      ===================================== */}
      <div className="relative z-10 flex-1 pt-6">
        <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">
          What's Included
        </p>

        <ul className="space-y-4">
          {plan.details.map((detail, index) => (
            <li
              key={detail}
              className="flex items-start gap-3"
            >
              <span
                className={`mt-0.5 flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full ${
                  plan.gold
                    ? "bg-amber-500/15"
                    : "bg-emerald-500/10"
                }`}
              >
                <Check
                  size={12}
                  strokeWidth={2.5}
                  className={
                    plan.gold
                      ? "text-amber-300"
                      : "text-emerald-400"
                  }
                />
              </span>

              <span
                className={`text-[12px] leading-5 ${
                  index === 0
                    ? "font-semibold text-white/90"
                    : "text-white/60"
                }`}
              >
                {detail}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* =====================================
          ACTION BUTTON
      ===================================== */}
      <div className="relative z-10 mt-8">
        <a
          href="#join"
          className={`group/btn flex min-h-[52px] w-full items-center justify-center gap-2 rounded-[15px] px-4 text-[13px] font-extrabold transition-all duration-300 hover:-translate-y-0.5 ${
            plan.featured
              ? "bg-gradient-to-r from-[#f51e50] to-[#ff6268] text-white shadow-[0_12px_30px_rgba(245,30,80,0.2)] hover:shadow-[0_15px_35px_rgba(245,30,80,0.35)]"
              : plan.gold
              ? "bg-gradient-to-r from-[#eab64e] to-[#f8d789] text-[#241509] shadow-[0_12px_30px_rgba(234,182,78,0.12)]"
              : "border border-white/15 bg-white/[0.07] text-white hover:border-violet-400/30 hover:bg-white/10"
          }`}
        >
          {plan.action}

          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </a>

        <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-white/35">
          <ShieldCheck size={13} />
          Secure Mobile Money Payment
        </div>
      </div>

      {/* Animated bottom border */}
      <div
        className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full ${
          plan.gold
            ? "bg-gradient-to-r from-amber-500 to-yellow-300"
            : "bg-gradient-to-r from-rose-500 to-orange-400"
        }`}
      />
    </article>
  );
}

// ==========================================
// MAIN PRICING COMPONENT
// ==========================================

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative isolate scroll-mt-20 overflow-hidden bg-[#090612] px-4 py-20 text-white sm:px-6 lg:px-10 lg:py-24"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -left-40 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-rose-600/[0.07] blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-violet-600/[0.08] blur-[130px]" />

      <div className="relative mx-auto max-w-[1320px]">
        {/* =====================================
            SECTION HEADER
        ===================================== */}
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-[760px]">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-400/20 bg-rose-500/[0.08] px-4 py-2">
              <CreditCard
                size={13}
                className="text-rose-400"
              />

              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-rose-200">
                Simple & Transparent Pricing
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[clamp(2.1rem,4vw,3.5rem)] font-black leading-[1.13] tracking-[-0.045em]">
              Transparent.{" "}
              <span className="bg-gradient-to-r from-[#ff426a] via-[#ff737b] to-[#ffad73] bg-clip-text text-transparent">
                Rwanda-Friendly.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              Choose the plan that works for you. Enjoy meaningful
              connections with clear pricing, secure payments,
              and no hidden fees.
            </p>
          </div>

          {/* Payment methods */}
          <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
              <ShieldCheck
                size={20}
                className="text-emerald-400"
              />
            </div>

            <div>
              <p className="text-xs font-bold text-white/85">
                Secure Payments
              </p>

              <p className="mt-1 text-[11px] text-white/45">
                MTN MoMo • Airtel Money
              </p>
            </div>
          </div>
        </div>

        {/* =====================================
            PRICING CARDS GRID
        ===================================== */}
        <div className="grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
            />
          ))}
        </div>

        {/* =====================================
            BOTTOM INFORMATION STRIP
        ===================================== */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-[20px] border border-white/[0.08] bg-[#140d20]/70 px-6 py-5">
          <div className="flex items-center gap-2 text-xs font-medium text-white/55">
            <ShieldCheck
              size={17}
              className="text-emerald-400"
            />
            Secure Payments
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-white/55">
            <MessageCircleIcon />
            Free Unlimited Chat
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-white/55">
            <Zap
              size={17}
              className="text-amber-400"
            />
            Instant Activation
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-white/55">
            <Heart
              size={17}
              className="text-rose-400"
            />
            Meaningful Connections
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// SMALL CHAT ICON
// ==========================================

function MessageCircleIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-rose-400"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}
