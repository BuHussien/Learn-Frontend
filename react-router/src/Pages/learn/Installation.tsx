const InstallationPage = () => {
  const steps = [
    {
      id: 1,
      title: "Create a React project",
      description:
        "Start a new React project using Vite with the React and TypeScript template.",
      code: "npm create vite@latest my-app -- --template react-ts",
    },
    {
      id: 2,
      title: "Install dependencies",
      description:
        "Move into your project directory and install the required dependencies.",
      code: "cd my-app\nnpm install",
    },
    {
      id: 3,
      title: "Start the development server",
      description:
        "Run the development server and open the application in your browser.",
      code: "npm run dev",
    },
    {
      id: 4,
      title: "Start building",
      description:
        "Create your components, pages, routes, and application logic.",
      code: `src/
├── components/
├── pages/
├── interfaces/
└── App.tsx`,
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
            Installation
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#64748B]">
            Set up a modern React project with TypeScript and start building
            your application.
          </p>
        </header>

        {/* Requirements */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-[#0F172A]">
            Requirements
          </h2>

          <ul className="space-y-2 text-[#64748B]">
            <li>• Node.js installed on your machine</li>
            <li>• A code editor such as VS Code</li>
            <li>• Basic knowledge of JavaScript and TypeScript</li>
          </ul>
        </section>

        {/* Installation steps */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-[#0F172A]">
            Installation Steps
          </h2>

          <div className="space-y-6">
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
                <div className="flex gap-4">
                  <span
                    className="
                      flex h-9 w-9 shrink-0
                      items-center justify-center
                      rounded-full
                      bg-[#087EA4]
                      font-bold
                      text-white
                    "
                  >
                    {step.id}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-semibold text-[#0F172A]">
                      {step.title}
                    </h3>

                    <p className="mt-2 leading-7 text-[#64748B]">
                      {step.description}
                    </p>

                    <pre
                      className="
                        mt-4
                        overflow-x-auto
                        rounded-lg
                        border border-[#1E293B]
                        bg-[#0F172A]
                        p-4
                        text-sm
                        leading-6
                        text-[#E2E8F0]
                      "
                    >
                      <code>{step.code}</code>
                    </pre>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Next step */}
        <section
          className="
            mt-10
            rounded-xl
            border border-[#087EA4]/20
            bg-[#087EA4]/5
            p-6
          "
        >
          <h2 className="text-xl font-bold text-[#0F172A]">What's next?</h2>

          <p className="mt-3 leading-7 text-[#64748B]">
            Once your project is running, you can start creating components,
            managing state, handling events, and building your application
            pages.
          </p>
        </section>
      </article>
    </main>
  );
};

export default InstallationPage;
