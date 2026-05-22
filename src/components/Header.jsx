import qcmat from "../assets/logos/QCMAT.png";
import sarthii from "../assets/logos/sarthii.png";
import sgs from "../assets/logos/SGS.png";
import nqm from "../assets/logos/NQM.png";
import ipa from "../assets/logos/IPA1.png";
import iic from "../assets/logos/iic.png";
import mic from "../assets/logos/mic.png";

import { Menu } from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-slate-700 shadow-2xl">

      <div className="px-6 py-4">

        {/* Top Section */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-6">

          {/* Logos */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            <img src={qcmat} alt="QCMAT" className="h-14 hover:scale-110 transition duration-300" />
            <img src={sarthii} alt="Sarthii" className="h-14 hover:scale-110 transition duration-300" />
            <img src={sgs} alt="SGSITS" className="h-14 hover:scale-110 transition duration-300" />
            <img src={nqm} alt="NQM" className="h-14 hover:scale-110 transition duration-300" />
            <img src={ipa} alt="IPA" className="h-14 hover:scale-110 transition duration-300" />
            <img src={iic} alt="IIC" className="h-14 hover:scale-110 transition duration-300" />
            <img src={mic} alt="MIC" className="h-14 hover:scale-110 transition duration-300" />
          </div>

          {/* Portal Title */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              iQCMAT Internship Portal
            </h1>

            <p className="text-slate-400 mt-2">
              QUANTUM • Computing • Materials • Algorithm • Technology
            </p>

          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">

            <button className="bg-slate-800 p-3 rounded-xl hover:bg-slate-700">

              <Menu size={28} />

            </button>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Header;