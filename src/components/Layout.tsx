import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-night text-mist overflow-x-hidden selection:bg-bmw-blue selection:text-white">
      <Navbar />
      <main className="flex-grow">
        {/* ⚡ Suspense boundary here keeps Navbar/Footer visible while lazy routes load */}
        <Suspense fallback={
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-white/20 border-t-primary rounded-full animate-spin" role="status" aria-label="Loading" />
          </div>
        }>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
