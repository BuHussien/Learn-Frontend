import { Link, Navigate, NavLink } from "react-router-dom";

interface IProps {}

const Navbar = ({}: IProps) => {
  return (
    <nav className="w-full bg-[#FFFFFF] shadow-sm py-4 px-6 sticky top-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to= "/"className="flex font-bold text-lg text-[#0F172A] items-center">
          <img
            className="w-10 h-10 rounded-full cursor-pointer"
            src="/public/logo.jpg"
            alt=""
          />
          <h1 className="pl-2 font-serif text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-blue-500 cursor-pointer">
            MMA
          </h1>
        </Link>

        <ul className="flex items-center gap-6">
          <li className="hover:text-[#087EA4] duration-200 font-medium">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-[#087EA4] duration-200 font-medium">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="hover:text-[#087EA4] duration-200 font-medium">
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li className="hover:text-[#087EA4] duration-200 font-medium">
            <NavLink to="/learn">Learn</NavLink>
          </li>
          <li className="hover:text-[#087EA4] duration-200 font-medium">
            <NavLink to="/contribute">Contribute</NavLink>
          </li>
          <li className="hover:text-[#087EA4] duration-200 font-medium">
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
