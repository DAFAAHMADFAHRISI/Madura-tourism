import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";

const wisataList = [
  {
    name: "Jaddih Limestone Hill",
    path: "/pariwisata/bangkalan/jaddih-limestone-hill"
  },
  {
    name: "Bukit Kapur Aermata Bangkalan",
    path: "/pariwisata/bangkalan/bukit-kapur-aermata-bangkalan"
  },
  {
    name: "Bukit Kapur Arosbaya",
    path: "/pariwisata/bangkalan/bukit-kapur-arosbaya"
  },
  {
    name: "Pantai Siring Kemuning",
    path: "/pariwisata/bangkalan/pantai-siring-kemuning"
  },
  {
    name: "Gua Pote Bukit Jaddih",
    path: "/pariwisata/bangkalan/gua-pote-bukit-jaddih"
  }
];

export default function ListWisataBangkalan() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-6 p-8 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Daftar Wisata Bangkalan</h2>
        <ul className="flex flex-col gap-4">
          {wisataList.map((wisata) => (
            <li key={wisata.name}>
              <Link
                to={wisata.path}
                className="block px-6 py-4 bg-white rounded-xl shadow hover:bg-yellow-100 transition-all border border-yellow-300 text-lg font-semibold text-yellow-900"
              >
                {wisata.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
