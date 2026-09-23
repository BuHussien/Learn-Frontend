import { NavLink } from "react-router-dom";

interface IProps {
  className?: string;
}

const LearnAside = ({ className = "" }: IProps) => {
  return (
    <aside className={`shrink-0 p-5 sticky top-16 ${className}`}>
      <ul className="flex flex-col gap-1">
        <li>
          <NavLink to="/learn" end>
            {({ isActive }) => (
              <span
                className={`block rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-slate-800 text-cyan-400"
                    : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
                }`}
              >
                Quick Start
              </span>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to="/learn/thinking-in-react">
            {({ isActive }) => (
              <span
                className={`block rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-slate-800 text-cyan-400"
                    : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
                }`}
              >
                Thinking In React
              </span>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to="/learn/installation">
            {({ isActive }) => (
              <span
                className={`block rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-slate-800 text-cyan-400"
                    : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
                }`}
              >
                Installation
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default LearnAside;