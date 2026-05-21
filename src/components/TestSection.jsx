function TestSection() {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-xl">

      <h2 className="text-2xl font-bold mb-6">
        Tests
      </h2>

      <div className="bg-slate-700 p-4 rounded-xl">

        <h3 className="text-xl font-semibold">
          Module 1 Test
        </h3>

        <p className="mt-2 text-slate-300">
          Deadline: 25 May
        </p>

        <button className="mt-4 bg-blue-600 px-4 py-2 rounded-lg">
          Start Test
        </button>

      </div>

    </div>
  );
}

export default TestSection;