import React, { useEffect, useState } from "react";
import {
  ArrowRight, BookOpen, CalendarDays, CheckCircle2, ChevronDown,
  ChevronRight, Clock3, Code2, GraduationCap, Headphones,
  MapPin,Mail, Menu, MessageCircle, Phone, Send, Star, Trophy, Users, X
} from "lucide-react";

const PHONE = "+919326378171";
const PHONE_DISPLAY = "+919326378171";
const WA = "+919326378171";

const courses = [
  { id:"java", title:"Java Full Stack Development", image:"/images/courses/Java_Full_Stack.png", desc: "Core Java, OOPs, Collections, Multithreading, Java 8+, JDBC, SQL, Hibernate, Spring, Spring Boot, Spring MVC, Spring Data JPA, REST APIs, Microservices, Spring Security, JWT, React.js, HTML, CSS, JavaScript, Git, GitHub, Maven, Docker, Kubernetes and real-time projects.", duration:"6 Months", mode:"Online / Offline" },
  { id:"python", title:"Python Full Stack Development",image:"/images/courses/Python_Full_Stack.png", desc: "Python, OOPs, Data Structures, Django, Flask, REST APIs, FastAPI, SQL, MySQL, PostgreSQL, HTML, CSS, JavaScript, React.js, Git, GitHub, Docker, AWS and real-time projects.", duration:"6 Months", mode:"Online / Offline" },
  { id:"testing", title:"Software Testing",image:"/images/courses/SoftwareTesting.png",desc: "Manual Testing, SDLC, STLC, Test Case Design, Selenium, Java, API Testing, Postman, SQL, Automation Testing, JUnit, TestNG, Maven, Git, Jira, Bug Tracking, Agile and real-time projects.", duration:"5 Months", mode:"Online / Offline" },
  { id: "data-analyst", title: "Data Analyst", image:"/images/courses/Data_Analyst.png", desc: "Excel, Advanced Excel, SQL, MySQL, Python, Pandas, NumPy, Power BI, Tableau, Data Visualization, Statistics, ETL, Data Cleaning, Data Analysis, Excel Dashboards and real-time analytics projects.", duration: "6 Months", mode: "Online / Offline" },
  { id:"servicenow", title:"ServiceNow Development",image:"/images/courses/servicenow.jpg", desc: "ServiceNow ITSM, ITOM, Administration, JavaScript, Glide Scripting, Business Rules, Client Scripts, UI Policies, UI Actions, Workflows, Flow Designer, Service Catalog, ACLs, REST APIs and real-time projects.", duration:"4 Months", mode:"Online / Offline" },
  { id:"genai", title:"Generative AI",image:"/images/courses/genai.png", desc: "Prompt Engineering, Generative AI, LLMs, RAG, LangChain, AI Agents, OpenAI APIs, Vector Databases, AI Tools and real-time projects.", duration:"3 Months", mode:"Online / Offline" },
  { id:"devops", title:"DevOps & Cloud",image:"/images/courses/devops.png", desc: "Linux, Git, Docker, Kubernetes, Jenkins, CI/CD, AWS, Azure, Terraform, Ansible, Monitoring, Cloud Deployment and real-time projects.", duration:"5 Months", mode:"Online / Offline" },
  { id: "salesforce", title: "Salesforce Development", image:"/images/courses/salesforce.jpg",desc: "Salesforce Admin, CRM, Apex, Lightning Web Components, SOQL, SOSL, Triggers, Flows, Validation Rules, Reports, Dashboards and real-time projects.", duration: "6 Months",  mode: "Online / Offline"},
  { id: "dotnet", title: ".NET Full Stack Development",image:"/images/courses/dotnet.png", desc: "C#, .NET, ASP.NET Core, Web API, Entity Framework Core, SQL Server, LINQ, MVC, React, JavaScript, Git, Docker and real-time projects.", duration: "6 Months", mode: "Online / Offline"}
];

