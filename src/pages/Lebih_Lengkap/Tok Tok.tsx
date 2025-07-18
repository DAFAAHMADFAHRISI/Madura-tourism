import Navbar from "../../components/Navbar";
import Toktok1 from "../../assets/images/Tok tok1.jpg";
import Toktok2 from "../../assets/images/Tok tok2.jpeg";
import Toktok3 from "../../assets/images/Tok tok3.jpg";
import { Link } from "react-router-dom";

export default function TokTok() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-green-100 via-white to-yellow-100">
      <Navbar />
      <Link to="/budaya" className="mt-24 mb-4 ml-4 self-start px-6 py-2 bg-[#FFD600] hover:bg-yellow-400 text-black font-medium rounded-full shadow-md border-2 border-yellow-600 flex items-center gap-2 transition-all text-base" style={{ minWidth: '110px', textAlign: 'center' }}>
        <span className="text-lg">←</span> Kembali
      </Link>
      <div className="flex flex-col items-center justify-center pt-24 pb-10 px-2 sm:px-4 md:px-16 animate-fade-in-up">
        <h1 className="text-3xl md:text-5xl font-bold font-serif text-gray-800 mb-4 text-center drop-shadow-lg">🐂 Apa Itu Tradisi Toktok?</h1>
        <p className="text-base md:text-lg text-gray-700 font-light mb-6 max-w-3xl text-center">
          Toktok adalah tradisi adat unik dari Pulau Masalembu, Sumenep, Madura, berupa adu kekuatan tanduk antara dua sapi jantan yang berhadapan. Berbeda dengan Karapan Sapi yang menguji kecepatan, Toktok menitikberatkan pada kekuatan dan dominasi: sapi akan saling menyeruduk hingga salah satu mundur atau menyerah. Perlombaan ini biasanya digelar pada musim kemarau (Juni–November), saat sapi tak digunakan untuk bertani, dan seringkali juga dilangsungkan bertepatan dengan momen HUT RI tiap 17 Agustus.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🏁 Sejarah & Asal Usul</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Asalnya dari kebiasaan petani menjaga fisik sapi agar tetap kuat selama musim panjang tanpa ladang. Tradisi ini lalu menjadi agenda komunitas dan masyarakat luas, dengan cara adu tanduk yang diorganisir di lapangan terbuka—disebut jureg (cekungan seperti lapangan bola). Peran wasit yang ahli sangat krusial, karena tanpa penanganan tepat, adu bisa menyebabkan cedera serius bagi sapi maupun penonton.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">📜 Rangkaian Kegiatan</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4 max-w-3xl text-base">
          <li><b>Pilih Pasangan Adu</b> – Sapi diseleksi berdasarkan bobot dan ukuran, biasanya yang besar melawan besar, kecil melawan kecil.</li>
          <li><b>Pemanasan & Persiapan</b> – Sapi diberi pakan bergizi dan dirawat dulu agar siap tanding.</li>
          <li><b>Adu Tanduk</b> – Dimulai di jureg, sapi saling menubruk, tanding selama beberapa menit.</li>
          <li><b>Penentuan Pemenang</b> – Sapi yang mundur atau melarikan diri dinyatakan kalah. Pemenang diyakini memiliki tanduk dan fisik unggul.</li>
          <li><b>Hadiah & Penghargaan</b> – Sapi pemenang mendapatkan harga jual lebih tinggi, dan pemiliknya mendapat prestise serta penghargaan sosial.</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🌱 Makna Budaya & Sosial</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4 max-w-3xl text-base">
          <li>Menandai kekuatan fisik sapi dan keterampilan pemilik dalam merawatnya—ini jadi bentuk kebanggaan petani.</li>
          <li>Peluang ekonomi: sapi pemenang sering dibandrol mahal; lomba ini juga menarik penonton hingga membuka peluang usaha makanan dan minuman.</li>
          <li>Simbol solidaritas dan hiburan masyarakat, di mana warga berkumpul, saling membantu, dan menikmati hiburan khas lokal.</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">📷 Penjelasan Gambar</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">Foto-foto memperlihatkan suasana adu sapi Toktok di lapangan terbuka, dengan kerumunan penonton dan pemilik sapi yang mengatur jalannya pertandingan.</p>
        <div className="flex flex-col md:flex-row gap-4 mb-8 w-full max-w-4xl items-center justify-center">
          <img src={Toktok1} alt="Toktok 1" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
          <img src={Toktok2} alt="Toktok 2" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
          <img src={Toktok3} alt="Toktok 3" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🎯 Kesimpulan</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Toktok adalah tradisi adu kekuatan Sapi ala Madura—turunan dari kearifan petani yang tak hanya soal kebugaran ternak, tapi juga identitas, ekonomi, dan hiburan komunitas. Tradisi ini tetap lestari, terutama saat musim kemarau, dan menjadi daya tarik budaya dari Pulau Masalembu.
        </p>
      </div>
    </div>
  );
}
