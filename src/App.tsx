import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Budaya from './pages/Budaya';
import Pariwisata from './pages/Pariwisata';
import ListWisataBangkalan from './pages/Pariwisata/Bangkalan/ListWisataBangkalan';
import ListWisataSampang from './pages/Pariwisata/Sampang/ListWisataSampang';
import JaddihLimestoneHill from './pages/Pariwisata/Bangkalan/Jaddih Limestone Hill';
import BukitKapurAermataBangkalan from './pages/Pariwisata/Bangkalan/Bukit Kapur Aermata Bangkalan';
import BukitKapurArosbaya from './pages/Pariwisata/Bangkalan/Bukit Kapur Arosbaya';
import PantaiSiringKemuning from './pages/Pariwisata/Bangkalan/Pantai Siring Kemuning';
import GuaPoteBukitJaddih from './pages/Pariwisata/Bangkalan/Gua Pote Bukit Jaddih';
import AirTerjunToroan from './pages/Pariwisata/Sampang/Air Terjun Toroan';
import PantaiCamplong from './pages/Pariwisata/Sampang/Pantai Camplong';
import GoaLebar from './pages/Pariwisata/Sampang/Goa Lebar';
import KompleksMakamRatuIbu from './pages/Pariwisata/Sampang/Kompleks Makam Ratu Ibu';
import AlunAlunTrunojoyoKotaSampang from './pages/Pariwisata/Sampang/Alun Alun Trunojoyo Kota Sampang';
import ListWisataPamekasan from './pages/Pariwisata/Pamekasan/ListWisataPamekasan';
import PantaiJumiang from './pages/Pariwisata/Pamekasan/Pantai Jumiang';
import ViharaAvalokitesvara from './pages/Pariwisata/Pamekasan/Vihara Avalokitesvara';
import ArekLancor from './pages/Pariwisata/Pamekasan/Arek Lancor';
import ApiTakKunjungPadam from './pages/Pariwisata/Pamekasan/Api Tak Kunjung Padam';
import KampoengToronSamalem from './pages/Pariwisata/Pamekasan/Kampoeng Toron Samalem';
import ListWisataSumenep from './pages/Pariwisata/Sumenep/ListWisataSumenep';
import GiliIyang from "./pages/Pariwisata/Sumenep/Gili Iyang";
import PulauGiliLabak from "./pages/Pariwisata/Sumenep/Pulau Gili Labak";
import MasjidAgungSumenep from "./pages/Pariwisata/Sumenep/Masjid Agung Sumenep";
import MuseumSultanSumenep from "./pages/Pariwisata/Sumenep/Museum Sultan Sumenep";
import KompleksPemakamanRajaRajaSumenep from "./pages/Pariwisata/Sumenep/Kompleks Pemakaman Raja-Raja Sumenep";
import Kontak from './pages/Kontak';
import KarapanSapi from "./pages/Lebih_Lengkap/Karapansapi";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/budaya" element={<Budaya />} />
        <Route path="/pariwisata" element={<Pariwisata />} />
        <Route path="/pariwisata/bangkalan" element={<ListWisataBangkalan />} />
        <Route path="/pariwisata/bangkalan/jaddih-limestone-hill" element={<JaddihLimestoneHill />} />
        <Route path="/pariwisata/bangkalan/bukit-kapur-aermata-bangkalan" element={<BukitKapurAermataBangkalan />} />
        <Route path="/pariwisata/bangkalan/bukit-kapur-arosbaya" element={<BukitKapurArosbaya />} />
        <Route path="/pariwisata/bangkalan/pantai-siring-kemuning" element={<PantaiSiringKemuning />} />
        <Route path="/pariwisata/bangkalan/gua-pote-bukit-jaddih" element={<GuaPoteBukitJaddih />} />
        <Route path="/pariwisata/sampang" element={<ListWisataSampang />} />
        <Route path="/pariwisata/sampang/air-terjun-toroan" element={<AirTerjunToroan />} />
        <Route path="/pariwisata/sampang/pantai-camplong" element={<PantaiCamplong />} />
        <Route path="/pariwisata/sampang/goa-lebar" element={<GoaLebar />} />
        <Route path="/pariwisata/sampang/kompleks-makam-ratu-ibu" element={<KompleksMakamRatuIbu />} />
        <Route path="/pariwisata/sampang/alun-alun-trunojoyo-kota-sampang" element={<AlunAlunTrunojoyoKotaSampang />} />
        <Route path="/pariwisata/pamekasan" element={<ListWisataPamekasan />} />
        <Route path="/pariwisata/pamekasan/pantai-jumiang" element={<PantaiJumiang />} />
        <Route path="/pariwisata/pamekasan/vihara-avalokitesvara" element={<ViharaAvalokitesvara />} />
        <Route path="/pariwisata/pamekasan/arek-lancor" element={<ArekLancor />} />
        <Route path="/pariwisata/pamekasan/api-tak-kunjung-padam" element={<ApiTakKunjungPadam />} />
        <Route path="/pariwisata/pamekasan/kampoeng-toron-samalem" element={<KampoengToronSamalem />} />
        <Route path="/pariwisata/sumenep" element={<ListWisataSumenep />} />
        <Route path="/pariwisata/sumenep/gili-iyang" element={<GiliIyang />} />
        <Route path="/pariwisata/sumenep/pulau-gili-labak" element={<PulauGiliLabak />} />
        <Route path="/pariwisata/sumenep/masjid-agung-sumenep" element={<MasjidAgungSumenep />} />
        <Route path="/pariwisata/sumenep/museum-sultan-sumenep" element={<MuseumSultanSumenep />} />
        <Route path="/pariwisata/sumenep/kompleks-pemakaman-raja-raja-sumenep" element={<KompleksPemakamanRajaRajaSumenep />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/lebih-lengkap/karapansapi" element={<KarapanSapi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
