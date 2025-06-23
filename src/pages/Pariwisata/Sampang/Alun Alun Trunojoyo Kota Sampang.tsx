import Navbar from "../../../components/Navbar"
import Alun1 from "../../../assets/images/Alun Alun Trunojoyo Kota Sampang1.jpg"
import Alun2 from "../../../assets/images/Alun Alun Trunojoyo Kota Sampang2.jpg"
import Alun3 from "../../../assets/images/Alun Alun Trunojoyo Kota Sampang3.jpg"
import { Landmark, Camera, Info } from "lucide-react"
import { Link } from "react-router-dom"

export default function AlunAlunTrunojoyoKotaSampang() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-yellow-100 via-white to-green-100">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section with Gallery */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-8 pt-24 md:pt-28 pb-6 md:pb-10 px-2 sm:px-4 md:px-16 animate-fade-in-up">
        {/* Tombol Kembali di luar galeri gambar */}
        <Link to="/pariwisata/sampang" className="mb-4 self-start px-4 py-2 bg-yellow-300 hover:bg-yellow-400 text-yellow-900 font-semibold rounded-full shadow transition-all text-xs sm:text-sm">
          Kembali
        </Link>
        {/* Image Gallery */}
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <img src={Alun1} alt="Alun Alun Trunojoyo Kota Sampang 1" className="rounded-3xl shadow-lg border border-white/30 object-cover w-full h-40 sm:h-64 md:h-80" />
          <div className="flex gap-2">
            <img src={Alun2} alt="Alun Alun Trunojoyo Kota Sampang 2" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
            <img src={Alun3} alt="Alun Alun Trunojoyo Kota Sampang 3" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
          </div>
          <div className="w-full rounded-xl overflow-hidden border border-gray-300 shadow mb-4 h-32 sm:h-56">
            <iframe
              src="https://www.google.com/maps?q=Alun+Alun+Trunojoyo+Sampang,+Jawa+Timur&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Alun Alun Trunojoyo Kota Sampang"
            ></iframe>
          </div>
        </div>
        {/* Description Section */}
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <div className="flex items-center gap-2 sm:gap-4 mb-2">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold font-serif text-gray-800 drop-shadow-lg">Alun Alun Trunojoyo Kota Sampang</h1>
          </div>
          <p className="text-xs sm:text-base text-gray-600 font-medium mb-2">Lokasi: Pusat Kota Sampang, Madura, Jawa Timur.</p>
          <p className="text-sm sm:text-lg md:text-xl text-gray-700 font-light mb-4">Alun Alun Trunojoyo merupakan ruang terbuka hijau dan ikon kota Sampang, Madura. Tempat ini menjadi pusat aktivitas masyarakat, wisata keluarga, dan berbagai event budaya serta olahraga.</p>
          <div className="flex items-start gap-2 sm:gap-3">
            <Landmark className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Daya Tarik</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Desain modern dengan area lapang, taman, dan landmark patung karapan sapi.</li>
                <li>Spot foto menarik, terutama di area tengah dan sekitar monumen.</li>
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
                <li>Berfoto di landmark dan patung karapan sapi.</li>
                <li>Jogging, bersepeda, atau bermain di area terbuka.</li>
                <li>Menikmati kuliner kaki lima di sekitar alun-alun.</li>
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
                <li>Lokasi sangat strategis di pusat kota Sampang.</li>
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
