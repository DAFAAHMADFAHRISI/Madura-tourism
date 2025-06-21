import Navbar from "../../../components/Navbar";
import BukitKapur1 from "../../../assets/images/Bukit Kapur1.jpg";
import BukitKapur2 from "../../../assets/images/Bukit Kapur2.jpg";
import BukitKapur3 from "../../../assets/images/Bukit Kapur3.jpg";
import { Link } from "react-router-dom";

export default function BukitKapurAermataBangkalan() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-yellow-100 via-white to-blue-200">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section with Gallery */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-8 pt-24 md:pt-28 pb-6 md:pb-10 px-2 sm:px-4 md:px-16 animate-fade-in-up">
        {/* Tombol Kembali di luar galeri gambar */}
        <Link to="/pariwisata/bangkalan" className="mb-4 self-start px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold rounded-full shadow transition-all text-xs sm:text-sm">
          Kembali
        </Link>
        {/* Image Gallery */}
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <img src={BukitKapur3} alt="Bukit Kapur Aermata Bangkalan 3" className="rounded-3xl shadow-lg border border-white/30 object-cover w-full h-40 sm:h-64 md:h-80" />
          <div className="flex gap-2">
            <img src={BukitKapur2} alt="Bukit Kapur Aermata Bangkalan 2" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
            <img src={BukitKapur1} alt="Bukit Kapur Aermata Bangkalan 1" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
          </div>
          <div className="w-full rounded-xl overflow-hidden border border-gray-300 shadow mb-4 h-32 sm:h-56">
            <iframe
              src="https://www.google.com/maps?q=Bukit+Kapur+Aermata+Bangkalan&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Bukit Kapur Aermata Bangkalan"
            ></iframe>
          </div>
        </div>
        {/* Description Section */}
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <div className="flex items-center gap-2 sm:gap-4 mb-2">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold font-serif text-gray-800 drop-shadow-lg">Bukit Kapur Aermata Bangkalan</h1>
          </div>
          <p className="text-xs sm:text-base text-gray-600 font-medium mb-2">Lokasi: Aermata, Bangkalan, Madura, Jawa Timur.</p>
          <div className="flex flex-col gap-2 text-gray-700">
            <div className="mb-2">
              <span className="text-base sm:text-lg font-semibold">🔍 Daya Tarik</span>
              <p className="text-xs sm:text-sm mt-1">Formasi tebing kapur merah-kecoklatan hasil pahatan tambang, lengkap dengan lorong, gua kecil, dan relief alami yang artistik <br/>
              </p>
              <p className="text-xs sm:text-sm mt-2">Sering disebut "Petra"nya Indonesia atau mirip lanskap Mesir karena kesan dramatis dan eksotis.</p>
              <p className="text-xs sm:text-sm mt-2">Cocok untuk pre-wedding/fotografi, terutama di cahaya sore atau sinar terik yang menciptakan kontras dramatis pada tebing.</p>
            </div>
            <span className="text-base sm:text-lg font-semibold">🛠️ Fasilitas & Catatan Penting</span>
            <p className="text-xs sm:text-sm mt-1">Masih aktif sebagai tambang: waspadai kendaraan berat dan potensi longsor <br/>
            </p>
            <p className="text-xs sm:text-sm mt-2">Tidak banyak fasilitas umum: minim toilet, tempat duduk, atau tempat sampah; ada warung lokal dan guide jika diperlukan.</p>
            <p className="text-xs sm:text-sm mt-2">Medan jalannya sempit & licin saat hujan—hati-hati jika membawa mobil dan pilih waktu kunjungan pagi atau sore untuk kondisi terbaik dan pencahayaan optimal.</p>
          </div>
          <div className="mb-2">
            <span className="text-base sm:text-lg font-semibold">🤩 Tips Kunjungan</span>
            <p className="text-xs sm:text-sm mt-1">Datang pagi untuk olahraga atau sore untuk mendapatkan cahaya lembut/fotogenik.</p>
            <p className="text-xs sm:text-sm mt-2">Gunakan alas kaki yang nyaman dan kuat, bawa air minum, dan hindari musim hujan karena licin.</p>
            <p className="text-xs sm:text-sm mt-2">Hormati lingkungan—bawa kembali sampah dan jangan merusak struktur kapur.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
