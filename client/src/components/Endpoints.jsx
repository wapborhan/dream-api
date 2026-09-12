const endpoints = [
  {
    method: "GET",
    path: "/api/users",
    description: "Get all users",
  },
  {
    method: "GET",
    path: "/api/users/:id",
    description: "Get a single user",
  },
  {
    method: "POST",
    path: "/api/users",
    description: "Create a new user",
  },
  {
    method: "PUT",
    path: "/api/users/:id",
    description: "Update a user",
  },
  {
    method: "DELETE",
    path: "/api/users/:id",
    description: "Delete a user",
  },
];

const Endpoints = () => {
  return (
    <section className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Endpoints
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Simple and predictable
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-slate-400">
            Familiar REST endpoints make integration straightforward.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
          {endpoints.map((endpoint, index) => (
            <div
              key={endpoint.path}
              className={`flex flex-col gap-4 bg-white/[0.02] p-5 transition hover:bg-white/[0.05] sm:flex-row sm:items-center ${
                index !== endpoints.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <span
                className={`w-fit rounded-md px-3 py-1 font-mono text-xs font-bold ${
                  endpoint.method === "GET"
                    ? "bg-green-400/10 text-green-400"
                    : endpoint.method === "POST"
                      ? "bg-blue-400/10 text-blue-400"
                      : endpoint.method === "DELETE"
                        ? "bg-red-400/10 text-red-400"
                        : "bg-yellow-400/10 text-yellow-400"
                }`}
              >
                {endpoint.method}
              </span>

              <code className="font-mono text-sm text-slate-200">
                {endpoint.path}
              </code>

              <span className="text-sm text-slate-500 sm:ml-auto">
                {endpoint.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Endpoints;
