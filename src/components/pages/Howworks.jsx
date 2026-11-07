
import React from "react";
import {
  Camera,
  CreditCard,
  Heart,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  ArrowUpRight,
  LockKeyhole,
} from "lucide-react";

const BACKGROUND_IMAGE = "/images/kundwa-howworks.jpg";

const steps = [
  {
    number: "01",
    icon: Camera,
    title: "Create Profile",
    description:
      "Upload photos, add your bio and what you are looking for.",
    color: "text-pink-300",
    iconBg: "bg-pink-500/15",
    border: "hover:border-pink-400/40",
  },
  {
    number: "02",
    icon: CreditCard,
    title: "Pay 2,000 RWF",
    description:
      "One-time activation via MTN MoMo or Airtel Money. Verified instantly.",
    color: "text-orange-300",
    iconBg: "bg-orange-500/15",
    border: "hover:border-orange-400/40",
    featured: true,
  },
  {
    number: "03",
    icon: Heart,
    title: "Swipe & Match",
    description:
      "Browse verified profiles. Swipe right to like, left to pass.",
    color: "text-rose-300",
    iconBg: "bg-rose-500/15",
    border: "hover:border-rose-400/40",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Chat Free & Connect",
    description:
      "Chat with anyone for free. Get WhatsApp numbers to connect directly.",
    color: "text-violet-300",
    iconBg: "bg-violet-500/15",
    border: "hover:border-violet-400/40",
  },
];

export default function HowWorks() {
  return (
    <section
      id="kundwa-steps"
      className="relative isolate flex min-h-screen scroll-mt-20 items-center overflow-hidden bg-[#090612] py-20 text-white sm:py-24"
    >
      {/* SINGLE BACKGROUND IMAGE */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={BACKGROUND_IMAGE}
          alt=""
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Premium overlays */}
        <div className="absolute inset-0 bg-[#090612]/60" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#090612]/70 via-[#140a1b]/40 to-[#090612]/85" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#10081b]/35 via-transparent to-[#180a20]/30" />

        <div className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-rose-600/10 blur-[100px]" />

        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-violet-600/10 blur-[110px]" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">

        {/* HEADING */}
        <div className="mx-auto mb-12 max-w-[680px] text-center sm:mb-14">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-400/25 bg-rose-500/10 px-4 py-2 backdrop-blur-xl">
            <Sparkles
              size={14}
              className="text-rose-300"
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-100 sm:text-xs">
              Your Journey Starts Here
            </span>
          </div>

          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.08] tracking-[-0.055em]">
            How It{" "}
            <span className="bg-gradient-to-r from-[#ff426a] via-[#ff7080] to-[#ffa36e] bg-clip-text text-transparent">
              Works
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[540px] text-sm leading-7 text-white/75 sm:text-base">
            Get started in minutes. Your match is just a few
            taps away.
          </p>

          <div className="mx-auto mt-7 h-[2px] w-16 rounded-full bg-gradient-to-r from-rose-500 to-orange-400" />
        </div>

        {/* STEPS */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className={`group relative flex min-h-[265px] flex-col overflow-hidden rounded-[24px] border p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(0,0,0,0.35)] sm:p-7 ${
                  step.featured
                    ? "border-rose-400/35 bg-[#271321]/75"
                    : "border-white/15 bg-[#120b1d]/65"
                } ${step.border}`}
              >
                {/* Card top highlight */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                {/* Step number */}
                <span className="absolute right-5 top-5 text-[44px] font-black leading-none tracking-tight text-white/[0.07]">
                  {step.number}
                </span>

                {/* Icon */}
                <div
                  className={`relative mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 ${step.iconBg} transition-transform duration-500 group-hover:scale-110`}
                >
                  <Icon
                    size={25}
                    strokeWidth={1.8}
                    className={step.color}
                  />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="mb-3 text-lg font-extrabold tracking-tight sm:text-xl">
                    {step.title}
                  </h3>

                  <p className="text-[13px] leading-[1.85] text-white/70">
                    {step.description}
                  </p>
                </div>

                {/* Card footer */}
                <div className="mt-auto pt-7">
                  <div className="mb-4 h-px w-full bg-white/10" />

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-white/55">
                      <CheckCircle2
                        size={14}
                        className="text-rose-400"
                      />
                      Step {step.number}
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="text-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-rose-400"
                    />
                  </div>
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-rose-500 to-orange-400 transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>

        {/* PAYMENT SECTION */}
        <div className="relative mt-6 overflow-hidden rounded-[24px] border border-white/15 bg-[#130c20]/70 p-6 backdrop-blur-xl sm:p-8">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-rose-500/[0.05] via-transparent to-violet-500/[0.05]" />

          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">

            {/* Payment details */}
            <div className="flex items-start gap-4 sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-rose-400/20 bg-rose-500/15">
                <CreditCard
                  size={25}
                  className="text-rose-300"
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <h4 className="text-base font-bold tracking-tight sm:text-lg">
                  One-Time Account Activation
                </h4>

                <p className="mt-1.5 max-w-md text-xs leading-6 text-white/65 sm:text-sm">
                  Payment through MTN MoMo or Airtel Money.
                </p>

                <div className="mt-3 flex items-center gap-2 text-[11px] text-emerald-300/90">
                  <LockKeyhole size={13} />
                  Simple & Secure Activation
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:py-1 sm:pl-7">
              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
                  Activation Fee
                </p>

                <p className="text-[32px] font-black leading-none tracking-tight">
                  2,000{" "}
                  <span className="text-base font-bold text-rose-400">
                    RWF
                  </span>
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-500/10">
                <ShieldCheck
                  size={23}
                  className="text-emerald-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM LABEL */}
        <div className="mt-9 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-white/20" />

          <Heart
            size={13}
            fill="currentColor"
            className="text-rose-400"
          />

          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
            Find Your Connection
          </span>

          <Heart
            size={13}
            fill="currentColor"
            className="text-rose-400"
          />

          <span className="h-px w-8 bg-white/20" />
        </div>
      </div>
    </section>
  );
}
