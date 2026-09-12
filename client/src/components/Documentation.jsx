const Documentation = () => {
  return (
    <section id="docs" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-purple-500/10">
          <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
            <div>
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-300">
                DEVELOPER FIRST
              </span>

              <h2 className="mt-6 text-4xl font-bold sm:text-5xl">
                Start building today.
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-slate-400">
                Read the documentation, make your first API request, and start
                building your next project in minutes.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/docs"
                  className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Read Documentation
                </a>

                <a
                  href="#api"
                  className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-center font-semibold transition hover:bg-white/10"
                >
                  View Endpoints
                </a>
              </div>
            </div>

            {/* Terminal */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>

              <pre className="overflow-x-auto p-6 text-xs leading-7">
                <code>
                  <span className="text-slate-500">$</span>{" "}
                  <span className="text-cyan-300">curl</span>{" "}
                  <span className="text-green-300">
                    https://api.example.com/v1/users
                  </span>
                  {"\n\n"}
                  <span className="text-slate-500">{"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-purple-300">"success"</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-yellow-300">true</span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-purple-300">"data"</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-slate-300">[...]</span>
                  {"\n"}
                  <span className="text-slate-500">{"}"}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
