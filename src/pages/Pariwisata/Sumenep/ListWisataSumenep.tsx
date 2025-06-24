import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";

const wisataList = [
  {
    name: "Pulau Gili Labak",
    path: "/pariwisata/sumenep/pulau-gili-labak"
  },
  {
    name: "Masjid Agung Sumenep",
    path: "/pariwisata/sumenep/masjid-agung-sumenep"
  },
  {
    name: "Gili Iyang",
    path: "/pariwisata/sumenep/gili-iyang"
  },
  {
    name: "Museum Sultan Sumenep",
    path: "/pariwisata/sumenep/museum-sultan-sumenep"
  },
  {
    name: "Kompleks Pemakaman Raja-Raja Sumenep",
    path: "/pariwisata/sumenep/kompleks-pemakaman-raja-raja-sumenep"
  }
];

export default function ListWisataSumenep() {
  return (
    <>
      <Navbar />
      <Link
        to="/pariwisata"
        className="fixed top-20 left-4 z-40 px-6 py-2 bg-[#FFD600] hover:bg-yellow-400 text-black font-bold rounded-full shadow border-2 border-yellow-600 flex items-center gap-2 transition-all text-base"
        style={{ minWidth: '110px', textAlign: 'center' }}
      >
        <span className="text-lg">←</span> Kembali
      </Link>
      <div className="flex flex-col gap-6 p-4 sm:p-8 max-w-xl mx-auto">
        <h2 className="text-xl sm:text-3xl font-extrabold mb-2 text-yellow-900 text-center drop-shadow-lg mt-32">Daftar Wisata Sumenep</h2>
        <p className="text-sm sm:text-base text-gray-700 mb-6 text-center">Jelajahi destinasi wisata terbaik di Sumenep, Madura. Klik untuk melihat detailnya!</p>
        <ul className="flex flex-col gap-4">
          {wisataList.map((wisata) => (
            <li key={wisata.name}>
              <Link
                to={wisata.path}
                className="flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-yellow-100 via-white to-yellow-50 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.03] hover:bg-yellow-200 transition-all border border-yellow-300 text-base sm:text-lg font-semibold text-yellow-900 group"
              >
                <span className="text-xl sm:text-2xl">📍</span>
                <span className="group-hover:underline">{wisata.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
