import Navbar from "../../../components/Navbar"
import Api1 from "../../../assets/images/api tak kunjung padam pamekasan1.jpeg"
import Api2 from "../../../assets/images/api tak kunjung padam pamekasan2.jpg"
import Api3 from "../../../assets/images/api tak kunjung padam pamekasan3.jpg"
import { Landmark, Camera, Info } from "lucide-react"
import { Link } from "react-router-dom"

export default function ApiTakKunjungPadam() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-yellow-100 via-white to-orange-100">
      <Navbar />
      <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-8 pt-24 md:pt-28 pb-6 md:pb-10 px-2 sm:px-4 md:px-16 animate-fade-in-up">
        <Link to="/pariwisata/pamekasan" className="mb-4 self-start px-6 py-2 bg-[#FFD600] hover:bg-yellow-400 text-black font-bold rounded-full shadow border-2 border-yellow-600 flex items-center gap-2 transition-all text-base" style={{ minWidth: '110px', textAlign: 'center' }}>
          <span className="text-lg">←</span> Kembali
        </Link>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <img src={Api1} alt="Api Tak Kunjung Padam 1" className="rounded-3xl shadow-lg border border-white/30 object-cover w-full h-40 sm:h-64 md:h-80" />
          <div className="flex gap-2">
            <img src={Api2} alt="Api Tak Kunjung Padam 2" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
            <img src={Api3} alt="Api Tak Kunjung Padam 3" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
          </div>
          <div className="w-full rounded-xl overflow-hidden border border-gray-300 shadow mb-4 h-32 sm:h-56">
            <iframe src="https://www.google.com/maps?q=Api+Tak+Kunjung+Padam,+Pamekasan,+Jawa+Timur&output=embed" width="100%" height="100%" style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Peta Api Tak Kunjung Padam"></iframe>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <div className="flex items-center gap-2 sm:gap-4 mb-2">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold font-serif text-gray-800 drop-shadow-lg">Api Tak Kunjung Padam – Pamekasan, Madura</h1>
          </div>
          <p className="text-xs sm:text-base text-gray-600 font-medium mb-2">Lokasi: Pamekasan, Madura, Jawa Timur.</p>
          <p className="text-sm sm:text-lg md:text-xl text-gray-700 font-light mb-4">Api Tak Kunjung Padam adalah fenomena alam unik berupa api abadi yang tidak pernah padam, menjadi daya tarik wisata dan legenda di Pamekasan.</p>
          <div className="flex items-start gap-2 sm:gap-3">
            <Landmark className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Daya Tarik</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Api abadi yang menyala di permukaan tanah.</li>
                <li>Fenomena alam langka dan penuh mitos.</li>
                <li>Sering dijadikan lokasi wisata edukasi dan spiritual.</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <Camera className="w-5 h-5 sm:w-7 sm:h-7 text-pink-600 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Aktivitas</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Melihat langsung api abadi dari dekat.</li>
                <li>Berfoto di area wisata api.</li>
                <li>Mendengarkan cerita dan mitos dari warga sekitar.</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <Info className="w-5 h-5 sm:w-7 sm:h-7 text-green-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Fasilitas & Akses</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Area parkir, warung, dan toilet tersedia.</li>
                <li>Lokasi mudah dijangkau dari pusat kota Pamekasan.</li>
                <li>Disarankan datang sore atau malam hari untuk pengalaman terbaik.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
