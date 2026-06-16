import React from 'react';
import { 
  ArrowRight, Award, GraduationCap, Users, BookOpen, 
  Briefcase, CreditCard, Globe, Cpu, TrendingUp, HeartHandshake,
  CheckCircle, ArrowUpRight
} from 'lucide-react';
import logo from '../assets/logo.jpg';
import '../styles/Home.css';

export default function Home() {
  const handleScrollToSection = (id) => {
    const element = document.getElementById(`${id}-section`);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const whyChooseItems = [
    {
      title: 'Industry-relevant programmes',
      desc: 'Our curriculum is updated regularly in collaboration with industry experts to match dynamic job market needs.',
      icon: Briefcase
    },
    {
      title: 'Experienced lecturers',
      desc: 'Learn from highly qualified educators and senior industry professionals who bring practical insights into the classroom.',
      icon: Users
    },
    {
      title: 'Affordable tuition fees',
      desc: 'We provide world-class education with flexible payment plans and scholarship opportunities to fit your budget.',
      icon: CreditCard
    },
    {
      title: 'Practical learning approach',
      desc: 'Bridge theory and practice with hands-on lab sessions, case studies, roleplaying, and real-world assignments.',
      icon: Cpu
    },
    {
      title: 'Study abroad support',
      desc: 'Get complete visa guidance, university selection, SOP styling, and application support to transition overseas.',
      icon: Globe
    },
    {
      title: 'University progression pathways',
      desc: 'Direct progression routes allow our HND graduates to top-up to final year degrees at international partner universities.',
      icon: GraduationCap
    },
    {
      title: 'Career-focused training',
      desc: 'Gain soft skills, technical expertise, and professional certifications to step into roles immediately after graduation.',
      icon: TrendingUp
    },
    {
      title: 'Student support services',
      desc: 'Dedicated tutoring, career counseling, document processing support, and student welfare services are here to guide you.',
      icon: HeartHandshake
    }
  ];

  const overviews = [
    {
      title: 'Business & Management',
      levels: ['Certificate in Business Management', 'Diploma in Business Management', 'HND in Business Management']
    },
    {
      title: 'Accounting & Finance',
      levels: ['Certificate in Accounting & Finance', 'Diploma in Accounting & Finance', 'HND in Accounting & Finance']
    },
    {
      title: 'Information Technology',
      levels: ['Certificate in Information Technology', 'Diploma in Information Technology', 'HND in Information Technology / Computing']
    },
    {
      title: 'HR, Marketing & Hospitality',
      levels: ['Diploma in Human Resource Management', 'HND in Marketing', 'HND in Hospitality & Tourism Management']
    }
  ];

  return (
    <div className="home-page-root">
      {/* HERO SECTION */}
      <section id="home-section" className="hero">
        <div className="heroBackground"></div>
        <div className="container heroContent">
          <div className="heroText animate-fade-in">
            <div className="heroBadge">
              <Award size={16} /> <span>Sri Lanka Academic Hub</span>
            </div>
            <h1 className="heroTitle">
              Australian College of <br />
              <span className="text-gradient">Graduate Studies</span>
            </h1>
            <p className="heroSubtitle">Building Skills, Creating Futures</p>
            <p className="heroDesc">
              ACGS is a career-focused educational institution offering Certificate, Diploma, and Higher National Diploma (HND) programmes designed to prepare students for employment, higher education, and international opportunities.
            </p>
            <div className="heroCtas">
              <button 
                className="btn btn-primary"
                onClick={() => handleScrollToSection('contact')}
              >
                Apply Now <ArrowRight size={16} />
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => handleScrollToSection('courses')}
              >
                Explore Courses
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => handleScrollToSection('services')}
              >
                Our Services
              </button>
            </div>
          </div>

          <div className="heroImageContainer animate-scale-up">
            <div className="imageFrame">
              <img src={logo} alt="ACGS Logo Emblem" className="heroLogoImg" />
            </div>
            <div className="heroDecor"></div>
            <div className="heroDecor2"></div>
          </div>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section className="aboutSnapshot section-padding">
        <div className="container snapshotGrid">
          <div className="snapshotImageCol">
            <div className="snapshotStatsCard">
              <h3>Empowering Students</h3>
              <p style={{ color: '#E2E8F0', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                We measure our success through the milestones achieved by our graduates in national and global arenas.
              </p>
              <div className="statsGrid">
                <div className="statItem">
                  <span className="statNumber">95%</span>
                  <span className="statLabel">Job Placement</span>
                </div>
                <div className="statItem">
                  <span className="statNumber">25+</span>
                  <span className="statLabel">Partner Unis</span>
                </div>
                <div className="statItem">
                  <span className="statNumber">1500+</span>
                  <span className="statLabel">Students Graduated</span>
                </div>
                <div className="statItem">
                  <span className="statNumber">100%</span>
                  <span className="statLabel">Practical Focus</span>
                </div>
              </div>
            </div>
          </div>

          <div className="snapshotTextCol">
            <span className="subTitle">About ACGS</span>
            <h2 className="snapshotTitle">Bridging Academic Learning with Practical Skills</h2>
            <p className="snapshotDesc">
              Australian College of Graduate Studies (ACGS) provides quality education that combines academic learning with practical skills, preparing students for global careers and higher education progression.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--primary-navy)' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-gold)' }} />
                <span>Professionally Designed Curriculums</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--primary-navy)' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-gold)' }} />
                <span>Located in the heart of Batticaloa</span>
              </div>
            </div>
            <button 
              className="btn btn-primary" 
              style={{ alignSelf: 'flex-start', marginTop: '1rem' }}
              onClick={() => handleScrollToSection('about')}
            >
              Read More Who We Are
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ACGS */}
      <section className="whyChoose section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subTitle">Why ACGS</span>
            <h2>Why Choose ACGS</h2>
            <p>We are dedicated to providing student-centric systems that make high-quality tertiary education accessible, modern, and career-oriented.</p>
          </div>

          <div className="cardsGrid">
            {whyChooseItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="featureCard">
                  <div className="iconWrapper">
                    <Icon size={22} />
                  </div>
                  <h3 className="featureTitle">{item.title}</h3>
                  <p className="featureDesc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROGRAMMES OVERVIEW */}
      <section className="overviewSection section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subTitle">Programmes</span>
            <h2>Programmes Overview</h2>
            <p>Explore our wide range of qualifications structured from foundation levels up to advanced higher national diplomas.</p>
          </div>

          <div className="overviewGrid">
            {overviews.map((ov, index) => (
              <div key={index} className="overviewCard">
                <div className="overviewCardHeader">
                  <h3>{ov.title}</h3>
                </div>
                <div className="overviewCardBody">
                  <div className="levelList">
                    {ov.levels.map((lvl, lidx) => (
                      <div key={lidx} className="levelItem">
                        <div className="levelDot"></div>
                        <span>{lvl}</span>
                      </div>
                    ))}
                  </div>
                  <button 
                    className="overviewCardLink"
                    onClick={() => handleScrollToSection('courses')}
                  >
                    View Curriculums <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
