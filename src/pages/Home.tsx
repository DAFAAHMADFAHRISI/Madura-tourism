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
        <div className="flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <MapPin className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-medium">East Java, Indonesia</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-white text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-6 drop-shadow-2xl leading-tight text-center">
          Madura
        </h1>

        {/* Subtitle */}
        <h2 className="text-white/90 text-lg sm:text-xl md:text-2xl font-light mb-8 drop-shadow-lg text-center">
          The Island of Bulls & Cultural Heritage
        </h2>

        {/* Description */}
        <p className="text-white/90 text-base sm:text-lg md:text-xl font-light mb-6 drop-shadow leading-relaxed text-center">
          Discover the incomparable wonders and stunning cultural beauty of Madura. Experience the legendary Karapan
          Sapi bull racing, savor authentic cuisine, and immerse yourself in centuries-old traditions.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-6 mb-8 justify-center">
          <div className="flex items-center gap-2 text-white/80">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-sm">4.8/5 Rating</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <Users className="w-5 h-5" />
            <span className="text-sm">50K+ Visitors</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <MapPin className="w-5 h-5" />
            <span className="text-sm">4 Regencies</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full justify-center">
          <button className="group px-8 py-4 bg-white text-black font-semibold rounded-full shadow-xl hover:bg-white/90 transition-all duration-300 text-lg flex items-center justify-center gap-2 hover:scale-105 hover:shadow-2xl">
            Start Your Journey
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 text-lg backdrop-blur-sm">
            Watch Video
          </button>
        </div>
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
