import Navbar from "../../../components/Navbar"
import Camplong1 from "../../../assets/images/Pantai Camplong1.jpg"
import Camplong2 from "../../../assets/images/Pantai Camplong2.jpg"
import Camplong3 from "../../../assets/images/Pantai Camplong3.jpg"
import { Waves, TreePalm, Sun, Info, MapPin, Users } from "lucide-react"
import { Link } from "react-router-dom"

export default function PantaiCamplong() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-blue-100 via-white to-yellow-100">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section with Gallery */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-8 pt-24 md:pt-28 pb-6 md:pb-10 px-2 sm:px-4 md:px-16 animate-fade-in-up">
        {/* Tombol Kembali di luar galeri gambar */}
        <Link to="/pariwisata/sampang" className="mb-4 self-start px-6 py-2 bg-[#FFD600] hover:bg-yellow-400 text-black font-bold rounded-full shadow border-2 border-yellow-600 flex items-center gap-2 transition-all text-base" style={{ minWidth: '110px', textAlign: 'center' }}>
          <span className="text-lg">←</span> Kembali
        </Link>
        {/* Image Gallery */}
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <img src={Camplong1} alt="Pantai Camplong 1" className="rounded-3xl shadow-lg border border-white/30 object-cover w-full h-40 sm:h-64 md:h-80" />
          <div className="flex gap-2">
            <img src={Camplong2} alt="Pantai Camplong 2" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
            <img src={Camplong3} alt="Pantai Camplong 3" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
          </div>
          <div className="w-full rounded-xl overflow-hidden border border-gray-300 shadow mb-4 h-32 sm:h-56">
            <iframe
              src="https://www.google.com/maps?q=Pantai+Camplong,+Sampang,+Jawa+Timur&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Pantai Camplong"
            ></iframe>
          </div>
        </div>
        {/* Description Section */}
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <div className="flex items-center gap-2 sm:gap-4 mb-2">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold font-serif text-gray-800 drop-shadow-lg">🌅 Pantai Camplong – Sampang, Madura</h1>
          </div>
          <p className="text-xs sm:text-base text-gray-600 font-medium mb-2">Lokasi: Kecamatan Camplong, Kabupaten Sampang, Madura, Jawa Timur.</p>
          <p className="text-sm sm:text-lg md:text-xl text-gray-700 font-light mb-4">Pantai Camplong berada di Kecamatan Camplong, Kabupaten Sampang, menjadi destinasi andalan bagi wisata keluarga maupun solo traveler. Terkenal dengan:</p>
          <div className="flex items-start gap-2 sm:gap-3">
            <Waves className="w-5 h-5 sm:w-7 sm:h-7 text-blue-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Pasir putih kecokelatan</span>
              <p className="text-gray-700 text-xs sm:text-sm">Lembut dan menyenangkan untuk berjalan atau bermain.</p>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <Sun className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-500 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Air laut tenang & jernih</span>
              <p className="text-gray-700 text-xs sm:text-sm">Cocok untuk berenang atau sekadar merendam kaki.</p>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <TreePalm className="w-5 h-5 sm:w-7 sm:h-7 text-green-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Pepohonan rindang & taman bermain</span>
              <p className="text-gray-700 text-xs sm:text-sm">Gazebo dan taman bermain anak untuk suasana santai bersama keluarga.</p>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <Users className="w-5 h-5 sm:w-7 sm:h-7 text-pink-600 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Area landas pantai luas</span>
              <p className="text-gray-700 text-xs sm:text-sm">Cocok untuk voli, futsal pantai, piknik, atau sekadar bersantai dengan tikar.</p>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <Info className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Fasilitas & Aktivitas</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Area parkir luas, termasuk untuk bus dan rombongan keluarga</li>
                <li>Warung sederhana serta penyewaan tikar dan pelampung</li>
                <li>Penginapan atau restoran tak jauh dari pantai</li>
                <li>Toilet, musala, gazebo, perosotan, ayunan — nyaman untuk keluarga dengan anak-anak</li>
                <li>Penyewaan perahu untuk menikmati pantai dari tengah laut</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <Info className="w-5 h-5 sm:w-7 sm:h-7 text-blue-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Biaya Masuk & Parkir</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Tiket masuk: dewasa sekitar Rp 10.000–15.000, anak-anak Rp 5.000, balita gratis</li>
                <li>Parkir: motor Rp 3.000–5.000, mobil Rp 5.000–10.000</li>
                <li>Sewa perahu: sekitar Rp 10.000/orang untuk pengalaman mengapung di lautan</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <MapPin className="w-5 h-5 sm:w-7 sm:h-7 text-green-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Akses & Lokasi</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Terletak sekitar 9 km dari pusat Sampang – hanya 10–15 menit berkendara</li>
                <li>Berada di jalur utama Bangkalan‑Sampang‑Pamekasan, mudah dijangkau via angkutan umum maupun kendaraan pribadi</li>
                <li>Strategis untuk dijadikan spot singgah dalam perjalanan keliling Madura</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
