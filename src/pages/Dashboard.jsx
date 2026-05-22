import {
  useEffect,
  useState,
} from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProfileCard from "../components/ProfileCard";
import StatsCard from "../components/StatsCard";

import {
  getDashboardData,
} from "../services/api";

function Dashboard() {

  const student =
    JSON.parse(localStorage.getItem("student"));

  const [dashboard, setDashboard] =
    useState(null);

  useEffect(() => {

    async function loadDashboard() {

      const data =
        await getDashboardData(
          student.username
        );

      console.log(data);

      setDashboard(data);
    }

    loadDashboard();

  }, []);

  if (!dashboard) {

    return (
      <div className="text-white p-10">
        Please, wait, iQCMAT Dashboard is Loading...
      </div>
    );
  }

  return (
    <div className="bg-slate-900 text-white min-h-screen">

      <Header />

      <div className="flex">

        <Sidebar />

        <div className="flex-1 p-8">


          {/* Profile */}
          <ProfileCard />

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <StatsCard
              title="Attendance"
              value={
                dashboard.attendance.percentage + "%"
              }
              color="text-green-400"
            />

            <StatsCard
              title="Internship Progress"
              value={student.progress + "%"}
              color="text-blue-400"
            />

            <StatsCard
              title="Reports Submitted"
              value={
                Object.values(
                  dashboard.projects
                ).filter(
                  item =>
                    item === "Submitted"
                ).length
              }
              color="text-yellow-400"
            />

          </div>

          {/* Attendance */}
          <div className="bg-slate-800 p-8 rounded-2xl mt-8">

            <h2 className="text-3xl font-bold mb-6">

              Attendance Status

            </h2>

            <div className="text-6xl font-bold text-green-400">
              {
                dashboard.attendance
                  .percentage
              }%
            </div>

            <p className="mt-4 text-xl">

              {
                dashboard.attendance
                  .present
              }

              {" / "}

              {
                dashboard.attendance
                  .total
              }

              {" "}Hours Spend on Internship

            </p>

          </div>

          {/* Lectures */}
          <div className="bg-slate-800 p-8 rounded-2xl mt-8">
            <h2 className="text-3xl font-bold mb-6">
              Lecture Schedule
            </h2>

            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-4 text-left"> Date  </th>
                  <th className="text-left"> Topic  </th>
                  <th className="text-left"> Link </th>
                </tr>
              </thead>
              <tbody>
                {
                  dashboard.lectures.map(
                    (
                      lecture,
                      index
                    ) => (

                      <tr
                        key={index}
                        className="border-b border-slate-700"
                      >
                        <td className="py-4"> {lecture.date}  </td>
                        <td> {lecture.topic} </td>
                        <td>
                          <a href={lecture.link} target="_blank" className="bg-blue-600 px-4 py-2 rounded-lg">
                            Click here to Join
                          </a>
                        </td>
                      </tr>
                    )
                  )
                }
              </tbody>
            </table>
          </div>

          {/* Projects */}
          <div className="bg-slate-800 p-8 rounded-2xl mt-8">
            <h2 className="text-3xl font-bold mb-6">
              Project Reports
            </h2>

            <div className="space-y-6">
              <div>  <h3 className="text-xl">  Week 1 : {dashboard.projects.week1}</h3> </div>
              <div>  <h3 className="text-xl">  Week 2 : {dashboard.projects.week2}</h3> </div>
              <div>  <h3 className="text-xl">  Week 3 : {dashboard.projects.week3}</h3> </div>
              <div>  <h3 className="text-xl">  Week 4 : {dashboard.projects.week4}</h3> </div>
              <div>  <h3 className="text-xl">  Week 5 : {dashboard.projects.week5}</h3> </div>
              <div>  <h3 className="text-xl">  Final PPT : {dashboard.projects.week6}</h3> </div>
              <div>  <h3 className="text-xl">  Final Report : {dashboard.projects.week7}</h3> </div>
            </div>
          </div>

          {/* Certificate */}
          <div className="bg-slate-800 p-8 rounded-2xl mt-8">
            <h2 className="text-3xl font-bold mb-6">
              Certificate
            </h2>

            {
              dashboard.certificate
                .eligible === "YES" ? (
                <a
                  href={
                    dashboard.certificate
                      .url
                  }
                  target="_blank"
                  className="bg-green-600 px-6 py-3 rounded-xl inline-block"
                >
                 Download Certificate
                </a>

              ) : (

                <p>
                  Internship requirements not completed. 
                  Please complete all requirements to download the certificate.
                </p>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;