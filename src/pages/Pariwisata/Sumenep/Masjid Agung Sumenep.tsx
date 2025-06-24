import Navbar from "../../../components/Navbar";
import Masjid1 from "../../../assets/images/Masjid Agung Sumenep1.jpg";
import Masjid2 from "../../../assets/images/Masjid Agung Sumenep2.jpg";
import Masjid3 from "../../../assets/images/Masjid Agung Sumenep3.jpg";
import { Link } from "react-router-dom";

export default function MasjidAgungSumenep() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-yellow-100 via-white to-blue-200">
      <Navbar />
      <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-8 pt-24 md:pt-28 pb-6 md:pb-10 px-2 sm:px-4 md:px-16 animate-fade-in-up">
        <Link to="/pariwisata/sumenep" className="mb-4 self-start px-6 py-2 bg-[#FFD600] hover:bg-yellow-400 text-black font-bold rounded-full shadow border-2 border-yellow-600 flex items-center gap-2 transition-all text-base" style={{ minWidth: '110px', textAlign: 'center' }}>
          <span className="text-lg">←</span> Kembali
        </Link>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <img src={Masjid3} alt="Masjid Agung Sumenep 3" className="rounded-3xl shadow-lg border border-white/30 object-cover w-full h-40 sm:h-64 md:h-80" />
          <div className="flex gap-2">
            <img src={Masjid2} alt="Masjid Agung Sumenep 2" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
            <img src={Masjid1} alt="Masjid Agung Sumenep 1" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
          </div>
          <div className="w-full rounded-xl overflow-hidden border border-gray-300 shadow mb-4 h-32 sm:h-56">
            <iframe
              src="https://www.google.com/maps?q=Masjid+Agung+Sumenep&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Masjid Agung Sumenep"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <div className="flex items-center gap-2 sm:gap-4 mb-2">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold font-serif text-gray-800 drop-shadow-lg">Masjid Agung Sumenep</h1>
          </div>
          <p className="text-xs sm:text-base text-gray-600 font-medium mb-2">Lokasi: Jl. Trunojoyo, Sumenep, Madura, Jawa Timur.</p>
          <div className="flex flex-col gap-2 text-gray-700">
            <div className="mb-2">
              <span className="text-base sm:text-lg font-semibold">🔍 Daya Tarik</span>
              <p className="text-xs sm:text-sm mt-1">Masjid Agung Sumenep adalah salah satu masjid tertua dan termegah di Madura, dengan arsitektur perpaduan Tionghoa, Jawa, dan Madura. Memiliki gerbang ikonik berwarna kuning dan putih, serta halaman luas yang asri.</p>
              <p className="text-xs sm:text-sm mt-2">Masjid ini menjadi pusat kegiatan keagamaan dan wisata religi di Sumenep.</p>
              <p className="text-xs sm:text-sm mt-2">Spot favorit: Gerbang utama, menara masjid, dan area dalam masjid.</p>
            </div>
            <span className="text-base sm:text-lg font-semibold">🛠️ Fasilitas & Catatan Penting</span>
            <p className="text-xs sm:text-sm mt-1">Tersedia area parkir luas, toilet, tempat wudhu, dan area istirahat. Pengunjung diharapkan menjaga ketenangan dan kebersihan masjid.</p>
            <p className="text-xs sm:text-sm mt-2">Buka untuk umum, namun harap berpakaian sopan dan menghormati waktu ibadah.</p>
            <p className="text-xs sm:text-sm mt-2">Dilarang merokok dan membuang sampah sembarangan di area masjid.</p>
          </div>
          <div className="mb-2">
            <span className="text-base sm:text-lg font-semibold">🤩 Tips Kunjungan</span>
            <p className="text-xs sm:text-sm mt-1">Datang pagi atau sore hari untuk suasana lebih sejuk dan pencahayaan foto yang indah.</p>
            <p className="text-xs sm:text-sm mt-2">Gunakan pakaian sopan dan tertutup saat berkunjung.</p>
            <p className="text-xs sm:text-sm mt-2">Jangan lupa membawa kamera untuk mengabadikan keindahan arsitektur masjid.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
