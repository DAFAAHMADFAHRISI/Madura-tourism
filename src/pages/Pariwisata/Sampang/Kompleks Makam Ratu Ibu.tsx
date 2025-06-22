import Navbar from "../../../components/Navbar"
import Makam1 from "../../../assets/images/Kompleks Makam Ratu Ibu1.jpg"
import Makam2 from "../../../assets/images/Kompleks Makam Ratu Ibu2.jpg"
import Makam3 from "../../../assets/images/Kompleks Makam Ratu Ibu3.jpg"
import { Landmark, Camera, Info } from "lucide-react"
import { Link } from "react-router-dom"

export default function KompleksMakamRatuIbu() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-yellow-100 via-white to-green-100">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section with Gallery */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-8 pt-24 md:pt-28 pb-6 md:pb-10 px-2 sm:px-4 md:px-16 animate-fade-in-up">
        {/* Tombol Kembali di luar galeri gambar */}
        <Link to="/pariwisata/sampang" className="mb-4 self-start px-4 py-2 bg-yellow-300 hover:bg-yellow-400 text-yellow-900 font-semibold rounded-full shadow transition-all text-xs sm:text-sm">
          Kembali
        </Link>
        {/* Image Gallery */}
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <img src={Makam1} alt="Kompleks Makam Ratu Ibu 1" className="rounded-3xl shadow-lg border border-white/30 object-cover w-full h-40 sm:h-64 md:h-80" />
          <div className="flex gap-2">
            <img src={Makam2} alt="Kompleks Makam Ratu Ibu 2" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
            <img src={Makam3} alt="Kompleks Makam Ratu Ibu 3" className="rounded-2xl shadow-md border border-white/20 object-cover w-1/2 h-20 sm:h-40" />
          </div>
          <div className="w-full rounded-xl overflow-hidden border border-gray-300 shadow mb-4 h-32 sm:h-56">
            <iframe
              src="https://www.google.com/maps?q=Kompleks+Makam+Ratu+Ibu,+Sampang,+Jawa+Timur&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Kompleks Makam Ratu Ibu"
            ></iframe>
          </div>
        </div>
        {/* Description Section */}
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <div className="flex items-center gap-2 sm:gap-4 mb-2">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold font-serif text-gray-800 drop-shadow-lg">Kompleks Makam Ratu Ibu – Sampang, Madura</h1>
          </div>
          <p className="text-xs sm:text-base text-gray-600 font-medium mb-2">Lokasi: Sampang, Madura, Jawa Timur.</p>
          <p className="text-sm sm:text-lg md:text-xl text-gray-700 font-light mb-4">Kompleks Makam Ratu Ibu merupakan salah satu situs sejarah dan religi penting di Sampang, Madura. Tempat ini menjadi destinasi ziarah dan wisata budaya, menampilkan arsitektur kuno, makam-makam bersejarah, dan nuansa spiritual yang kental.</p>
          <div className="flex items-start gap-2 sm:gap-3">
            <Landmark className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Daya Tarik</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Kompleks makam kuno dengan gapura dan arsitektur khas Jawa-Madura.</li>
                <li>Tempat peristirahatan Ratu Ibu, tokoh penting dalam sejarah Madura.</li>
                <li>Lingkungan asri, tenang, dan penuh nuansa religius.</li>
                <li>Sering dijadikan tujuan ziarah dan wisata sejarah.</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <Camera className="w-5 h-5 sm:w-7 sm:h-7 text-pink-600 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Aktivitas</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Ziarah ke makam Ratu Ibu dan tokoh-tokoh lain di kompleks ini.</li>
                <li>Menikmati arsitektur kuno dan suasana spiritual.</li>
                <li>Berfoto dengan latar gapura, makam, dan masjid tua.</li>
                <li>Belajar sejarah dan budaya Madura dari papan informasi di lokasi.</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <Info className="w-5 h-5 sm:w-7 sm:h-7 text-green-700 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Fasilitas & Akses</span>
              <ul className="list-disc ml-4 text-gray-700 text-xs sm:text-sm">
                <li>Tersedia area parkir, toilet, dan warung kecil di sekitar kompleks.</li>
                <li>Lokasi mudah dijangkau dari pusat kota Sampang.</li>
                <li>Jam kunjung fleksibel, namun disarankan datang pagi atau sore.</li>
                <li>Pengunjung diharapkan menjaga ketenangan dan kesopanan selama di area makam.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
