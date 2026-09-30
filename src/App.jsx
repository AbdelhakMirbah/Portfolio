import { useState, useEffect } from 'react';
import { Sun, Moon, ChevronRight, Briefcase, Database, Layout, Award, ExternalLink, Globe, Download, Menu, X, MapPin, Mail, Send, Phone, ArrowUp, GraduationCap } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaPython, FaJava, FaPhp, FaBootstrap, FaHtml5, FaGitAlt, FaJira, FaDocker } from 'react-icons/fa';
import { SiSpringboot, SiPandas, SiPostgresql, SiMysql, SiJavascript } from 'react-icons/si';
import profileImg from './assets/profile.png';
import cvFile from './assets/cv.pdf';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  { title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional", provider: "Oracle", date: "2026", url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=B0E5F13B50749715C4C6EB04CCC393509D881F66DCA6334EE16BBD173E716084" },
  { title: "Spring, JPA, Testing, and Legacy Microservices", provider: "Packt", date: "Jan 2026", url: "https://www.coursera.org/account/accomplishments/verify/V2J4GU7UH3NE" },
  { title: "Advanced Spring Cloud Microservices & Deployment with Docker", provider: "Packt", date: "Jan 2026", url: "https://www.coursera.org/account/accomplishments/verify/P9C8PYN8SFSM" },
  { title: "Machine Learning with Python", provider: "IBM", date: "Dec 2025", url: "https://www.coursera.org/account/accomplishments/verify/S4XVZVGKRC12" },
  { title: "Virtual Networks in Azure", provider: "Whizlabs", date: "Jun 2025", url: "https://www.coursera.org/account/accomplishments/verify/WPQ5TGRDGAOI" },
  { title: "Intro to Containers w/ Docker, Kubernetes & OpenShift", provider: "IBM", date: "Jun 2025", url: "https://www.coursera.org/account/accomplishments/verify/69FQA5CV04A3" },
  { title: "Introduction to Java and Object-Oriented Programming", provider: "University of Pennsylvania", date: "Jan 2025", url: "https://www.coursera.org/account/accomplishments/verify/CCOJM3QR1B35" },
  { title: "React Basics", provider: "Meta", date: "Jan 2025", url: "https://www.coursera.org/account/accomplishments/verify/467O6NQ2D151" },
  { title: "Software Engineering: Software Design and Project Management", provider: "HKUST", date: "May 2024", url: "https://www.coursera.org/account/accomplishments/verify/X8NAK7FAJ3YB" },
  { title: "People & Soft Skills: Essential for Professional Success", provider: "IBM", date: "May 2024", url: "https://www.coursera.org/account/accomplishments/specialization/PQXET4U4STQD" },
  { title: "The Unix Workbench", provider: "Johns Hopkins University", date: "May 2024", url: "https://www.coursera.org/account/accomplishments/verify/JUB7KQBDT9VA" },
  { title: "Programming for Everybody (Getting Started with Python)", provider: "University of Michigan", date: "May 2024", url: "https://www.coursera.org/account/accomplishments/verify/F9EZ5VM67KJT" },
  { title: "Delivering Quality Work with Agility", provider: "IBM", date: "May 2024", url: "https://www.coursera.org/account/accomplishments/verify/8HT2N5PHUE25" },
  { title: "Impact Measurement & Management for the SDGs", provider: "Duke University", date: "May 2024", url: "https://www.coursera.org/account/accomplishments/verify/EBL5DUNGHRY8" },
  { title: "Villes africaines: Environnement et enjeux de développement durable", provider: "EPFL", date: "May 2024", url: "https://www.coursera.org/account/accomplishments/verify/VB775CMEM6HS" },
  { title: "La recherche documentaire", provider: "École Polytechnique", date: "May 2024", url: "https://www.coursera.org/account/accomplishments/verify/FHUKYPU2CBPR" },
  { title: "Introduction to CSS3", provider: "University of Michigan", date: "Jan 2024", url: "https://www.coursera.org/account/accomplishments/verify/8BCP9JRWJDU6" },
  { title: "Microsoft Excel Expert (Office 2016)", provider: "Microsoft", date: "May 2022", url: "https://www.credly.com/badges/baa2f397-42ef-4cb2-a366-b735f1b7169d?source=linked_in_profile" }
];

