function StatsCard({ title, value, color }) {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-2xl hover:scale-105 transition">

      <h3 className="text-slate-400 text-lg">
        {title}
      </h3>

      <div className={`text-5xl font-bold mt-4 ${color}`}>
        {value}
      </div>

    </div>
  );
}

export default StatsCard;