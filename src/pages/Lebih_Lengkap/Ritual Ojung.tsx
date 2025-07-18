import Navbar from "../../components/Navbar";
import Ojung1 from "../../assets/images/Ritual Ojung1.jpeg";
import Ojung2 from "../../assets/images/Ritual Ojung2.jpg";
import Ojung3 from "../../assets/images/Ritual Ojung3.jpg";
import { Link } from "react-router-dom";

export default function RitualOjung() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-yellow-100 via-white to-green-100">
      <Navbar />
      <Link to="/budaya" className="mt-24 mb-4 ml-4 self-start px-6 py-2 bg-[#FFD600] hover:bg-yellow-400 text-black font-medium rounded-full shadow-md border-2 border-yellow-600 flex items-center gap-2 transition-all text-base" style={{ minWidth: '110px', textAlign: 'center' }}>
        <span className="text-lg">←</span> Kembali
      </Link>
      <div className="flex flex-col items-center justify-center pt-10 pb-10 px-2 sm:px-4 md:px-16 animate-fade-in-up">
        <h1 className="text-3xl md:text-5xl font-bold font-serif text-gray-800 mb-4 text-center drop-shadow-lg">⚔️ Apa Itu Ritual Ojung?</h1>
        <p className="text-base md:text-lg text-gray-700 font-light mb-6 max-w-3xl text-center">
          Ritual Ojung adalah tradisi adu cambuk rotan antara dua pria dewasa, biasanya bertelanjang dada, yang dilakukan dalam sebuah arena terbuka. Mereka saling memukul tubuh lawan menggunakan rotan sepanjang sekitar 1,5 meter, untuk menangkis serangan dan menunjukkan keberanian. Ritus ini diyakini dapat memanggil hujan dan mencegah bencana alam selama musim kemarau panjang
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">📜 Sejarah & Persebaran</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Tradisi ini sudah berlangsung sejak abad ke‑13, awalnya ditemukan oleh masyarakat Madura di daerah Tapal Kuda (termasuk Bondowoso, Situbondo, Jember), dan menyebar seiring perkembangan komunitas petani serta nelayan di wilayah tersebut
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🔁 Rangkaian Prosesi</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4 max-w-3xl text-base">
          <li><b>Pemilihan Peserta & Wasit</b><br />Dua petarung dipilih berdasarkan keberanian dan ketangkasan. Seorang wasit (disebut Peputo atau babuto) memimpin jalannya pertarungan</li>
          <li><b>Musik Pengiring</b><br />Iringan musik tradisional seperti gamelan Kenong Telo, kidung, atau gamelan lokal digemakan saat Ojung berlangsung</li>
          <li><b>Pertarungan 3 Ronde</b><br />Pertandingan terdiri dari beberapa ronde (umumnya 3–5 menit setiap ronde). Pukul-memukul dilakukan secara bergantian di bagian tubuh seperti punggung, dada, atau lengan. Luka dan darah menjadi simbol ketulusan do’a</li>
          <li><b>Penutupan</b><br />Usai pertarungan, kedua peserta akan bersalaman, bermaafan, bahkan menari bersama sebagai tanda tidak ada dendam atau permusuhan</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🌿 Makna Sosial & Filosofis</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4 max-w-3xl text-base">
          <li><b>Spiritual:</b> Darah yang mengucur dipercaya menjadi wujud kesungguhan yang akan menarik turunnya hujan</li>
          <li><b>Nilai Keberanian & Sportivitas:</b> Menunjukkan keteguhan mental dan fisik calon pemenang sekaligus menjadi hiburan komunitas</li>
          <li><b>Kebersamaan & Harmoni Sosial:</b> Mendorong sifat pemaaf dan tenggang rasa setelah pertarungan selesai</li>
          <li><b>Pelestarian Budaya:</b> Sebagai warisan leluhur yang kaya akan nilai edukatif dan ritual lokal</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🎯 Lokasi & Waktu Pelaksanaan</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          <b>Lokasi utama:</b> Bondowoso (khususnya Desa Tapen), daerah Tapal Kuda, serta sebagian wilayah Madura dan lingkungan etnis Madura lainnya
          <br /><br />
          <b>Waktu:</b> Diadakan saat akhir musim kemarau, umumnya pada bulan kedelapan kalender lokal, menyusul upacara selamatan desa (seperti Gadhisa)
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🧾 Kesimpulan</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Ritual Ojung adalah perpaduan kompleks antara kesakralan, keberanian, dan kreatifitas budaya lokal. Melalui adu rotan berdarah ini, masyarakat mengekspresikan doa agar hujan turun, menjaga keharmonisan sosial, dan mempertahankan warisan nenek moyang—dengan semangat sportivitas dan toleransi.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">📷 Penjelasan Gambar</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">Foto-foto memperlihatkan suasana pertarungan Ojung, ekspresi peserta, dan keramaian penonton di arena terbuka.</p>
        <div className="flex flex-col md:flex-row gap-4 mb-8 w-full max-w-4xl items-center justify-center">
          <img src={Ojung1} alt="Ritual Ojung 1" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
          <img src={Ojung2} alt="Ritual Ojung 2" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
          <img src={Ojung3} alt="Ritual Ojung 3" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
        </div>
      </div>
    </div>
  );
}
