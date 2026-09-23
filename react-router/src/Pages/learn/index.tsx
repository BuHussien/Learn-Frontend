const QuickStartPage = () => {
  const steps = [
    {
      id: 1,
      title: "Create your first product",
      description:
        "Add a new product with a title, description, price, category, and image.",
    },
    {
      id: 2,
      title: "Customize your products",
      description:
        "Edit product information and customize colors and categories.",
    },
    {
      id: 3,
      title: "Explore the products",
      description:
        "Browse all available products and discover what is available in the store.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] px-6 py-12 text-[#334155]">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <span className="rounded-full bg-[#087EA4]/10 px-4 py-2 text-sm font-medium text-[#087EA4]">
            Getting Started
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
            Quick Start
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-[#64748B]">
            Get started with your store in just a few simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="
                rounded-xl
                border border-[#E2E8F0]
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-1
                hover:border-[#087EA4]
                hover:shadow-md
              "
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#087EA4] font-bold text-white">
                {step.id}
              </div>

              <h2 className="mt-5 text-xl font-semibold text-[#0F172A]">
                {step.title}
              </h2>

              <p className="mt-3 leading-6 text-[#64748B]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action */}
        <div className="mt-10 rounded-xl border border-[#087EA4]/20 bg-[#087EA4]/5 p-6">
          <h2 className="text-2xl font-semibold text-[#0F172A]">
            Ready to get started?
          </h2>

          <p className="mt-2 text-[#64748B]">
            Create your first product and start building your store.
          </p>

          <button
            type="button"
            className="
              mt-5
              rounded-lg
              bg-[#087EA4]
              px-6
              py-3
              font-semibold
              text-white
              transition-colors
              duration-200
              hover:bg-[#0369A1]
            "
          >
            Create Product
          </button>
        </div>
      </div>
    </main>
  );
};

export default QuickStartPage;