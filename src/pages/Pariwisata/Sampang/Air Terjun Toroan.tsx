import Navbar from "../../../components/Navbar"
import Toroan1 from "../../../assets/images/Air Terjun Toroan1.jpg"
import Toroan2 from "../../../assets/images/Air Terjun Toroan2.jpg"
import Toroan3 from "../../../assets/images/Air Terjun Toroan3.jpg"
import { Waves, Camera, TreePalm, Sun, Info } from "lucide-react"
import { Link } from "react-router-dom"

export default function AirTerjunToroan() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-blue-100 via-white to-green-200">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section with Gallery */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-8 pt-24 md:pt-28 pb-6 md:pb-10 px-2 sm:px-4 md:px-16 animate-fade-in-up">
        {/* Tombol Kembali di luar galeri gambar */}
        <Link to="/pariwisata/sampang" className="mb-4 self-start px-4 py-2 bg-blue-300 hover:bg-blue-400 text-blue-900 font-semibold rounded-full shadow transition-all text-xs sm:text-sm">
          Kembali
        </Link>
        {/* Image Gallery */}
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <img src={Toroan1} alt="Air Terjun Toroan 1" className="rounded-3xl shadow-lg border border-white/30 object-cover w-full h-40 sm:h-64 md:h-80" />
          <div className="flex gap-2">
            <img src={Toroan2} alt="Air Terjun Toroan 2" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
            <img src={Toroan3} alt="Air Terjun Toroan 3" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
          </div>
          <div className="w-full rounded-xl overflow-hidden border border-gray-300 shadow mb-4 h-32 sm:h-56">
            <iframe
              src="https://www.google.com/maps?q=Air+Terjun+Toroan,+Ketapang+Daya,+Sampang,+Jawa+Timur&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Air Terjun Toroan"
            ></iframe>
          </div>
        </div>
        {/* Description Section */}
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <div className="flex items-center gap-2 sm:gap-4 mb-2">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold font-serif text-gray-800 drop-shadow-lg">🌊 Air Terjun Toroan – Sampang, Madura</h1>
          </div>
          <p className="text-xs sm:text-base text-gray-600 font-medium mb-2">Lokasi: Desa Ketapang Daya, Kecamatan Ketapang, Kabupaten Sampang, Madura, Jawa Timur.</p>
          <p className="text-sm sm:text-lg md:text-xl text-gray-700 font-light mb-4">Air Terjun Toroan merupakan satu-satunya air terjun di Pulau Madura yang memiliki keunikan luar biasa karena langsung bermuara ke laut. Terletak di Desa Ketapang Daya, Kecamatan Ketapang, Kabupaten Sampang, destinasi ini menjadi favorit wisatawan yang ingin menikmati perpaduan antara air terjun dan panorama laut.</p>
          <div className="flex items-start gap-2 sm:gap-3">
            <Waves className="w-5 h-5 sm:w-7 sm:h-7 text-blue-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Air terjun langsung ke laut</span>
              <p className="text-gray-700 text-xs sm:text-sm">Air terjun setinggi sekitar 20 meter ini mengalir deras langsung ke pantai berbatu di Laut Jawa, menciptakan pemandangan yang sangat unik dan jarang ditemukan di tempat lain.</p>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <TreePalm className="w-5 h-5 sm:w-7 sm:h-7 text-green-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Pemandangan alami dan asri</span>
              <p className="text-gray-700 text-xs sm:text-sm">Dikelilingi pepohonan rindang dan batuan besar, suasananya sejuk dan damai, cocok untuk bersantai atau sekadar menikmati suara alam.</p>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <Camera className="w-5 h-5 sm:w-7 sm:h-7 text-pink-600 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Spot foto eksotis</span>
              <p className="text-gray-700 text-xs sm:text-sm">Kombinasi air terjun, pantai, dan cahaya matahari menjadikan tempat ini sangat Instagramable, baik pagi maupun sore hari.</p>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <Sun className="w-5 h-5 sm:w-7 sm:h-7 text-orange-400 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Aktivitas yang Bisa Dilakukan</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Menikmati keindahan air terjun dari berbagai sudut</li>
                <li>Berpiknik di sekitar area pohon</li>
                <li>Berfoto di tepi air terjun dan batuan</li>
                <li>Menikmati suara deburan ombak dan percikan air dari ketinggian</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <Info className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Harga & Fasilitas</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Tiket masuk: sekitar Rp 5.000–6.000</li>
                <li>Parkir: tersedia untuk motor dan mobil</li>
                <li>Warung sederhana: menjual makanan ringan dan minuman</li>
                <li>Toilet dasar: tersedia namun terbatas</li>
                <li>Trekking ringan: dari parkiran menuju lokasi ± 50 meter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
