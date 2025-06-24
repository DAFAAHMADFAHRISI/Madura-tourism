import Navbar from "../../../components/Navbar";
import Makam1 from "../../../assets/images/Kompleks Pemakaman Raja-Raja Sumenep1.jpg";
import Makam2 from "../../../assets/images/Kompleks Pemakaman Raja-Raja Sumenep2.jpg";
import Makam3 from "../../../assets/images/Kompleks Pemakaman Raja-Raja Sumenep3.jpg";
import { Link } from "react-router-dom";

export default function KompleksPemakamanRajaRajaSumenep() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-yellow-100 via-white to-blue-200">
      <Navbar />
      <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-8 pt-24 md:pt-28 pb-6 md:pb-10 px-2 sm:px-4 md:px-16 animate-fade-in-up">
        <Link to="/pariwisata/sumenep" className="mb-4 self-start px-6 py-2 bg-[#FFD600] hover:bg-yellow-400 text-black font-bold rounded-full shadow border-2 border-yellow-600 flex items-center gap-2 transition-all text-base" style={{ minWidth: '110px', textAlign: 'center' }}>
          <span className="text-lg">←</span> Kembali
        </Link>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <img src={Makam3} alt="Kompleks Pemakaman Raja-Raja Sumenep 3" className="rounded-3xl shadow-lg border border-white/30 object-cover w-full h-40 sm:h-64 md:h-80" />
          <div className="flex gap-2">
            <img src={Makam2} alt="Kompleks Pemakaman Raja-Raja Sumenep 2" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
            <img src={Makam1} alt="Kompleks Pemakaman Raja-Raja Sumenep 1" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
          </div>
          <div className="w-full rounded-xl overflow-hidden border border-gray-300 shadow mb-4 h-32 sm:h-56">
            <iframe
              src="https://www.google.com/maps?q=Kompleks+Pemakaman+Raja-Raja+Sumenep&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Kompleks Pemakaman Raja-Raja Sumenep"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <div className="flex items-center gap-2 sm:gap-4 mb-2">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold font-serif text-gray-800 drop-shadow-lg">Kompleks Pemakaman Raja-Raja Sumenep</h1>
          </div>
          <p className="text-xs sm:text-base text-gray-600 font-medium mb-2">Lokasi: Asta Tinggi, Sumenep, Madura, Jawa Timur.</p>
          <div className="flex flex-col gap-2 text-gray-700">
            <div className="mb-2">
              <span className="text-base sm:text-lg font-semibold">🔍 Daya Tarik</span>
              <p className="text-xs sm:text-sm mt-1">Kompleks pemakaman ini merupakan tempat peristirahatan terakhir para raja dan bangsawan Sumenep. Memiliki arsitektur unik perpaduan Jawa, Madura, dan Eropa, serta suasana sakral dan tenang.</p>
              <p className="text-xs sm:text-sm mt-2">Selain sebagai tempat ziarah, kawasan ini juga menarik untuk wisata sejarah dan religi.</p>
              <p className="text-xs sm:text-sm mt-2">Spot favorit: Gerbang utama, area makam utama, dan relief dinding kuno.</p>
            </div>
            <span className="text-base sm:text-lg font-semibold">🛠️ Fasilitas & Catatan Penting</span>
            <p className="text-xs sm:text-sm mt-1">Tersedia area parkir, toilet, dan warung di sekitar kompleks. Pengunjung diharapkan menjaga ketenangan dan kesopanan selama berada di area makam.</p>
            <p className="text-xs sm:text-sm mt-2">Bawa penutup kepala/topi dan air minum, karena area cukup terbuka dan panas di siang hari.</p>
            <p className="text-xs sm:text-sm mt-2">Hormati aturan dan larangan yang berlaku di area makam.</p>
          </div>
          <div className="mb-2">
            <span className="text-base sm:text-lg font-semibold">🤩 Tips Kunjungan</span>
            <p className="text-xs sm:text-sm mt-1">Datang pagi atau sore hari untuk suasana lebih sejuk dan nyaman.</p>
            <p className="text-xs sm:text-sm mt-2">Gunakan pakaian sopan dan tertutup saat berkunjung.</p>
            <p className="text-xs sm:text-sm mt-2">Jangan lupa membawa kamera untuk mengabadikan arsitektur unik kompleks ini.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
