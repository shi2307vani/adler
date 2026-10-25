import React from 'react';
import { NAV_LINKS } from '../../../constants/navigation';
import { useNavigation } from '../../../context/NavigationContext';
import Logo from '../../atoms/Logo/Logo';
import Button from '../../atoms/Button/Button';
import Icon from '../../atoms/Icon/Icon';
import NavItem from '../../molecules/NavItem/NavItem';

export default function Header() {
  const { navigateTo, mobileMenuOpen, setMobileMenuOpen } = useNavigation();

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/95 backdrop-blur-xl shadow-[0_4px_25px_-2px_rgba(28,25,36,0.05)] border-b border-slate-100">
      <div className="h-20 max-w-7xl mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-space-md">
        {/* Brand Logo */}
        <Logo variant="header" />

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-space-lg">
          {NAV_LINKS.map((link) => (
            <NavItem key={link.id} item={link} />
          ))}
        </nav>

        {/* Action Buttons & Mobile Hamburger */}
        <div className="flex items-center gap-space-sm">
          <Button
            variant="gold"
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => navigateTo('our-products')}
          >
            Explore Products
          </Button>

          <Button
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => navigateTo('partner-with-us')}
          >
            Partner Enquiries
          </Button>

          {/* User / Shield Icon Indicator */}
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 ml-space-xs text-on-primary">
            <Icon name="person" size="18px" />
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            className="xl:hidden w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary-container hover:bg-surface-container-high transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Icon name={mobileMenuOpen ? 'close' : 'menu'} size="24px" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest/98 backdrop-blur-2xl border-b border-secondary/20 px-6 py-6 shadow-2xl flex flex-col gap-4 animate-in fade-in duration-200">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <NavItem key={link.id} item={link} mobile />
            ))}
          </nav>
          <div className="pt-4 border-t border-surface-container flex flex-col gap-3">
            <Button
              variant="gold"
              size="md"
              className="w-full"
              onClick={() => navigateTo('our-products')}
            >
              Explore Products
            </Button>
            <Button
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => navigateTo('partner-with-us')}
            >
              Partner Enquiries
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
