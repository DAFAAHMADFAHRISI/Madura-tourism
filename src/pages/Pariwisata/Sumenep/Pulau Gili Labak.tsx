import Navbar from "../../../components/Navbar";
import PulauGiliLabak1 from "../../../assets/images/Pulau Gili Labak1.jpg";
import PulauGiliLabak2 from "../../../assets/images/Pulau Gili Labak2.jpg";
import PulauGiliLabak3 from "../../../assets/images/Pulau Gili Labak3.jpg";
import { Link } from "react-router-dom";

export default function PulauGiliLabak() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-yellow-100 via-white to-blue-200">
      <Navbar />
      <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-8 pt-24 md:pt-28 pb-6 md:pb-10 px-2 sm:px-4 md:px-16 animate-fade-in-up">
        <Link to="/pariwisata/sumenep" className="mb-4 self-start px-6 py-2 bg-[#FFD600] hover:bg-yellow-400 text-black font-bold rounded-full shadow border-2 border-yellow-600 flex items-center gap-2 transition-all text-base" style={{ minWidth: '110px', textAlign: 'center' }}>
          <span className="text-lg">←</span> Kembali
        </Link>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <img src={PulauGiliLabak3} alt="Pulau Gili Labak 3" className="rounded-3xl shadow-lg border border-white/30 object-cover w-full h-40 sm:h-64 md:h-80" />
          <div className="flex gap-2">
            <img src={PulauGiliLabak2} alt="Pulau Gili Labak 2" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
            <img src={PulauGiliLabak1} alt="Pulau Gili Labak 1" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
          </div>
          <div className="w-full rounded-xl overflow-hidden border border-gray-300 shadow mb-4 h-32 sm:h-56">
            <iframe
              src="https://www.google.com/maps?q=Pulau+Gili+Labak+Sumenep&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Pulau Gili Labak Sumenep"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <div className="flex items-center gap-2 sm:gap-4 mb-2">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold font-serif text-gray-800 drop-shadow-lg">Pulau Gili Labak</h1>
          </div>
          <p className="text-xs sm:text-base text-gray-600 font-medium mb-2">Lokasi: Kecamatan Talango, Kabupaten Sumenep, Madura, Jawa Timur.</p>
          <div className="flex flex-col gap-2 text-gray-700">
            <div className="mb-2">
              <span className="text-base sm:text-lg font-semibold">🔍 Daya Tarik</span>
              <p className="text-xs sm:text-sm mt-1">Pulau Gili Labak terkenal dengan pasir putihnya yang halus, air laut jernih, dan keindahan bawah laut yang memukau. Cocok untuk snorkeling, diving, dan camping di tepi pantai.</p>
              <p className="text-xs sm:text-sm mt-2">Pulau kecil ini menawarkan suasana tenang, jauh dari keramaian, dan sangat cocok untuk liburan privat atau bersama keluarga.</p>
              <p className="text-xs sm:text-sm mt-2">Spot favorit: Pantai utama, area snorkeling, dan sunrise/sunset di tepi pantai.</p>
            </div>
            <span className="text-base sm:text-lg font-semibold">🛠️ Fasilitas & Catatan Penting</span>
            <p className="text-xs sm:text-sm mt-1">Fasilitas terbatas: hanya ada warung sederhana, toilet umum, dan area camping. Tidak ada penginapan permanen di pulau.</p>
            <p className="text-xs sm:text-sm mt-2">Transportasi perahu dari Pelabuhan Kalianget atau Tanjung Sumenep. Bawa perlengkapan pribadi dan logistik secukupnya.</p>
            <p className="text-xs sm:text-sm mt-2">Jaga kebersihan dan kelestarian pulau, serta patuhi aturan lokal.</p>
          </div>
          <div className="mb-2">
            <span className="text-base sm:text-lg font-semibold">🤩 Tips Kunjungan</span>
            <p className="text-xs sm:text-sm mt-1">Datang pagi hari untuk menghindari ombak besar dan cuaca panas.</p>
            <p className="text-xs sm:text-sm mt-2">Bawa alat snorkeling/diving sendiri jika ingin menikmati keindahan bawah laut.</p>
            <p className="text-xs sm:text-sm mt-2">Siapkan kamera untuk mengabadikan momen indah di pulau ini.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
