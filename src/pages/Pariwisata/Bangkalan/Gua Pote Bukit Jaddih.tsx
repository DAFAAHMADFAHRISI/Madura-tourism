import Navbar from "../../../components/Navbar";
import GuaPote1 from "../../../assets/images/Gua Pote Bukit Jaddih1.jpg";
import GuaPote2 from "../../../assets/images/Gua Pote Bukit Jaddih2.jpg";
import GuaPote3 from "../../../assets/images/Gua Pote Bukit Jaddih3.jpg";
import { Link } from "react-router-dom";
import { Mountain, Wrench } from "lucide-react";

export default function GuaPoteBukitJaddih() {
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
          <img src={GuaPote1} alt="Gua Pote Bukit Jaddih 1" className="rounded-3xl shadow-lg border border-white/30 object-cover w-full h-40 sm:h-64 md:h-80" />
          <div className="flex gap-2">
            <img src={GuaPote2} alt="Gua Pote Bukit Jaddih 2" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
            <img src={GuaPote3} alt="Gua Pote Bukit Jaddih 3" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
          </div>
          <div className="w-full rounded-xl overflow-hidden border border-gray-300 shadow mb-4 h-32 sm:h-56">
            <iframe
              src="https://www.google.com/maps?q=Gua+Pote+Bukit+Jaddih,+Socah,+Bangkalan,+Jawa+Timur&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Gua Pote Bukit Jaddih"
            ></iframe>
          </div>
        </div>
        {/* Description Section */}
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <div className="flex items-center gap-2 sm:gap-4 mb-2">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold font-serif text-gray-800 drop-shadow-lg">Gua Pote Bukit Jaddih</h1>
          </div>
          <p className="text-xs sm:text-base text-gray-600 font-medium mb-2">Lokasi: Desa Jaddih, Kecamatan Socah, Kabupaten Bangkalan, Madura, Jawa Timur.</p>
          <div className="flex items-start gap-2 sm:gap-3 mb-2">
            <Mountain className="w-5 h-5 sm:w-7 sm:h-7 text-green-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">🌲 Daya Tarik & Keunikan</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Sebuah gua dan lembah kapur alami yang membentuk kolam air jernih dari mata air di dasar gua.</li>
                <li>Dikelilingi oleh tebing kapur tinggi bercahaya putih, sangat fotogenik dan dramatis, terutama saat sinar matahari menembus celah-celah.</li>
                <li>Menawarkan sensasi berenang atau naik rakit di kolam alami; sering dibuka oleh pengelola setempat dengan rakit kecil pengantar.</li>
                <li>Kombinasi antara suasana gua, kolam alami, dan formasi karst menjadikannya spot eksklusif untuk pecinta alam dan fotografer.</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3 mb-2">
            <Wrench className="w-5 h-5 sm:w-7 sm:h-7 text-blue-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">🔧 Fasilitas & Akses</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Terdapat rakit sewa (raft) agar pengunjung bisa bermain air atau mengelilingi kolam—biayanya sangat terjangkau.</li>
                <li>Masih ada aktivitas penambangan kapur aktif di area sekitar—pengunjung akan melihat truk dan pekerja memotong batu di sekeliling gua.</li>
                <li>Akses melalui jalan kampung sempit dan bergelombang, jadi disarankan menggunakan kendaraan yang tangguh.</li>
                <li>Area parkir dan warung lokal tersedia di dekat lokasi, namun secara umum fasilitas masih sederhana.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
