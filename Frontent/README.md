# Australian College of Graduate Studies (ACGS) Website Portal

This repository contains the official, fully responsive, and highly professional web portal for the **Australian College of Graduate Studies (ACGS)**, built using **React** and **Vite** with a responsive **Vanilla CSS** design system.

---

## 📂 Frontend Directory Structure

The frontend application is organized neatly to promote scalability and maintainability:

```text
C:\Users\risna\Desktop\ACGS\Frontent\
├── public/
│   ├── favicon.svg             # Page Favicon
│   └── icons.svg               # Vite Vector Assets
├── src/
│   ├── assets/
│   │   ├── logo.jpg            # Brand logo image matching the color theme
│   │   ├── hero.png            # Hero layout vectors
│   │   └── react.svg           # Framework assets
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky header + mobile navigation drawer + scroll spy
│   │   ├── Footer.jsx          # Institutional footer + quick links + social SVGs
│   │   ├── LiveStatus.jsx      # Dynamic clock & Office live status indicator
│   │   ├── CourseModal.jsx      # Details and syllabus popup modal
│   │   └── AdmissionsStepper.jsx # Interactive Admissions workflow stepper
│   ├── data/
│   │   └── coursesData.js      # Structured database for Cert/Dip/HND programmes
│   ├── pages/
│   │   ├── Home.jsx            # Hero section, Snapshot statistics, & 'Why Choose' grid
│   │   ├── About.jsx           # Mission, Vision, and Core Values nodes
│   │   ├── Courses.jsx         # Searchable & tabbed Course catalog
│   │   ├── Services.jsx        # Study Abroad destinations (flags) & placements
│   │   ├── Admissions.jsx      # Requirements table & Chronological timeline steps
│   │   └── Contact.jsx         # Inquiry form + Live status clock + SVG map
│   ├── App.css                 # Cleaned template styles
│   ├── App.jsx                 # Main layout coordinator
│   ├── index.css               # Global CSS styling system (variables, presets, resets)
│   └── main.jsx                # React Entrypoint
├── index.html                  # Main HTML entrypoint (SEO optimized titles & tags)
├── package.json                # Project dependencies (React 19, Lucide React)
└── vite.config.js              # Vite compilation parameters
```

---

## 📝 Complete Page Contents

### 1. Home Page
- **Hero Title**: "Australian College of Graduate Studies (ACGS)"
- **Hero Tagline**: "Building Skills, Creating Futures"
- **Summary**: ACGS is a career-focused educational institution offering Certificate, Diploma, and Higher National Diploma (HND) programmes designed to prepare students for employment, higher education, and international opportunities.
- **Why Choose ACGS Checklist**:
  1. *Industry-relevant programmes*
  2. *Experienced lecturers*
  3. *Affordable tuition fees*
  4. *Practical learning approach*
  5. *Study abroad support*
  6. *University progression pathways*
  7. *Career-focused training*
  8. *Student support services*
- **Stats Snapshot**: 95% Job Placement | 25+ Partner Universities | 1500+ Graduated | 100% Practical Focus.

### 2. About Us
- **Who We Are**: ACGS is committed to delivering high-quality education that equips students with knowledge, practical skills, and professional competence. We focus on bridging academic learning with real-world industry needs.
- **Vision**: To be a leading institution recognized for academic excellence and graduate success.
- **Mission**: To provide accessible, affordable, and industry-relevant education that empowers learners for global opportunities.
- **Core Values**:
  * **Excellence**: Highest quality in academic delivery.
  * **Integrity**: Honesty, transparency, and accountability.
  * **Innovation**: Modern digital aids and creative methods.
  * **Inclusivity**: Welcoming students from all backgrounds.
  * **Student Success**: Putting the learner first.

### 3. Courses Catalog (Filterable Database)
Structured into three distinct tiers with full modular syllabuses:
- **Certificate Programmes (6 Months - Prereq: O/L)**:
  * Certificate in Business Management
  * Certificate in Accounting & Finance
  * Certificate in Information Technology
  * Certificate in Human Resource Management
  * Certificate in Digital Marketing
  * Certificate in English Language
  * Certificate in Hospitality Operations
