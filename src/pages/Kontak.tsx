import Navbar from "../components/Navbar"
import karapanSapi from "../assets/images/karapansapi.jpg"

export default function Kontak() {
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
      <div className="flex flex-col items-center justify-center flex-1 w-full max-w-xl mx-auto px-4 md:px-8 pt-24 pb-12 animate-fade-in-up">
        <div className="bg-white/10 border border-white/10 rounded-3xl p-8 w-full flex flex-col items-center gap-6 shadow-xl backdrop-blur-md">
          {/* Foto Profil */}
          <img
            src={"https://ui-avatars.com/api/?name=Dafa+Ahmad+Fahrisi&background=FFD600&color=000&size=160"}
            alt="Foto Profil Dafa Ahmad Fahrisi"
            className="w-32 h-32 rounded-full border-4 border-yellow-400 shadow-lg object-cover"
          />
          {/* Nama dan Peran */}
          <div className="text-center">
            <h1 className="text-white text-3xl md:text-4xl font-bold font-serif mb-2 drop-shadow-2xl">Dafa Ahmad Fahrisi</h1>
            <h2 className="text-yellow-300 text-lg md:text-xl font-semibold mb-2">Web Developer & UI Designer</h2>
            <p className="text-white/90 text-base md:text-lg font-light mb-2 max-w-md mx-auto">
              Saya adalah mahasiswa dan pengembang web yang memiliki minat besar pada dunia teknologi, desain antarmuka, dan pengembangan aplikasi berbasis web. Website ini dibuat sebagai media informasi dan promosi kekayaan budaya serta pariwisata Madura.
            </p>
          </div>
          {/* Kontak */}
          <div className="flex flex-col items-center gap-1 mt-2">
            <p className="text-white/90 text-base font-light">Instagram: <a href="https://www.instagram.com/dafaahmadf_/" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-400 transition">@dafaahmadf_</a></p>
            {/* Tambahkan sosial media lain jika ada */}
          </div>
        </div>
      </div>
    </div>
  )
}
