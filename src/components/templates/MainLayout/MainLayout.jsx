import React from 'react';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white font-body-md text-slate-800 antialiased selection:bg-[#FF6B35] selection:text-white">
      {/* Fixed Sticky Header */}
      <Header />

      {/* Main Content Area */}
      <main className="w-full pt-20 bg-white min-h-[calc(100vh-20rem)] flex-1">
        {children}
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
