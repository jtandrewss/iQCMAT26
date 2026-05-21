function LectureTable() {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-xl">

      <h2 className="text-2xl font-bold mb-6">
        Lecture Schedule
      </h2>

      <table className="w-full">

        <thead>
          <tr className="text-left border-b border-slate-700">
            <th className="pb-3">Date</th>
            <th className="pb-3">Topic</th>
            <th className="pb-3">Class</th>
          </tr>
        </thead>

        <tbody>

          <tr className="border-b border-slate-700">
            <td className="py-4">20 May</td>
            <td>Python Basics</td>
            <td>
              <button className="bg-blue-600 px-4 py-2 rounded-lg">
                Join
              </button>
            </td>
          </tr>

          <tr>
            <td className="py-4">21 May</td>
            <td>Machine Learning Intro</td>
            <td>
              <button className="bg-blue-600 px-4 py-2 rounded-lg">
                Join
              </button>
            </td>
          </tr>

        </tbody>

      </table>
    </div>
  );
}

export default LectureTable;