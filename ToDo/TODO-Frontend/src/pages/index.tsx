const HomePage = () => {
  return (
    <main className="min-h-screen bg-rose-50">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-lg md:grid-cols-2">

          {/* Content */}
          <div className="flex flex-col justify-center px-8 py-14 md:px-14">
            <span className="mb-4 w-fit rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-600">
              Stay Organized
            </span>

            <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Organize Your
              <span className="block text-rose-500">
                Day, Your Way.
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-lg text-gray-500">
              Manage your tasks, stay focused, and get things done
              without the stress.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="rounded-xl bg-rose-500 px-7 py-3 font-semibold text-white shadow-md transition hover:bg-rose-600"
                onClick={() => location.href = '/todos'}
              >
                Get Started
              </button>

              <button className="rounded-xl border border-rose-200 px-7 py-3 font-semibold text-rose-500 transition hover:bg-rose-50"
                onClick={() => location.href = '/todos'}
              >
                View Tasks
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="h-[350px] md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop"
              alt="Organizing tasks"
              className="h-full w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-10 text-center">
          <p className="font-semibold text-rose-500">
            Everything you need
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Make Your Day Easier
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {/* Card */}
          <div className="rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 text-2xl">
              📝
            </div>

            <h3 className="text-xl font-bold text-gray-800">
              Create Tasks
            </h3>

            <p className="mt-2 text-gray-500">
              Quickly add everything you need to accomplish.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 text-2xl">
              🎯
            </div>

            <h3 className="text-xl font-bold text-gray-800">
              Stay Focused
            </h3>

            <p className="mt-2 text-gray-500">
              Keep track of your priorities and stay productive.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 text-2xl">
              ✅
            </div>

            <h3 className="text-xl font-bold text-gray-800">
              Complete Tasks
            </h3>

            <p className="mt-2 text-gray-500">
              Check off your tasks and see your progress.
            </p>
          </div>

        </div>
      </section>

      {/* Productivity Banner */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="relative overflow-hidden rounded-3xl bg-rose-500 px-8 py-14">

          <div className="relative z-10 max-w-xl">
            <p className="font-semibold text-rose-100">
              YOUR PRODUCTIVITY
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              One task at a time.
              <br />
              One goal at a time.
            </h2>

            <p className="mt-4 text-rose-100">
              Turn your plans into progress and make every day count.
            </p>

            <button className="mt-7 rounded-xl bg-white px-7 py-3 font-semibold text-rose-500 transition hover:bg-rose-50">
              Start Planning
            </button>
          </div>

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-32 right-20 h-80 w-80 rounded-full bg-white/10" />

        </div>
      </section>

    </main>
  );
};

export default HomePage;