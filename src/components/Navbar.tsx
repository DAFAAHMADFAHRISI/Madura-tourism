import { Link } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-white font-bold text-xl">Madura</div>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 text-white focus:outline-none"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white/90 hover:text-white transition-colors">
              Beranda
            </Link>
            <Link to="/budaya" className="text-white/90 hover:text-white transition-colors">
              Budaya
            </Link>
            <Link to="/pariwisata" className="text-white/90 hover:text-white transition-colors">
              Pariwisata
            </Link>
            <Link to="#" className="text-white/90 hover:text-white transition-colors">
              Kontak
            </Link>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}> 
          <div className="flex flex-col space-y-2 py-2">
            <Link to="/" className="text-white/90 hover:text-white transition-colors px-4 py-2" onClick={() => setOpen(false)}>
              Beranda
            </Link>
            <Link to="/budaya" className="text-white/90 hover:text-white transition-colors px-4 py-2" onClick={() => setOpen(false)}>
              Budaya
            </Link>
            <Link to="/pariwisata" className="text-white/90 hover:text-white transition-colors px-4 py-2" onClick={() => setOpen(false)}>
              Pariwisata
            </Link>
            <Link to="#" className="text-white/90 hover:text-white transition-colors px-4 py-2" onClick={() => setOpen(false)}>
              Kontak
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
