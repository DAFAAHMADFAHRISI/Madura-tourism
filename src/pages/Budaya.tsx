import Navbar from "../components/Navbar"
import karapanSapi from "../assets/images/karapansapi.jpg"
import KarapImg from "../assets/images/Karap.jpg"
import RokatImg from "../assets/images/Rokat.jpg"
import ToktokImg from "../assets/images/Toktok.jpeg"
import NyadarImg from "../assets/images/Nyadar.jpeg"
import OjungImg from "../assets/images/ojung.jpg"
import CarokImg from "../assets/images/carok.jpg"
import BatikImg from "../assets/images/Batik.jpg"
import BatokImg from "../assets/images/Batok.jpg"
import PakaianImg from "../assets/images/Pakaian.jpeg"
import PondokImg from "../assets/images/Pondok.jpg"
import { BookOpen, Drum, Feather, Landmark, Palette, Shield, Shirt, Swords, Waves } from "lucide-react"
import { Link } from "react-router-dom"

const budayaList = [
  {
    title: "Karapan Sapi 🐂",
    icon: <Swords className="w-8 h-8 text-yellow-400" />, // closest icon for race/competition
    desc: `Lomba pacu sapi berpasangan di lintasan sekitar 100 m, diadakan tiap Agustus–Oktober. Sapi dihias, dijalankan dengan iringan gamelan dan upacara tradisional.`,
    image: KarapImg,
  },
  {
    title: "Upacara Rokat (Petik Laut)",
    icon: <Waves className="w-8 h-8 text-blue-400" />, // sea/ritual
    desc: `Ritual syukur nelayan dengan doa, istighosah, dan penghanyutan sesaji (ketan, tumpeng, ikan) ke laut agar rezeki dan keselamatan meningkat.`,
    image: RokatImg,
  },
  {
    title: "Upacara Nadar",
    icon: <Feather className="w-8 h-8 text-pink-400" />,
    desc: `Dilaksanakan 3× per tahun—biasanya di Kalianget—melibatkan tabur bunga di makam leluhur, doa bersama, persiapan makanan, dan menginap di dekat makam.`,
    image: NyadarImg,
  },
  {
    title: "Toktok (Aduan Sapi Masalembu)",
    icon: <Shield className="w-8 h-8 text-green-400" />,
    desc: `Dua sapi jantan bertarung saling seruduk, didampingi wasit ahli untuk memastikan keselamatan. Acara ini memadukan kekuatan dan tradisi wilayah Masalembu.`,
    image: ToktokImg,
  },
  {
    title: "Ritual Ojung",
    icon: <Drum className="w-8 h-8 text-red-400" />,
    desc: `Permainan fisik berupa adu rotan dua pria, diiringi musik tradisional (dung-dung/siwalan), bertujuan memohon hujan dan menghindari malapetaka.`,
    image: OjungImg,
  },
  {
    title: "Carok",
    icon: <Swords className="w-8 h-8 text-gray-400" />,
    desc: `Duel menggunakan celurit (sering mati) sebagai bentuk penyelesaian konflik terkait kehormatan atau keluarga. Dilihat sebagai perwujudan filosofi "lebih baik mati daripada malu".`,
    image: CarokImg,
  },
  {
    title: "Mondok (Pesantren)",
    icon: <BookOpen className="w-8 h-8 text-blue-700" />,
    desc: `Tradisi mengirim anak ke pondok pesantren sejak usia dini. Keberanian mengedepankan pendidikan agama, dengan tingkat kepatuhan tinggi terhadap kyai.`,
    image: PondokImg,
  },
  {
    title: "Madurese Batik",
    icon: <Palette className="w-8 h-8 text-pink-600" />,
    desc: `Karya tekstil warna cerah (merah, kuning, hijau, biru, hitam) dengan motif flora, fauna, geometri. Diakui UNESCO sebagai warisan tak benda pada 2009.`,
    image: BatikImg,
  },
  {
    title: "Kerajinan Tradisional",
    icon: <Landmark className="w-8 h-8 text-green-700" />,
    desc: `Termasuk anyaman tikar, topi, tas, serta pembuatan perahu tradisional seperti Lis-alis, Paduwang, khas Madura untuk kegiatan nelayan dan transportasi lokal.`,
    image: BatokImg,
  },
  {
    title: "Pakaian Adat & Bahasa",
    icon: <Shirt className="w-8 h-8 text-indigo-400" />,
    desc: `Pesa'an: baju hitam longgar + celana gombrong + ikat kepala (odheng) yang menunjukkan status.`,
    image: PakaianImg,
  },
]

export default function Budaya() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 -z-10">
        <img
          src={karapanSapi || "/placeholder.svg"}
          alt="Karapan Sapi Madura"
          className="w-full h-full object-cover object-center scale-105 animate-slow-zoom"
        />
        {/* Gradient Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-1 w-full max-w-6xl mx-auto px-4 md:px-8 pt-24 pb-12 animate-fade-in-up">
        <h1 className="text-white text-4xl md:text-6xl font-serif font-bold mb-4 drop-shadow-2xl text-center">Budaya Madura</h1>
        <p className="text-white/80 text-lg md:text-xl font-light mb-10 text-center max-w-2xl">Mengenal ragam tradisi, ritual, dan warisan budaya yang membentuk identitas Pulau Madura.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {budayaList.map((item) => (
            <div key={item.title} className="bg-white/10 border border-white/10 rounded-3xl p-6 flex flex-col gap-3 shadow-xl hover:scale-[1.02] hover:shadow-2xl transition-all duration-300">
              {/* Show image if available */}
              {item.image && (
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-2xl mb-3 shadow-lg border border-white/20" />
              )}
              <div className="flex items-center gap-4 mb-2">
                {item.icon}
                <h2 className="text-white text-2xl font-bold font-serif">{item.title}</h2>
              </div>
              <p className="text-white/90 text-base font-light mb-2">{item.desc}</p>
              {item.title === "Karapan Sapi 🐂" ? (
                <Link to="/lebih-lengkap/karapansapi" className="mt-3 self-end bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow">Lebih lengkap</Link>
              ) : item.title === "Upacara Rokat (Petik Laut)" ? (
                <Link to="/lebih-lengkap/upacara-rokat" className="mt-3 self-end bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow">Lebih lengkap</Link>
              ) : item.title === "Upacara Nadar" ? (
                <Link to="/lebih-lengkap/upacar-nadar" className="mt-3 self-end bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow">Lebih lengkap</Link>
              ) : item.title === "Toktok (Aduan Sapi Masalembu)" ? (
                <Link to="/lebih-lengkap/tok-tok" className="mt-3 self-end bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow">Lebih lengkap</Link>
              ) : (
                <button className="mt-3 self-end bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow">Lebih lengkap</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
