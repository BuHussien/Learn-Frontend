import { Outlet } from "react-router-dom";
import LearnAside from "../../Components/LearnAside";
import Navbar from "../../Components/Navbar";

const LearnLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <Navbar />
      <div className="flex flex-1">
        <LearnAside className="bg-[#FFFFFF] w-80 h-[calc(100vh-4rem)] overflow-y-auto border-gray-400" />
        <main className="flex-1 p-8 bg-[#F8FAFC]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LearnLayout;