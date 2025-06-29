import Navbar from "../../../components/Navbar"
import Jaddih1 from "../../../assets/images/Jaddih1.jpg"
import Jaddih2 from "../../../assets/images/Jaddih2.jpg"
import Jaddih3 from "../../../assets/images/Jaddih3.jpg"
import { Mountain, Camera, Waves, Sun } from "lucide-react"
import { Link } from "react-router-dom"

export default function JaddihLimestoneHill() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-yellow-100 via-white to-blue-200">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section with Gallery */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-8 pt-24 md:pt-28 pb-6 md:pb-10 px-2 sm:px-4 md:px-16 animate-fade-in-up">
        {/* Tombol Kembali di luar galeri gambar */}
        <Link to="/pariwisata/bangkalan" className="mb-4 self-start px-6 py-2 bg-[#FFD600] hover:bg-yellow-400 text-black font-bold rounded-full shadow border-2 border-yellow-600 flex items-center gap-2 transition-all text-base" style={{ minWidth: '110px', textAlign: 'center' }}>
          <span className="text-lg">←</span> Kembali
        </Link>
        {/* Image Gallery */}
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <img src={Jaddih1} alt="Jaddih Limestone Hill 1" className="rounded-3xl shadow-lg border border-white/30 object-cover w-full h-40 sm:h-64 md:h-80" />
          <div className="flex gap-2">
            <img src={Jaddih2} alt="Jaddih Limestone Hill 2" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
            <img src={Jaddih3} alt="Jaddih Limestone Hill 3" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
          </div>
          <div className="w-full rounded-xl overflow-hidden border border-gray-300 shadow mb-4 h-32 sm:h-56">
            <iframe
              src="https://www.google.com/maps?q=Bukit+Kapur+Jaddih,+Socah,+Bangkalan,+Jawa+Timur&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Jaddih Limestone Hill"
            ></iframe>
          </div>
        </div>
        {/* Description Section */}
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <div className="flex items-center gap-2 sm:gap-4 mb-2">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold font-serif text-gray-800 drop-shadow-lg">Jaddih Limestone Hill</h1>
          </div>
          <p className="text-xs sm:text-base text-gray-600 font-medium mb-2">Lokasi: Desa Jaddih, Kecamatan Socah, Kabupaten Bangkalan, Madura, Jawa Timur.</p>
          <p className="text-sm sm:text-lg md:text-xl text-gray-700 font-light mb-4">Jaddih Limestone Hill adalah salah satu destinasi wisata alam unik yang terletak di Desa Jaddih, Kecamatan Socah, Kabupaten Bangkalan, Pulau Madura, Jawa Timur. Tempat ini dikenal dengan sebutan Bukit Kapur Jaddih dan menawarkan pemandangan alam yang eksotis dan Instagramable.</p>
          <div className="flex items-start gap-2 sm:gap-3">
            <Mountain className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Bekas Tambang Kapur</span>
              <p className="text-gray-700 text-xs sm:text-sm">Area ini dulunya adalah lokasi penambangan kapur aktif, dan meninggalkan jejak berupa tebing-tebing putih besar yang terukir indah, seolah pahatan raksasa.</p>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <Camera className="w-5 h-5 sm:w-7 sm:h-7 text-pink-600 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Spot Foto Instagramable</span>
              <p className="text-gray-700 text-xs sm:text-sm">Banyak wisatawan datang untuk mengambil foto dengan latar dinding kapur, lorong-lorong kapur yang unik, dan panorama alam dari ketinggian.</p>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <Waves className="w-5 h-5 sm:w-7 sm:h-7 text-blue-500 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Kolam Biru (Blue Pool)</span>
              <p className="text-gray-700 text-xs sm:text-sm">Terdapat kolam alami dari genangan air bekas tambang, dengan warna air yang biru kehijauan, sangat menarik sebagai tempat foto maupun sekadar bersantai.</p>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <Sun className="w-5 h-5 sm:w-7 sm:h-7 text-orange-400 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Pemandangan Sunset dan Sunrise</span>
              <p className="text-gray-700 text-xs sm:text-sm">Karena berada di dataran tinggi, Jaddih Limestone Hill menawarkan view matahari terbit dan terbenam yang menawan.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
