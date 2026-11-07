
import React, { useState, useEffect } from "react";
import {
  Heart,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
} from "lucide-react";

const couples = [
  {
    image:
      "https://i.pinimg.com/736x/54/89/b9/5489b94e2df5101def55f0554972f959.jpg",
    title: "Every Love Story",
    text: "Begins with a hello.",
    label: "Beautiful Connections",
  },
  {
    image:
      "https://i.pinimg.com/1200x/22/aa/02/22aa029a2468102610b6b402d742dcaf.jpg",
    title: "Beautiful Moments",
    text: "Made together.",
    label: "Real Romance",
  },
  {
    image:
      "https://i.pinimg.com/736x/33/29/94/3329941fb35d7e18410e5fe7b115d476.jpg",
    title: "Forever Starts",
    text: "With one connection.",
    label: "Love & Happiness",
  },
];

export default function LoveInMotion() {
  const [active, setActive] = useState(null);

  const next = () => {
    setActive((prev) => (prev + 1) % couples.length);
  };

  const previous = () => {
    setActive(
      (prev) => (prev - 1 + couples.length) % couples.length
    );
  };

  useEffect(() => {
    if (active === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActive(null);

      if (e.key === "ArrowRight") {
        setActive((prev) => (prev + 1) % couples.length);
      }

      if (e.key === "ArrowLeft") {
        setActive(
          (prev) => (prev - 1 + couples.length) % couples.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [active]);

  return (
    <section
      id="love-in-motion"
      className="relative overflow-hidden bg-[#090612] px-4 py-16 text-white sm:px-6 lg:px-10 lg:py-20"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-rose-600/10 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-[1250px]">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-400/20 bg-rose-500/10 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-rose-300">
            <Heart size={14} fill="currentColor" />
            Love in Motion
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Love Looks Good{" "}
            <span className="bg-gradient-to-r from-[#ff426a] via-[#ff737b] to-[#ffad73] bg-clip-text text-transparent">
              On Everyone.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            Every beautiful connection starts with a moment.
            Explore the magic of love and imagine your own story.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {couples.map((couple, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              className="group relative h-[380px] overflow-hidden rounded-[26px] border border-white/10 bg-[#171020] text-left shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:border-rose-400/50 hover:shadow-[0_25px_60px_rgba(244,35,83,0.12)] sm:h-[430px] lg:h-[450px]"
            >
              <img
                src={couple.image}
                alt={couple.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#090612] via-[#090612]/10 to-black/20" />

              <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                {couple.label}
              </div>

              <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-md transition-all duration-300 group-hover:bg-rose-500">
                <ArrowUpRight size={19} />
              </span>

              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-7">
                <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold text-rose-300">
                  <Sparkles size={14} />
                  Moments of Love
                </div>

                <h3 className="text-[25px] font-extrabold tracking-tight sm:text-[28px]">
                  {couple.title}
                </h3>

                <p className="mt-1 text-sm text-white/75">
                  {couple.text}
                </p>

                <div className="mt-5 h-px w-full bg-white/20" />

                <div className="mt-4 flex items-center justify-between text-xs font-medium text-white/65">
                  <span>View Story</span>
                  <ArrowUpRight
                    size={16}
                    className="text-rose-300"
                  />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-rose-500 to-orange-400 transition-all duration-500 group-hover:w-full" />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Love gallery"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-[900px] overflow-hidden rounded-[24px] border border-white/15 bg-[#140d20]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={couples[active].image}
              alt={couples[active].title}
              className="h-[65vh] w-full bg-[#100b1c] object-contain"
            />

            <div className="flex items-center justify-between gap-3 border-t border-white/10 px-5 py-4">
              <div>
                <h3 className="text-lg font-bold">
                  {couples[active].title}
                </h3>
                <p className="mt-1 text-xs text-white/60">
                  {couples[active].text}
                </p>
              </div>

              <span className="text-xs font-semibold text-white/40">
                {active + 1} / {couples.length}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full bg-black/60 p-3 text-white transition hover:bg-rose-500"
            >
              <X size={20} />
            </button>

            <button
              type="button"
              onClick={previous}
              aria-label="Previous photo"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition hover:bg-rose-500"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next photo"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition hover:bg-rose-500"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
