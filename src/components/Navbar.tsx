import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-white font-bold text-xl">Madura</div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white/90 hover:text-white transition-colors">
              Beranda
            </Link>
            <Link to="/budaya" className="text-white/90 hover:text-white transition-colors">
              Budaya
            </Link>
            <Link to="#" className="text-white/90 hover:text-white transition-colors">
              Pariwisata
            </Link>
            <Link to="#" className="text-white/90 hover:text-white transition-colors">
              Kontak
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
