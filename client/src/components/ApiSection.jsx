import { useState } from "react";

const ApiSection = () => {
  const [copied, setCopied] = useState(false);

  const apiUrl = "https://api.example.com/v1/users";

  const copyApiUrl = async () => {
    try {
      await navigator.clipboard.writeText(apiUrl);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };
  return (
    <section id="api" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              REST API
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              One API.
              <br />
              Endless possibilities.
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-slate-400">
              Connect your application to a simple REST API. Fetch data, create
              resources, update information, and build powerful applications
              with familiar HTTP methods.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["GET", "POST", "PUT", "PATCH", "DELETE"].map((method) => (
                <span
                  key={method}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-slate-300"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="mb-5 flex items-center justify-between">
              <span className="font-semibold">API Endpoint</span>

              <button
                onClick={copyApiUrl}
                className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-400 transition hover:bg-white/5 hover:text-white"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-950 p-4">
              <div className="flex items-center gap-3 overflow-x-auto">
                <span className="rounded-md bg-green-400/10 px-2 py-1 font-mono text-xs font-bold text-green-400">
                  GET
                </span>

                <code className="whitespace-nowrap text-sm text-slate-300">
                  {apiUrl}
                </code>
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-xs uppercase tracking-widest text-slate-500">
                Response
              </p>

              <pre className="overflow-x-auto rounded-xl border border-white/10 bg-slate-950 p-5 text-xs leading-6 text-slate-300">
                {`{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  ]
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiSection;
