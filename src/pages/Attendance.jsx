import {
  useEffect,
  useState,
} from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import {
  getDashboardData,
} from "../services/api";

function Attendance() {

  const student =
    JSON.parse(localStorage.getItem("student"));

  const [attendance, setAttendance] =
    useState(null);

  useEffect(() => {

    async function loadAttendance() {

      const data =
        await getDashboardData(
          student.username
        );

      console.log(data);

      setAttendance(
        data.attendance
      );
    }

    loadAttendance();

  }, []);

  if (!attendance) {

    return (
      <div className="bg-slate-900 text-white min-h-screen flex items-center justify-center">

        <h1 className="text-3xl">

          Please, wait while iQCMAT loads your attendance data...

        </h1>

      </div>
    );
  }

  return (
    <div className="bg-slate-900 text-white min-h-screen">

      <Header />

      <div className="flex">

        <Sidebar />

        <div className="flex-1 p-8">

          <h1 className="text-4xl font-bold mb-8">

            Attendance

          </h1>

          <div className="bg-slate-800 p-8 rounded-2xl">

            {/* Percentage */}

            <div className="text-6xl font-bold text-green-400">

              {attendance.percentage}%

            </div>

            {/* Present / Total */}

            <p className="mt-4 text-xl">

              {attendance.present}

              {" / "}

              {attendance.total}

              {" "}Lectures Attended

            </p>

            {/* Progress Bar */}

            <div className="mt-6 bg-slate-700 rounded-full h-5">

              <div
                className="bg-green-500 h-5 rounded-full"
                style={{
                  width:
                    `${attendance.percentage}%`
                }}
              >

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Attendance;