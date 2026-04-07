import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

// ⚡ Lazy-load route components to reduce initial bundle size.
// Only HomePage is eagerly loaded since it's the landing page.
// Suspense boundary lives in Layout.tsx to keep Navbar/Footer visible during loading.
const GenericPage = lazy(() => import('./pages/GenericPage'));
const PriceList = lazy(() => import('./pages/PriceList'));
const SimulasiKredit = lazy(() => import('./pages/SimulasiKredit'));
const PromoPage = lazy(() => import('./pages/PromoPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="spesifikasi/*" element={<GenericPage title="BMW Models Catalog" />} />
          <Route path="pricelist-bmw" element={<PriceList />} />
          <Route path="bmw-financial-service" element={<SimulasiKredit />} />
          <Route path="promo-bmw-indonesia" element={<PromoPage />} />
          <Route path="find-a-bmw-dealership-dealer-locator" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
