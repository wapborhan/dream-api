const CTA = () => {
  return (
    <section className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-16">
          <div className="absolute left-1/2 top-0 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[100px]" />

          <h2 className="text-4xl font-black sm:text-5xl">
            Build something amazing.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-slate-400">
            Your next project is only one API request away.
          </p>

          <a
            href="#docs"
            className="mt-8 inline-flex rounded-xl bg-cyan-400 px-7 py-3.5 font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-300"
          >
            Get Started for Free →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
