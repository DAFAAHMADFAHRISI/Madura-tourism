import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

const kotaList = [
  {
    title: "Bangkalan",
    desc: "Kota gerbang Pulau Madura, terkenal dengan Jembatan Suramadu dan wisata religi Makam Syaikhona Kholil.",
    mapUrl: "https://www.google.com/maps?q=Bangkalan,+Madura&output=embed",
  },
  {
    title: "Sampang",
    desc: "Kota pesisir dengan wisata Pantai Camplong, Gua Lebar, dan tradisi budaya yang kental.",
    mapUrl: "https://www.google.com/maps?q=Sampang,+Madura&output=embed",
  },
  {
    title: "Pamekasan",
    desc: "Pusat batik Madura, wisata religi, dan kuliner khas seperti sate laler dan kaldu kokot.",
    mapUrl: "https://www.google.com/maps?q=Pamekasan,+Madura&output=embed",
  },
  {
    title: "Sumenep",
    desc: "Kota paling timur Madura, kaya sejarah, wisata keraton, pantai, dan pulau-pulau eksotis seperti Gili Labak.",
    mapUrl: "https://www.google.com/maps?q=Sumenep,+Madura&output=embed",
  },
]

export default function Pariwisata() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-1 w-full max-w-6xl mx-auto px-4 md:px-8 pt-24 pb-12 animate-fade-in-up">
        <h1 className="text-white text-4xl md:text-6xl font-serif font-bold mb-4 drop-shadow-2xl text-center">4 Kota Utama di Pulau Madura</h1>
        <p className="text-white/80 text-lg md:text-xl font-light mb-10 text-center max-w-2xl">Kenali empat kabupaten utama Madura beserta lokasi peta interaktifnya.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {kotaList.map((item) => (
            <div key={item.title} className="bg-white/10 border border-white/10 rounded-3xl p-6 flex flex-col gap-3 shadow-xl hover:scale-[1.02] hover:shadow-2xl transition-all duration-300">
              <h2 className="text-white text-2xl font-bold font-serif mb-2">{item.title}</h2>
              <p className="text-white/90 text-base font-light mb-2">{item.desc}</p>
              <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/20 shadow-lg bg-black">
                <iframe
                  src={item.mapUrl}
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Peta ${item.title}`}
                ></iframe>
              </div>
              {item.title === "Bangkalan" ? (
                <Link
                  to="/pariwisata/bangkalan"
                  className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow self-end text-center"
                >
                  Lihat Wisata
                </Link>
              ) : (
                <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow self-end">Lihat Wisata</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
