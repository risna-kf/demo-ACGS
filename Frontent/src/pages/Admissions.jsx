import React from 'react';
import { 
  Check, ArrowRight, Table, HelpCircle, 
  Briefcase, DollarSign, Cpu, Users, TrendingUp, Coffee 
} from 'lucide-react';
import AdmissionsStepper from '../components/AdmissionsStepper';
import '../styles/Admissions.css';

export default function Admissions() {
  const reqs = [
    {
      level: 'Certificate programmes',
      duration: '6 Months',
      requirements: 'O/L or equivalent standard qualification',
      badgeClass: 'badge-cert'
    },
    {
      level: 'Diploma programmes',
      duration: '12 Months',
      requirements: 'O/L with relevant experience OR completed Certificate qualification',
      badgeClass: 'badge-dip'
    },
    {
      level: 'Higher National Diploma (HND)',
      duration: '18–24 Months',
      requirements: 'A/L standard qualification OR completed Diploma qualification',
      badgeClass: 'badge-hnd'
    }
  ];

  const outcomes = [
    {
      sector: 'Business Management',
      icon: Briefcase,
      roles: ['Business Executive', 'Admin Officer', 'Operations Coordinator']
    },
    {
      sector: 'Accounting & Finance',
      icon: DollarSign,
      roles: ['Accounts Assistant', 'Payroll Officer', 'Junior Bookkeeper']
    },
    {
      sector: 'Information Technology',
      icon: Cpu,
      roles: ['IT Support Specialist', 'Junior Developer', 'Network Assistant']
    },
    {
      sector: 'Human Resource Management',
      icon: Users,
      roles: ['HR Assistant', 'Talent Recruiter', 'Training Assistant']
    },
    {
      sector: 'Marketing Management',
      icon: TrendingUp,
      roles: ['Digital Marketer', 'Sales Executive', 'Content Specialist']
    },
    {
      sector: 'Hospitality & Tourism',
      icon: Coffee,
      roles: ['Hotel Supervisor', 'Guest Relations Officer', 'Event Coordinator']
    }
  ];

  return (
    <div className="admissions-page-root">
      {/* ENTRY REQUIREMENTS */}
      <section id="admissions-section" className="requirementsContainer section-padding" style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="subTitle">Join Us</span>
            <h2>Admissions</h2>
            <p>
              Review entry criteria and join a system committed to preparing you for direct corporate employment.
            </p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-navy)', marginBottom: '1.5rem', textAlign: 'center' }}>
              Entry Requirements Overview
            </h3>
            <div className="tableWrapper">
              <table className="reqTable">
                <thead>
                  <tr>
                    <th>Programme Level</th>
                    <th>Duration</th>
                    <th>Entry Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  {reqs.map((req, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: 700 }}>
                        <span className={`levelBadge ${req.badgeClass}`}>
                          {req.level.split(' ')[0]}
                        </span>
                        <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-medium)', marginTop: '0.25rem' }}>
                          {req.level}
                        </div>
                      </td>
                      <td>{req.duration}</td>
                      <td>{req.requirements}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION PROCESS TIMELINE STEPPER */}
      <section className="stepperContainer section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subTitle">Admissions Guide</span>
            <h2>Application Process</h2>
            <p>
              Follow these simple chronological steps to secure your student registration at ACGS.
            </p>
          </div>
          
          <AdmissionsStepper />
        </div>
      </section>

      {/* CAREERS SECTION */}
      <section className="careersSection section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subTitle">Careers & Employability</span>
            <h2>Career Outcomes</h2>
            <p>
              Our programs are designed in partnership with industries to produce graduates ready to immediately excel in these roles.
            </p>
          </div>

          <div className="careersGrid">
            {outcomes.map((item, idx) => {
              const SectorIcon = item.icon;
              return (
                <div key={idx} className="careerCategoryCard">
                  <div className="careerCategoryHeader">
                    <SectorIcon size={20} />
                    <h3>{item.sector}</h3>
                  </div>
                  <div className="careerList">
                    {item.roles.map((role, rIdx) => (
                      <div key={rIdx} className="careerRole">
                        <Check size={16} />
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
