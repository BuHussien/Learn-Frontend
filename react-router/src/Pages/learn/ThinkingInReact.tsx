const ThinkingInReactPage = () => {
  const steps = [
    {
      id: 1,
      title: "Start with the mockup",
      description:
        "Look at the UI and break it into a hierarchy of components.",
    },
    {
      id: 2,
      title: "Build a static version",
      description:
        "Create the UI using components and props without adding state yet.",
    },
    {
      id: 3,
      title: "Find the minimal state",
      description:
        "Identify the smallest set of changing data that your application needs.",
    },
    {
      id: 4,
      title: "Identify where state should live",
      description:
        "Decide which component should own each piece of state based on which components need it.",
    },
    {
      id: 5,
      title: "Add inverse data flow",
      description:
        "Pass event handlers down to child components so they can update state owned by their parent.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] px-6 py-12 text-[#334155]">
      <article className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#087EA4]">
            React Learn
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
            Thinking in React
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#64748B]">
            React encourages you to think about your UI as a hierarchy of
            components. Once you understand how to break a UI into components,
            you can build complex interfaces in a predictable way.
          </p>
        </header>

        {/* Steps */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-[#0F172A]">
            The Thinking in React process
          </h2>

          <div className="space-y-5">
            {steps.map((step) => (
              <article
                key={step.id}
                className="
                  rounded-xl
                  border border-[#E2E8F0]
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-[#087EA4]
                  hover:shadow-md
                "
              >
                <div className="flex gap-5">
                  <span
                    className="
                      flex h-10 w-10 shrink-0
                      items-center justify-center
                      rounded-full
                      bg-[#087EA4]
                      font-bold
                      text-white
                    "
                  >
                    {step.id}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold text-[#0F172A]">
                      {step.title}
                    </h3>

                    <p className="mt-2 leading-7 text-[#64748B]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Key idea */}
        <section
          className="
            mt-10
            rounded-xl
            border border-[#087EA4]/20
            bg-[#087EA4]/5
            p-6
          "
        >
          <h2 className="text-xl font-bold text-[#0F172A]">
            The key idea
          </h2>

          <p className="mt-3 leading-7 text-[#64748B]">
            Don't start by writing state. Start by breaking the UI into
            components, build the static version first, and then determine
            what data actually needs to change.
          </p>
        </section>
      </article>
    </main>
  );
};

export default ThinkingInReactPage;