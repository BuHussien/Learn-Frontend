import Button from "../Components/ui/Button";
import Input from "../Components/ui/Input";

const LoginPage = () => {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Brand Section */}
        <section className="relative hidden overflow-hidden bg-[#0F172A] lg:flex lg:flex-col lg:justify-between">
          {/* Decorative shapes */}
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#087EA4]/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative z-10 p-12">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#087EA4] font-bold text-white shadow-lg shadow-[#087EA4]/20">
                R
              </div>

              <span className="text-lg font-bold tracking-tight text-white">
                React Store
              </span>
            </div>
          </div>

          <div className="relative z-10 px-12 pb-20">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#61DAFB]">
              Welcome Back
            </span>

            <h2 className="mt-5 max-w-lg text-5xl font-bold leading-tight tracking-tight text-white">
              Build something
              <span className="text-[#61DAFB]"> amazing.</span>
            </h2>

            <p className="mt-6 max-w-md text-lg leading-8 text-slate-400">
              Sign in to manage your products, explore your store, and
              continue building your experience.
            </p>
          </div>

          <div className="relative z-10 px-12 pb-10 text-sm text-slate-500">
            © 2026 React Store. All rights reserved.
          </div>
        </section>

        {/* Login Section */}
        <section className="flex items-center justify-center px-6 py-12 sm:px-10">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="mb-10 flex items-center gap-3 lg:hidden">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#087EA4] font-bold text-white">
                R
              </div>

              <span className="text-lg font-bold text-[#0F172A]">
                React Store
              </span>
            </div>

            {/* Header */}
            <div>
              <p className="text-sm font-semibold text-[#087EA4]">
                Welcome back
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#0F172A]">
                Sign in to your account
              </h1>

              <p className="mt-3 text-sm leading-6 text-[#64748B]">
                Enter your credentials to access your account.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 space-y-5"
            >
              <Input
                label="Email Address"
                type="email"
                placeholder="name@example.com"
              />

              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
              />

              <div className="flex items-center justify-between pt-1">
                <label className="flex cursor-pointer select-none items-center gap-2">
                  <input
                    type="checkbox"
                    className="
                      h-4 w-4
                      rounded
                      border-[#CBD5E1]
                      text-[#087EA4]
                      accent-[#087EA4]
                      focus:ring-[#087EA4]
                    "
                  />

                  <span className="text-sm text-[#64748B]">
                    Remember me
                  </span>
                </label>

                <a
                  href="#"
                  className="text-sm font-semibold text-[#087EA4] transition-colors hover:text-[#0369A1]"
                >
                  Forgot password?
                </a>
              </div>

              <Button
                className="
                  mt-2
                  w-full
                  rounded-xl
                  bg-[#087EA4]
                  py-3.5
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-[#087EA4]/20
                  transition-all
                  duration-200
                  hover:bg-[#0369A1]
                  hover:shadow-xl
                  hover:shadow-[#087EA4]/20
                  cursor-pointer
                "
              >
                Sign In
              </Button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#E2E8F0]" />
              <span className="text-xs text-[#94A3B8]">OR</span>
              <div className="h-px flex-1 bg-[#E2E8F0]" />
            </div>

            {/* Sign Up */}
            <p className="text-center text-sm text-[#64748B]">
              Don't have an account?{" "}
              <a
                href="#"
                className="font-semibold text-[#087EA4] transition-colors hover:text-[#0369A1]"
              >
                Create an account
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoginPage;