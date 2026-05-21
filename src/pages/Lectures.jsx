import {
  useEffect,
  useState,
} from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import {
  getDashboardData,
} from "../services/api";

function Lectures() {

  const student =
    JSON.parse(localStorage.getItem("student"));

  const [lectures, setLectures] =
    useState([]);

  useEffect(() => {

    async function loadLectures() {

      const data =
        await getDashboardData(
          student.username
        );

      console.log(data);

      setLectures(
        data.lectures || []
      );
    }

    loadLectures();

  }, []);

  return (
    <div className="bg-slate-900 text-white min-h-screen">

      <Header />

      <div className="flex">

        <Sidebar />

        <div className="flex-1 p-8">

          <h1 className="text-4xl font-bold mb-8">

            Lecture Schedule

          </h1>

          <div className="bg-slate-800 p-8 rounded-2xl overflow-x-auto">

            {
              lectures.length === 0 ? (

                <div className="text-xl">

                  Please wait while iQCMAT loads your lecture schedule...

                </div>

              ) : (

                <table className="w-full">

                  <thead>

                    <tr className="border-b border-slate-700">

                      <th className="py-4 text-left">

                        Date

                      </th>

                      <th className="text-left">

                        Topic

                      </th>

                      <th className="text-left">

                        Class Link

                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {
                      lectures.map(
                        (
                          lecture,
                          index
                        ) => (

                          <tr
                            key={index}
                            className="border-b border-slate-700"
                          >

                            <td className="py-4">

                              {lecture.date}

                            </td>

                            <td>

                              {lecture.topic}

                            </td>

                            <td>

                              <a
                                href={lecture.link}
                                target="_blank"
                                rel="noreferrer"
                                className="bg-blue-600 px-4 py-2 rounded-lg inline-block hover:bg-blue-700"
                              >

                                Join

                              </a>

                            </td>

                          </tr>
                        )
                      )
                    }

                  </tbody>

                </table>
              )
            }

          </div>

        </div>

      </div>

    </div>
  );
}

export default Lectures;