import Navbar from "../../components/Navbar";
import Nadar1 from "../../assets/images/Upacara Nadar1.jpg";
import Nadar2 from "../../assets/images/Upacara Nadar2.jpg";
import Nadar3 from "../../assets/images/Upacara Nadar3.jpg";
import { Link } from "react-router-dom";

export default function UpacarNadar() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-green-100 via-white to-yellow-100">
      <Navbar />
      <Link to="/budaya" className="mt-24 mb-4 ml-4 self-start px-6 py-2 bg-[#FFD600] hover:bg-yellow-400 text-black font-medium rounded-full shadow-md border-2 border-yellow-600 flex items-center gap-2 transition-all text-base" style={{ minWidth: '110px', textAlign: 'center' }}>
        <span className="text-lg">←</span> Kembali
      </Link>
      <div className="flex flex-col items-center justify-center pt-24 pb-10 px-2 sm:px-4 md:px-16 animate-fade-in-up">
        <h1 className="text-3xl md:text-5xl font-bold font-serif text-gray-800 mb-4 text-center drop-shadow-lg">🙏 Apa Itu Upacara Nadar?</h1>
        <p className="text-base md:text-lg text-gray-700 font-light mb-6 max-w-3xl text-center">
          Upacara Nadar adalah ritual adat masyarakat Madura—khususnya petani garam—yang dilaksanakan sebagai pelunasan janji (nazar) setelah keinginan terkabul atau panen berhasil. Dilakukan untuk menghormati leluhur sekaligus bersyukur atas berkah rezeki, terutama untuk petani garam di Sumenep.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">📜 Sejarah & Asal Usul</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Tradisi ini diyakini bermula dari kisah Syekh Anggasuto, ulama yang dipercaya menemukan cara produksi garam di Madura. Sebagai bentuk penghormatan dan rasa syukur, petani garam kemudian melaksanakan ritual ini tiga kali setahun—dua kali di makam leluhur dan satu kali di tempat masing-masing petani.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🔁 Rangkaian Prosesi</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4 max-w-3xl text-base">
          <li><b>1 & 2. Kapak dalam dan tabur bunga di makam</b><br />Komunitas berkumpul di makam leluhur, membawa bunga, sedekah, dan berdoa bersama.</li>
          <li><b>3. Pembacaan naskah kuno</b><br />Dilakukan secara berkelompok, biasanya menggunakan naskah lontar berisi doa dan kisah sejarah.</li>
          <li><b>4. Upacara di rumah (Nyadar ketiga)</b><br />Petani garam yang melaksanakan nadar sendiri memasak makanan dalam wadah panjang (bambu atau anyaman), lalu membagikannya kepada warga sekitar.</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🧭 Lokasi & Waktu Pelaksanaan</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          <b>Lokasi:</b><br />
          Makam Syekh Anggasuto dan leluhur di Desa Kebundadap Barat & Pinggirpapas, Kecamatan Saronggi (Sumenep), untuk dua prosesi pertama.<br />
          Rumah petani garam masing-masing untuk prosesi ketiga (Nyadar Bengko).<br /><br />
          <b>Jadwal:</b><br />
          Biasanya digelar saat musim panen garam, sekitar Agustus. Tradisi ini berlangsung tiga kali dalam satu tahun.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🌱 Filosofi & Nilai Sosial</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4 max-w-3xl text-base">
          <li><b>Religius:</b> Wujud syukur atas rezeki dan pelunasan janji spiritual.</li>
          <li><b>Sejarah dan leluhur:</b> Menghormati jasa Syekh Anggasuto sebagai figur penting dalam tradisi garam Madura.</li>
          <li><b>Sosial:</b> Mendorong silaturahmi, kebersamaan, dan gotong royong antarwarga.</li>
          <li><b>Ekonomi lokal:</b> Menumbuhkan rasa saling berbagi hasil panen kepada komunitas.</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">📷 Penjelasan Gambar</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">Foto-foto memperlihatkan prosesi tabur bunga, doa bersama, dan pembagian makanan dalam wadah khas, serta suasana kebersamaan di area makam dan rumah warga.</p>
        <div className="flex flex-col md:flex-row gap-4 mb-8 w-full max-w-4xl items-center justify-center">
          <img src={Nadar1} alt="Upacara Nadar 1" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
          <img src={Nadar2} alt="Upacara Nadar 2" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
          <img src={Nadar3} alt="Upacara Nadar 3" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🎯 Kesimpulan</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Upacara Nadar adalah ritual adat yang menggabungkan spiritualitas, penghormatan terhadap leluhur, dan kebersamaan komunitas. Ritual ini memperkaya identitas budaya petani garam Madura dan terus dilaksanakan sebagai wujud syukur serta pengikat nilai sosial di masyarakat.
        </p>
      </div>
    </div>
  );
}
