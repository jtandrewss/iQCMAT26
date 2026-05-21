function AttendanceCard() {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-xl">

      <h2 className="text-2xl font-bold mb-4">
        Attendance
      </h2>

      <div className="text-5xl font-bold text-green-400">
        82%
      </div>

      <div className="mt-4 bg-slate-700 rounded-full h-4">

        <div className="bg-green-500 h-4 rounded-full w-[82%]">

        </div>

      </div>

      <p className="mt-4 text-slate-300">
        18 / 22 Lectures Attended
      </p>

    </div>
  );
}

export default AttendanceCard;