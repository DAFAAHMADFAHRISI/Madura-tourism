import Navbar from "../../components/Navbar";
import Carok1 from "../../assets/images/Carok1.jpg";
import Carok2 from "../../assets/images/Carok2.jpeg";
import Carok3 from "../../assets/images/Carok3.jpeg";
import { Link } from "react-router-dom";

export default function Carok() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-yellow-100 via-white to-red-100">
      <Navbar />
      <Link to="/budaya" className="mt-24 mb-4 ml-4 self-start px-6 py-2 bg-[#FFD600] hover:bg-yellow-400 text-black font-medium rounded-full shadow-md border-2 border-yellow-600 flex items-center gap-2 transition-all text-base" style={{ minWidth: '110px', textAlign: 'center' }}>
        <span className="text-lg">←</span> Kembali
      </Link>
      <div className="flex flex-col items-center justify-center pt-10 pb-10 px-2 sm:px-4 md:px-16 animate-fade-in-up">
        <h1 className="text-3xl md:text-5xl font-bold font-serif text-gray-800 mb-4 text-center drop-shadow-lg">⚔️ Apa Itu Carok?</h1>
        <p className="text-base md:text-lg text-gray-700 font-light mb-6 max-w-3xl text-center">
          Carok adalah tradisi duel horizontal di kalangan pria Madura untuk mempertahankan harga diri saat maruahnya dirasa tersinggung—biasanya terkait masalah wanita, tanah, atau kehormatan keluarga. Duel ini dilakukan secara satu lawan satu, di hadapan keluarga dan warga, menggunakan celurit (senjata khas Madura). Keduanya bertarung dengan aturan tak tertulis: tidak menyerang dari belakang, sesudah itu berdamai. Karena sifatnya ekstrem, terkadang mengakibatkan luka serius atau bahkan kematian.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">📜 Sejarah & Nilai Filosofis</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Duren, istilah carok sendiri berarti “bertarung demi kehormatan”. Akar tradisi ini muncul sebagai wujud mempertahankan martabat ketika tidak ada penyelesaian damai—dianggap sebagai “jalan terakhir” sebelum lawan dijatuhkan secara fisik. Celurit bukan hanya alat pandang lowongan, tetapi simbol kejantanan dan harga diri.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🔁 Prosedur Pelaksanaannya</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4 max-w-3xl text-base">
          <li>Konflik dibicarakan terlebih dulu—biasanya melibatkan mediasi keluarga atau tokoh.</li>
          <li>Jika tak tercapai damai, duel pun disepakati: waktu, lokasi, dan saksi.</li>
          <li>Duel berlangsung memakai celurit, satu lawan satu, di hadapan warga dan keluarga.</li>
          <li>Aturannya ketat: tidak menyerang dari belakang, tidak membiarkan dendam berlanjut.</li>
          <li>Setelah selesai, pemenang dan yang kalah wajib berdamai. Celurit sang pemenang bisa disimpan sebagai simbol keberanian.</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🌿 Makna Sosial & Kontroversi</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4 max-w-3xl text-base">
          <li>Harga diri dan kejantanan: Carok jadi simbol tegas dari sifat gengsi Madura.</li>
          <li>Keadilan lokal: Meski brutal, dianggap metode penyelesaian konflik yang final.</li>
          <li>Solidaritas sosio-kultural: Keluarga dan warga ikut memberi dukungan—menandakan solidaritas komunitas.</li>
          <li>Nilai tradisi vs hukum negara: Meskipun dianggap kriminal oleh hukum, bagi sebagian masyarakat carok tetap bermakna dalam budaya lokal.</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">🧾 Kesimpulan</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">
          Carok mencerminkan tradisi Madura yang kuat, di mana maruah dan harga diri begitu dijunjung tinggi. Meskipun sarat risiko, tradisi ini bertahan sebagai identitas lokal dan simulasi kejantanan—namun sekarang mulai banyak ditinggalkan atau dikurangi frekuensinya seiring modernisasi dan penegakan hukum.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 mt-6 w-full max-w-3xl">📷 Penjelasan Gambar</h2>
        <p className="text-base text-gray-700 mb-4 max-w-3xl">Foto-foto memperlihatkan suasana duel carok, ilustrasi celurit, dan simbolisme keberanian dalam budaya Madura.</p>
        <div className="flex flex-col md:flex-row gap-4 mb-8 w-full max-w-4xl items-center justify-center">
          <img src={Carok1} alt="Carok 1" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
          <img src={Carok2} alt="Carok 2" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
          <img src={Carok3} alt="Carok 3" className="rounded-2xl shadow-lg border border-white/30 object-cover w-full md:w-1/3 h-56 md:h-64" />
        </div>
      </div>
    </div>
  );
}
