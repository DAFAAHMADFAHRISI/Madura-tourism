import Navbar from "../../../components/Navbar";
import Pantai1 from "../../../assets/images/Pantai Siring Kemuning1.jpg";
import Pantai2 from "../../../assets/images/Pantai Siring Kemuning2.jpg";
import Pantai3 from "../../../assets/images/Pantai Siring Kemuning3.jpg";
import { Link } from "react-router-dom";

export default function PantaiSiringKemuning() {
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
          <img src={Pantai1} alt="Pantai Siring Kemuning 1" className="rounded-3xl shadow-lg border border-white/30 object-cover w-full h-40 sm:h-64 md:h-80" />
          <div className="flex gap-2">
            <img src={Pantai2} alt="Pantai Siring Kemuning 2" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
            <img src={Pantai3} alt="Pantai Siring Kemuning 3" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
          </div>
          <div className="w-full rounded-xl overflow-hidden border border-gray-300 shadow mb-4 h-32 sm:h-56">
            <iframe
              src="https://www.google.com/maps?q=Pantai+Siring+Kemuning,+Bangkalan,+Jawa+Timur&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Pantai Siring Kemuning"
            ></iframe>
          </div>
        </div>
        {/* Description Section */}
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <div className="flex items-center gap-2 sm:gap-4 mb-2">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold font-serif text-gray-800 drop-shadow-lg">Pantai Siring Kemuning</h1>
          </div>
          <p className="text-xs sm:text-base text-gray-600 font-medium mb-2">Lokasi: Desa Mecajah, Kecamatan Tanjung Bumi, Kabupaten Bangkalan, Madura, Jawa Timur.</p>
          <div className="text-sm sm:text-lg md:text-xl text-gray-700 font-light mb-4 space-y-3">
            <div>
              <span className="font-semibold">🏖️ Daya Tarik & Fasilitas</span><br />
              Pasir putih kekuningan lembut, air laut biru kehijauan, dan ombak tenang siap menyambut.<br />
              Cocok untuk family outing: lari pagi, voli, bola, dan bermain air ringan.<br />
              Spot sunset/sunrise memukau—dijuluki "Kuta-nya Madura" karena panorama laut yang mirip dengan Kuta Bali.<br />
              Suasananya tenang dan alami, sering kali sepi dari keramaian.<br />
              Fasilitas sangat terbatas: hanya parkir, beberapa pohon untuk berteduh, warung sederhana, dan toilet/MIKRO diberdayakan warga lokal.
            </div>
            <div>
              <span className="font-semibold">🍽️ Kuliner</span><br />
              Ada jajanan lokal seperti rujak Madura, ikan bakar, dan hasil laut segar lainnya.<br />
              Pengunjung dianjurkan membawa bekal sendiri karena warung terbatas.
            </div>
            <div>
              <span className="font-semibold">🛠️ Tips Berkunjung</span><br />
              Waktu terbaik: pagi atau sore untuk suasana sejuk dan pencahayaan cantik.<br />
              Gunakan sepatu atau sandal yang tahan licin, terutama saat jalan masuk licin atau setelah hujan.<br />
              Bawa bekal, tikar, minuman, dan bawa kantong sampah sendiri.<br />
              Waspadai ombak meskipun relatif tenang, dan pulang sebelum gelap karena pencahayaan jalan minim.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
