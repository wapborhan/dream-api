const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description:
      "Built for speed with optimized endpoints and low-latency API responses.",
  },
  {
    icon: "🔒",
    title: "Secure by Default",
    description:
      "Modern security practices keep your API requests and data protected.",
  },
  {
    icon: "📚",
    title: "Simple Documentation",
    description:
      "Clear examples and straightforward documentation make integration easy.",
  },
  {
    icon: "🌎",
    title: "Available Everywhere",
    description:
      "Access the API from your website, mobile application, server, or any platform.",
  },
  {
    icon: "🛠️",
    title: "Developer Friendly",
    description:
      "Designed with developers in mind with predictable endpoints and responses.",
  },
  {
    icon: "🚀",
    title: "Always Free",
    description:
      "Use our API for free without complicated pricing plans or hidden charges.",
  },
];

const Features = () => {
  return (
    <section id="features" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Why FreeAPI?
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Everything developers need
          </h2>

          <p className="mt-5 text-slate-400">
            Powerful infrastructure without unnecessary complexity.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl">
                {feature.icon}
              </div>

              <h3 className="text-lg font-bold">{feature.title}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
