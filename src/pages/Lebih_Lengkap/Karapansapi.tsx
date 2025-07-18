import Navbar from "../../components/Navbar";
import Karapan1 from "../../assets/images/Karapansapi1.jpg";
import Karapan2 from "../../assets/images/Karapansapi2.jpg";
import Karapan3 from "../../assets/images/Karapansapi3.jpg";
import { Link } from "react-router-dom";

export default function KarapanSapi() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-yellow-100 via-white to-orange-100">
      <Navbar />
      <Link to="/budaya" className="mt-24 mb-4 ml-4 self-start px-6 py-2 bg-[#FFD600] hover:bg-yellow-400 text-black font-medium rounded-full shadow-md border-2 border-yellow-600 flex items-center gap-2 transition-all text-base" style={{ minWidth: '110px', textAlign: 'center' }}>
        <span className="text-lg">←</span> Kembali
      </Link>
      <div className="flex flex-col items-center justify-center pt-24 pb-10 px-2 sm:px-4 md:px-16 animate-fade-in-up">
        <h1 className="text-3xl md:text-5xl font-bold font-serif text-gray-800 mb-4 text-center drop-shadow-lg">🐂 Apa itu Karapan Sapi?</h1>
        <p className="text-base md:text-lg text-gray-700 font-light mb-6 max-w-3xl text-center">
          Karapan Sapi adalah lomba pacuan dua ekor sapi yang ditunggangi oleh seorang joki di atas semacam kereta kayu ringan bernama <b>kaleles</b>. Perlombaan ini berlangsung di lintasan lurus sepanjang kurang lebih 100 hingga 130 meter. Tradisi ini berasal dari Pulau Madura, Jawa Timur, dan biasa diselenggarakan setiap tahun antara bulan Juli hingga Oktober.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">📜 Sejarah Singkat</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Tradisi Karapan Sapi dipercaya telah ada sejak abad ke-13. Awalnya digunakan sebagai bentuk hiburan rakyat dan syukuran panen. Seiring waktu, lomba ini berkembang menjadi ajang bergengsi antar desa, kecamatan, bahkan hingga ke tingkat kabupaten.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🏁 Jenis-Jenis Karapan Sapi</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4 max-w-3xl text-base">
          <li><b>Karapan Kecil (Kerap Keni)</b> – Dilaksanakan di tingkat kecamatan untuk sapi-sapi muda.</li>
          <li><b>Karapan Besar (Kerap Raja)</b> – Lomba utama antar juara dari berbagai daerah.</li>
          <li><b>Karapan Undangan (Kerap Onjangan)</b> – Lomba khusus yang diadakan dalam acara syukuran atau perayaan.</li>
          <li><b>Karapan Latihan (Kerap Jar-Jaran)</b> – Ajang latihan untuk menjajal kemampuan sapi.</li>
          <li><b>Karapan Final</b> – Biasanya digelar di Pamekasan sebagai puncak kompetisi.</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🎭 Nilai Budaya dan Sosial</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4 max-w-3xl text-base">
          <li>Menjadi simbol kehormatan dan kebanggaan bagi masyarakat Madura.</li>
          <li>Menunjukkan kemampuan dalam merawat dan melatih sapi pacuan.</li>
          <li>Menjadi ajang kebersamaan, karena banyak warga terlibat dalam persiapan dan pelaksanaan.</li>
          <li>Memiliki unsur hiburan, seni, dan ekonomi: dari parade, hiasan sapi, hingga penjualan makanan lokal.</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🧪 Perawatan & Persiapan</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Sapi pacuan dirawat secara khusus, diberi jamu tradisional, dilatih dengan rutin, bahkan dibentuk ikatan emosional dengan joki. Proses ini bisa berlangsung berbulan-bulan sebelum perlombaan.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">📷 Foto Karapan Sapi</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">Berikut gambar yang menunjukkan suasana Karapan Sapi:</p>
        <div className="flex flex-col md:flex-row gap-4 mb-8 w-full max-w-4xl items-center justify-center">
          <img src={Karapan1} alt="Karapan Sapi 1" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
          <img src={Karapan2} alt="Karapan Sapi 2" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
          <img src={Karapan3} alt="Karapan Sapi 3" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
        </div>
        <p className="text-base text-gray-700 mb-8 max-w-3xl text-center">Sapi-sapi pacu berlari kencang di arena Karapan dengan hiasan warna-warni</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">⚠️ Isu & Modernisasi</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Dulu, penggunaan cambuk berpaku menjadi perhatian karena dianggap menyiksa hewan. Kini, dalam beberapa lomba resmi, aturan ini sudah diubah agar lebih ramah terhadap sapi.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🧾 Kesimpulan</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Karapan Sapi bukan sekadar pacuan hewan, melainkan tradisi penuh makna yang mencerminkan semangat, kerja keras, serta identitas masyarakat Madura. Hingga hari ini, tradisi ini tetap dijaga dan dilestarikan sebagai warisan budaya lokal yang membanggakan.
        </p>
      </div>
    </div>
  );
}
