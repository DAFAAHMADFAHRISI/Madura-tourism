import { ChevronDown, MapPin, Star, Users } from "lucide-react"
import Navbar from "../components/Navbar"
import karapanSapi from "../assets/images/karapansapi.jpg"

export default function Home() {
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

      {/* Navbar */}
      <Navbar />

      {/* Main Hero Content */}
      <div className="animate-fade-in-up px-4 pt-28 pb-10 flex flex-col items-center w-full max-w-3xl mx-auto">
        {/* Location Badge */}
        <a
          href="https://www.google.com/maps/place/Madura,+East+Java,+Indonesia/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-md transition hover:bg-white/20 hover:shadow-lg cursor-pointer outline-none focus:ring-2 focus:ring-white"
          title="Lihat Madura di Google Maps"
        >
          <MapPin className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-semibold">Madura, Jawa Timur, Indonesia</span>
        </a>

        {/* Main Heading */}
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 drop-shadow-2xl leading-tight text-center">
          Madura: Jelajahi Pesona Pulau Garam yang Autentik
        </h1>

        {/* Subtitle */}
        <h2 className="text-white/90 text-base sm:text-lg md:text-xl font-light mb-8 drop-shadow-lg text-center">
          Selamat datang di Madura, permata tersembunyi di timur Jawa yang kaya akan budaya unik, alam memesona, dan kuliner lezat. Dari tradisi karapan sapi yang mendebarkan hingga pantai-pantai berpasir putih yang menenangkan, Madura menawarkan petualangan yang tak terlupakan bagi setiap wisatawan. Bersiaplah untuk merasakan keramahan penduduk lokal dan keaslian yang jarang ditemukan di tempat lain.
        </h2>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full justify-center">
          <button className="group px-8 py-4 bg-white text-black font-semibold rounded-full shadow-xl hover:bg-white/90 transition-all duration-300 text-lg flex items-center justify-center gap-2 hover:scale-105 hover:shadow-2xl">
            Mulai Petualangan Anda Sekarang!
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Section: Daya Tarik Utama Madura */}
        <h3 className="text-white text-lg font-bold mb-4 text-center">Daya Tarik Utama Madura</h3>
        <p className="text-white/90 text-base sm:text-lg md:text-xl font-light mb-6 drop-shadow leading-relaxed text-center">
          Madura menanti Anda dengan berbagai pengalaman istimewa:
        </p>
        <ul className="text-white/90 text-base sm:text-lg md:text-xl font-light mb-6 drop-shadow leading-relaxed list-disc list-inside">
          <li><b>Budaya & Tradisi yang Kuat:</b> Saksikan langsung Karapan Sapi yang legendaris, keindahan Batik Madura dengan motif khasnya, atau Tari Topeng Gettak yang penuh makna. Rasakan denyut nadi kebudayaan yang lestari di setiap sudut pulau.</li>
          <li><b>Keindahan Alam yang Menawan:</b> Temukan surga tersembunyi seperti Gili Labak dengan airnya yang sebening kristal dan pasir putih, keunikan formasi batuan di Bukit Jaddih, atau pesona alam di Pantai Sembilan yang memukau. Madura adalah destinasi sempurna bagi pecinta alam.</li>
          <li><b>Kuliner Khas yang Menggugah Selera:</b> Jangan lewatkan kesempatan untuk mencicipi Sate Madura yang terkenal di seluruh Nusantara, Bebek Sinjay yang gurih, atau hidangan laut segar seperti Lorjuk. Setiap suapan adalah perjalanan rasa yang otentik.</li>
        </ul>

        {/* Section: Mengapa Madura Adalah Pilihan Tepat Anda? */}
        <h3 className="text-white text-lg font-bold mb-4 text-center">Mengapa Madura Adalah Pilihan Tepat Anda?</h3>
        <ul className="text-white/90 text-base sm:text-lg md:text-xl font-light mb-6 drop-shadow leading-relaxed list-disc list-inside">
          <li><b>Keaslian yang Terjaga:</b> Madura menawarkan pengalaman wisata yang jujur dan otentik, jauh dari keramaian kota besar.</li>
          <li><b>Surga Tersembunyi:</b> Banyak destinasi alami di Madura yang masih alami dan belum terlalu ramai, cocok untuk relaksasi dan eksplorasi.</li>
          <li><b>Akses Mudah:</b> Terhubung langsung dengan Jawa melalui Jembatan Suramadu, menjadikan Madura destinasi yang mudah dijangkau dari berbagai kota besar di Jawa Timur.</li>
        </ul>

        {/* Section: Jelajahi Destinasi Populer Kami */}
        <h3 className="text-white text-lg font-bold mb-4 text-center">Jelajahi Destinasi Populer Kami</h3>
        <ul className="text-white/90 text-base sm:text-lg md:text-xl font-light mb-6 drop-shadow leading-relaxed list-disc list-inside">
          <li><b>Gili Labak:</b> Pulau kecil nan eksotis dengan pemandangan bawah laut yang menakjubkan.</li>
          <li><b>Bukit Jaddih:</b> Bekas tambang kapur yang kini menjadi latar foto unik dan Instagramable.</li>
          <li><b>Pantai Sembilan:</b> Keunikan bentuknya menyerupai angka sembilan dengan pasir putih halus.</li>
          <li><b>Makam Asta Tinggi:</b> Komplek makam raja-raja dan ulama Madura yang kaya akan nilai sejarah dan spiritual.</li>
        </ul>
        <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 text-lg backdrop-blur-sm">
          Lihat Semua Destinasi Menarik di Madura
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center pb-4">
        <ChevronDown className="w-6 h-6 text-white/70" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-4 hidden lg:block animate-float">
        <div className="w-2 h-2 bg-white/30 rounded-full"></div>
      </div>
      <div className="absolute top-1/3 right-16 hidden lg:block animate-float-delayed">
        <div className="w-1 h-1 bg-white/20 rounded-full"></div>
      </div>
      <div className="absolute bottom-1/4 right-8 hidden lg:block animate-float">
        <div className="w-3 h-3 bg-white/20 rounded-full"></div>
      </div>
    </div>
  )
}
