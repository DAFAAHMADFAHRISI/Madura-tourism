import Navbar from "../../components/Navbar";
import Rokat1 from "../../assets/images/Upacara Rokat1.jpeg";
import Rokat2 from "../../assets/images/Upacara Rokat2.jpg";
import Rokat3 from "../../assets/images/Upacara Rokat3.jpg";

export default function UpacaraRokat() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-blue-100 via-white to-green-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-24 pb-10 px-2 sm:px-4 md:px-16 animate-fade-in-up">
        <h1 className="text-3xl md:text-5xl font-bold font-serif text-gray-800 mb-4 text-center drop-shadow-lg">🌊 Apa Itu Upacara Rokat?</h1>
        <p className="text-base md:text-lg text-gray-700 font-light mb-6 max-w-3xl text-center">
          Upacara Rokat, khususnya <b>Rokat Tase’</b> (juga dikenal sebagai Petik Laut atau ritual larung), adalah tradisi adat nelayan Madura—sebagai ungkapan syukur dan permohonan keselamatan saat melaut. Ritual ini mencerminkan kedekatan spiritual masyarakat pesisir dengan laut.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">📅 Waktu Pelaksanaan</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Biasanya digelar setiap tahun, terutama pada bulan Syawal (setelah Ramadan) atau bulan keenam-ke­-tujuh kalender lokal.<br />
          Rangkaian acara bisa berlangsung selama 3–5 hari berturut-turut.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🛶 Proses Rangkaian Ritual</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4 max-w-3xl text-base">
          <li><b>Doa & Istighosah</b><br />Dimulai dengan doa bersama di musala atau musholla, dipimpin pemuka agama untuk memohon keselamatan dan keberkahan laut.</li>
          <li><b>Persiapan Perahu & Sesaji</b><br />Nelayan menghias perahu dengan bendera dan hiasan warna-warni. Pada perahu disiapkan sesaji berupa: nasi tumpeng, ketupat, ikan kering, lauk pauk, buah-buahan, bunga, dupa, dan terkadang kepala kambing atau sapi.</li>
          <li><b>Larung Sesaji ke Laut</b><br />Puncak acara, sesaji dilarung ke laut oleh para nelayan sebagai simbol permohonan perlindungan dan ungkapan terima kasih atas hasil tangkapan.</li>
          <li><b>Hiburan Budaya</b><br />Diselingi kesenian tradisional seperti ludruk, ketoprak, musik rebana atau saronen, serta pengajian atau khotmil Qur’an.</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🌱 Makna Budaya & Sosial</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4 max-w-3xl text-base">
          <li><b>Spiritual:</b> Upaya mendekatkan diri kepada Tuhan dan memohon keselamatan di laut.</li>
          <li><b>Sosial:</b> Wadah gotong royong dan menjalin solidaritas komunitas nelayan.</li>
          <li><b>Ekologis:</b> Menumbuhkan rasa hormat terhadap laut sebagai sumber kehidupan.</li>
          <li><b>Kultural:</b> Menjaga dan meneruskan warisan adat leluhur kepada generasi muda.</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">📷 Penjelasan Gambar</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">Foto-foto menunjukkan arak-arakan perahu yang dihias sangat meriah dan penuh warna, diliputi semangat kebersamaan.<br />Terlihat juga warga berkumpul di tepi pantai, menyaksikan prosesi doa, larung sesaji, dan kesenian rakyat sebagai bagian dari ritual.</p>
        <div className="flex flex-col md:flex-row gap-4 mb-8 w-full max-w-4xl items-center justify-center">
          <img src={Rokat1} alt="Upacara Rokat 1" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
          <img src={Rokat2} alt="Upacara Rokat 2" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
          <img src={Rokat3} alt="Upacara Rokat 3" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">✨ Kesimpulan</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Upacara Rokat Madura adalah ritual adat berlapis makna: spiritualitas, budaya gotong royong, dan penghormatan terhadap alam. Meski peraihannya tradisional, Rokat Tase’ terus dipelihara—menjadi simbol kebanggaan dan identitas masyarakat pesisir Madura.
        </p>
      </div>
    </div>
  );
}