- **Diploma Programmes (12 Months - Prereq: O/L or Certificate)**:
  * Diploma in Business Management
  * Diploma in Accounting & Finance
  * Diploma in Information Technology
  * Diploma in Human Resource Management
  * Diploma in Marketing Management
  * Diploma in Project Management
  * Diploma in Hospitality & Tourism
  * Diploma in Logistics & Supply Chain
- **Higher National Diploma (HND) (18–24 Months - Prereq: A/L or Diploma)**:
  * HND in Business Management
  * HND in Accounting & Finance
  * HND in Information Technology / Computing
  * HND in Human Resource Management
  * HND in Marketing
  * HND in Hospitality & Tourism Management
  * HND in Logistics & Supply Chain Management

### 4. Services
- **Study Abroad Services**: Course & university selection, Application processing, SOP writing support, Visa guidance, Scholarship advice, Pre-departure briefing.
- **Destinations Represented**: UK, Australia, Canada, New Zealand, Ireland, USA.
- **University Placement**: Undergraduate and Postgraduate admissions, Credit transfer pathways, and Foundation routes.
- **Career Guidance**: CV preparation templates, Mock interview training, LinkedIn profile building, and active job updates.

### 5. Admissions & Careers
- **Application Steps**: 
  1. *Choose Course* 
  2. *Submit Application* 
  3. *Provide Documents* 
  4. *Receive Offer Letter* 
  5. *Enrol & Start*
- **Entry Prerequisites**: 
  * Certificate: O/L or equivalent
  * Diploma: O/L or Certificate
  * HND: A/L or Diploma
- **Career Outcomes**:
  * *Business*: Business Executive, Admin Officer
  * *Finance*: Accounts Assistant, Payroll Officer
  * *IT*: IT Support Specialist, Junior Developer
  * *HR*: HR Assistant, Recruiter
  * *Marketing*: Digital Marketer, Sales Executive
  * *Hospitality*: Hotel Supervisor, Guest Relations Officer

### 6. Contact Us
- **Location**: Batticaloa, Sri Lanka.
- **Email**: info@acgs.edu.lk
- **Office Hours**:
  * Monday – Friday: 8:30 AM – 5:00 PM
  * Saturday: 9:00 AM – 1:00 PM
  * Sunday: Closed

---

## 🛠️ Implementation Highlights

### 🎨 Color & Font Tokens (`src/index.css`)
We extracted the brand design theme from the uploaded institutional shield logo:
- **Primary Navy Blue**: `#102A43` (derived from the shield background)
- **Accent Crimson Red**: `#BA2525` (derived from the red ribbon and flame)
- **Accent Warm Gold**: `#D9A74A` (derived from the stars and laurel leaves)
- **Background**: `#FFFFFF` (Pure white background as requested)
- **Neutral Light Grey**: `#F8FAFC` (used for distinct section backgrounds)
- **Typography**: Uses *Outfit* for all major headings and *Inter* for body texts and labels.

### 🕰️ Live status widget (`LiveStatus.jsx`)
Checks the client's current system time, converts it to Sri Lanka's local time (UTC+5:30), matches it against the office hours schedule, and displays a dynamic badge:
- `🟢 Open Now` (if local time falls within the hours)
- `🔴 Closed` (outside hours or on Sundays)

### 📈 Timeline Stepper (`AdmissionsStepper.jsx`)
Features a custom progress track that calculates step increments. Allows the user to click nodes to expand step instructions with detailed guidelines.

---

## 🚀 Building & Running Locally

### Prerequisites
Make sure you have Node.js (v20+) installed on your machine.

### 1. Install Dependencies
Navigate to the `Frontent` directory in your terminal and install packages:
```bash
npm install
```

### 2. Start Local Development Server
Launch the local dev build:
```bash
npm run dev
```
Open **[http://localhost:5173/](http://localhost:5173/)** in your browser to view the live responsive site.

### 3. Production Build
To build the site for deployment:
```bash
npm run build
```
The compiled, production-ready static assets will be output to the `dist/` directory.

---

## 📤 Pushing Changes to GitHub

If you modify any files, run these terminal commands to push the updates to your repository:
```bash
git add .
git commit -m "Detail updates to website content"
git push origin main
```
