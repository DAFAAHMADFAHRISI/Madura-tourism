import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Budaya from './pages/Budaya';
import Pariwisata from './pages/Pariwisata';
import ListWisataBangkalan from './pages/Pariwisata/Bangkalan/ListWisataBangkalan';
import JaddihLimestoneHill from './pages/Pariwisata/Bangkalan/Jaddih Limestone Hill';
import BukitKapurAermataBangkalan from './pages/Pariwisata/Bangkalan/Bukit Kapur Aermata Bangkalan';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
