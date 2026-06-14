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
                Week 1 Report ::PDF Only:: Due by May 31, 2026, 6:00pm
              </h2>
              <p className="mt-3 text-lg text-green-400">  
             <a href="https://docs.google.com/forms/d/e/1FAIpQLSczC6_YmneLzjLEzDlVqEDcC-PoX8MaJ8K0QDZrQCo5sUXapA/viewform?usp=publish-editor"
            target="_blank"   rel="noreferrer"  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl inline-block transition">
              Submit Week-1 Report </a> Status: {projects.week1} </p>
            </div>

            {/* Week 2 */}

            <div className="border-b border-slate-700 pb-6">

              <h2 className="text-2xl font-bold">  Week 2 Report::PDF Only:: Due by June 7, 2026, 9:00pm  </h2>
              <p className="mt-3 text-lg text-yellow-400"> 
             <a href="https://forms.gle/cjfWUwzqBKf6hEjT7"
            target="_blank"   rel="noreferrer"  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl inline-block transition">
              Submit Week-2 Report </a> Status: {projects.week2} </p>
            </div>

            {/* Week 3 */}

            <div className="border-b border-slate-700 pb-6">

              <h2 className="text-2xl font-bold">  Week 3 Report ::PDF Only:: Due by June 14, 2026, 9:00pm  </h2>
              <p className="mt-3 text-lg text-yellow-400">
             <a href="https://forms.gle/Up6KQ24PzkiLEtLS9"
            target="_blank"   rel="noreferrer"  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl inline-block transition">
              Submit Week-3 Report </a> Status: {projects.week3} </p>
            </div>

            {/* Week 4 */}

            <div className="border-b border-slate-700 pb-6">

              <h2 className="text-2xl font-bold">  Week 4 Report ::PDF Only::  Due by June 21, 2026, 9:00pm   </h2>
              <p className="mt-3 text-lg text-yellow-400"> 
             <a href="https://forms.gle/A4fXNxzbQz7Yj57g9"
            target="_blank"   rel="noreferrer"  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl inline-block transition">
              Submit Week-4 Report</a> Status: {projects.week4} </p>
            </div>

            {/* Week 5 */}

            <div className="border-b border-slate-700 pb-6">

              <h2 className="text-2xl font-bold">  Week 5 Report ::PDF Only::  Due by June 28, 2026, 9:00pm  </h2>
              <p className="mt-3 text-lg text-yellow-400"> 
             <a href="https://forms.gle/iYBj95gQ35VHXZSt8"
            target="_blank"   rel="noreferrer"  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl inline-block transition">
              Submit Week-5 Report </a> Status: {projects.week5} </p>
            </div>


            {/* Final Presentation Section */}
            <div className="pt-6 border-t border-slate-700">
              <h2 className="text-2xl font-bold mb-6">
                Upload Final PPT submission ::ppt/pptx/pdf::  Due by July 01, 2026, 9:00pm
              </h2>
              <p className="mt-3 text-lg text-yellow-400"> 
             <a href="https://forms.gle/8UQa9FbGajjTP5Ss6"
            target="_blank"   rel="noreferrer"  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl inline-block transition">
              Submit Final PPT file </a>  Status: {projects.week6} </p>
            </div>


            {/* Final Report Section */}
            <div className="pt-6 border-t border-slate-700">
              <h2 className="text-2xl font-bold mb-6">
                Upload Final Report ::zip, gzip, tar.gz, accepted::  Due by July 05, 2026, 9:00pm
              </h2>
              <p className="mt-3 text-lg text-yellow-400"> 
             <a href="https://forms.gle/57tLPgamopfg1PDv6"
            target="_blank"   rel="noreferrer"  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl inline-block transition">
              Submit Final Report </a>  Status: {projects.week7} </p>
              <p>Zip all files (doc/docx/tex, images, codes, photos, origin files, excel sheets, etc.) into a single file and submit. </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Reports;
