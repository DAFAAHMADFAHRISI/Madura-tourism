import Navbar from "../../../components/Navbar"
import GoaLebar1 from "../../../assets/images/Goa Lebar1.jpg"
import GoaLebar2 from "../../../assets/images/Goa Lebar2.jpg"
import GoaLebar3 from "../../../assets/images/Goa Lebar3.png"
import { Mountain, Camera, Info } from "lucide-react"
import { Link } from "react-router-dom"

export default function GoaLebar() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-green-100 via-white to-yellow-100">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section with Gallery */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-8 pt-24 md:pt-28 pb-6 md:pb-10 px-2 sm:px-4 md:px-16 animate-fade-in-up">
        {/* Tombol Kembali di luar galeri gambar */}
        <Link to="/pariwisata/sampang" className="mb-4 self-start px-4 py-2 bg-green-300 hover:bg-green-400 text-green-900 font-semibold rounded-full shadow transition-all text-xs sm:text-sm">
          Kembali
        </Link>
        {/* Image Gallery */}
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <img src={GoaLebar1} alt="Goa Lebar 1" className="rounded-3xl shadow-lg border border-white/30 object-cover w-full h-40 sm:h-64 md:h-80" />
          <div className="flex gap-2">
            <img src={GoaLebar2} alt="Goa Lebar 2" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
            <img src={GoaLebar3} alt="Goa Lebar 3" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
          </div>
          <div className="w-full rounded-xl overflow-hidden border border-gray-300 shadow mb-4 h-32 sm:h-56">
            <iframe
              src="https://www.google.com/maps?q=Goa+Lebar,+Sampang,+Jawa+Timur&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Goa Lebar"
            ></iframe>
          </div>
        </div>
        {/* Description Section */}
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <div className="flex items-center gap-2 sm:gap-4 mb-2">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold font-serif text-gray-800 drop-shadow-lg">🕳️ Goa Lebar – Sampang, Madura</h1>
          </div>
          <p className="text-xs sm:text-base text-gray-600 font-medium mb-2">Lokasi: Pusat Kota Sampang, Madura, Jawa Timur.</p>
          <p className="text-sm sm:text-lg md:text-xl text-gray-700 font-light mb-4">Goa Lebar adalah objek wisata alam sekaligus sejarah yang terletak di pusat Kota Sampang, Madura. Tempat ini menawarkan pemandangan tebing kapur yang tinggi dan suasana yang sejuk, cocok untuk bersantai maupun belajar sejarah lokal.</p>
          <div className="flex items-start gap-2 sm:gap-3">
            <Mountain className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Daya Tarik</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Goa di tengah kota dengan dinding kapur yang lebar dan tinggi—itulah asal nama "Goa Lebar".</li>
                <li>Memiliki panorama alami dari ketinggian, tempat ideal untuk menikmati pemandangan Kota Sampang, matahari terbit, dan terbenam.</li>
                <li>Terdapat patung tokoh lokal Madura yaitu Sakera, menambah nilai budaya dan keunikan tempat ini.</li>
                <li>Sering digunakan sebagai tempat berfoto, bersantai, atau rekreasi keluarga karena suasananya yang rindang dan alami.</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <Camera className="w-5 h-5 sm:w-7 sm:h-7 text-pink-600 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Aktivitas</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Menyusuri tangga menuju atas bukit kapur</li>
                <li>Duduk santai di gazebo sambil menikmati udara segar</li>
                <li>Foto dengan latar tebing, pepohonan, dan patung Sakera</li>
                <li>Belajar tentang sejarah lokal karena lokasi ini juga dipercaya sebagai tempat pertapaan di masa lalu</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <Info className="w-5 h-5 sm:w-7 sm:h-7 text-green-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Fasilitas & Akses</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Tiket masuk gratis atau sangat murah (hanya bayar parkir)</li>
                <li>Tersedia parkiran, gazebo, toilet, dan warung kecil</li>
                <li>Lokasi sangat mudah dijangkau karena berada di wilayah kota</li>
                <li>Jalanan menuju lokasi sudah baik dan bisa diakses dengan motor atau mobil</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
