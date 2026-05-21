function CertificateSection() {

  const progress = 91;

  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-xl">

      <h2 className="text-2xl font-bold mb-6">
        Certificate
      </h2>

      {progress >= 90 ? (

        <button className="bg-green-600 px-6 py-3 rounded-lg">
          Download Certificate
        </button>

      ) : (

        <p className="text-slate-300">
          Complete 90% internship requirements.
        </p>

      )}

    </div>
  );
}

export default CertificateSection;