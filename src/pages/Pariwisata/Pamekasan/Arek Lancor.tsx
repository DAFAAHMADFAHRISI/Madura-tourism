import Navbar from "../../../components/Navbar"
import Arek1 from "../../../assets/images/Arek Lancor1.jpeg"
import Arek2 from "../../../assets/images/Arek Lancor2.jpg"
import Arek3 from "../../../assets/images/Arek Lancor3.jpg"
import { Landmark, Camera, Info } from "lucide-react"
import { Link } from "react-router-dom"

export default function ArekLancor() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-green-100 via-white to-yellow-100">
      <Navbar />
      <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-8 pt-24 md:pt-28 pb-6 md:pb-10 px-2 sm:px-4 md:px-16 animate-fade-in-up">
        <Link to="/pariwisata/pamekasan" className="mb-4 self-start px-4 py-2 bg-green-300 hover:bg-green-400 text-green-900 font-semibold rounded-full shadow transition-all text-xs sm:text-sm">Kembali</Link>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <img src={Arek1} alt="Arek Lancor 1" className="rounded-3xl shadow-lg border border-white/30 object-cover w-full h-40 sm:h-64 md:h-80" />
          <div className="flex gap-2">
            <img src={Arek2} alt="Arek Lancor 2" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
            <img src={Arek3} alt="Arek Lancor 3" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
          </div>
          <div className="w-full rounded-xl overflow-hidden border border-gray-300 shadow mb-4 h-32 sm:h-56">
            <iframe src="https://www.google.com/maps?q=Arek+Lancor,+Pamekasan,+Jawa+Timur&output=embed" width="100%" height="100%" style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Peta Arek Lancor"></iframe>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <div className="flex items-center gap-2 sm:gap-4 mb-2">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold font-serif text-gray-800 drop-shadow-lg">Arek Lancor – Pamekasan, Madura</h1>
          </div>
          <p className="text-xs sm:text-base text-gray-600 font-medium mb-2">Lokasi: Pamekasan, Madura, Jawa Timur.</p>
          <p className="text-sm sm:text-lg md:text-xl text-gray-700 font-light mb-4">Arek Lancor adalah alun-alun dan ikon kota Pamekasan, Madura. Tempat ini menjadi pusat aktivitas masyarakat, wisata keluarga, dan berbagai event budaya serta olahraga.</p>
          <div className="flex items-start gap-2 sm:gap-3">
            <Landmark className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Daya Tarik</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Monumen Arek Lancor yang unik dan megah.</li>
                <li>Spot foto menarik, terutama di malam hari dengan lampu warna-warni.</li>
                <li>Sering digunakan untuk event, konser, dan festival kota.</li>
                <li>Tempat favorit untuk jogging, bersepeda, dan rekreasi keluarga.</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <Camera className="w-5 h-5 sm:w-7 sm:h-7 text-pink-600 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Aktivitas</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Berfoto di monumen dan area alun-alun.</li>
                <li>Jogging, bersepeda, atau bermain di area terbuka.</li>
                <li>Menikmati kuliner kaki lima di sekitar Arek Lancor.</li>
                <li>Mengikuti event atau festival yang sering diadakan di sini.</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <Info className="w-5 h-5 sm:w-7 sm:h-7 text-green-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Fasilitas & Akses</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Area parkir luas, toilet, dan taman bermain anak.</li>
                <li>Lokasi sangat strategis di pusat kota Pamekasan.</li>
                <li>Banyak penjual makanan dan minuman di sekitar area.</li>
                <li>Akses mudah dengan kendaraan umum maupun pribadi.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
