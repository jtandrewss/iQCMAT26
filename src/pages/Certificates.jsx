import {
  useEffect,
  useState,
} from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import {
  getCertificates,
} from "../services/api";

function Certificates() {

  const student =
    JSON.parse(localStorage.getItem("student"));

  const [certificate,
    setCertificate] =
    useState(null);

  useEffect(() => {

    async function loadCertificate() {

      const data =
        await getCertificates(
          student.username
        );

      setCertificate(data);
    }

    loadCertificate();

  }, []);

  if (!certificate) {

    return (
      <div className="text-white p-10">

        Please, wait iQCMAT is Loading Certificate...

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

            Certificates

          </h1>

          <div className="bg-slate-800 p-8 rounded-2xl">

            {
              certificate.eligible === "YES" ? (

                <div>

                  <p className="text-green-400 text-xl mb-6">

                    Congratulations!
                    Your certificate is ready.

                  </p>

                  <a
                    href={certificate.url}
                    target="_blank"
                    className="bg-green-600 px-6 py-3 rounded-xl inline-block"
                  >

                    Download Certificate

                  </a>

                </div>

              ) : (

                <div>

                  <p className="text-yellow-400 text-xl">

                    Certificate Locked

                  </p>

                  <p className="mt-4 text-slate-400">

                    Internship requirements to unlock certificate is not achieved yet.

                  </p>

                </div>

              )
            }

          </div>

        </div>

      </div>

    </div>
  );
}

export default Certificates;