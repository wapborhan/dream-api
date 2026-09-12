import { useState } from "react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl  text-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/20">
            <span className="text-lg font-black">&lt;/&gt;</span>
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight">FreeAPI</h1>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
              Developer API
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            Features
          </a>

          <a
            href="#api"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            API
          </a>

          <a
            href="#docs"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            Documentation
          </a>

          <a
            href="#faq"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            FAQ
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#docs"
            className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="rounded-lg border border-white/10 p-2 text-slate-300 md:hidden"
        >
          {mobileMenu ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenu && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-5">
            <a
              href="#features"
              onClick={() => setMobileMenu(false)}
              className="text-slate-300 hover:text-cyan-400"
            >
              Features
            </a>

            <a
              href="#api"
              onClick={() => setMobileMenu(false)}
              className="text-slate-300 hover:text-cyan-400"
            >
              API
            </a>

            <a
              href="#docs"
              onClick={() => setMobileMenu(false)}
              className="text-slate-300 hover:text-cyan-400"
            >
              Documentation
            </a>

            <a
              href="#faq"
              onClick={() => setMobileMenu(false)}
              className="text-slate-300 hover:text-cyan-400"
            >
              FAQ
            </a>

            <a
              href="#docs"
              onClick={() => setMobileMenu(false)}
              className="rounded-lg bg-cyan-400 px-5 py-3 text-center font-semibold text-slate-950"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
