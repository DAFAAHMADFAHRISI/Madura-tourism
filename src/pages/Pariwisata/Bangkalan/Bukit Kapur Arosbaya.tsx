import Navbar from "../../../components/Navbar"
import Arosbaya1 from "../../../assets/images/Bukit Kapur Arosbaya1.jpg"
import Arosbaya2 from "../../../assets/images/Bukit Kapur Arosbaya2.jpg"
import Arosbaya3 from "../../../assets/images/Bukit Kapur Arosbaya3.jpg"
import { Camera, Ticket, Clock, Info } from "lucide-react"
import { Link } from "react-router-dom"

export default function BukitKapurArosbaya() {
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
          <img src={Arosbaya1} alt="Bukit Kapur Arosbaya 1" className="rounded-3xl shadow-lg border border-white/30 object-cover w-full h-40 sm:h-64 md:h-80" />
          <div className="flex gap-2">
            <img src={Arosbaya2} alt="Bukit Kapur Arosbaya 2" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
            <img src={Arosbaya3} alt="Bukit Kapur Arosbaya 3" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
          </div>
          <div className="w-full rounded-xl overflow-hidden border border-gray-300 shadow mb-4 h-32 sm:h-56">
            <iframe
              src="https://www.google.com/maps?q=Bukit+Kapur+Arosbaya,+Bangkalan,+Jawa+Timur&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Bukit Kapur Arosbaya"
            ></iframe>
          </div>
        </div>
        {/* Description Section */}
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <div className="flex items-center gap-2 sm:gap-4 mb-2">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold font-serif text-gray-800 drop-shadow-lg">Bukit Kapur Arosbaya</h1>
          </div>
          <p className="text-xs sm:text-base text-gray-600 font-medium mb-2">Lokasi: Buduran, Kecamatan Arosbaya, Kabupaten Bangkalan, Madura, Jawa Timur.</p>
          {/* Daya Tarik */}
          <div className="flex items-start gap-2 sm:gap-3">
            <Camera className="w-5 h-5 sm:w-7 sm:h-7 text-pink-600 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Daya Tarik</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Tebing-tebing tinggi yang terbentuk alami oleh kegiatan tambang dan cuaca.</li>
                <li>Banyak spot foto Instagramable, terutama di lorong-lorong sempit kapur.</li>
                <li>Pre-wedding dan photoshoot sering dilakukan di sini.</li>
                <li>Warna bebatuan berubah tergantung cahaya, sangat cantik saat pagi dan sore.</li>
              </ul>
            </div>
          </div>
          {/* Harga Tiket & Fasilitas */}
          <div className="flex items-start gap-2 sm:gap-3">
            <Ticket className="w-5 h-5 sm:w-7 sm:h-7 text-green-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Harga Tiket & Fasilitas</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Tiket masuk: sekitar Rp 5.000/orang.</li>
                <li>Parkir motor: Rp 3.000–5.000, mobil: Rp 10.000–20.000.</li>
                <li>Fasilitas masih terbatas:
                  <ul className="list-disc ml-4">
                    <li>Warung lokal di dekat lokasi</li>
                    <li>Tidak banyak toilet umum</li>
                    <li>Jalanan sempit, cukup untuk satu mobil</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* Jam Kunjungan */}
          <div className="flex items-start gap-2 sm:gap-3">
            <Clock className="w-5 h-5 sm:w-7 sm:h-7 text-blue-500 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Jam Kunjungan</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Tidak ada jam operasional resmi, namun disarankan datang pagi (06.00–09.00) atau sore (15.30–17.30).</li>
                <li>Hindari datang saat hujan karena jalanan licin dan berbahaya.</li>
              </ul>
            </div>
          </div>
          {/* Tips Berkunjung */}
          <div className="flex items-start gap-2 sm:gap-3">
            <Info className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Tips Berkunjung</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Gunakan alas kaki yang nyaman dan tidak licin.</li>
                <li>Bawa minuman dan perlengkapan pribadi karena fasilitas minim.</li>
                <li>Datanglah saat cuaca cerah untuk mendapatkan warna tebing terbaik.</li>
                <li>Jangan buang sampah sembarangan — bantu jaga kebersihan!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
