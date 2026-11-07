
import React, { useState } from "react";
import {
  Play,
  X,
  MessageCircle,
  Video,
  ArrowUpRight,
} from "lucide-react";

const tutorials = [
  {
    id: 1,
    title: "How do I create an account?",
    subtitle: "Nigute nakora account muri kundwa.com?",
    video: "/videos/create-account.mp4",
  },
  {
    id: 2,
    title:
      "HOW TO INSTALL KUNDWA MOBILE APP IN MY PHONE SO THAT I CAN GET REALTIME NOTIFICATION",
    subtitle: "Install Kundwa on your phone",
    video: "/videos/install-kundwa.mp4",
  },
  {
    id: 3,
    title:
      "UKO BE INSTALLA APPLICATION YA KUNDWA MURI TELEPHONE BITYO UKAJYA WAKIRA MESSAGE NOTIFICATION",
    subtitle: "Kundwa mobile app tutorial",
    video: "/videos/kundwa-notifications.mp4",
  },
];

export default function HelpVideos() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section
      id="help-videos"
      className="bg-[#090612] px-4 py-16 text-white sm:px-6 lg:px-10"
    >
      <div className="mx-auto max-w-[1150px]">
        <div className="mb-9 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-400/20 bg-rose-500/10 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-rose-300">
            <Video size={14} />
            Help Center
          </div>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Need Help?{" "}
            <span className="bg-gradient-to-r from-rose-500 to-orange-400 bg-clip-text text-transparent">
              Watch & Learn
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/55 sm:text-base">
            Quick answers to the most common questions —
            tap one to watch a short video.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {tutorials.map((tutorial) => (
            <button
              key={tutorial.id}
              type="button"
              onClick={() => setActiveVideo(tutorial)}
              className="group flex min-h-[155px] items-center justify-between gap-4 rounded-[20px] border border-white/10 bg-[#151022] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-rose-400/40 hover:bg-[#1c122b]"
            >
              <div>
                <h3 className="text-[14px] font-bold leading-5 text-white">
                  {tutorial.title}
                </h3>

                <p className="mt-2 text-[12px] leading-5 text-emerald-400/90">
                  {tutorial.subtitle}
                </p>
              </div>

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-rose-600 to-rose-500 text-white shadow-lg shadow-rose-500/15 transition-transform duration-300 group-hover:scale-110">
                <Play size={17} fill="currentColor" />
              </span>
            </button>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="mb-4 text-sm text-white/50">
            Still stuck? We're happy to help directly.
          </p>

          <a
            href="https://wa.me/YOUR_WHATSAPP_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#18c964] px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(24,201,100,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#12b85a]"
          >
            <MessageCircle size={19} />
            Chat with us on WhatsApp
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-[850px] overflow-hidden rounded-2xl border border-white/15 bg-[#151022] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
              <h3 className="text-sm font-bold leading-5 sm:text-base">
                {activeVideo.title}
              </h3>

              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                aria-label="Close video"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 transition hover:bg-rose-500"
              >
                <X size={18} />
              </button>
            </div>

            <video
              key={activeVideo.id}
              src={activeVideo.video}
              controls
              autoPlay
              playsInline
              className="aspect-video w-full bg-black object-contain"
            >
              Your browser does not support video playback.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
