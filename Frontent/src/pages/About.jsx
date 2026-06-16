import React from 'react';
import { Award, ShieldCheck, Lightbulb, Heart, GraduationCap, Target, Eye } from 'lucide-react';
import '../styles/About.css';

export default function About() {
  const coreValues = [
    {
      name: 'Excellence',
      desc: 'We strive for the highest quality in academic delivery, services, and student outcomes.',
      icon: Award
    },
    {
      name: 'Integrity',
      desc: 'Adhering to code of ethics, fairness, transparency, and accountability in all operations.',
      icon: ShieldCheck
    },
    {
      name: 'Innovation',
      desc: 'Fostering creativity, modern digital aids, and dynamic methodologies in our classes.',
      icon: Lightbulb
    },
    {
      name: 'Inclusivity',
      desc: 'Welcoming students from diverse backgrounds and ensuring equal learning support.',
      icon: Heart
    },
    {
      name: 'Student Success',
      desc: 'Putting learners first and aligning pathways directly with career opportunities.',
      icon: GraduationCap
    }
  ];

  return (
    <div className="about-page-root">
      {/* WHO WE ARE */}
      <section id="about-section" className="aboutIntro section-padding">
        <div className="container introGrid">
          <div className="introTextCol">
            <span className="subTitle">Who We Are</span>
            <h2 className="introTitle">Committed to Quality and Professional Competence</h2>
            <p className="introDesc">
              Australian College of Graduate Studies (ACGS) is committed to delivering high-quality education that equips students with knowledge, practical skills, and professional competence.
            </p>
            <p className="introDesc" style={{ color: 'var(--text-medium)' }}>
              We focus on bridging academic learning with real-world industry needs. By establishing deep pathways to global qualifications, our certifications serve as pathways for international study and local career opportunities.
            </p>
          </div>

          <div className="introGraphicCol">
            <div className="graphicBadge">
              <div className="graphicBadgeNumber">100%</div>
              <div className="graphicBadgeLabel">Accredited Curriculums</div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="visionMissionSection section-padding">
        <div className="container vmGrid">
          {/* Vision */}
          <div className="vmCard">
            <div className="vmIconWrapper">
              <Eye size={28} />
            </div>
            <h3>Our Vision</h3>
            <p>
              To be a leading institution recognized for academic excellence and graduate success. We envision a community of scholars making substantial contributions to international and local industries.
            </p>
          </div>

          {/* Mission */}
          <div className="vmCard">
            <div className="vmIconWrapper">
              <Target size={28} />
            </div>
            <h3>Our Mission</h3>
            <p>
              To provide accessible, affordable, and industry-relevant education that empowers learners for global opportunities. We aim to equip students with key skills and qualifications to excel immediately.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="valuesSection section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subTitle">Values</span>
            <h2>Our Core Values</h2>
            <p>These core principles shape our academic culture, operational standards, and direct commitment to our learners.</p>
          </div>

          <div className="valuesGrid">
            {coreValues.map((val, index) => {
              const ValueIcon = val.icon;
              return (
                <div key={index} className="valueCard">
                  <div className="valueIcon">
                    <ValueIcon size={22} />
                  </div>
                  <h3 className="valueName">{val.name}</h3>
                  <p className="valueDesc">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
