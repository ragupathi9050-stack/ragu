
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import DestinationsPage from './pages/DestinationsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import Layout from './components/layout/Layout';
import AdminLoginPage from './pages/AdminLoginPage';
import ScrollToTop from './components/utils/ScrollToTop';

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
    <ScrollToTop />
    {isAdminRoute ? (
        <Routes>
          <Route path="/admin" element={<AdminLoginPage />} />
        </Routes>
      ) : (
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    )}
    </>
  );
};

export default App;
