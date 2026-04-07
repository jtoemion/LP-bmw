import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import GenericPage from './pages/GenericPage';
import PriceList from './pages/PriceList';
import SimulasiKredit from './pages/SimulasiKredit';
import PromoPage from './pages/PromoPage';
import ContactPage from './pages/ContactPage';

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
