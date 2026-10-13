import React from 'react';
import './styles/App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { personalInfo } from './data/portfolioData';

function App() {
  return (
    <div className="app-wrapper">
      {/* 3D Ambient Glowing Background Elements */}
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>

      {/* Floating Glassmorphic Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* 1. About Me & Learning Journey */}
        <About />

        {/* 2. Skills & Learning Progress Grid */}
        <Skills />

        {/* 3. Projects Gallery */}
        <Projects />

        {/* Contact Placeholder Section (Ready for Phase 3 Form Expansion) */}
        <section id="contact" className="section-wrapper" style={{ paddingBottom: '2rem' }}>
          <div className="container">
            <div className="glass-card" style={{ padding: '3rem 2rem', textAlign: 'center', borderRadius: '24px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-cyan))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem',
                color: '#fff'
              }}>
                <MessageSquare size={24} />
              </div>

              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '0.75rem' }}>
                Let's Build Something <span className="gradient-text">Together</span>
              </h2>

              <p style={{ color: 'var(--text-muted)', maxWidth: '560px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
                Have feedback on my projects, want to collaborate on frontend experiments, or have a question? 
                Feel free to connect directly via email!
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="btn-primary"
                >
                  <Mail size={18} /> Send an Email
                </a>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  Visit GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
