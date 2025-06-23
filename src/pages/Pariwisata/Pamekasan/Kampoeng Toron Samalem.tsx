import Navbar from "../../../components/Navbar"
import Toron1 from "../../../assets/images/Kampoeng Toron Samalem1.jpeg"
import Toron2 from "../../../assets/images/Kampoeng Toron Samalem2.jpg"
import Toron3 from "../../../assets/images/Kampoeng Toron Samalem3.jpg"
import { Landmark, Camera, Info } from "lucide-react"
import { Link } from "react-router-dom"

export default function KampoengToronSamalem() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-green-100 via-white to-yellow-100">
      <Navbar />
      <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-8 pt-24 md:pt-28 pb-6 md:pb-10 px-2 sm:px-4 md:px-16 animate-fade-in-up">
        <Link to="/pariwisata/pamekasan" className="mb-4 self-start px-6 py-2 bg-[#FFD600] hover:bg-yellow-400 text-black font-bold rounded-full shadow border-2 border-yellow-600 flex items-center gap-2 transition-all text-base" style={{ minWidth: '110px', textAlign: 'center' }}>
          <span className="text-lg">←</span> Kembali
        </Link>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <img src={Toron1} alt="Kampoeng Toron Samalem 1" className="rounded-3xl shadow-lg border border-white/30 object-cover w-full h-40 sm:h-64 md:h-80" />
          <div className="flex gap-2">
            <img src={Toron2} alt="Kampoeng Toron Samalem 2" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
            <img src={Toron3} alt="Kampoeng Toron Samalem 3" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
          </div>
          <div className="w-full rounded-xl overflow-hidden border border-gray-300 shadow mb-4 h-32 sm:h-56">
            <iframe src="https://www.google.com/maps?q=Kampoeng+Toron+Samalem,+Pamekasan,+Jawa+Timur&output=embed" width="100%" height="100%" style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Peta Kampoeng Toron Samalem"></iframe>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <div className="flex items-center gap-2 sm:gap-4 mb-2">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold font-serif text-gray-800 drop-shadow-lg">Kampoeng Toron Samalem – Pamekasan, Madura</h1>
          </div>
          <p className="text-xs sm:text-base text-gray-600 font-medium mb-2">Lokasi: Pamekasan, Madura, Jawa Timur.</p>
          <p className="text-sm sm:text-lg md:text-xl text-gray-700 font-light mb-4">Kampoeng Toron Samalem adalah destinasi wisata alam dan edukasi dengan konsep desa wisata, spot foto, dan suasana asri di Pamekasan.</p>
          <div className="flex items-start gap-2 sm:gap-3">
            <Landmark className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Daya Tarik</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Desa wisata dengan rumah adat dan taman bunga.</li>
                <li>Spot foto instagramable di berbagai sudut.</li>
                <li>Suasana alami dan edukatif untuk keluarga.</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <Camera className="w-5 h-5 sm:w-7 sm:h-7 text-pink-600 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Aktivitas</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Berfoto di taman bunga dan rumah adat.</li>
                <li>Bermain dan belajar di area edukasi.</li>
                <li>Bersantai di gazebo dan area piknik.</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <Info className="w-5 h-5 sm:w-7 sm:h-7 text-green-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Fasilitas & Akses</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Area parkir, toilet, dan warung tersedia.</li>
                <li>Lokasi mudah dijangkau dari pusat kota Pamekasan.</li>
                <li>Cocok untuk wisata keluarga dan rombongan sekolah.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
