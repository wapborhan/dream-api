import { useState } from "react";

const faqs = [
  {
    question: "Is the API really free?",
    answer:
      "Yes. The API is completely free to use. There are no paid plans or hidden charges.",
  },
  {
    question: "Can I use the API in my commercial project?",
    answer:
      "Yes. You can integrate the API into your personal, educational, or commercial projects.",
  },
  {
    question: "Do I need an API key?",
    answer:
      "You can configure authentication based on your API requirements. Public endpoints can be used without authentication.",
  },
  {
    question: "Can I use this API with React?",
    answer:
      "Absolutely. You can consume the API using fetch, Axios, TanStack Query, or any other HTTP client.",
  },
  {
    question: "Can I use it with Next.js?",
    answer:
      "Yes. The API works with Next.js, React, Vue, Angular, Node.js, mobile applications, and other platforms.",
  },
];

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <section id="faq" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            FAQ
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 p-5 text-left"
                >
                  <span className="font-semibold">{faq.question}</span>

                  <span className="text-xl text-cyan-400">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-white/10 px-5 pb-5 pt-4 text-sm leading-6 text-slate-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
