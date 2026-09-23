import { useLocation } from "react-router-dom";
import Button from "../Components/ui/Button";
import TextArea from "../Components/ui/TextArea";

const ContributePage = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <main className="min-h-screen bg-[#F8FAFC] px-6 py-12">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <header className="mb-8">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#E0F2FE] text-xl">
            🐛
          </div>

          <p className="text-sm font-semibold uppercase tracking-wider text-[#087EA4]">
            Contribute
          </p>

          <div className="flex justify-between">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#0F172A]">
              Report an issue
            </h1>
            <p className="mt-3 max-w-xl leading-7 text-[#64748B]">
              {state?.email}
            </p>
          </div>
          
          <p className="mt-3 max-w-xl leading-7 text-[#64748B]">
            Found a bug or something that doesn't work as expected? Let us know
            and help us improve the project.
          </p>
        </header>

        {/* Form Card */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
          {/* Card Header */}
          <div className="border-b border-[#E2E8F0] px-6 py-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-[#0F172A]">Bug Report</h2>

                <p className="mt-1 text-sm text-[#64748B]">
                  Describe the problem you encountered.
                </p>
              </div>

              <span className="rounded-full bg-[#FEF2F2] px-3 py-1 text-xs font-medium text-[#DC2626]">
                Bug
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6 p-6">
            <TextArea
              className="
                min-h-48
                max-w-none
                rounded-xl
                border-[#CBD5E1]
                px-4
                py-3
                text-[#334155]
                placeholder:text-[#94A3B8]
                focus:border-[#087EA4]
                focus:ring-[#087EA4]/20
              "
            />

            {/* Helper */}
            <div className="rounded-lg bg-[#F8FAFC] p-4">
              <p className="text-sm font-medium text-[#334155]">
                💡 Helpful information
              </p>

              <ul className="mt-2 space-y-1 text-sm text-[#64748B]">
                <li>• What were you trying to do?</li>
                <li>• What happened instead?</li>
                <li>• Can you reproduce the issue?</li>
              </ul>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 border-t border-[#E2E8F0] pt-5">
              <Button
                type="button"
                className="
                  rounded-lg
                  border
                  border-red-300
                  bg-gray-400
                  px-5
                  py-2.5
                  font-medium
                  text-[#475569]
                  transition-colors
                  hover:bg-[#F1F5F9]
                "
              >
                Cancel
              </Button>

              <Button
                type="submit"
                className="
                  rounded-lg
                  bg-[#087EA4]
                  px-5
                  py-2.5
                  font-semibold
                  text-white
                  shadow-sm
                  transition-all
                  hover:bg-[#0369A1]
                  hover:shadow-md
                "
              >
                Submit Issue
              </Button>
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <p className="mt-5 text-center text-xs text-[#94A3B8]">
          Thanks for helping make the project better.
        </p>
      </div>
    </main>
  );
};

export default ContributePage;
