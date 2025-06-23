import Navbar from "../../../components/Navbar"
import Vihara1 from "../../../assets/images/Vihara Avalokitesvara1.jpg"
import Vihara2 from "../../../assets/images/Vihara Avalokitesvara2.jpg"
import Vihara3 from "../../../assets/images/Vihara Avalokitesvara3.jpg"
import { Landmark, Camera, Info } from "lucide-react"
import { Link } from "react-router-dom"

export default function ViharaAvalokitesvara() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-pink-100 via-white to-yellow-100">
      <Navbar />
      <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-8 pt-24 md:pt-28 pb-6 md:pb-10 px-2 sm:px-4 md:px-16 animate-fade-in-up">
        <Link to="/pariwisata/pamekasan" className="mb-4 self-start px-4 py-2 bg-pink-300 hover:bg-pink-400 text-pink-900 font-semibold rounded-full shadow transition-all text-xs sm:text-sm">Kembali</Link>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <img src={Vihara1} alt="Vihara Avalokitesvara 1" className="rounded-3xl shadow-lg border border-white/30 object-cover w-full h-40 sm:h-64 md:h-80" />
          <div className="flex gap-2">
            <img src={Vihara2} alt="Vihara Avalokitesvara 2" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
            <img src={Vihara3} alt="Vihara Avalokitesvara 3" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
          </div>
          <div className="w-full rounded-xl overflow-hidden border border-gray-300 shadow mb-4 h-32 sm:h-56">
            <iframe src="https://www.google.com/maps?q=Vihara+Avalokitesvara,+Pamekasan,+Jawa+Timur&output=embed" width="100%" height="100%" style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Peta Vihara Avalokitesvara"></iframe>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <div className="flex items-center gap-2 sm:gap-4 mb-2">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold font-serif text-gray-800 drop-shadow-lg">Vihara Avalokitesvara – Pamekasan, Madura</h1>
          </div>
          <p className="text-xs sm:text-base text-gray-600 font-medium mb-2">Lokasi: Pamekasan, Madura, Jawa Timur.</p>
          <p className="text-sm sm:text-lg md:text-xl text-gray-700 font-light mb-4">Vihara Avalokitesvara adalah tempat ibadah umat Buddha yang juga menjadi destinasi wisata religi dan budaya di Pamekasan, Madura.</p>
          <div className="flex items-start gap-2 sm:gap-3">
            <Landmark className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Daya Tarik</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Arsitektur megah dan ornamen khas Tionghoa.</li>
                <li>Pagoda dan patung-patung Buddha yang indah.</li>
                <li>Sering dijadikan lokasi perayaan hari besar agama Buddha.</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <Camera className="w-5 h-5 sm:w-7 sm:h-7 text-pink-600 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Aktivitas</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Berfoto di area vihara dan pagoda.</li>
                <li>Menyaksikan upacara keagamaan dan festival budaya.</li>
                <li>Belajar tentang sejarah dan budaya Tionghoa di Madura.</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <Info className="w-5 h-5 sm:w-7 sm:h-7 text-green-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Fasilitas & Akses</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Area parkir, toilet, dan warung di sekitar vihara.</li>
                <li>Lokasi mudah dijangkau dari pusat kota Pamekasan.</li>
                <li>Terbuka untuk umum, namun tetap menjaga ketenangan dan kesopanan.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
