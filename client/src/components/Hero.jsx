const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            API is online & available
          </div>

          {/* Heading */}
          <h2 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Powerful APIs.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Completely Free.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            Simple, fast and developer-friendly APIs for your next application.
            Build faster without worrying about complicated pricing or
            infrastructure.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#docs"
              className="rounded-xl bg-cyan-400 px-7 py-3.5 font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              Start Building →
            </a>

            <a
              href="#api"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Explore API
            </a>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-6 border-y border-white/10 py-7 sm:grid-cols-4">
            <div>
              <p className="text-2xl font-bold">100%</p>
              <p className="mt-1 text-xs text-slate-500">Free</p>
            </div>

            <div>
              <p className="text-2xl font-bold">99.9%</p>
              <p className="mt-1 text-xs text-slate-500">Uptime</p>
            </div>

            <div>
              <p className="text-2xl font-bold">&lt;100ms</p>
              <p className="mt-1 text-xs text-slate-500">Response</p>
            </div>

            <div>
              <p className="text-2xl font-bold">REST</p>
              <p className="mt-1 text-xs text-slate-500">API</p>
            </div>
          </div>
        </div>

        {/* Hero Code Window */}
        <div className="mx-auto mt-20 max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/40">
            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-slate-900 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>

              <span className="text-xs text-slate-500">example.js</span>

              <span className="text-xs text-green-400">● API</span>
            </div>

            {/* Code */}
            <div className="overflow-x-auto p-6">
              <pre className="text-sm leading-7">
                <code>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-300">response</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-purple-400">await</span>{" "}
                  <span className="text-yellow-300">fetch</span>
                  <span className="text-white">(</span>
                  <span className="text-green-300">
                    "https://api.example.com/v1/users"
                  </span>
                  <span className="text-white">);</span>
                  {"\n\n"}
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-300">data</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-purple-400">await</span>{" "}
                  <span className="text-cyan-300">response</span>
                  <span className="text-white">.</span>
                  <span className="text-yellow-300">json</span>
                  <span className="text-white">();</span>
                  {"\n\n"}
                  <span className="text-yellow-300">console</span>
                  <span className="text-white">.</span>
                  <span className="text-yellow-300">log</span>
                  <span className="text-white">(</span>
                  <span className="text-cyan-300">data</span>
                  <span className="text-white">);</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
