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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
