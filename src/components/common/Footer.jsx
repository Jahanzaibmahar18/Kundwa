
import React from "react";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#090612] px-5 py-9 text-white sm:px-8">
      <div className="mx-auto flex max-w-[1250px] flex-col items-center justify-center text-center">
        <a
          href="/"
          className="text-[20px] font-black tracking-tight transition-opacity hover:opacity-80"
        >
          Kundwa<span className="text-rose-500">.com</span>
        </a>

        <nav
          aria-label="Footer navigation"
          className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          <a
            href="/terms"
            className="text-[12px] font-medium text-white/45 transition-colors hover:text-rose-400"
          >
            Terms
          </a>

          <a
            href="/privacy"
            className="text-[12px] font-medium text-white/45 transition-colors hover:text-rose-400"
          >
            Privacy
          </a>

          <a
            href="/register"
            className="text-[12px] font-medium text-white/45 transition-colors hover:text-rose-400"
          >
            Join
          </a>

          <a
            href="/login"
            className="text-[12px] font-medium text-white/45 transition-colors hover:text-rose-400"
          >
            Sign In
          </a>
        </nav>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-1 text-[11px] text-white/30">
          <span>
            © {new Date().getFullYear()} Kundwa.com
          </span>

          <span>· Made with</span>

          <Heart
            size={11}
            fill="currentColor"
            className="text-rose-500"
          />

          <span>in Rwanda rw</span>
        </div>
      </div>
    </footer>
  );
}
