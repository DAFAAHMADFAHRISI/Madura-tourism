import Navbar from "../../../components/Navbar";
import GiliIyang1 from "../../../assets/images/Gili Iyang1.jpg";
import GiliIyang2 from "../../../assets/images/Gili Iyang2.png";
import GiliIyang3 from "../../../assets/images/Gili Iyang3.jpg";
import { Link } from "react-router-dom";

export default function GiliIyang() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-yellow-100 via-white to-blue-200">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section with Gallery */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-8 pt-24 md:pt-28 pb-6 md:pb-10 px-2 sm:px-4 md:px-16 animate-fade-in-up">
        {/* Tombol Kembali di luar galeri gambar */}
        <Link to="/pariwisata/sumenep" className="mb-4 self-start px-6 py-2 bg-[#FFD600] hover:bg-yellow-400 text-black font-bold rounded-full shadow border-2 border-yellow-600 flex items-center gap-2 transition-all text-base" style={{ minWidth: '110px', textAlign: 'center' }}>
          <span className="text-lg">←</span> Kembali
        </Link>
        {/* Image Gallery */}
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <img src={GiliIyang3} alt="Gili Iyang 3" className="rounded-3xl shadow-lg border border-white/30 object-cover w-full h-40 sm:h-64 md:h-80" />
          <div className="flex gap-2">
            <img src={GiliIyang2} alt="Gili Iyang 2" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
            <img src={GiliIyang1} alt="Gili Iyang 1" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
          </div>
          <div className="w-full rounded-xl overflow-hidden border border-gray-300 shadow mb-4 h-32 sm:h-56">
            <iframe
              src="https://www.google.com/maps?q=Gili+Iyang+Sumenep&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Gili Iyang Sumenep"
            ></iframe>
          </div>
        </div>
        {/* Description Section */}
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <div className="flex items-center gap-2 sm:gap-4 mb-2">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold font-serif text-gray-800 drop-shadow-lg">Gili Iyang</h1>
          </div>
          <p className="text-xs sm:text-base text-gray-600 font-medium mb-2">Lokasi: Kecamatan Dungkek, Kabupaten Sumenep, Madura, Jawa Timur.</p>
          <div className="flex flex-col gap-2 text-gray-700">
            <div className="mb-2">
              <span className="text-base sm:text-lg font-semibold">🔍 Daya Tarik</span>
              <p className="text-xs sm:text-sm mt-1">Pulau Gili Iyang dikenal sebagai "Pulau Oksigen" karena kadar oksigennya yang sangat tinggi, salah satu yang tertinggi di dunia. Pulau ini menawarkan keindahan alam berupa pantai berpasir putih, tebing karst, dan gua-gua alami yang eksotis.</p>
              <p className="text-xs sm:text-sm mt-2">Cocok untuk wisatawan yang mencari ketenangan, udara segar, dan pengalaman unik di pulau kecil yang masih alami.</p>
              <p className="text-xs sm:text-sm mt-2">Spot favorit: Batu Canggah, Pantai Ropet, dan landmark O2 Gili Iyang.</p>
            </div>
            <span className="text-base sm:text-lg font-semibold">🛠️ Fasilitas & Catatan Penting</span>
            <p className="text-xs sm:text-sm mt-1">Fasilitas masih terbatas: penginapan sederhana, warung makan lokal, dan transportasi perahu dari Pelabuhan Dungkek.</p>
            <p className="text-xs sm:text-sm mt-2">Jaringan sinyal dan listrik terbatas di beberapa area. Disarankan membawa perlengkapan pribadi dan uang tunai secukupnya.</p>
            <p className="text-xs sm:text-sm mt-2">Hormati budaya lokal dan jaga kebersihan pulau.</p>
          </div>
          <div className="mb-2">
            <span className="text-base sm:text-lg font-semibold">🤩 Tips Kunjungan</span>
            <p className="text-xs sm:text-sm mt-1">Datang pagi atau sore hari untuk cuaca yang lebih sejuk dan pencahayaan foto yang optimal.</p>
            <p className="text-xs sm:text-sm mt-2">Bawa perlengkapan snorkeling jika ingin menikmati keindahan bawah laut di sekitar pulau.</p>
            <p className="text-xs sm:text-sm mt-2">Pastikan kondisi fisik prima karena akses menuju pulau membutuhkan perjalanan laut.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
