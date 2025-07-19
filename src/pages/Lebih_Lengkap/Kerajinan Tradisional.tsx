import Navbar from "../../components/Navbar";
import Kerajinan1 from "../../assets/images/Kerajinan Tradisional1.jpeg";
import Kerajinan2 from "../../assets/images/Kerajinan Tradisional2.jpg";
import Kerajinan3 from "../../assets/images/Kerajinan Tradisional3.jpg";
import { Link } from "react-router-dom";

export default function KerajinanTradisional() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-yellow-100 via-white to-green-100">
      <Navbar />
      <Link to="/budaya" className="mt-24 mb-4 ml-4 self-start px-6 py-2 bg-[#FFD600] hover:bg-yellow-400 text-black font-medium rounded-full shadow-md border-2 border-yellow-600 flex items-center gap-2 transition-all text-base" style={{ minWidth: '110px', textAlign: 'center' }}>
        <span className="text-lg">←</span> Kembali
      </Link>
      <div className="flex flex-col items-center justify-center pt-10 pb-10 px-2 sm:px-4 md:px-16 animate-fade-in-up">
        <h1 className="text-3xl md:text-5xl font-bold font-serif text-gray-800 mb-4 text-center drop-shadow-lg">🎨 Kerajinan Tradisional Madura</h1>
        <p className="text-base md:text-lg text-gray-700 font-light mb-6 max-w-3xl text-center">
          Pulau Madura memiliki berbagai kerajinan tangan khas yang memadukan keindahan estetika dan makna budaya. Berikut tiga jenis kerajinan yang populer:
        </p>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🧺 1. Anyaman Bambu & Pandan</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Kerajinan ini memanfaatkan bahan lokal seperti bambu, daun pandan, atau lontar untuk dibuat menjadi berbagai produk seperti tas, tikar, keranjang, topi, dan hiasan dinding. Teknik anyamannya rapi dan kuat, dengan motif tradisional yang indah dan sering digunakan sebagai barang dekoratif maupun fungsional di rumah.<br />
          <i>Gambar pertama menunjukkan deretan tas maupun keranjang anyaman berwarna cerah.</i>
        </p>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🛡️ 2. Tanduk Ukir</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Tanduk sapi atau kerbau diukir menjadi kerajinan artistik seperti gagang senjata tradisional (celurit, keris), miniatur, atau aksesoris hias. Proses ukir memerlukan ketelitian tinggi dan menghasilkan karya estetis yang memiliki nilai budaya tinggi dalam masyarakat Madura.<br />
          <i>Gambar kedua menampilkan beberapa kerajinan dari tanduk ukir dengan detail motif dan warna alami.</i>
        </p>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🪵 3. Ukiran Kayu / Peti Tradisional</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Pengrajin Madura juga dikenal membuat ukiran kayu halus untuk keperluan dekorasi atau penyimpanan: seperti peti hias, kotak perhiasan, atau hiasan dinding. Motif ukiran biasanya floral, geometris, atau simbol lokal dengan finishing natural atau diberi cat warna emas-merah khas.<br />
          <i>Gambar ketiga memperlihatkan peti ukiran kayu dengan dekorasi merah emas yang menonjol.</i>
        </p>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">📊 Ringkasan</h2>
        <div className="overflow-x-auto w-full max-w-3xl mb-6">
          <table className="min-w-full border border-gray-300 rounded-xl text-sm md:text-base">
            <thead>
              <tr className="bg-yellow-200 text-gray-800">
                <th className="px-3 py-2 border">Jenis Kerajinan</th>
                <th className="px-3 py-2 border">Bahan Utama</th>
                <th className="px-3 py-2 border">Contoh Produk</th>
                <th className="px-3 py-2 border">Nilai Budaya</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2 border">Anyaman Bambu/Pandan</td>
                <td className="px-3 py-2 border">Bambu, daun pandan</td>
                <td className="px-3 py-2 border">Tas, tikar, topi, keranjang</td>
                <td className="px-3 py-2 border">Estetika & fungsional</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border">Tanduk Ukir</td>
                <td className="px-3 py-2 border">Tanduk sapi/kerbau</td>
                <td className="px-3 py-2 border">Gagang senjata, suvenir, hiasan</td>
                <td className="px-3 py-2 border">Ketelitian & simbol kehormatan</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border">Ukiran Kayu</td>
                <td className="px-3 py-2 border">Kayu lokal</td>
                <td className="px-3 py-2 border">Peti, kotak, hiasan dinding</td>
                <td className="px-3 py-2 border">Dekoratif & pewarisan artisanal</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">✅ Kesimpulan</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Kerajinan tradisional Madura mencerminkan kearifan lokal warga yang memanfaatkan bahan alami sekitar—seperti bambu, tanduk, dan kayu—dengan kreativitas tinggi. Kerajinan ini tidak hanya bernilai seni, tetapi juga menjadi identitas budaya yang terus diwariskan dari generasi ke generasi.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-8 w-full max-w-4xl items-center justify-center">
          <img src={Kerajinan1} alt="Kerajinan Tradisional 1" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
          <img src={Kerajinan2} alt="Kerajinan Tradisional 2" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
          <img src={Kerajinan3} alt="Kerajinan Tradisional 3" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
        </div>
      </div>
    </div>
  );
}
