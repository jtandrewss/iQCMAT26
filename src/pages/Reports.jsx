import {
  useEffect,
  useState,
} from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import {
  getDashboardData,
} from "../services/api";

function Reports() {

  const student =
    JSON.parse(localStorage.getItem("student"));

  const [projects, setProjects] =
    useState(null);

  useEffect(() => {

    async function loadProjects() {

      const data =
        await getDashboardData(
          student.username
        );

      console.log(data);

      setProjects(
        data.projects
      );
    }

    loadProjects();

  }, []);

  if (!projects) {

    return (
      <div className="bg-slate-900 text-white min-h-screen flex items-center justify-center">

        <h1 className="text-3xl">

          Please wait while loading reports submission ...

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

          {/* Page Title */}

          <h1 className="text-4xl font-bold mb-8">

            Weekly Reports

          </h1>

          {/* Reports Card */}

          <div className="bg-slate-800 p-8 rounded-2xl space-y-8">

            {/* Week 1 */}

            <div className="border-b border-slate-700 pb-6">

              <h2 className="text-2xl font-bold">

                Week 1 Report: Due by May 30, 2026, 6:00pm

              </h2>

              <p className="mt-3 text-lg text-green-400">  {projects.week1} </p>
             <a href="https://docs.google.com/forms/d/e/1FAIpQLSeIVV6hR_M12pE_h9P0BFX7yJfvZ2KsVv1fBPyZevyKwI_iyA/viewform?usp=publish-editor"
            target="_blank"   rel="noreferrer"  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl inline-block transition">
              Submit Week-1 Report </a>
            </div>

            {/* Week 2 */}

            <div className="border-b border-slate-700 pb-6">

              <h2 className="text-2xl font-bold">  Week 2 Report: Due by June 6, 2026, 6:00pm  </h2>
              <p className="mt-3 text-lg text-yellow-400"> {projects.week2} </p>
             <a href="https://docs.google.com/forms/d/e/1FAIpQLSeIVV6hR_M12pE_h9P0BFX7yJfvZ2KsVv1fBPyZevyKwI_iyA/viewform?usp=publish-editor"
            target="_blank"   rel="noreferrer"  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl inline-block transition">
              Submit Week-2 Report </a>
            </div>

            {/* Week 3 */}

            <div className="border-b border-slate-700 pb-6">

              <h2 className="text-2xl font-bold">  Week 3 Report: Due by June 12, 2026, 6:00pm  </h2>
              <p className="mt-3 text-lg text-yellow-400"> {projects.week3} </p>
             <a href="https://docs.google.com/forms/d/e/1FAIpQLSeIVV6hR_M12pE_h9P0BFX7yJfvZ2KsVv1fBPyZevyKwI_iyA/viewform?usp=publish-editor"
            target="_blank"   rel="noreferrer"  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl inline-block transition">
              Submit Week-3 Report </a>
            </div>

            {/* Week 4 */}

            <div className="border-b border-slate-700 pb-6">

              <h2 className="text-2xl font-bold">  Week 4 Report: Due by June 19, 2026, 6:00pm   </h2>
              <p className="mt-3 text-lg text-yellow-400"> {projects.week4} </p>
             <a href="https://docs.google.com/forms/d/e/1FAIpQLSeIVV6hR_M12pE_h9P0BFX7yJfvZ2KsVv1fBPyZevyKwI_iyA/viewform?usp=publish-editor"
            target="_blank"   rel="noreferrer"  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl inline-block transition">
              Submit Week-4 Report</a>
            </div>

            {/* Week 5 */}

            <div className="border-b border-slate-700 pb-6">

              <h2 className="text-2xl font-bold">  Week 5 Report: Due by June 26, 2026, 6:00pm  </h2>
              <p className="mt-3 text-lg text-yellow-400"> {projects.week5} </p>
             <a href="https://docs.google.com/forms/d/e/1FAIpQLSeIVV6hR_M12pE_h9P0BFX7yJfvZ2KsVv1fBPyZevyKwI_iyA/viewform?usp=publish-editor"
            target="_blank"   rel="noreferrer"  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl inline-block transition">
              Submit Week-5 Report </a>
            </div>


            {/* Final Report Section */}

            <div className="pt-6 border-t border-slate-700">

              <h2 className="text-2xl font-bold mb-6">

                Upload Final Report: Due by July 06, 2026, 6:00pm

              </h2>

             <a href="https://docs.google.com/forms/d/e/1FAIpQLSeIVV6hR_M12pE_h9P0BFX7yJfvZ2KsVv1fBPyZevyKwI_iyA/viewform?usp=publish-editor"
            target="_blank"   rel="noreferrer"  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl inline-block transition">
              Submit FInal Report </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Reports;