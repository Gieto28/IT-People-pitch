import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/logo_ITPeopleGroup.svg';

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'objetivos', 'solidaria', 'bonus', 'beneficios', 'escolha', 'conclusao'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'objetivos', key: 'objetivos' },
    { id: 'solidaria', key: 'solidaria' },
    { id: 'bonus', key: 'bonus' },
    { id: 'beneficios', key: 'beneficios' },
    { id: 'escolha', key: 'escolha' },
    { id: 'conclusao', key: 'conclusao' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-white dark:bg-gray-900 shadow-lg py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-3 transition-opacity hover:opacity-80"
          >
            <img 
              src={logo} 
              alt="IT People First" 
              className={`h-8 ${isScrolled ? '' : 'brightness-0 invert'}`}
            />
            <span className={`text-xl font-bold transition-colors ${
              isScrolled 
                ? 'text-primary-600 dark:text-primary-400' 
                : 'text-white dark:text-white'
            }`}>
              IT People First
            </span>
          </button>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? isScrolled
                        ? 'text-primary-700 dark:text-primary-400 border-b-2 border-primary-700 dark:border-primary-400'
                        : 'text-white border-b-2 border-white'
                      : isScrolled
                      ? 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                      : 'text-white hover:text-gray-200'
                  } pb-1`}
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

