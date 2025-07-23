import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import KulinerPage from './pages/KulinerPage';
import BudayaPage from './pages/BudayaPage';
import GaleriPage from './pages/GaleriPage';
import KontakPage from './pages/KontakPage';
import UmkmPage from './pages/UmkmPage';
import DesaPage from './pages/DesaPage';
import ScrollToTop from './components/ScrollToTop';
import Terkirim from './pages/Terkirim';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="kuliner" element={<KulinerPage />} />
          <Route path="budaya" element={<BudayaPage />} />
          <Route path="galeri" element={<GaleriPage />} />
          <Route path="kontak" element={<KontakPage />} />
          <Route path="umkm" element={<UmkmPage />} />
          <Route path="desa" element={<DesaPage />} />
          <Route path="/terkirim" element={<Terkirim />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
