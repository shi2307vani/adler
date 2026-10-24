import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import MainLayout from './components/templates/MainLayout/MainLayout';
import HomePage from './pages/Home/HomePage';
import AboutUsPage from './pages/AboutUs/AboutUsPage';
import OurProductsPage from './pages/OurProducts/OurProductsPage';
import WhyAdlerPage from './pages/WhyAdler/WhyAdlerPage';
import PartnerWithUsPage from './pages/PartnerWithUs/PartnerWithUsPage';
import './App.css';

function AppContent() {
  const { currentPage } = useNavigation();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about-us':
        return <AboutUsPage />;
      case 'our-products':
        return <OurProductsPage />;
      case 'why-adler':
        return <WhyAdlerPage />;
      case 'partner-with-us':
        return <PartnerWithUsPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return <MainLayout>{renderCurrentPage()}</MainLayout>;
}

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
