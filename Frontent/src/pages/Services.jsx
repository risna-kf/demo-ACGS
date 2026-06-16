import React from 'react';
import { 
  CheckCircle, Globe, GraduationCap, Briefcase, 
  MapPin, CheckSquare, Search, FileEdit, PenTool, 
  FileCheck, DollarSign, Compass, Building, UserCheck
} from 'lucide-react';
import '../styles/Services.css';

export default function Services() {
  const abroadServices = [
    { text: 'Course & university selection', icon: Search },
    { text: 'Application processing', icon: FileEdit },
    { text: 'SOP writing support', icon: PenTool },
    { text: 'Visa guidance & checklists', icon: FileCheck },
    { text: 'Scholarship guidance & advice', icon: DollarSign },
    { text: 'Pre-departure briefing sessions', icon: Compass }
  ];

  const destinations = [
    { name: 'United Kingdom', class: 'flag-uk' },
    { name: 'Australia', class: 'flag-australia' },
    { name: 'Canada', class: 'flag-canada' },
    { name: 'New Zealand', class: 'flag-nz' },
    { name: 'Ireland', class: 'flag-ireland' },
    { name: 'United States', class: 'flag-usa' }
  ];

  return (
    <div className="services-page-root">
      {/* STUDY ABROAD SERVICES */}
      <section id="services-section" className="servicesSection section-padding" style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="subTitle">Student Support</span>
            <h2>Study Abroad Services</h2>
            <p>
              We provide comprehensive, end-to-end support for students planning to pursue high-quality education overseas.
            </p>
          </div>

          <div className="studyAbroadHero">
            <div className="studyAbroadInfo">
              <h3>Global Student Visa Support</h3>
              <p>
                Our expert advisors navigate the complete university placement process, ensuring candidates select courses aligned with their career ambitions and meet immigration requirements.
              </p>
              <div className="servicesList">
                {abroadServices.map((srv, index) => {
                  const SrvIcon = srv.icon;
                  return (
                    <div key={index} className="serviceListItem">
                      <SrvIcon className="serviceListIcon" size={16} />
                      <span>{srv.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="studyAbroadInfo" style={{ backgroundColor: 'var(--bg-light)', padding: '2.5rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-color)' }}>
              <h4 style={{ color: 'var(--primary-navy)', marginBottom: '0.75rem', fontSize: '1.2rem' }}>Why Study Overseas?</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-medium)', marginBottom: '1rem' }}>
                Completing a Certificate or Diploma in Sri Lanka and transferring to a global degree program can save up to 60% of education costs while securing identical degrees.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.50rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                  <CheckCircle size={14} style={{ color: 'var(--accent-gold)' }} />
                  <span>Full credit transfer opportunities</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                  <CheckCircle size={14} style={{ color: 'var(--accent-gold)' }} />
                  <span>Post-study work permit path advice</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                  <CheckCircle size={14} style={{ color: 'var(--accent-gold)' }} />
                  <span>Scholarship eligibility maximization</span>
                </div>
              </div>
            </div>
          </div>

          {/* Destinations Grid */}
          <div>
            <h3 className="destinationsTitle">Destinations We Represent</h3>
            <div className="destinationsGrid">
              {destinations.map((dest, idx) => (
                <div key={idx} className="destinationCard">
                  <div className={`flagIcon ${dest.class}`}></div>
                  <span className="destinationName">{dest.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLACEMENT & CAREERS */}
      <section className="placementSection section-padding">
        <div className="container splitSectionGrid">
          
          {/* University Placement */}
          <div className="serviceCard">
            <div className="serviceHeader">
              <div className="serviceHeaderIcon">
                <Building size={24} />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-red)', fontWeight: 700, uppercase: 'true', letterSpacing: '0.05em' }}>Pathways</span>
                <h3>University Placement</h3>
              </div>
            </div>
            <p className="serviceCardText">
              We assist students in securing admissions directly to prestigious international universities and institutions around the world.
            </p>
            <div className="subList">
              <div className="subListItem">
                <div className="subListBullet"></div>
                <span>Undergraduate degree admissions</span>
              </div>
              <div className="subListItem">
                <div className="subListBullet"></div>
                <span>Postgraduate admissions & MBA pathways</span>
              </div>
              <div className="subListItem">
                <div className="subListBullet"></div>
                <span>Credit transfer pathways (HND to final year top-up)</span>
              </div>
              <div className="subListItem">
                <div className="subListBullet"></div>
                <span>Foundation courses to global degree routes</span>
              </div>
            </div>
          </div>

          {/* Career Guidance */}
          <div className="serviceCard">
            <div className="serviceHeader">
              <div className="serviceHeaderIcon">
                <UserCheck size={24} />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-gold-hover)', fontWeight: 700, uppercase: 'true', letterSpacing: '0.05em' }}>Employability</span>
                <h3>Career Guidance</h3>
              </div>
            </div>
            <p className="serviceCardText">
              ACGS works beyond training classrooms. We structure resources that make our students highly employable in corporate organizations.
            </p>
            <div className="subList">
              <div className="subListItem">
                <div className="subListBullet" style={{ backgroundColor: 'var(--accent-gold)' }}></div>
                <span>Professional CV & Resume preparation templates</span>
              </div>
              <div className="subListItem">
                <div className="subListBullet" style={{ backgroundColor: 'var(--accent-gold)' }}></div>
                <span>Mock interview training & presentation preparation</span>
              </div>
              <div className="subListItem">
                <div className="subListBullet" style={{ backgroundColor: 'var(--accent-gold)' }}></div>
                <span>One-on-one academic & career counselling</span>
              </div>
              <div className="subListItem">
                <div className="subListBullet" style={{ backgroundColor: 'var(--accent-gold)' }}></div>
                <span>Active job search & internship vacancy updates</span>
              </div>
              <div className="subListItem">
                <div className="subListBullet" style={{ backgroundColor: 'var(--accent-gold)' }}></div>
                <span>LinkedIn profile optimization & network building guidance</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