const techStack = [
  { name: 'React', icon: FaReact },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'Python', icon: FaPython },
  { name: 'Java', icon: FaJava },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MySQL', icon: SiMysql },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'PHP', icon: FaPhp },
  { name: 'Bootstrap', icon: FaBootstrap },
  { name: 'Docker', icon: FaDocker },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Jira', icon: FaJira },
  { name: 'Pandas', icon: SiPandas },
];
const marqueeItems = [...techStack, ...techStack];

function App() {
  const [theme, setTheme] = useState('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Entrance animations
    const tl = gsap.timeline();
    tl.fromTo('.nav-animate', 
      { y: -50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    )
    .fromTo('.hero-text', 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
      "-=0.4"
    );

    // Scroll animations for sections
    const sections = gsap.utils.toArray('section:not(#hero)');
    sections.forEach((sec) => {
      gsap.fromTo(sec, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 85%", // trigger when the top of the section hits 85% down the viewport
            toggleActions: "play none none none"
          }
        }
      );
    });

    // Staggered animations for cards and timeline items
    const elements = gsap.utils.toArray('.glass, .timeline-item');
    elements.forEach((el) => {
      gsap.fromTo(el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
    
    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  return (
    <div className="app-wrapper">
      <div className="hero-gradient"></div>
      
      {/* Navigation */}
      <nav className="glass nav-animate" style={navStyle}>
        <div className="container nav-container">
          <div className="nav-header">
            <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Abdelhak Mirbah</h1>
            <button className="burger-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className={`nav-links-container ${isMenuOpen ? 'open' : ''}`}>
            <a href="#about" style={linkStyle} onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</a>
            <a href="#education" style={linkStyle} onClick={() => setIsMenuOpen(false)}>{t('nav.education')}</a>
            <a href="#experience" style={linkStyle} onClick={() => setIsMenuOpen(false)}>{t('nav.experience')}</a>
            <a href="#projects" style={linkStyle} onClick={() => setIsMenuOpen(false)}>{t('nav.projects')}</a>
            <a href="#certifications" style={linkStyle} onClick={() => setIsMenuOpen(false)}>{t('nav.certifications')}</a>
            <a href="#contact" style={linkStyle} onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</a>
            
            <div className="nav-controls" style={{ display: 'flex', gap: '0.5rem', marginLeft: '1rem' }}>
              <button onClick={toggleLanguage} style={themeBtnStyle} aria-label="Toggle Language" title="Change Language">
                <Globe size={20} /> <span style={{marginLeft: '0.3rem', fontSize: '0.9rem', fontWeight: 600}}>{i18n.language.toUpperCase()}</span>
              </button>
              <button onClick={toggleTheme} style={themeBtnStyle} aria-label="Toggle Theme">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ maxWidth: '600px' }}>
            <p className="hero-text" style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem' }}>
              {t('hero.hi')}
            </p>
            <h2 className="hero-text" style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              {t('hero.title')} <br/>
              <span style={{ color: 'var(--accent-color)', opacity: 0.8 }}>{t('hero.subtitle')}</span>
            </h2>
            <p className="hero-text" style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '2.5rem', maxWidth: '600px' }}>
              {t('hero.description')}
            </p>
            
            <div className="hero-text hero-actions" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }} className="hero-buttons">
                <a href="#projects" style={primaryBtnStyle}>
                  {t('hero.viewWork')} <ChevronRight size={18} />
                </a>
                <a href={cvFile} download="Abdelhak_Mirbah_CV.pdf" style={{...primaryBtnStyle, background: 'transparent', border: '1px solid var(--accent-color)', color: 'var(--text-color)'}}>
                  {t('hero.downloadCV')} <Download size={18} />
                </a>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }} className="hero-socials">
                <a href="https://github.com/AbdelhakMirbah" target="_blank" rel="noreferrer" style={iconLinkStyle} aria-label="GitHub"><FaGithub size={24} /></a>
                <a href="https://www.linkedin.com/in/abdelhak-mirbah" target="_blank" rel="noreferrer" style={iconLinkStyle} aria-label="LinkedIn"><FaLinkedin size={24} /></a>
                <a href="mailto:Abdelmirbah@gmail.com" style={iconLinkStyle} aria-label="Email"><FaEnvelope size={24} /></a>
              </div>
            </div>
          </div>
          
          <div className="hero-text" style={{ flexShrink: 0, margin: '0 auto' }}>
            <img 
              src={profileImg} 
              alt="Abdelhak Mirbah" 
              style={{ width: '350px', height: '350px', objectFit: 'cover', borderRadius: '50%', border: '4px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} 
            />
          </div>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="container" style={sectionStyle}>
        <h3 style={sectionTitleStyle}>{t('about.title')}</h3>
        <p style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem', fontSize: '1.1rem', opacity: 0.9, lineHeight: 1.8}}>
          {t('about.bio')}
        </p>
        <div style={gridStyle}>
          <div className="glass" style={cardStyle}>
            <Layout size={32} color="var(--accent-color)" style={{marginBottom: '1rem'}}/>
            <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>{t('about.webDev')}</h4>
            <p style={{opacity: 0.8}}>React, Spring Boot, Flask, PHP, Bootstrap, HTML/CSS/JS</p>
          </div>
          <div className="glass" style={cardStyle}>
            <Database size={32} color="var(--accent-color)" style={{marginBottom: '1rem'}}/>
            <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>{t('about.dataAnalytics')}</h4>
            <p style={{opacity: 0.8}}>Pandas, PostgreSQL, Power BI, ETL, MySQL</p>
          </div>
          <div className="glass" style={cardStyle}>
            <Briefcase size={32} color="var(--accent-color)" style={{marginBottom: '1rem'}}/>
            <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>{t('about.languagesTools')}</h4>
            <p style={{opacity: 0.8}}>Python, Java, JavaScript, SQL, Git, Jira, Scrum</p>
          </div>
        </div>
        
        {/* Animated Tech Marquee */}
        <div className="marquee-container">
          <div className="marquee-content">
            {marqueeItems.map((Tech, index) => (
              <div key={index} className="marquee-item">
                <Tech.icon size={28} />
                <span>{Tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="container" style={sectionStyle}>
        <h3 style={sectionTitleStyle}>{t('education.title')}</h3>
        <div className="timeline-container">
          <div className="timeline-item">
            <div style={{display: 'flex', alignItems: 'flex-start', gap: '0.8rem', marginBottom: '0.5rem'}}>
              <h4 style={{fontSize: '1.3rem'}}>{t('education.edu1.degree')}</h4>
            </div>
            <p style={{color: 'var(--accent-color)', fontWeight: 600}}>{t('education.edu1.school')} | {t('education.edu1.date')}</p>
          </div>
          <div className="timeline-item">
            <div style={{display: 'flex', alignItems: 'flex-start', gap: '0.8rem', marginBottom: '0.5rem'}}>
              <h4 style={{fontSize: '1.3rem'}}>{t('education.edu2.degree')}</h4>
            </div>
            <p style={{color: 'var(--accent-color)', fontWeight: 600}}>{t('education.edu2.school')} | {t('education.edu2.date')}</p>
          </div>
          <div className="timeline-item">
            <div style={{display: 'flex', alignItems: 'flex-start', gap: '0.8rem', marginBottom: '0.5rem'}}>
              <h4 style={{fontSize: '1.3rem'}}>{t('education.edu3.degree')}</h4>
            </div>
            <p style={{color: 'var(--accent-color)', fontWeight: 600}}>{t('education.edu3.school')} | {t('education.edu3.date')}</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container" style={sectionStyle}>
        <h3 style={sectionTitleStyle}>{t('experience.title')}</h3>
        <div className="timeline-container">
          <div className="timeline-item">
            <h4 style={{fontSize: '1.3rem'}}>{t('experience.exp1.title')}</h4>
            <p style={{color: 'var(--accent-color)', fontWeight: 600}}>
              <a href="https://www.leoni-morocco.com/fr" target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
                {t('experience.exp1.company')} <ExternalLink size={14} style={{display: 'inline', marginBottom: '-2px'}}/>
              </a> | {t('experience.exp1.date')}
            </p>
            <p style={{opacity: 0.8, marginTop: '0.5rem'}}>{t('experience.exp1.desc')}</p>
          </div>
          <div className="timeline-item">
            <h4 style={{fontSize: '1.3rem'}}>{t('experience.exp2.title')}</h4>
            <p style={{color: 'var(--accent-color)', fontWeight: 600}}>
              <a href="https://damanecash.ma" target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
                {t('experience.exp2.company')} <ExternalLink size={14} style={{display: 'inline', marginBottom: '-2px'}}/>
              </a> | {t('experience.exp2.date')}
            </p>
            <p style={{opacity: 0.8, marginTop: '0.5rem'}}>{t('experience.exp2.desc')}</p>
          </div>
          <div className="timeline-item">
            <h4 style={{fontSize: '1.3rem'}}>{t('experience.exp3.title')}</h4>
            <p style={{color: 'var(--accent-color)', fontWeight: 600}}>
              <a href="https://kazinov.com" target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
                {t('experience.exp3.company')} <ExternalLink size={14} style={{display: 'inline', marginBottom: '-2px'}}/>
              </a> | {t('experience.exp3.date')}
            </p>
            <p style={{opacity: 0.8, marginTop: '0.5rem'}}>{t('experience.exp3.desc')}</p>
          </div>
          <div className="timeline-item">
            <h4 style={{fontSize: '1.3rem'}}>{t('experience.exp4.title')}</h4>
            <p style={{color: 'var(--accent-color)', fontWeight: 600}}>
              <a href="https://innolia.ma" target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
                {t('experience.exp4.company')} <ExternalLink size={14} style={{display: 'inline', marginBottom: '-2px'}}/>
              </a> | {t('experience.exp4.date')}
            </p>
            <p style={{opacity: 0.8, marginTop: '0.5rem'}}>{t('experience.exp4.desc')}</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container" style={sectionStyle}>
        <h3 style={sectionTitleStyle}>{t('projects.title')}</h3>
        <div style={gridStyle}>
          <div className="glass" style={projectCardStyle}>
            <h4 style={{fontSize: '1.4rem', marginBottom: '0.5rem'}}>{t('projects.proj1.title')}</h4>
            <p style={{color: 'var(--accent-color)', fontWeight: 500, marginBottom: '1rem'}}>{t('projects.proj1.tech')}</p>
            <p style={{opacity: 0.8, flexGrow: 1, marginBottom: '1.5rem'}}>{t('projects.proj1.desc')}</p>
            <a href="https://github.com/AbdelhakMirbah/FinalVersionPFA" target="_blank" rel="noreferrer" style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 600}}>
              {t('projects.viewRepo')} <ExternalLink size={18} />
            </a>
          </div>
          <div className="glass" style={projectCardStyle}>
            <h4 style={{fontSize: '1.4rem', marginBottom: '0.5rem'}}>{t('projects.proj2.title')}</h4>
            <p style={{color: 'var(--accent-color)', fontWeight: 500, marginBottom: '1rem'}}>{t('projects.proj2.tech')}</p>
            <p style={{opacity: 0.8, flexGrow: 1, marginBottom: '1.5rem'}}>{t('projects.proj2.desc')}</p>
            <a href="https://github.com/AbdelhakMirbah/SmartIrrigation" target="_blank" rel="noreferrer" style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 600}}>
              {t('projects.viewRepo')} <ExternalLink size={18} />
            </a>
          </div>
          <div className="glass" style={projectCardStyle}>
            <h4 style={{fontSize: '1.4rem', marginBottom: '0.5rem'}}>{t('projects.proj3.title')}</h4>
            <p style={{color: 'var(--accent-color)', fontWeight: 500, marginBottom: '1rem'}}>{t('projects.proj3.tech')}</p>
            <p style={{opacity: 0.8, flexGrow: 1, marginBottom: '1.5rem'}}>{t('projects.proj3.desc')}</p>
            <a href="https://github.com/5iirControle/controle-dl-flutter-abdelhak_mirbah_g9" target="_blank" rel="noreferrer" style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 600}}>
              {t('projects.viewRepo')} <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="container" style={sectionStyle}>
        <h3 style={sectionTitleStyle}>{t('certifications.title')}</h3>
        <div style={certGridStyle}>
          {certifications.map((cert, index) => (
            <a key={index} href={cert.url} target="_blank" rel="noreferrer" className="glass cert-card" style={certCardStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <Award size={24} color="var(--accent-color)" />
                <ExternalLink size={16} opacity={0.5} />
              </div>
              <h4 style={{fontSize: '1.1rem', marginBottom: '0.5rem', lineHeight: 1.3}}>{cert.title}</h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto', fontSize: '0.9rem', opacity: 0.7 }}>
                <span>{cert.provider}</span>
                <span>{cert.date}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container" style={sectionStyle}>
        <h3 style={sectionTitleStyle}>{t('contact.title')}</h3>
        <div className="glass" style={{...cardStyle, alignItems: 'center', textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
          <p style={{fontSize: '1.2rem', opacity: 0.8, marginBottom: '2rem', maxWidth: '600px'}}>
            {t('contact.desc')}
          </p>
          <a href="mailto:Abdelmirbah@gmail.com" style={{...primaryBtnStyle, padding: '1rem 2.5rem', fontSize: '1.1rem', marginBottom: '3rem'}}>
            <Send size={20} /> {t('contact.sayHello')}
          </a>
          
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ padding: '1rem', borderRadius: '50%', background: 'var(--glass-border)', display: 'flex' }}>
                <Mail size={24} color="var(--accent-color)" />
              </div>
              <span style={{ fontWeight: 600 }}>{t('contact.email')}</span>
              <span style={{ opacity: 0.7 }}>Abdelmirbah@gmail.com</span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ padding: '1rem', borderRadius: '50%', background: 'var(--glass-border)', display: 'flex' }}>
                <Phone size={24} color="var(--accent-color)" />
              </div>
              <span style={{ fontWeight: 600 }}>{t('contact.phone')}</span>
              <span style={{ opacity: 0.7 }}>+212 607 71 55 35</span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ padding: '1rem', borderRadius: '50%', background: 'var(--glass-border)', display: 'flex' }}>
                <MapPin size={24} color="var(--accent-color)" />
              </div>
              <span style={{ fontWeight: 600 }}>{t('contact.location')}</span>
              <span style={{ opacity: 0.7 }}>{t('contact.morocco')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={footerStyle}>
        <p style={{opacity: 0.6}}>© {new Date().getFullYear()} Abdelhak Mirbah. {t('footer.builtWith')}</p>
      </footer>
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button onClick={scrollToTop} className="glass scroll-top-btn" aria-label="Scroll to top">
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

// Inline Styles
const navStyle = { position: 'fixed', top: '1rem', left: '50%', transform: 'translateX(-50%)', width: 'calc(100% - 2rem)', maxWidth: '1200px', borderRadius: '100px', zIndex: 100 };
const linkStyle = { textDecoration: 'none', color: 'inherit', fontWeight: 500, opacity: 0.8, transition: 'opacity 0.2s' };
const themeBtnStyle = { background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', borderRadius: '50%', transition: 'background 0.2s' };
const primaryBtnStyle = { display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--accent-color)', color: '#fff', padding: '0.8rem 1.5rem', borderRadius: '50px', textDecoration: 'none', fontWeight: 600, transition: 'background 0.2s, transform 0.2s' };
const iconLinkStyle = { color: 'inherit', opacity: 0.7, transition: 'opacity 0.2s, transform 0.2s', display: 'flex', alignItems: 'center' };
const sectionStyle = { padding: '6rem 0' };
const sectionTitleStyle = { fontSize: '2.5rem', fontWeight: 800, marginBottom: '3rem', textAlign: 'center' };
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' };
const cardStyle = { padding: '2rem', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' };
const timelineItemStyle = { borderLeft: '2px solid var(--accent-color)', paddingLeft: '1.5rem', position: 'relative' };
const projectCardStyle = { padding: '2rem', borderRadius: '20px', display: 'flex', flexDirection: 'column', minHeight: '250px' };
const certGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' };
const certCardStyle = { padding: '1.5rem', borderRadius: '15px', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s, background 0.2s' };
const footerStyle = { textAlign: 'center', padding: '3rem 0', marginTop: '4rem', borderTop: '1px solid var(--glass-border)' };

export default App;
