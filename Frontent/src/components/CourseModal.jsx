import React, { useEffect } from 'react';
import { X, Clock, BookOpen, Award, Check } from 'lucide-react';
import '../styles/Courses.css';

export default function CourseModal({ isOpen, onClose, course }) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!course) return null;

  return (
    <div className={`modalOverlay ${isOpen ? 'show' : ''}`} onClick={onClose}>
      <div 
        className="modalContent" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modalHeader">
          <div className="modalTitleArea">
            <span className="courseBadge">
              {course.id.startsWith('cert') ? 'Certificate' : course.id.startsWith('dip') ? 'Diploma' : 'HND'}
            </span>
            <h3 className="courseTitle" style={{ marginTop: '0.5rem', fontSize: '1.5rem' }}>{course.title}</h3>
          </div>
          <button className="modalCloseBtn" onClick={onClose} aria-label="Close modal">
            <X size={18} strokeWidth={1.5} style={{ color: 'var(--primary-navy)' }} />
          </button>
        </div>

        <div className="modalBody">
          <p className="courseDesc" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
            {course.desc}
          </p>

          <div className="modalMetaGrid">
            <div className="metaItem">
              <Clock className="metaIcon" size={20} strokeWidth={1.5} style={{ color: 'var(--primary-navy)' }} />
              <div>
                <span className="metaLabel">Duration</span>
                <span className="metaVal">{course.duration}</span>
              </div>
            </div>
            
            <div className="metaItem">
              <Award className="metaIcon" size={20} strokeWidth={1.5} style={{ color: 'var(--accent-gold)' }} />
              <div>
                <span className="metaLabel">Requirements</span>
                <span className="metaVal">{course.requirements}</span>
              </div>
            </div>
          </div>

          <div className="modalSection">
            <h4>Syllabus / Modules</h4>
            <div className="syllabusList">
              {course.syllabus.map((item, index) => (
                <div key={index} className="syllabusItem">
                  <Check size={16} strokeWidth={1.5} style={{ marginTop: '0.2rem', color: 'var(--primary-navy)' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="modalFooter">
          <button className="btn btn-outline" onClick={onClose}>
            Close
          </button>
          <button 
            className="btn btn-primary"
            onClick={() => {
              onClose();
              // Scroll to contact form
              const element = document.getElementById('contact-section');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Apply for this Course
          </button>
        </div>
      </div>
    </div>
  );
}
