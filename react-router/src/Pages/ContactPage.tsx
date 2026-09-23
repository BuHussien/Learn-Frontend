const ContactPage = () => {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900">
          Contact Us
        </h1>

        <p className="mt-4 text-gray-600">
          Have a question? We'd love to hear from you.
        </p>

        <form className="mt-8 space-y-6 rounded-xl bg-white p-8 shadow">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>

            <textarea
              id="message"
              rows={5}
              placeholder="Write your message..."
              className="mt-2 w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-[#087EA4] px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
};

export default ContactPage;