import React from 'react';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-body-md text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary-fixed">
      {/* Fixed Sticky Header */}
      <Header />

      {/* Main Content Area */}
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)] flex-1">
        {children}
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
