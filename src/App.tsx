import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Budaya from './pages/Budaya';
import Pariwisata from './pages/Pariwisata';
import ListWisataBangkalan from './pages/Pariwisata/Bangkalan/ListWisataBangkalan';
import JaddihLimestoneHill from './pages/Pariwisata/Bangkalan/Jaddih Limestone Hill';
import BukitKapurAermataBangkalan from './pages/Pariwisata/Bangkalan/Bukit Kapur Aermata Bangkalan';
import BukitKapurArosbaya from './pages/Pariwisata/Bangkalan/Bukit Kapur Arosbaya';
import PantaiSiringKemuning from './pages/Pariwisata/Bangkalan/Pantai Siring Kemuning';
import GuaPoteBukitJaddih from './pages/Pariwisata/Bangkalan/Gua Pote Bukit Jaddih';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
