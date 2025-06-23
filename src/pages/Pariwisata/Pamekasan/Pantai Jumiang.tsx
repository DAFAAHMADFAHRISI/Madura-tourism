import Navbar from "../../../components/Navbar"
import Jumiang1 from "../../../assets/images/Pantai Jumiang1.jpg"
import Jumiang2 from "../../../assets/images/Pantai Jumiang2.jpg"
import Jumiang3 from "../../../assets/images/Pantai Jumiang3.jpeg"
import { Landmark, Camera, Info } from "lucide-react"
import { Link } from "react-router-dom"

export default function PantaiJumiang() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-blue-100 via-white to-green-100">
      <Navbar />
      <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-8 pt-24 md:pt-28 pb-6 md:pb-10 px-2 sm:px-4 md:px-16 animate-fade-in-up">
        <Link to="/pariwisata/pamekasan" className="mb-4 self-start px-6 py-2 bg-[#FFD600] hover:bg-yellow-400 text-black font-bold rounded-full shadow border-2 border-yellow-600 flex items-center gap-2 transition-all text-base" style={{ minWidth: '110px', textAlign: 'center' }}>
          <span className="text-lg">←</span> Kembali
        </Link>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <img src={Jumiang1} alt="Pantai Jumiang 1" className="rounded-3xl shadow-lg border border-white/30 object-cover w-full h-40 sm:h-64 md:h-80" />
          <div className="flex gap-2">
            <img src={Jumiang2} alt="Pantai Jumiang 2" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
            <img src={Jumiang3} alt="Pantai Jumiang 3" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
          </div>
          <div className="w-full rounded-xl overflow-hidden border border-gray-300 shadow mb-4 h-32 sm:h-56">
            <iframe src="https://www.google.com/maps?q=Pantai+Jumiang,+Pamekasan,+Jawa+Timur&output=embed" width="100%" height="100%" style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Peta Pantai Jumiang"></iframe>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <div className="flex items-center gap-2 sm:gap-4 mb-2">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold font-serif text-gray-800 drop-shadow-lg">Pantai Jumiang – Pamekasan, Madura</h1>
          </div>
          <p className="text-xs sm:text-base text-gray-600 font-medium mb-2">Lokasi: Pamekasan, Madura, Jawa Timur.</p>
          <p className="text-sm sm:text-lg md:text-xl text-gray-700 font-light mb-4">Pantai Jumiang adalah destinasi wisata pantai dengan pemandangan laut biru, tebing karang, dan suasana alami yang cocok untuk bersantai dan berfoto.</p>
          <div className="flex items-start gap-2 sm:gap-3">
            <Landmark className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Daya Tarik</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Pemandangan laut lepas dan tebing karang yang indah.</li>
                <li>Spot foto alami dan gazebo di tepi tebing.</li>
                <li>Suasana tenang, cocok untuk piknik dan menikmati sunset.</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <Camera className="w-5 h-5 sm:w-7 sm:h-7 text-pink-600 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Aktivitas</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Berfoto di tebing dan gazebo.</li>
                <li>Bermain di area pantai berbatu.</li>
                <li>Piknik bersama keluarga atau teman.</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <Info className="w-5 h-5 sm:w-7 sm:h-7 text-green-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Fasilitas & Akses</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Gazebo, warung, dan area parkir tersedia.</li>
                <li>Akses mudah dengan kendaraan pribadi.</li>
                <li>Disarankan membawa bekal sendiri untuk piknik.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