const schedules = [
  ["Java Full Stack Development Batch","10:00 AM","06:30 PM"],
  ["Python Full Stack Development Batch","10:00 AM","06:30 PM"],
  ["Data Analyst Batch","10:00 AM","06:30 PM"],
  ["Generative AI Batch","08:00 AM","09:30 AM"],
  ["Software Testing Batch","07:00 PM","08:30 PM"],
  ["ServiceNow Batch","08:00 PM","09:30 PM"]
];

const roadmap = [
  ["Learn Concepts","Build strong fundamentals and understand the technology."],
  ["Hands-on Practice","Practice coding, tools and interview questions."],
  ["Work on Real Projects","Build portfolio-ready industry-style projects."],
  ["Build Your Resume","Create a professional ATS-friendly resume."],
  ["Mock Interviews","Technical and HR interview preparation."],
  ["Get Placed","Placement support and job opportunity guidance."]
];

function go(id) {
  document.getElementById(id)?.scrollIntoView({ behavior:"smooth", block:"start" });
  history.replaceState(null, "", `#${id}`);
}

function wa(message) {
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

function App() {
  const [menu, setMenu] = useState(false);
  const [courseModal, setCourseModal] = useState(null);
  const [toast, setToast] = useState("");

  useEffect(() => {
    const initial = window.location.hash.replace("#","");
    if (initial) setTimeout(() => document.getElementById(initial)?.scrollIntoView({block:"start"}), 100);
  }, []);

  const notify = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2800);
  };

  const submitEnquiry = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const phone = data.get("phone");
    const course = data.get("course");
    const message = data.get("message") || "Please share course details.";
    wa(`Hello NS World, I am ${name}. Mobile: ${phone}. I am interested in ${course}. ${message}`);
    notify("WhatsApp opened with your enquiry details.");
    e.currentTarget.reset();
  };

  return (
    <div>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Empowering Careers through Hands-on Corporate IT Training</span>
          <div className="top-actions">
            <a href={`tel:${PHONE}`}><Phone size={14}/> {PHONE_DISPLAY}</a>
            <a href="mailto:info@nsworldit.in">✉ info@nsworldit.in</a>
            <button onClick={() => go("enquiry")}><MessageCircle size={14}/> Enquire Now</button>
          </div>
        </div>
      </div>

      <header className="navbar">
        <div className="container nav-inner">
          <a href="#home" className="brand" onClick={() => go("home")}>
            <img src="/images/ns-world-logo.jpeg" alt="NS World IT and Placement"/>
          </a>
          <button className="mobile-menu" onClick={() => setMenu(!menu)} aria-label="Menu">
            {menu ? <X/> : <Menu/>}
          </button>
          <nav className={menu ? "nav-links open" : "nav-links"}>
            <a href="#home" onClick={() => {setMenu(false);go("home")}}>Home</a>
            <div className="nav-dropdown">
              <button>Courses <ChevronDown size={14}/></button>
              <div className="dropdown-menu">
                {courses.map(c => <a key={c.id} href={`#course-${c.id}`} onClick={() => {setMenu(false);setCourseModal(c)}}>{c.title}</a>)}
              </div>
            </div>
            <a href="#schedule" onClick={() => {setMenu(false);go("schedule")}}>Training Schedule</a>
            <a href="#roadmaps" onClick={() => {setMenu(false);go("roadmaps")}}>Career Roadmaps</a>
            <a href="#placement" onClick={() => {setMenu(false);go("placement")}}>Placement Assistance</a>
            <a href="#about" onClick={() => {setMenu(false);go("about")}}>About</a>
            <a href="#contact" onClick={() => {setMenu(false);go("contact")}}>Contact</a>
            <button className="nav-login" onClick={() => {setMenu(false);go("enquiry")}}>Login / Register</button>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-bg"></div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="pills"><span>Practical Training</span><i>•</i><span>Real Projects</span><i>•</i><span>Placement Support</span></div>
              <h1>Build Skills.<br/><em>Get Job-Ready.</em><br/>Start Your IT Career.</h1>
              <p>Join NS World IT Training & Placement and learn with practical, industry-oriented training, real-world experience, projects and career guidance.</p>
              <div className="hero-buttons">
                <button className="primary-btn" onClick={() => go("courses")}><BookOpen size={17}/> Explore Courses <ArrowRight size={16}/></button>
                <button className="outline-btn" onClick={() => go("placement")}><Trophy size={17}/> Get Placement Support</button>
              </div>
              <div className="hero-contact">
                <a href={`tel:${PHONE}`}><Phone size={15}/> Call {PHONE_DISPLAY}</a>
                <button onClick={() => wa("Hello NS World, I want to know about your IT training courses.")}><MessageCircle size={15}/> WhatsApp Us</button>
              </div>
            </div>
            <div className="hero-logo-card">
              <img src="/images/ns-world-hero.png" alt="NS World logo"/>
            
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-grid">
            <div><GraduationCap/><strong>Students Trained</strong><span>Building successful careers</span></div>
            <div><BookOpen/><strong>Industry Courses</strong><span>Practical-focused programs</span></div>
            <div><Users/><strong>Placement Support</strong><span>Resume, interview & job support</span></div>
            <div><Headphones/><strong>Industry Trainers</strong><span>Learn from real-time experts</span></div>
          </div>
        </section>

        <section id="courses" className="section">
          <div className="container">
            <div className="section-head"><div><span className="eyebrow">Our Popular</span><h2>IT Training <b>Courses</b></h2><p>Industry-relevant courses designed to make you job-ready.</p></div><button className="text-btn" onClick={() => go("enquiry")}>View All Courses <ArrowRight size={16}/></button></div>
            <div className="course-grid">
              {courses.map(c => (
                <article className="course-card" id={`course-${c.id}`} key={c.id}>
                  <div className="course-image"> <img src={c.image} alt={c.title} /> </div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <div className="course-meta"><span><Clock3 size={13}/> {c.duration}</span><span><Users size={13}/> {c.mode}</span></div>
                  <button className="card-btn" onClick={() => setCourseModal(c)}>Know More <ArrowRight size={14}/></button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="schedule" className="schedule-section">
          <div className="container">
            <div className="schedule-heading"><div><span className="eyebrow light">Learn With Us</span><h2>Training And Project Sessions Schedule</h2><p>Join live offline / online classes with daily project sessions at our  435, 4th floor, Above KFC, VTP Altitude, Dange Chowk, Pune-411033.</p></div><button className="primary-btn" onClick={() => go("enquiry")}>Join Now <ArrowRight size={16}/></button></div>
            <div className="schedule-grid">
              {schedules.map(([name,start,end]) => <div className="schedule-card" key={name}><div className="schedule-icon"><CalendarDays/></div><h3>{name}</h3><strong><Clock3 size={15}/> {start} – {end}</strong><span>Monday to Friday (Online)</span><span>Saturday & Sunday</span><span>Project Session – Offline</span><button onClick={() => go("enquiry")}>Join This Batch <ArrowRight size={14}/></button></div>)}
            </div>
          </div>
        </section>

        <section id="roadmaps" className="section roadmap">
          <div className="container">
            <div className="section-head"><div><span className="eyebrow">Career Roadmaps</span><h2>For a Successful IT <b>Career</b></h2><p>Step-by-step guidance from learning to placement.</p></div><button className="text-btn" onClick={() => go("enquiry")}>View Career Roadmaps <ArrowRight size={16}/></button></div>
            <div className="roadmap-grid">
              {roadmap.map(([title,desc],i) => <button className="roadmap-card" key={title} onClick={() => notify(`${title}: ${desc}`)}><div className="roadmap-number">{i+1}</div><h3>{title}</h3><p>{desc}</p><ChevronRight className="road-arrow"/></button>)}
            </div>
          </div>
        </section>

        <section id="placement" className="placement-section">
          <div className="container placement-grid">
            <div className="placement-copy"><span className="eyebrow">Placement Assistance</span><h2>We Support You Until You <b>Get Placed</b></h2><p>Build confidence through resume support, mock interviews, aptitude preparation and job opportunity guidance.</p><div className="placement-items"><div><CheckCircle2/><strong>Resume Building</strong><span>Professional resume guidance</span></div><div><CheckCircle2/><strong>Mock Interviews</strong><span>Technical & HR rounds</span></div><div><CheckCircle2/><strong>Aptitude Preparation</strong><span>Problem-solving skills</span></div><div><CheckCircle2/><strong>Job Opportunities</strong><span>Connect with IT companies</span></div></div><div className="placement-actions"><button className="primary-btn" onClick={() => go("enquiry")}>Talk to Placement Team <ArrowRight size={16}/></button><a className="outline-btn" href={`tel:${PHONE}`}><Phone size={16}/> Call Us</a></div></div>
            <div className="placement-art"><div className="art-circle"><Trophy size={64}/></div><h3>Career Support</h3><p>Learn • Practice • Build • Interview • Get Placed</p></div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container about-grid">
            <div><span className="eyebrow">About NS World</span><h2>Learn Today. <b>Grow Tomorrow.</b></h2><p>NS World IT Training & Placement focuses on hands-on corporate IT training, real-time projects, interview preparation and career support.</p><div className="about-points"><span>✓ Practical, industry-oriented curriculum</span><span>✓ Weekday offline / online training +  project sessions</span><span>✓ Real-time project exposure</span><span>✓ Resume and interview preparation</span></div><button className="primary-btn" onClick={() => go("enquiry")}>Start Your Journey <ArrowRight size={16}/></button></div>
            <div className="about-card"><img src="/images/ns-world-logo.jpeg" alt="NS World"/><h3>NS WORLD IT INSTITUTE AND PLACEMENT</h3><p>Skill Today, Success Tomorrow</p></div>
          </div>
        </section>

        <section className="testimonials section">
          <div className="container">
            <div className="section-head"><div><span className="eyebrow">Student Feedback</span><h2>Our Students <b>Speak</b></h2></div><button className="text-btn" onClick={() => go("enquiry")}>Start Your Journey <ArrowRight size={16}/></button></div>
            <div className="testimonial-grid">
              {[
                ["Sohil Shaikh","Software Engineer","The training was very practical and helped me get placed. Trainers were very supportive."],
                ["Diksha Gaikwad","QA Engineer","Great learning experience with real-time projects and placement support."],
                ["Pandurang Biradar","Java Developer","NS World gave me the right guidance and confidence to start my IT career."]
              ].map(([name,role,msg]) => <article className="testimonial" key={name}><div className="stars">{[1,2,3,4,5].map(x=><Star key={x} size={14} fill="currentColor"/>)}</div><p>“{msg}”</p><strong>{name}</strong><span>{role}</span></article>)}
            </div>
          </div>
        </section>

        <section id="enquiry" className="enquiry-section">
          <div className="container enquiry-grid">
            <div className="enquiry-copy"><span className="eyebrow">Start Your Journey</span><h2>Enquire About Your <b>IT Course</b></h2><p>Fill the form and our team will contact you about course details, batch timings, fees and placement support.</p><div className="enquiry-points"><span>✓ Practical Training</span><span>✓ Real Projects</span><span>✓ Placement Support</span><span>✓ Interview Guidance</span></div><div className="direct-contact"><a href={`tel:${PHONE}`}><Phone size={17}/> {PHONE_DISPLAY}</a><button onClick={() => wa("Hello NS World, I want complete course and placement details.")}><MessageCircle size={17}/> WhatsApp</button></div></div>
            <form className="enquiry-form" onSubmit={submitEnquiry}><div className="form-row"><input name="name" required placeholder="Your Name *"/><input name="phone" required pattern="[0-9]{10}" placeholder="Mobile Number *"/></div><select name="course" required defaultValue=""><option value="" disabled>Select Course *</option>{courses.map(c=><option key={c.id}>{c.title}</option>)}</select><textarea name="message" rows="4" placeholder="Your message"></textarea><button className="primary-btn full" type="submit"><Send size={16}/> Send Enquiry on WhatsApp</button><small>By submitting, WhatsApp will open with your enquiry details.</small></form>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-grid"><div><span className="eyebrow light">Contact NS World</span><h2>Ready to Start Your <b>IT Career?</b></h2><p>Visit our office or contact us for course details, batch timings and placement assistance.</p></div><div className="contact-actions"><a className="primary-btn" href={`tel:${PHONE}`}><Phone size={17}/> Call Us</a><button className="outline-btn white" onClick={() => wa("Hello NS World, I want to enquire about your IT training and placement programs.")}><MessageCircle size={17}/> WhatsApp</button><button className="outline-btn white" onClick={() => go("enquiry")}>Enquire Now <ArrowRight size={16}/></button></div><div className="address"><MapPin size={19}/><span> 435, 4th floor, Above KFC, VTP Altitude, Dange Chowk, Pune-411033<br/>Mon – Sat: 10:00 AM – 6:00 PM<br/>Project Sessions (Offline)</span></div></div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand"><img src="/images/ns-world-logo.jpeg" alt="NS World"/><p>Empowering Careers through Hands-on Corporate IT Training.</p><div className="socials"><button onClick={() => wa("Hello NS World")}>WhatsApp</button><a href={`tel:${PHONE}`}>Call</a></div></div>
          <div><h4>Quick Links</h4><a href="#home">Home</a><a href="#courses">Courses</a><a href="#schedule">Training Schedule</a><a href="#roadmaps">Career Roadmaps</a><a href="#placement">Placement Assistance</a><a href="#about">About Us</a><a href="#contact">Contact</a></div>
          <div><h4>Our Courses</h4>{courses.slice(0,6).map(c=><button key={c.id} onClick={() => setCourseModal(c)}>{c.title}</button>)}</div>
          <div><h4>Contact Us</h4><a href={`tel:${PHONE}`}><Phone size={18}/> {PHONE_DISPLAY}</a><a href="mailto:info@nsworldit.in"> <Mail size={18}/> info@nsworldit.in</a><a href="#contact"><MapPin size={18}/> 435, 4th floor, Above KFC, VTP Altitude, Dange Chowk, Pune-411033</a><a href="#contact"><Clock3 size={18} /> Mon–Fri: 10:00 AM – 6:00 PM <br /> Sat–Sun: Project Sessions</a> <a href="https://whatsapp.com/channel/0029Va9NnSdCHDyqwAoelB1G" target="_blank" rel="noopener noreferrer" > <MessageCircle size={16} /> Click Here To Join Our WhatsApp Group <br /> For Latest Updates </a> </div></div>
        <div className="copyright">© 2026 NS World IT Training & Placement. All Rights Reserved.</div>
      </footer>

      <button className="float-wa" onClick={() => wa("Hello NS World, I want course details.")}><MessageCircle size={18}/> WhatsApp</button>

      {courseModal && <div className="modal-backdrop" onClick={() => setCourseModal(null)}><div className="modal" onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setCourseModal(null)}><X/></button><div className="modal-icon">{courseModal.icon}</div><h2>{courseModal.title}</h2><p>{courseModal.desc}</p><div className="modal-info"><span>Duration: <b>{courseModal.duration}</b></span><span>Mode: <b>{courseModal.mode}</b></span></div><h3>What you get</h3><ul><li>Live instructor-led training</li><li>Hands-on practical assignments</li><li>Real-time project exposure</li><li>Interview and placement guidance</li></ul><div className="modal-actions"><button className="primary-btn" onClick={() => {setCourseModal(null);go("enquiry")}}>Enquire Now <ArrowRight size={16}/></button><button className="outline-btn" onClick={() => wa(`Hello NS World, I am interested in ${courseModal.title}. Please share complete details.`)}><MessageCircle size={16}/> WhatsApp</button></div></div></div>}

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

export default App;
