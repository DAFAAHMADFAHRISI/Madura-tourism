import Navbar from "../../components/Navbar";
import Pakaian1 from "../../assets/images/Pakaian Adat & Bahasa1.jpg";
import Pakaian2 from "../../assets/images/Pakaian Adat & Bahasa2.jpeg";
import Pakaian3 from "../../assets/images/Pakaian Adat & Bahasa3.jpg";
import { Link } from "react-router-dom";

export default function PakaianAdatBahasa() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-red-100 via-white to-yellow-100">
      <Navbar />
      <Link to="/budaya" className="mt-24 mb-4 ml-4 self-start px-6 py-2 bg-[#FFD600] hover:bg-yellow-400 text-black font-medium rounded-full shadow-md border-2 border-yellow-600 flex items-center gap-2 transition-all text-base" style={{ minWidth: '110px', textAlign: 'center' }}>
        <span className="text-lg">←</span> Kembali
      </Link>
      <div className="flex flex-col items-center justify-center pt-10 pb-10 px-2 sm:px-4 md:px-16 animate-fade-in-up">
        <h1 className="text-3xl md:text-5xl font-bold font-serif text-gray-800 mb-4 text-center drop-shadow-lg">👘 Pakaian Adat Madura</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">1. Baju Pesa’an (Pria)</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Busana khas pria Madura, terdiri dari kaos garis merah-putih sebagai dalaman, dilapisi baju hitam longgar dan celana gombrang (gomboran).<br />
          Dilengkapi aksesoris seperti odheng (ikat kepala), sarung kotak, dan sabuk kulit.<br />
          <b>Filosofi:</b> warna merah-putih melambangkan keberanian dan semangat juang, sedangkan hitam menyimbolkan ketegasan dan kesederhanaan masyarakat Madura
        </p>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">2. Kebaya Madura & Sarung Batik (Perempuan)</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Wanita mengenakan kebaya rancongan atau aghungan, dipadukan dengan sarung batik khas Madura seperti motif storjan, lasem, atau tabiruan.<br />
          Aksesori meliputi cucuk dinar, cucuk sisir, kalung brondong, gelang, dan penutup kepala leng oleng.<br />
          <b>Filosofi:</b> warna merah, hijau, atau biru cerah melambangkan keanggunan, harapan akan keharmonisan, dan hubungan dengan alam
        </p>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">3. Pakaian Bangsawan (Sakera & Marlena)</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Varian kelas bangsawan: Sakera untuk pria dan Marlena untuk wanita.<br />
          Bahan digunakan kain kualitas tinggi seperti velour, sutra, atau brokat, dengan bordir dan aksesoris emas.<br />
          Menunjukkan status sosial tinggi serta etika sopan santun yang melekat pada identitas budaya Madura
        </p>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🗣️ Bahasa Madura</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Bahasa Madura (Bhâsa Madhurâ) merupakan Bahasa Austronesia yang digunakan oleh sekitar 10–13 juta orang, tidak hanya di Madura tetapi juga di beberapa bagian Jawa Timur, Kalimantan, dan negara tetangga seperti Singapura dan Malaysia.<br />
          Terdapat beberapa dialek wilayah seperti Bangkalan, Sampang, Pamekasan, Sumenep, Raas, dan Bawean.<br />
          Penulisan bahasa Madura dapat menggunakan aksara Latin, Pegon (Arab), atau Carakan (aksara Jawa), meskipun sekarang paling banyak menggunakan aksara Latin.<br />
          Bahasa ini memiliki sistem fonetik yang kompleks, termasuk konsonan aspiratif dan vokal yang khas, membedakannya dari bahasa tetangga seperti Javanese atau Sundanese.
        </p>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">✅ Ringkasan dalam Tabel</h2>
        <div className="overflow-x-auto w-full max-w-3xl mb-6">
          <table className="min-w-full border border-gray-300 rounded-xl text-sm md:text-base">
            <thead>
              <tr className="bg-yellow-200 text-gray-800">
                <th className="px-3 py-2 border">Aspek</th>
                <th className="px-3 py-2 border">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2 border">Pria</td>
                <td className="px-3 py-2 border">Baju Pesa’an: hitam longgar + kaos merah-putih, odheng, celana gomboran</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border">Wanita</td>
                <td className="px-3 py-2 border">Kebaya cerah + sarung batik + aksesori emas (cucuk sisir/dinar, gelang…)</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border">Bangsawan</td>
                <td className="px-3 py-2 border">Sakera (pria) & Marlena (wanita) dengan bahan beludru dan bordir emas</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border">Bahasa & Dialek</td>
                <td className="px-3 py-2 border">Dipakai di Madura dan sekitarnya, ditulis dalam Latin/Pegon/Carakan</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border">Fonologi & Tulisan</td>
                <td className="px-3 py-2 border">Bahasa khas dengan vocal dan konsonan yang berbeda serta sistem pelafalan unik</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Pakaian adat Madura dan bahasanya adalah wujud identitas budaya yang hidup. Warna mencolok dan filosofi dalam busana mencerminkan karakter masyarakat yang tegas dan gigih, sementara bahasa Madura memperlihatkan kekayaan linguistik lokal.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-8 w-full max-w-4xl items-center justify-center">
          <img src={Pakaian1} alt="Pakaian Adat Madura 1" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
          <img src={Pakaian2} alt="Pakaian Adat Madura 2" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
          <img src={Pakaian3} alt="Pakaian Adat Madura 3" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
        </div>
      </div>
    </div>
  );
}
