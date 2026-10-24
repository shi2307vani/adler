import React, { createContext, useContext, useState, useEffect } from 'react';

const NavigationContext = createContext(null);

const normalizePage = (hash) => {
  if (!hash) return 'home';
  const clean = hash.replace(/^[#/]+/, '').toLowerCase();
  if (['home', 'about-us', 'our-products', 'why-adler', 'partner-with-us'].includes(clean)) {
    return clean;
  }
  if (clean.includes('about')) return 'about-us';
  if (clean.includes('product')) return 'our-products';
  if (clean.includes('why')) return 'why-adler';
  if (clean.includes('partner') || clean.includes('contact')) return 'partner-with-us';
  return 'home';
};

export function NavigationProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(() => {
    return typeof window !== 'undefined' ? normalizePage(window.location.hash) : 'home';
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProductFilter, setSelectedProductFilter] = useState('all');

  // Sync with window.location.hash on mount and popstate/hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const page = normalizePage(window.location.hash);
      setCurrentPage(page);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (pageId, sectionId = null) => {
    const resolvedPage = normalizePage(pageId);
    setCurrentPage(resolvedPage);
    window.location.hash = resolvedPage;
    setMobileMenuOpen(false);

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        setCurrentPage: navigateTo,
        mobileMenuOpen,
        setMobileMenuOpen,
        selectedProductFilter,
        setSelectedProductFilter,
        navigateTo
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
