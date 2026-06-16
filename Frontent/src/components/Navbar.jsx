import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.jpg';
import '../styles/Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Courses', id: 'courses' },
    { label: 'Services', id: 'services' },
    { label: 'Admissions & Careers', id: 'admissions' },
    { label: 'Contact Us', id: 'contact' }
  ];

  // Scroll listener to add background shadow and update active section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll Spy logic
      const scrollPosition = window.scrollY + 120; // offset for navbar height
      
      for (const item of navItems) {
        const element = document.getElementById(`${item.id}-section`);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsDrawerOpen(false);
    const element = document.getElementById(`${id}-section`);
    if (element) {
      // Smooth scroll to the section
      const yOffset = -80; // Offset for sticky navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navContainer">
          {/* Logo & Brand Info */}
          <div className="logoContainer" onClick={() => handleNavClick('home')}>
            <img src={logo} alt="ACGS Logo" className="logo" />
            <div className="brandText">
              <span className="brandName">ACGS</span>
              <span className="brandTagline">Australian College</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktopNav">
            <div className="navLinks">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`navLink ${activeSection === item.id ? 'activeNavLink' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button 
              className="btn ctaBtn"
              onClick={() => handleNavClick('contact')}
            >
              Apply Now <ArrowRight size={14} style={{ marginLeft: '0.25rem' }} />
            </button>
          </nav>

          {/* Mobile Burger Menu Button */}
          <button 
            className="mobileMenuBtn" 
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Drawer Overlay for Mobile */}
      <div 
        className={`drawerOverlay ${isDrawerOpen ? 'show' : ''}`} 
        onClick={() => setIsDrawerOpen(false)}
      ></div>

      {/* Mobile Nav Drawer */}
      <div className={`mobileDrawer ${isDrawerOpen ? 'open' : ''}`}>
        <div className="drawerHeader">
          <div className="logoContainer">
            <img src={logo} alt="ACGS Logo" className="logo" />
            <span className="brandName" style={{ fontSize: '1.1rem' }}>ACGS</span>
          </div>
          <button 
            className="drawerCloseBtn" 
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Close mobile menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="drawerLinks">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`drawerLink ${activeSection === item.id ? 'activeDrawerLink' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="drawerCta">
          <button 
            className="btn drawerCtaBtn"
            onClick={() => handleNavClick('contact')}
          >
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
}
