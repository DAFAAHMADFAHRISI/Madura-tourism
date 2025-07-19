import Navbar from "../../components/Navbar";
import Batik1 from "../../assets/images/Madurese Batik1.jpg";
import Batik2 from "../../assets/images/Madurese Batik2.jpg";
import Batik3 from "../../assets/images/Madurese Batik3.jpg";
import { Link } from "react-router-dom";

export default function MadureseBatik() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-pink-100 via-white to-yellow-100">
      <Navbar />
      <Link to="/budaya" className="mt-24 mb-4 ml-4 self-start px-6 py-2 bg-[#FFD600] hover:bg-yellow-400 text-black font-medium rounded-full shadow-md border-2 border-yellow-600 flex items-center gap-2 transition-all text-base" style={{ minWidth: '110px', textAlign: 'center' }}>
        <span className="text-lg">←</span> Kembali
      </Link>
      <div className="flex flex-col items-center justify-center pt-10 pb-10 px-2 sm:px-4 md:px-16 animate-fade-in-up">
        <h1 className="text-3xl md:text-5xl font-bold font-serif text-gray-800 mb-4 text-center drop-shadow-lg">🧵 Apa Itu Batik Madura?</h1>
        <p className="text-base md:text-lg text-gray-700 font-light mb-6 max-w-3xl text-center">
          Batik Madura adalah salah satu tradisi batik khas Indonesia yang berasal dari Pulau Madura, Jawa Timur. Dikenal dengan warna-warna cerah dan motif ekspresif, batik ini mencerminkan kekayaan budaya masyarakat Madura.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🎨 Ciri & Motif Khas</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4 max-w-3xl text-base">
          <li><b>Warna Terang & Mencolok:</b> Merah, kuning, hijau, biru dan hitam pekat adalah warna dominan yang mencolok sehingga mudah dikenali.</li>
          <li><b>Motif Alam dan Budaya Lokal:</b> Nuansa flora dan fauna seperti bunga, burung, kupu-kupu, ikan, akar kayu, perahu, hingga simbol tradisi seperti Karapan Sapi dan Kapal Nelayan dituangkan dalam corak batik.</li>
          <li><b>Tanpa Mal atau Patrón:</b> Proses membatik dilakukan langsung dengan canting, tanpa cetakan; menuntut kreativitas dan keterampilan tinggi dari pengrajin.</li>
        </ul>
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 mt-4 w-full max-w-3xl">Motif Daerah:</h3>
        <ul className="list-disc ml-6 text-gray-700 mb-4 max-w-3xl text-base">
          <li><b>Batik Pamekasan:</b> Motif seperti Sekar Jagad, Leres, Mata Keteran, visualnya sederhana namun penuh warna.</li>
          <li><b>Batik Bangkalan:</b> Motif ayam jago, bunga, geometris dengan warna bold yang elegan.</li>
          <li><b>Batik Sumenep & Sampang:</b> Motif klasik dan kombinasi flora/fauna pesisir yang ceria.</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">✳️ Ragam Motif dan Filosofi</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4 max-w-3xl text-base">
          <li><b>Lancor / Leres:</b> Garis simetris yang melambangkan kejayaan abad ke-16 hingga 17.</li>
          <li><b>Serat Kayu atau Batu:</b> Tampilan tekstural yang menyerupai retakan atau akar pohon, menggambarkan kealamian.</li>
          <li><b>Buketan:</b> Rangkaian bunga yang menggambarkan keindahan dan kemakmuran.</li>
          <li><b>Motif Binatang dan Alam:</b> Ikan, ombak, kupu-kupu — melambangkan kemakmuran, transformasi, dan kehidupan laut Madura.</li>
          <li><b>Simbol Budaya:</b> Motif seperti perkaper, kapal, atau elemen karapan menyimbolkan identitas tradisi lokal.</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🧾 Ringkasan</h2>
        <div className="overflow-x-auto w-full max-w-3xl mb-6">
          <table className="min-w-full border border-gray-300 rounded-xl text-sm md:text-base">
            <thead>
              <tr className="bg-yellow-200 text-gray-800">
                <th className="px-3 py-2 border">Aspek</th>
                <th className="px-3 py-2 border">Penjelasan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2 border">Warna Dominan</td>
                <td className="px-3 py-2 border">Merah, hijau, kuning, biru, hitam pekat</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border">Teknik Membatik</td>
                <td className="px-3 py-2 border">Tanpa mal atau pola cetak; langsung dengan canting</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border">Motif Umum</td>
                <td className="px-3 py-2 border">Alam (bunga, akar, fauna laut), simbol budaya lokal</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border">Daerah Sentra</td>
                <td className="px-3 py-2 border">Pamekasan, Bangkalan, Sumenep, Sampang</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border">Filosofi</td>
                <td className="px-3 py-2 border">Keberanian, kemakmuran, identitas budaya, kreativitas perajin</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🖼️ Penjelasan Gambar</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4 max-w-3xl text-base">
          <li>Gambar 1 – Motif berwarna cerah menggambarkan flora khas Madura, seperti bunga dan garis dinamis.</li>
          <li>Gambar 2 – Motif fauna seperti kupu-kupu dalam kombinasi akar kayu, menunjukkan keberanian desain.</li>
          <li>Gambar 3 – Pola serat abstrak pucuk rebung dan serat kayu yang artistik dan tekstural.</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">✅ Kesimpulan</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Batik Madura adalah warisan budaya Madura yang sangat kaya—dengan estetika berani, filosofi lokal, dan teknik batik tradisional yang otentik. Meski berakar tradisional, batik ini telah banyak dikembangkan menjadi fashion modern, kain dekorasi, hingga aksesori.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-8 w-full max-w-4xl items-center justify-center">
          <img src={Batik1} alt="Batik Madura 1" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
          <img src={Batik2} alt="Batik Madura 2" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
          <img src={Batik3} alt="Batik Madura 3" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
        </div>
      </div>
    </div>
  );
}
