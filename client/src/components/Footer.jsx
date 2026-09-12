const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600">
                <span className="font-black">&lt;/&gt;</span>
              </div>

              <span className="text-lg font-bold">FreeAPI</span>
            </a>

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-500">
              Simple, powerful and free APIs for developers. Build your next
              project faster.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold">Resources</h3>

            <div className="mt-4 space-y-3 text-sm text-slate-500">
              <a href="#docs" className="block transition hover:text-cyan-400">
                Documentation
              </a>

              <a href="#api" className="block transition hover:text-cyan-400">
                API Reference
              </a>

              <a href="#faq" className="block transition hover:text-cyan-400">
                FAQ
              </a>
            </div>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-sm font-semibold">Community</h3>

            <div className="mt-4 space-y-3 text-sm text-slate-500">
              <a href="#" className="block hover:text-cyan-400">
                GitHub
              </a>

              <a href="#" className="block hover:text-cyan-400">
                Discord
              </a>

              <a href="#" className="block hover:text-cyan-400">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FreeAPI. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-300">
              Privacy
            </a>

            <a href="#" className="hover:text-slate-300">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
