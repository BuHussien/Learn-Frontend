import { useSearchParams } from "react-router-dom";
import Button from "./ui/Button";

interface IProps {
  page: number;
  totalPages: number;
}

const Paginator = ({ page, totalPages }: IProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = (nextPage: number) => {
    if (nextPage < 1 || nextPage > totalPages) return;
    setSearchParams((prev) => {
      prev.set("page", String(nextPage));
      return prev;
    });
  };
  return (
    <div className="flex items-center justify-between bg-white border border-rose-100 shadow-md rounded-2xl p-4 mt-6 w-full max-w-md mx-auto">
      <div className="text-sm font-medium text-gray-600">
        Page <span className="font-bold text-rose-600">{page}</span> of{" "}
        <span className="font-bold text-rose-600">{totalPages}</span>
      </div>

      <div className="flex items-center gap-2">
        <Button
          className="flex items-center gap-1 px-4 py-2 bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100 rounded-xl font-medium text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-rose-50 shadow-sm"
          onClick={() => handlePageChange(Math.max(1, page - 1))}
        >
          ← Previous
        </Button>

        <Button
          className="flex items-center gap-1 px-4 py-2 bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100 rounded-xl font-medium text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-rose-50 shadow-sm"
          onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
        >
          Next →
        </Button>
      </div>
    </div>
  );
};

export default Paginator;
