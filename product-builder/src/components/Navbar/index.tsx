const Navbar = () => {
  return (
    <nav className="px-6 py-4 shadow-md bg-[#096964] text-white font-serif">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">MyStore</h1>
        <div className="flex gap-5">
          <div className="hidden lg:flex items-center gap-6 ">
            <a href="#" className="hover:text-gray-300 transition">
              Home
            </a>

            <a href="#" className="hover:text-gray-300 transition">
              Products
            </a>

            <a href="#" className="hover:text-gray-300 transition">
              About
            </a>
          </div>
          <button className="bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-200 transition cursor-pointer bi bi-bag-check">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bag-check"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"
              />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
