import Navbar from "../../components/Navbar";
import Mondok1 from "../../assets/images/Mondok1.jpg";
import Mondok2 from "../../assets/images/Mondok2.jpg";
import Mondok3 from "../../assets/images/Mondok3.jpg";
import { Link } from "react-router-dom";

export default function Mondok() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-green-100 via-white to-yellow-100">
      <Navbar />
      <Link to="/budaya" className="mt-24 mb-4 ml-4 self-start px-6 py-2 bg-[#FFD600] hover:bg-yellow-400 text-black font-medium rounded-full shadow-md border-2 border-yellow-600 flex items-center gap-2 transition-all text-base" style={{ minWidth: '110px', textAlign: 'center' }}>
        <span className="text-lg">←</span> Kembali
      </Link>
      <div className="flex flex-col items-center justify-center pt-10 pb-10 px-2 sm:px-4 md:px-16 animate-fade-in-up">
        <h1 className="text-3xl md:text-5xl font-bold font-serif text-gray-800 mb-4 text-center drop-shadow-lg">🕌 Mondok di Madura: Tradisi Santri yang Lebih dari Sekadar Pendidikan</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">Apa Itu Mondok?</h2>
        <p className="text-base md:text-lg text-gray-700 font-light mb-6 max-w-3xl text-center">
          Mondok adalah tradisi masyarakat Madura yang mengirim anak-anak, bahkan sejak usia dini, untuk belajar di pondok pesantren. Tujuannya bukan hanya mendalami ilmu agama seperti tafsir, hadits, dan tauhid, tetapi juga membentuk karakter, kedisiplinan, dan rasa hormat—baik kepada guru (kyai), orang tua, maupun tetangga.
        </p>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">Budaya Nganter Sekampung</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Ketika seorang anak akan mondok, biasanya bukan hanya keluarga inti yang ikut mengantar. Warga setingkat RT atau kampung pun turut serta mengantarkan sekaligus melepas mereka ke pondok. Tradisi ini dikenal sebagai nganter sekampung—menunjukkan bahwa pendidikan agama adalah amanah kolektif dan warisan komunitas.
        </p>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">Tradisi Santri Harian</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4 max-w-3xl text-base">
          <li>Bangun salat subuh berjamaah</li>
          <li>Mengaji kitab kuning</li>
          <li>Berdzikir dan sima’an</li>
          <li>Belajar bersama secara bergiliran hingga malam</li>
          <li>Diiringi pembiasaan sopan santun dan tata busana sederhana</li>
          <li>Santri wajib menghormati guru dengan melepas sandal (disebut mokkak sandal) saat bersalaman atau bertemu secara langsung.</li>
        </ul>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">Ritual Maqbaroh/Magbaroh</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Setelah masa liburan atau memasuki tahun ajaran baru, santri baru maupun lama biasanya melakukan ziarah ke makam kyai pendiri pondok. Tradisi ini disebut maqbaroh dan bertujuan mengenalkan generasi muda kepada tokoh spiritual serta memperkuat ikatan spiritual dengan pendiri pondok.
        </p>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">Pengabdian Santri</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Sebagian pesantren di Madura menekankan nilai pengabdian. Setelah menuntut ilmu, santri dianggap perlu kembali untuk mengabdi di pondok tanpa pamrih—menjadi bagian dari khidmat pesantren dan mewariskan ilmu ke generasi berikutnya.
        </p>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">📊 Ringkasan dalam Tabel</h2>
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
                <td className="px-3 py-2 border">Tujuan Mondok</td>
                <td className="px-3 py-2 border">Pendidikan agama, pembentukan karakter, kedisiplinan</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border">Tradisi Sosial</td>
                <td className="px-3 py-2 border">Nganter sekampung: warga kampung ikut mengantar ke pesantren</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border">Rutinitas Santri</td>
                <td className="px-3 py-2 border">Salat berjamaah, baca kitab kuning, dzikir, belajar sampai malam</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border">Etika Santri</td>
                <td className="px-3 py-2 border">Mokkak sandal saat bertemu kyai; hormat kepada guru dan sesepuh</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border">Ritual Khazanah</td>
                <td className="px-3 py-2 border">Maqbaroh: ziarah ke makam kyai pendiri pesantren</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border">Nilai Pengabdian</td>
                <td className="px-3 py-2 border">Santri kembali mengabdi tanpa pamrih sebagai warisan spiritual pesantren</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🎥 Penjelasan Gambar</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4 max-w-3xl text-base">
          <li>Gambar 1 – Santri muda dan orang tua kumpul di halaman pesantren sebelum upacara pelepasan. Latarnya pepohonan dan bangunan sederhana mencerminkan suasana pondok Madura.</li>
          <li>Gambar 2 – Proses perpisahan: santri berjabat tangan dengan keluarga dan tetangga di depan gerbang pesantren. Tampak suasana khidmat dan penuh harapan.</li>
          <li>Gambar 3 – Suasana kelas atau majelis mereka belajar kitab bersama di dalam aula pesantren. Tampak kebersamaan serta fokus belajar bersama santri dan guru.</li>
        </ul>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🧾 Kesimpulan</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Tradisi mondok di Madura adalah perpaduan unik antara pendidikan agama, budaya sosial, dan pembentukan karakter. Ini lebih dari sekadar tempat belajar—melainkan sistem hidup yang menjadikan santri sebagai bagian penting dari komunitas pesantren dan masyarakatnya.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-8 w-full max-w-4xl items-center justify-center">
          <img src={Mondok1} alt="Mondok 1" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
          <img src={Mondok2} alt="Mondok 2" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
          <img src={Mondok3} alt="Mondok 3" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
        </div>
      </div>
    </div>
  );
}
