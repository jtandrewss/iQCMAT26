import {
  useEffect,
  useState,
} from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import {
  getDashboardData,
} from "../services/api";

function Notices() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8">
          {/* Page Title */}
          <h1 className="text-4xl font-bold mb-8">
            Notices & Announcements
          </h1>

          {/* Announcement Box */}
          <div className="bg-slate-800 p-8 rounded-2xl shadow-xl mb-10">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">
              Latest Announcement
            </h2>
            <div className="bg-slate-700 p-6 rounded-xl leading-8 text-lg">
              Dear Students,
              <br /><br />
              The internship lecture schedule for this week has been updated.
              Students are requested to:
              <ul className="list-disc ml-8 mt-4 space-y-2">
                <li>
                  Attend all live sessions regularly.
                </li>
                <li>
                 Submit weekly reports before Sunday.
                </li>
                <li>
                  Ensure attendance remains above 90%.
                </li>
                <li>
                  Complete project milestones on time.
               </li>
              </ul>
              <br />
              Certificate generation will be enabled automatically after successful completion of internship requirements.
          <h2><a
                        href="https://drive.google.com/drive/folders/1V2W_hYcDjmkgcUDXfcH1oti3hz3-O-iH?usp=sharing"
                        download
                        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl transition"
                      >
                        Link to Video Recording and Lectures Slides.
                      </a> </h2>
            </div>
          </div>

          {/* Posters Section */}

          <div className="bg-slate-800 p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-pink-400 mb-8">
              Posters & Updates
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 
            {/* Notice Card 1 */}
                <div className="bg-slate-700 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/inv-is.png"
                    alt="Poster 1"
                    className="w-full h-72 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">
                    Invitation to Inaugural Session of the Internship Program
                    </h3>
                    <p className="text-slate-300 mb-6">
                      Students do report by 2:30 PM on 25th June 2026 for the inaugural session of the internship program. Link to the session is available as QR code.
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="/images/inv-is.png"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl transition"
                      >
                        Open
                      </a>
                      <a
                        href="/images/inv-is.png"
                        download
                        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl transition"
                      >
                        Download the invitation.
                      </a>
                    </div>
                  </div>
                </div>

              {/* Poster 2 */}
                <div className="bg-slate-700 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/Poster.png"
                    alt="Poster 1"
                    className="w-full h-72 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">
                    Announcement Poster for the internship program.
                    </h3>
                    <p className="text-slate-300 mb-6">
                      ..
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="/images/Poster.png"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl transition"
                      >
                        Open
                      </a>
                      <a
                        href="/images/Poster.png"
                        download
                        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl transition"
                      >
                        Download the Internship Announcement.
                      </a>
                    </div>
                  </div>
                </div>

              {/* Poster 3 */}
                <div className="bg-slate-700 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/TT-iQCMAT.png"
                    alt="Poster 1"
                    className="w-full h-72 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">
                    Tentative Time Table for the Six Week internship program.
                    </h3>
                    <p className="text-slate-300 mb-6">
                    This is a tentative time table for Six Week internship program. Contact your mentor for the final schedule. 
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="/images/TT-iQCMAT.png"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl transition"
                      >
                        Open
                      </a>
                      <a
                        href="/images/TT-iQCMAT.pdf"
                        download
                        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl transition"
                      >
                        Download the tentative time table of iQCMAT.
                      </a>
                    </div>
                  </div>
                </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Notices;
