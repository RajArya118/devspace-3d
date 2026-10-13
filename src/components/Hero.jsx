import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Sparkles, Terminal, Layers, Box } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

export function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Text & CTAs */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Status Badge */}
          <div className="status-badge glass-card">
            <span className="status-dot"></span>
            <span>{personalInfo.status}</span>
          </div>

          <h1 className="hero-title">
            Crafting Interactive <br />
            <span className="gradient-text">3D Web Realities</span>
          </h1>

          <p className="hero-subtitle">
            Hi, I'm <strong className="hero-name">{personalInfo.name}</strong> — {personalInfo.title}. {personalInfo.bio}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              <Sparkles size={18} /> Explore Projects
            </a>
            <a
              href="#resume"
              className="btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                alert("Resume placeholder: In Phase 2/3, aap apna actual resume PDF yahan link kar sakte hain!");
              }}
            >
              <Download size={18} /> Download CV
            </a>
          </div>

          {/* Quick Metrics / Highlights */}
          <div className="hero-highlights">
            <div className="highlight-item">
              <span className="highlight-num">3+</span>
              <span className="highlight-label">Modern Projects</span>
            </div>
            <div className="highlight-divider"></div>
            <div className="highlight-item">
              <span className="highlight-num">100%</span>
              <span className="highlight-label">Responsive UI</span>
            </div>
            <div className="highlight-divider"></div>
            <div className="highlight-item">
              <span className="highlight-num">60fps</span>
              <span className="highlight-label">Fluid Animations</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D-Styled Floating Interactive Visual */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="visual-card-main glass-card">
            <div className="card-header-bar">
              <div className="mac-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="card-header-title">devspace.terminal</span>
            </div>

            <div className="code-display">
              <div className="code-line">
                <span className="keyword">const</span> <span className="var-name">developer</span> = &#123;
              </div>
              <div className="code-line indent">
                <span className="property">name:</span> <span className="string">'{personalInfo.name}'</span>,
              </div>
              <div className="code-line indent">
                <span className="property">focus:</span> <span className="string">'3D & Modern Frontend'</span>,
              </div>
              <div className="code-line indent">
                <span className="property">stack:</span> [<span className="string">'React'</span>, <span className="string">'Vite'</span>, <span className="string">'Framer Motion'</span>],
              </div>
              <div className="code-line indent">
                <span className="property">readyToBuild:</span> <span className="boolean">true</span>
              </div>
              <div className="code-line">&#125;;</div>
            </div>

            {/* Floating 3D Badge 1 */}
            <motion.div
              className="floating-chip chip-top-right glass-card"
              animate={{ y: [-6, 6, -6], rotateZ: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Box size={18} className="chip-icon purple" />
              <span>Three.js Ready</span>
            </motion.div>

            {/* Floating 3D Badge 2 */}
            <motion.div
              className="floating-chip chip-bottom-left glass-card"
              animate={{ y: [6, -6, 6], rotateZ: [2, -2, 2] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            >
              <Layers size={18} className="chip-icon cyan" />
              <span>Framer Motion</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <ArrowDown size={20} className="scroll-arrow" />
      </a>
    </section>
  );
}
