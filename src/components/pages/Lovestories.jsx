const stories = [
  {
    quote: "Met my fiancé in 3 weeks on Kundwa. Getting married December 2025 🎉",
    initials: "A",
    name: "A.U.",
    location: "Kigali · 26",
  },
  {
    quote:
      "Compatibility score was 88% — chemistry was real from day one. Thank you Kundwa!",
    initials: "E",
    name: "E.N.",
    location: "Kigali · 29",
  },
  {
    quote:
      "Musanze to Kigali, we make it work. Found each other on Kundwa 🙏",
    initials: "D",
    name: "D.M.",
    location: "Musanze · 30",
  },
  {
    quote:
      "App is smooth, people are real. Found my girlfriend in 2 weeks. This is the real deal rw",
    initials: "C",
    name: "C.I.",
    location: "Musanze · 33",
  },
];

export default function Lovestories() {
  return (
    <section
      id="love-stories"
      className="scroll-mt-14 bg-[#080617] px-5 py-16 text-white md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-bold uppercase text-gray-400">
            💬 Real Stories
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Real Couples.{" "}
            <span className="bg-gradient-to-r from-rose-500 to-amber-400 bg-clip-text text-transparent">
              Real Love.
            </span>
          </h2>
        </div>

        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.name}
              className="rounded-2xl border border-white/[0.08] bg-[#0e0d1d] p-5"
            >
              <blockquote className="text-sm italic leading-6 text-gray-400">
                “{story.quote}”
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-amber-500 text-sm font-extrabold text-white"
                  aria-hidden="true"
                >
                  {story.initials}
                </span>
                <div>
                  <h3 className="text-sm font-extrabold">{story.name}</h3>
                  <p className="mt-0.5 text-xs text-gray-500">
                    {story.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}