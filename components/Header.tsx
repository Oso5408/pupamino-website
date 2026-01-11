'use client';

import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/lib/constants/images';
import { useStore } from '@/lib/store/useStore';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { cart, language, setLanguage, isMobileMenuOpen, toggleMobileMenu } = useStore();

  const navItems = [
    { label: 'PRODUCTS', href: '#products' },
    { label: 'BLOG', href: '#blog' },
    { label: 'ABOUT US', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fcebe3] shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[100px] md:h-[143px]">
            {/* Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 md:left-[100px] md:translate-x-0">
              <Link href="/">
                <Image
                  src={images.logo}
                  alt="Pupamino Logo"
                  width={251}
                  height={62}
                  priority
                  className="w-[150px] md:w-[251px] h-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 ml-auto">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-semibold text-[#883d13] text-[16px] hover:text-[#f26b2b] transition-colors"
                  style={{ fontFamily: 'Lexend, sans-serif' }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item.label}
                </Link>
              ))}

              {/* Language Selector */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
                className="font-lexend font-semibold text-[#883d13] text-[16px] hover:text-[#f26b2b] transition-colors"
              >
                {language === 'en' ? 'English' : '中文'}
              </button>

              {/* Cart Icon */}
              <button className="relative text-[#883d13] hover:text-[#f26b2b] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#f26b2b] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden ml-auto text-[#883d13] z-50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18M3 6h18M3 18h18"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-[100px] right-0 bottom-0 w-[80%] max-w-[300px] bg-[#fcebe3] shadow-2xl z-40 md:hidden"
          >
            <nav className="flex flex-col p-8 gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-lexend font-semibold text-[#883d13] text-[18px] hover:text-[#f26b2b] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMobileMenu();
                    setTimeout(() => {
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                  }}
                >
                  {item.label}
                </Link>
              ))}

              <button
                onClick={() => {
                  setLanguage(language === 'en' ? 'zh' : 'en');
                  toggleMobileMenu();
                }}
                className="font-lexend font-semibold text-[#883d13] text-[18px] hover:text-[#f26b2b] transition-colors text-left"
              >
                {language === 'en' ? 'English' : '中文'}
              </button>

              <div className="border-t border-[#883d13]/20 pt-6">
                <button className="flex items-center gap-2 text-[#883d13] hover:text-[#f26b2b] transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                  <span className="font-semibold" style={{ fontFamily: 'Lexend, sans-serif' }}>Cart ({cartItemsCount})</span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={toggleMobileMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
