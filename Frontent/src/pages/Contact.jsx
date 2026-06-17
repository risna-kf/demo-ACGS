import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import LiveStatus from '../components/LiveStatus';
import '../styles/Contact.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Full name is required';
    
    if (!form.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(form.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!form.course) {
      newErrors.course = 'Please select a course of interest';
    }

    if (!form.message.trim()) newErrors.message = 'Please write a message';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // clear error for the field being typed in
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form
      setForm({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
      
      // Clear success banner after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact-section" className="section-padding" style={{ backgroundColor: 'var(--bg-light)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <span className="subTitle">Support Hub</span>
          <h2>Contact Us</h2>
          <p>
            Get in touch with our admissions registrar or counseling officers to kickstart your enrollment.
          </p>
        </div>

        <div className="contactLayout">
          {/* Information Column */}
          <div className="infoCol">
            
            {/* Main Contact Card */}
            <div className="detailsCard">
              <h3>Australian College of Graduate Studies</h3>
              <div className="detailsList">
                <div className="detailsItem">
                  <div className="detailsIconWrapper">
                    <MapPin size={20} strokeWidth={1.5} style={{ color: 'var(--primary-navy)' }} />
                  </div>
                  <div className="detailsText">
                    <span className="detailsLabel">Address</span>
                    <span className="detailsVal">Batticaloa, Sri Lanka</span>
                  </div>
                </div>
                
                <div className="detailsItem">
                  <div className="detailsIconWrapper">
                    <Phone size={20} strokeWidth={1.5} style={{ color: 'var(--primary-navy)' }} />
                  </div>
                  <div className="detailsText">
                    <span className="detailsLabel">Phone Number</span>
                    <span className="detailsVal">+94 XXX XXX XXX</span>
                  </div>
                </div>

                <div className="detailsItem">
                  <div className="detailsIconWrapper">
                    <Mail size={20} strokeWidth={1.5} style={{ color: 'var(--primary-navy)' }} />
                  </div>
                  <div className="detailsText">
                    <span className="detailsLabel">Email Address</span>
                    <span className="detailsVal">info@acgs.edu.lk</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Status / Office hours */}
            <LiveStatus />

            {/* Visual SVG Map representation */}
            <div style={{
              backgroundColor: 'var(--bg-white)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <h4 style={{ color: 'var(--primary-navy)', fontSize: '1rem', fontWeight: 700, alignSelf: 'flex-start' }}>Our Location</h4>
              
              {/* Visual Map design */}
              <svg width="100%" height="180" viewBox="0 0 400 180" style={{ backgroundColor: '#E0F2FE', borderRadius: '8px' }}>
                {/* Coastal outline representational */}
                <path d="M 250,0 Q 230,60 210,120 T 190,180" fill="none" stroke="#60A5FA" strokeWidth="4" strokeDasharray="4 2" />
                <path d="M 0,0 L 250,0 Q 230,60 210,120 T 190,180 L 0,180 Z" fill="#F0FDFA" />
                
                {/* Roads representational */}
                <line x1="80" y1="0" x2="150" y2="180" stroke="#CBD5E1" strokeWidth="6" />
                <line x1="0" y1="80" x2="400" y2="100" stroke="#CBD5E1" strokeWidth="6" />
                
                {/* Landmark Pin */}
                <g transform="translate(140, 90)">
                  <circle cx="0" cy="0" r="16" fill="rgba(186, 37, 37, 0.2)" />
                  <circle cx="0" cy="0" r="8" fill="var(--accent-red)" />
                  <path d="M -8,-8 L 8,-8 L 0,-18 Z" fill="var(--accent-red)" />
                  <circle cx="0" cy="-8" r="3" fill="#FFFFFF" />
                  <text x="18" y="5" fill="var(--primary-navy)" fontSize="11" fontWeight="800">ACGS Campus</text>
                  <text x="18" y="17" fill="var(--text-medium)" fontSize="9" fontWeight="600">Batticaloa, Sri Lanka</text>
                </g>
                
                {/* Lagoon / Ocean details */}
                <text x="310" y="50" fill="#2563EB" fontSize="10" fontWeight="600">Indian Ocean</text>
                <text x="290" y="65" fill="#3B82F6" fontSize="9" opacity="0.7">Batticaloa Lagoon</text>
              </svg>
            </div>

          </div>

          {/* Form Column */}
          <div className="formCol">
            <h3>Quick Enquiry</h3>
            <p className="formSubtitle">Have a question? Drop us a message, and our admissions team will contact you.</p>
            
            {isSuccess && (
              <div className="successMsg">
                <CheckCircle2 size={18} strokeWidth={1.5} style={{ marginRight: '0.25rem' }} />
                <span>Enquiry sent successfully! We will get back to you shortly.</span>
              </div>
            )}

            <form className="contactForm" onSubmit={handleSubmit}>
              <div className="formGroup">
                <label className="formLabel">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Enter your name" 
                  className="formInput"
                  value={form.name}
                  onChange={handleInputChange}
                />
                {errors.name && <span className="formError">{errors.name}</span>}
              </div>

              <div className="formGroup">
                <label className="formLabel">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Enter your email" 
                  className="formInput"
                  value={form.email}
                  onChange={handleInputChange}
                />
                {errors.email && <span className="formError">{errors.email}</span>}
              </div>

              <div className="formGroup">
                <label className="formLabel">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="+94 XX XXX XXX" 
                  className="formInput"
                  value={form.phone}
                  onChange={handleInputChange}
                />
                {errors.phone && <span className="formError">{errors.phone}</span>}
              </div>

              <div className="formGroup">
                <label className="formLabel">Course of Interest</label>
                <select 
                  name="course" 
                  className="formInput"
                  style={{ appearance: 'auto' }}
                  value={form.course}
                  onChange={handleInputChange}
                >
                  <option value="">-- Select academic stream --</option>
                  <option value="Certificate in Business Management">Certificate in Business Management (6M)</option>
                  <option value="Certificate in Accounting & Finance">Certificate in Accounting & Finance (6M)</option>
                  <option value="Certificate in Information Technology">Certificate in Information Technology (6M)</option>
                  <option value="Diploma in Business Management">Diploma in Business Management (12M)</option>
                  <option value="Diploma in Accounting & Finance">Diploma in Accounting & Finance (12M)</option>
                  <option value="Diploma in Information Technology">Diploma in Information Technology (12M)</option>
                  <option value="HND in Business Management">HND in Business Management (18–24M)</option>
                  <option value="HND in Accounting & Finance">HND in Accounting & Finance (18–24M)</option>
                  <option value="HND in IT / Computing">HND in Information Technology / Computing (18–24M)</option>
                  <option value="Other">Other General Inquiries</option>
                </select>
                {errors.course && <span className="formError">{errors.course}</span>}
              </div>

              <div className="formGroup">
                <label className="formLabel">Message</label>
                <textarea 
                  name="message" 
                  placeholder="Describe your qualifications or query..." 
                  className="formInput"
                  rows="4"
                  style={{ resize: 'vertical' }}
                  value={form.message}
                  onChange={handleInputChange}
                ></textarea>
                {errors.message && <span className="formError">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="btn submitBtn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending inquiry...' : (
                  <>
                    Send Inquiry <Send size={14} strokeWidth={1.5} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
