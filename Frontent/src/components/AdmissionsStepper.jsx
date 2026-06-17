import React, { useState } from 'react';
import { BookOpen, FileText, UploadCloud, FileCheck, Play } from 'lucide-react';
import '../styles/Admissions.css';

export default function AdmissionsStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      label: '1. Choose Course',
      title: 'Select Your Academic Programme',
      desc: 'Browse our list of Certificate (6 months), Diploma (12 months), or Higher National Diploma (18–24 months) courses to find the programme that aligns with your career goals and matches your qualifications.',
      icon: BookOpen
    },
    {
      label: '2. Submit Application',
      title: 'Fill & Submit Application Form',
      desc: 'Complete the student registration and application form. You can request it directly from our office in Batticaloa or inquire online through our contact page to receive a digital copy.',
      icon: FileText
    },
    {
      label: '3. Provide Documents',
      title: 'Submit Required Documentation',
      desc: 'Provide clear scans/photocopies of your educational qualifications. Certificate/Diploma requires O/L or equivalent, and HND requires A/L or a completed Diploma. Send these along with a copy of your National ID.',
      icon: UploadCloud
    },
    {
      label: '4. Receive Offer Letter',
      title: 'Evaluation & Issuance of Offer',
      desc: 'Our admissions department reviews your submitted qualifications. Successful candidates will receive a formal Offer Letter outlining the course start date, timings, and structures.',
      icon: FileCheck
    },
    {
      label: '5. Enrol & Start',
      title: 'Secure Enrollment & Start Classes',
      desc: 'Pay the enrollment fee, complete registration at the registrar, attend our student induction/orientation session, and begin your educational journey to build skills and create your future!',
      icon: Play
    }
  ];

  // Calculate the percentage line progression width based on active step
  const progressPercent = (activeStep / (steps.length - 1)) * 100;

  const ActiveIcon = steps[activeStep].icon;

  return (
    <div className="container" style={{ padding: '2rem 1.5rem' }}>
      <div className="stepperWrapper">
        {/* Progress Line */}
        <div 
          className="stepperLineProgress" 
          style={{ 
            width: `${progressPercent * 0.9}%` // align with the step node centers
          }}
        ></div>

        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <div 
              key={index} 
              className={`stepNode ${index === activeStep ? 'active' : ''} ${index < activeStep ? 'completed' : ''}`}
              onClick={() => setActiveStep(index)}
            >
              <div className="stepCircle">
                {index < activeStep ? '✓' : index + 1}
              </div>
              <span className="stepLabel">{step.label.split('. ')[1]}</span>
            </div>
          );
        })}
      </div>

      {/* Detail card of active step */}
      <div className="stepDetailsCard">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: 'rgba(27, 43, 72, 0.05)',
            color: 'var(--primary-navy)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <ActiveIcon size={28} strokeWidth={1.5} style={{ color: 'var(--primary-navy)' }} />
          </div>
        </div>
        <h4>{steps[activeStep].title}</h4>
        <p>{steps[activeStep].desc}</p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
          {activeStep > 0 && (
            <button 
              className="btn btn-outline" 
              onClick={() => setActiveStep(activeStep - 1)}
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
            >
              Back
            </button>
          )}
          {activeStep < steps.length - 1 ? (
            <button 
              className="btn btn-secondary" 
              onClick={() => setActiveStep(activeStep + 1)}
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
            >
              Next Step
            </button>
          ) : (
            <button 
              className="btn btn-primary"
              onClick={() => {
                const element = document.getElementById('contact-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
            >
              Contact Registrar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
