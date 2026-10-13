import React from 'react';
import { motion } from 'framer-motion';
import { Compass, BookOpen, Target, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo, learningMilestones } from '../data/portfolioData';
import './About.css';

export function About() {
  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill glass-card">
            <Compass size={16} className="pill-icon" />
            <span>Developer Journey</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">{personalInfo.name}</span>
          </h2>
          <p className="section-subtitle">
            An aspiring frontend developer committed to learning by building real, practical web experiences.
          </p>
        </div>

        {/* Story & Philosophy Grid */}
        <div className="about-grid">
          {/* Left: Bio & Philosophy */}
          <motion.div
            className="about-bio-card glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bio-highlight-badge">
              <Sparkles size={16} /> <span>Focus: Modern Web & UI</span>
            </div>
            
            <h3 className="bio-heading">Building a Strong Foundation in Frontend Engineering</h3>
            
            <p className="bio-paragraph">
              Hello! Main <strong>Chandrabhan</strong> hoon. Mera primary goal hai modern, responsive aur visually appealing 
              web applications create karna. Maine web development ki shuruaat core foundations—HTML, CSS, aur modern JavaScript—se 
              ki hai, aur ab main React ecosystem aur animated UI interactions par daily practice kar raha hoon.
            </p>

            <p className="bio-paragraph">
              Mera philosophy simple hai: <em>"Sirf syntax read karne se coding nahi aati, code likhne aur browser mein test karne se aati hai."</em> 
              Har project mein components ko modular rakhna, clean folder structure maintain karna, aur browser developer tools se 
              errors troubleshoot karna meri daily learning routine ka hissa hai.
            </p>

            <div className="bio-goals">
              <div className="goal-item">
                <Target size={18} className="goal-icon purple" />
                <div>
                  <strong>Hands-on Projects</strong>
                  <p>Practical apps build karke concepts solidify karna.</p>
                </div>
              </div>

              <div className="goal-item">
                <BookOpen size={18} className="goal-icon cyan" />
                <div>
                  <strong>Continuous Learning</strong>
                  <p>React 19, Framer Motion, aur 3D web fundamentals explore karna.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Learning Journey Milestones Timeline */}
          <div className="journey-timeline">
            <h3 className="timeline-heading">Learning Roadmap & Milestones</h3>
            
            <div className="timeline-items">
              {learningMilestones.map((item, idx) => (
                <motion.div
                  key={item.step}
                  className="timeline-card glass-card"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="timeline-step-badge">{item.step}</div>
                  <div className="timeline-body">
                    <div className="timeline-meta">
                      <span className="timeline-phase">{item.phase}</span>
                      <span className={`timeline-period ${item.period === 'Current Focus' ? 'active' : ''}`}>
                        {item.period}
                      </span>
                    </div>
                    <h4 className="timeline-title">{item.title}</h4>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
