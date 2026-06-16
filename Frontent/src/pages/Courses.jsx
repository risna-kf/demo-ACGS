import React, { useState, useMemo } from 'react';
import { Search, Info, HelpCircle } from 'lucide-react';
import { coursesData } from '../data/coursesData';
import CourseModal from '../components/CourseModal';
import '../styles/Courses.css';

export default function Courses() {
  const [activeTab, setActiveTab] = useState('certificate'); // 'certificate' | 'diploma' | 'hnd'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Memoize filtered courses list based on active tab and search query
  const filteredCourses = useMemo(() => {
    const list = coursesData[activeTab] || [];
    if (!searchQuery.trim()) return list;

    const query = searchQuery.toLowerCase();
    return list.filter(
      (course) => 
        course.title.toLowerCase().includes(query) || 
        course.desc.toLowerCase().includes(query) || 
        course.syllabus.some(mod => mod.toLowerCase().includes(query))
    );
  }, [activeTab, searchQuery]);

  const handleOpenDetails = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseDetails = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <section id="courses-section" className="section-padding" style={{ backgroundColor: 'var(--bg-white)' }}>
      <div className="container">
        <div className="section-header">
          <span className="subTitle">Academics</span>
          <h2>Our Courses</h2>
          <p>
            Choose from our specialized educational paths, tailored to build practical skills and shape global opportunities.
          </p>
        </div>

        {/* Tab & Search Control Container */}
        <div className="coursesFilterContainer">
          <div className="tabsWrapper">
            <button 
              className={`tabBtn ${activeTab === 'certificate' ? 'activeTabBtn' : ''}`}
              onClick={() => { setActiveTab('certificate'); setSearchQuery(''); }}
            >
              Certificate (6M)
            </button>
            <button 
              className={`tabBtn ${activeTab === 'diploma' ? 'activeTabBtn' : ''}`}
              onClick={() => { setActiveTab('diploma'); setSearchQuery(''); }}
            >
              Diploma (12M)
            </button>
            <button 
              className={`tabBtn ${activeTab === 'hnd' ? 'activeTabBtn' : ''}`}
              onClick={() => { setActiveTab('hnd'); setSearchQuery(''); }}
            >
              HND (18–24M)
            </button>
          </div>

          <div className="searchWrapper">
            <Search className="searchIcon" size={18} />
            <input 
              type="text" 
              placeholder="Search course title, syllabus, keywords..." 
              className="searchInput"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="coursesGrid">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course.id} className="courseCard">
                <span className="courseBadge">
                  {activeTab === 'certificate' ? 'Certificate' : activeTab === 'diploma' ? 'Diploma' : 'HND'}
                </span>
                
                <div className="courseCardContent">
                  <div className="courseDuration">
                    {course.duration}
                  </div>
                  <h3 className="courseTitle">{course.title}</h3>
                  <p className="courseDesc">
                    {course.desc.length > 110 ? `${course.desc.substring(0, 110)}...` : course.desc}
                  </p>
                </div>

                <div className="courseFooter">
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 500 }}>
                    Prereq: {course.requirements}
                  </span>
                  <button 
                    className="courseDetailsBtn"
                    onClick={() => handleOpenDetails(course)}
                  >
                    View Syllabus <Info size={14} style={{ marginLeft: '0.1rem' }} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="noCourses">
              <HelpCircle size={36} style={{ color: 'var(--text-light)', marginBottom: '0.5rem' }} />
              <h4>No courses found matching "{searchQuery}"</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                Try selecting a different academic level or revising your search term.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Course Detail Modal */}
      <CourseModal 
        isOpen={isModalOpen} 
        onClose={handleCloseDetails} 
        course={selectedCourse} 
      />
    </section>
  );
}
