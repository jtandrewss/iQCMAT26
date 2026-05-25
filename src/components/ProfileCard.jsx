function ProfileCard() {
  const student =
    JSON.parse(localStorage.getItem("student"));
  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-2xl">
      <div className="flex items-center gap-6">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-4xl font-bold">
          {student.name.charAt(0)}
        </div>
        {/* Student Details */}
        <div>
          <h2 className="text-3xl font-bold">
            {student.name}
          </h2>
          <p className="text-slate-400">
            {student.college}
          </p>
          <p className="text-slate-500 mt-2 text-sm">
            Username: {student.username}
          </p>
          <p className="text-slate-400 mt-2">
            Internship Domain: {student.domain} 
          </p>
          <p className="text-slate-400 mt-2">
            Internship Mentor: {student.mentor} 
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;