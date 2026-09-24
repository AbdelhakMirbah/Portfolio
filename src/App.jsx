import { useState, useEffect } from 'react';
import { Sun, Moon, Code, User, Mail, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import './index.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

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
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app-wrapper">
      <div className="hero-gradient"></div>
      
      {/* Navigation */}
      <nav className="glass nav-animate" style={navStyle}>
        <div className="container" style={navContainerStyle}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Portfolio</h1>
          <div style={navLinksStyle}>
            <a href="#about" style={linkStyle}>About</a>
            <a href="#projects" style={linkStyle}>Projects</a>
            <button onClick={toggleTheme} style={themeBtnStyle} aria-label="Toggle Theme">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
        <div style={{ maxWidth: '800px' }}>
          <p className="hero-text" style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem' }}>
            Hi, I am Abdelhak
          </p>
          <h2 className="hero-text" style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Software Engineer <br/>
            <span style={{ color: 'var(--accent-color)', opacity: 0.8 }}>Building Digital Experiences.</span>
          </h2>
          <p className="hero-text" style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '2.5rem', maxWidth: '600px' }}>
            I specialize in developing high-quality web applications, turning complex problems into elegant, user-centric solutions.
          </p>
          
          <div className="hero-text" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="#projects" style={primaryBtnStyle}>
              View My Work <ChevronRight size={18} />
            </a>
            <div style={{ display: 'flex', gap: '1rem', marginLeft: '1rem' }}>
              <a href="https://github.com" target="_blank" rel="noreferrer" style={iconLinkStyle}><Code size={24} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={iconLinkStyle}><User size={24} /></a>
              <a href="mailto:contact@example.com" style={iconLinkStyle}><Mail size={24} /></a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Inline styles for quick prototyping, can be moved to CSS later
const navStyle = {
  position: 'fixed',
  top: '1rem',
  left: '50%',
  transform: 'translateX(-50%)',
  width: 'calc(100% - 2rem)',
  maxWidth: '1200px',
  borderRadius: '100px',
  zIndex: 100,
};

const navContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
};

const navLinksStyle = {
  display: 'flex',
  gap: '2rem',
  alignItems: 'center',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
  fontWeight: 500,
  opacity: 0.8,
  transition: 'opacity 0.2s',
};

const themeBtnStyle = {
  background: 'none',
  border: 'none',
  color: 'inherit',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.5rem',
  borderRadius: '50%',
  transition: 'background 0.2s',
};

const primaryBtnStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  background: 'var(--accent-color)',
  color: '#fff',
  padding: '0.8rem 1.5rem',
  borderRadius: '50px',
  textDecoration: 'none',
  fontWeight: 600,
  transition: 'background 0.2s, transform 0.2s',
};

const iconLinkStyle = {
  color: 'inherit',
  opacity: 0.7,
  transition: 'opacity 0.2s, transform 0.2s',
  display: 'flex',
  alignItems: 'center',
};

export default App;
