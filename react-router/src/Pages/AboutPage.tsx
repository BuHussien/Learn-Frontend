const AboutPage = () => {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900">
          About Us
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          We build simple and high-quality products that make everyday life
          easier.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-xl font-semibold">Quality</h2>
            <p className="mt-2 text-gray-600">
              We focus on delivering high-quality products.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-xl font-semibold">Innovation</h2>
            <p className="mt-2 text-gray-600">
              We continuously improve our products and experience.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-xl font-semibold">Customers</h2>
            <p className="mt-2 text-gray-600">
              Our customers are at the center of everything we do.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;