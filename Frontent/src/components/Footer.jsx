import React from 'react';
import { MapPin, Phone, Mail, ChevronRight, ArrowUp } from 'lucide-react';
import logo from '../assets/logo.jpg';
import '../styles/Footer.css';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (id) => {
    const element = document.getElementById(`${id}-section`);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footerGrid">
          {/* Brand Column */}
          <div className="brandCol">
            <div className="footerLogoContainer">
              <img src={logo} alt="ACGS Logo" className="footerLogo" />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="footerBrandName">ACGS</span>
                <span className="footerBrandTagline">Australian College</span>
              </div>
            </div>
            <p className="footerDesc">
              Building Skills, Creating Futures. Quality education bridging the gap between academic learning and practical global careers.
            </p>
            <div className="socials">
              <a href="#" className="socialBtn" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="socialBtn" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="socialBtn" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="footerHeading">Quick Links</h3>
            <ul className="footerLinks">
              <li className="footerLink" onClick={() => handleLinkClick('home')}>
                <ChevronRight size={14} /> Home
              </li>
              <li className="footerLink" onClick={() => handleLinkClick('about')}>
                <ChevronRight size={14} /> About Us
              </li>
              <li className="footerLink" onClick={() => handleLinkClick('courses')}>
                <ChevronRight size={14} /> Courses
              </li>
              <li className="footerLink" onClick={() => handleLinkClick('services')}>
                <ChevronRight size={14} /> Services
              </li>
              <li className="footerLink" onClick={() => handleLinkClick('admissions')}>
                <ChevronRight size={14} /> Admissions
              </li>
              <li className="footerLink" onClick={() => handleLinkClick('contact')}>
                <ChevronRight size={14} /> Contact
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h3 className="footerHeading">Contact Us</h3>
            <div className="contactInfo">
              <div className="contactItem">
                <MapPin className="contactIcon" size={18} />
                <span>Batticaloa, Sri Lanka</span>
              </div>
              <div className="contactItem">
                <Phone className="contactIcon" size={18} />
                <span>+94 XXX XXX XXX</span>
              </div>
              <div className="contactItem">
                <Mail className="contactIcon" size={18} />
                <span>info@acgs.edu.lk</span>
              </div>
            </div>
          </div>

          {/* Mini Hours Column */}
          <div>
            <h3 className="footerHeading">Quick Hours</h3>
            <div className="hoursGrid">
              <div className="hourRow">
                <span className="hourDay">Mon – Fri:</span>
                <span className="hourTime">8:30 AM – 5:00 PM</span>
              </div>
              <div className="hourRow">
                <span className="hourDay">Saturday:</span>
                <span className="hourTime">9:00 AM – 1:00 PM</span>
              </div>
              <div className="hourRow">
                <span className="hourDay">Sunday:</span>
                <span className="hourTime">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bottomBar">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Australian College of Graduate Studies (ACGS). All Rights Reserved.
          </p>
          <button 
            onClick={handleScrollToTop} 
            className="socialBtn" 
            style={{ borderRadius: '8px' }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
