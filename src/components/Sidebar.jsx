import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarCheck,
  BookOpen,
  FileText,
  Award,
  LogOut,
} from "lucide-react";

function Sidebar() {
const handleLogout = () => {

  localStorage.removeItem("student");

  window.location.reload();

};
    const navigate = useNavigate();
  return (
    <div className="w-72 min-h-screen bg-slate-800/90 backdrop-blur-lg border-r border-slate-700 p-6 shadow-2xl">

      <div className="mb-10">

        <h2 className="text-2xl font-bold text-blue-400">
          Student Panel
        </h2>

        <p className="text-slate-400 mt-2">
          Internship Management System
        </p>

      </div>

      <nav className="space-y-4">

        <button onClick={() => navigate("/")} className="flex items-center gap-4 w-full bg-blue-600 hover:bg-blue-700 p-4 rounded-2xl transition">

          <LayoutDashboard />

          Dashboard

        </button>

        <button onClick={() => navigate("/attendance")} className="flex items-center gap-4 w-full hover:bg-slate-700 p-4 rounded-2xl transition">

          <CalendarCheck />

          Attendance

        </button>

        <button onClick={() => navigate("/lectures")} className="flex items-center gap-4 w-full hover:bg-slate-700 p-4 rounded-2xl transition">

          <BookOpen />

          Schedule

        </button>

        <button onClick={() => navigate("/reports")} className="flex items-center gap-4 w-full hover:bg-slate-700 p-4 rounded-2xl transition">

          <FileText />

          Upload Reports

        </button>

        <button onClick={() => navigate("/certificates")} className="flex items-center gap-4 w-full hover:bg-slate-700 p-4 rounded-2xl transition">

          <Award />

          Certificates

        </button>

      </nav>

      <div className="mt-20">
       <button  onClick={handleLogout} className="flex items-center gap-4 w-full bg-red-600 hover:bg-red-700 p-4 rounded-2xl transition"> 
          <LogOut />
          Logout
        </button>
      </div>

    </div>
  );
}

export default Sidebar;