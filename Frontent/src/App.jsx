import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Services from './pages/Services';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-container">
      {/* Dynamic Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Home Banner & snapshot stats */}
        <Home />

        {/* Vision, Mission & Core Values */}
        <About />

        {/* Filterable Course Catalog */}
        <Courses />

        {/* Support Services & Global representation */}
        <Services />

        {/* Entry Criteria & application progress timelines */}
        <Admissions />

        {/* Live Status contact info & quick inquiries form */}
        <Contact />
      </main>

      {/* Corporate footer info */}
      <Footer />
    </div>
  );
}
