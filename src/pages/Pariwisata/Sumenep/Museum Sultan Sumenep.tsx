import Navbar from "../../../components/Navbar";
import Museum1 from "../../../assets/images/Museum Sultan Sumenep1.jpeg";
import Museum2 from "../../../assets/images/Museum Sultan Sumenep2.jpeg";
import Museum3 from "../../../assets/images/Museum Sultan Sumenep3.jpg";
import { Link } from "react-router-dom";

export default function MuseumSultanSumenep() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-yellow-100 via-white to-blue-200">
      <Navbar />
      <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-8 pt-24 md:pt-28 pb-6 md:pb-10 px-2 sm:px-4 md:px-16 animate-fade-in-up">
        <Link to="/pariwisata/sumenep" className="mb-4 self-start px-6 py-2 bg-[#FFD600] hover:bg-yellow-400 text-black font-bold rounded-full shadow border-2 border-yellow-600 flex items-center gap-2 transition-all text-base" style={{ minWidth: '110px', textAlign: 'center' }}>
          <span className="text-lg">←</span> Kembali
        </Link>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <img src={Museum3} alt="Museum Sultan Sumenep 3" className="rounded-3xl shadow-lg border border-white/30 object-cover w-full h-40 sm:h-64 md:h-80" />
          <div className="flex gap-2">
            <img src={Museum2} alt="Museum Sultan Sumenep 2" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
            <img src={Museum1} alt="Museum Sultan Sumenep 1" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
          </div>
          <div className="w-full rounded-xl overflow-hidden border border-gray-300 shadow mb-4 h-32 sm:h-56">
            <iframe
              src="https://www.google.com/maps?q=Museum+Kraton+Sumenep&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Museum Sultan Sumenep"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <div className="flex items-center gap-2 sm:gap-4 mb-2">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold font-serif text-gray-800 drop-shadow-lg">Museum Sultan Sumenep</h1>
          </div>
          <p className="text-xs sm:text-base text-gray-600 font-medium mb-2">Lokasi: Jl. Dr. Soetomo No.6, Sumenep, Madura, Jawa Timur.</p>
          <div className="flex flex-col gap-2 text-gray-700">
            <div className="mb-2">
              <span className="text-base sm:text-lg font-semibold">🔍 Daya Tarik</span>
              <p className="text-xs sm:text-sm mt-1">Museum Sultan Sumenep menyimpan koleksi benda-benda bersejarah peninggalan Keraton Sumenep, seperti kereta kencana, pusaka, dan dokumen kuno. Bangunan museum merupakan bagian dari kompleks keraton yang megah.</p>
              <p className="text-xs sm:text-sm mt-2">Cocok untuk wisata edukasi sejarah dan budaya Madura.</p>
              <p className="text-xs sm:text-sm mt-2">Spot favorit: Ruang koleksi utama, kereta kencana, dan arsitektur bangunan museum.</p>
            </div>
            <span className="text-base sm:text-lg font-semibold">🛠️ Fasilitas & Catatan Penting</span>
            <p className="text-xs sm:text-sm mt-1">Tersedia area parkir, toilet, dan pemandu wisata. Jam buka mengikuti jam kerja pemerintahan setempat.</p>
            <p className="text-xs sm:text-sm mt-2">Dilarang menyentuh koleksi tanpa izin dan menjaga ketenangan selama di dalam museum.</p>
            <p className="text-xs sm:text-sm mt-2">Bawa air minum dan kamera untuk dokumentasi (jika diizinkan).</p>
          </div>
          <div className="mb-2">
            <span className="text-base sm:text-lg font-semibold">🤩 Tips Kunjungan</span>
            <p className="text-xs sm:text-sm mt-1">Datang pagi atau siang hari untuk tur edukasi yang lebih nyaman.</p>
            <p className="text-xs sm:text-sm mt-2">Ikuti tur pemandu untuk penjelasan sejarah yang lebih lengkap.</p>
            <p className="text-xs sm:text-sm mt-2">Hormati aturan dan larangan di area museum.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
