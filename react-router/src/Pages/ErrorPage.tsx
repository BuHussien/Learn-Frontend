import { Link } from "react-router-dom";
interface IProps{
  statusCode: number;
  title: string;
}
const ErrorPage = ({statusCode, title}:IProps) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-6">
      <div className="w-full max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#087EA4]">
          Error
        </p>

        <h1 className="mt-3 text-7xl font-bold tracking-tight text-[#0F172A]">
          {statusCode}
        </h1>

        <h2 className="mt-4 text-2xl font-bold text-[#0F172A]">
          {title}
        </h2>

        <p className="mx-auto mt-3 max-w-md leading-7 text-[#64748B]">
          Sorry, the page you're looking for doesn't exist or may have been
          moved.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-lg bg-[#087EA4] px-5 py-2.5 font-semibold text-white shadow-sm transition-all hover:bg-[#0369A1] hover:shadow-md"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default ErrorPage;