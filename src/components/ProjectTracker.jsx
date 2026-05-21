function ProjectTracker() {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-xl">

      <h2 className="text-2xl font-bold mb-6">
        Project Reports
      </h2>

      <div className="space-y-6">

        <div className="flex items-center justify-between">

          <div>
            <h3 className="font-semibold">
              Week 1 Report
            </h3>

            <p className="text-green-400">
              Submitted
            </p>
          </div>

          <button className="bg-slate-600 px-4 py-2 rounded-lg">
            View
          </button>

        </div>

        <div className="flex items-center justify-between">

          <div>
            <h3 className="font-semibold">
              Week 2 Report
            </h3>

            <p className="text-yellow-400">
              Pending
            </p>
          </div>

          <button className="bg-blue-600 px-4 py-2 rounded-lg">
            Upload
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProjectTracker;