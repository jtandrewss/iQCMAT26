import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProfileCard from "../components/ProfileCard";
import StatsCard from "../components/StatsCard";
import AttendanceCard from "../components/AttendanceCard";
import LectureTable from "../components/LectureTable";
import TestSection from "../components/TestSection";
import ProjectTracker from "../components/ProjectTracker";
import CertificateSection from "../components/CertificateSection";

function Dashboard() {
const student =
  JSON.parse(localStorage.getItem("student"));
    return (
    <div className="bg-slate-900 text-white min-h-screen">

      <Header />

      <div className="flex">

        <Sidebar />

        <div className="flex-1 p-8">

          <ProfileCard />

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <StatsCard
              title="Attendance"
              value="82%"
              color="text-green-400"
            />

            <StatsCard
              title="Internship Progress"
              value="91%"
              color="text-blue-400"
            />

            <StatsCard
              title="Tests Completed"
              value="5"
              color="text-yellow-400"
            />

          </div>

          {/* Main Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">

            <AttendanceCard />

            <ProjectTracker />

          </div>

          <div className="mt-8">
            <LectureTable />
          </div>

          <div className="mt-8">
            <TestSection />
          </div>

          <div className="mt-8">
            <CertificateSection />
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;