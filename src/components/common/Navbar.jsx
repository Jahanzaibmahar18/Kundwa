
import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      icon: "🗺️",
      title: "How it Works",
      href: "#how-it-works",
    },
    {
      icon: "✨",
      title: "Features",
      href: "#features",
    },
    {
      icon: "💳",
      title: "Pricing",
      href: "#pricing",
    },
    {
      icon: "💬",
      title: "Love Stories",
      href: "#love-stories",
    },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <header
        className="fixed top-0 left-0 z-50 w-full border-b border-white/10"
        style={{
          background:
            "linear-gradient(90deg, rgba(100,110,120,0.95), rgba(10,5,15,0.85))",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex h-[56px] items-center justify-between px-5 md:px-8">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2.5"
            onClick={handleLinkClick}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ff3150] shadow-[0_0_20px_rgba(255,49,80,0.3)]">
              <Heart
                size={19}
                fill="white"
                strokeWidth={0}
                className="text-white"
              />
            </div>

            <span className="text-[17px] font-extrabold tracking-tight text-white">
              Kundwa<span className="text-[#ff3150]">.com</span>
            </span>
          </a>

          {/* Hamburger / Close Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center text-white transition hover:text-[#ff3150]"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X size={24} strokeWidth={2} />
            ) : (
              <Menu size={24} strokeWidth={2} />
            )}
          </button>
        </div>
      </header>

      {/* Full Screen Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          isMenuOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-[#080617]"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(255,49,80,0.10), transparent 40%), #080617",
          }}
        />

        {/* Menu Content */}
        <div className="relative flex h-full flex-col pt-[56px]">
          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-5 pt-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={handleLinkClick}
                className="flex h-[56px] items-center gap-2 border-b border-white/[0.08] text-[15px] font-bold text-gray-300 transition hover:text-white"
              >
                <span className="text-sm">{link.icon}</span>
                <span>{link.title}</span>
              </a>
            ))}
          </nav>

          {/* Bottom Buttons */}
          <div className="flex gap-2.5 border-t border-white/[0.05] px-5 py-5">
            {/* Sign In */}
            <a
              href="#signin"
              onClick={handleLinkClick}
              className="flex h-[46px] flex-1 items-center justify-center rounded-xl border border-white/10 bg-[#171627] text-sm font-bold text-gray-300 transition hover:bg-[#222135] hover:text-white"
            >
              Sign In
            </a>

            {/* Join */}
            <a
              href="#join"
              onClick={handleLinkClick}
              className="flex h-[46px] flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-[#e91640] to-[#ff3b55] text-sm font-extrabold text-white shadow-[0_4px_20px_rgba(255,49,80,0.2)] transition hover:brightness-110"
            >
              Join — 2,000 RWF
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
