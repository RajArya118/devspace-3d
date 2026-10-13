import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Code2, Wrench, Sparkles, HelpCircle } from 'lucide-react';
import { skills } from '../data/portfolioData';
import './Skills.css';

const categories = ['All', 'Frontend', 'Tools', 'Currently Learning'];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="section-wrapper skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill glass-card">
            <Cpu size={16} className="pill-icon" />
            <span>Tech Stack & Competencies</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Learning Progress</span>
          </h2>
          <p className="section-subtitle">
            Hands-on technologies I use to build responsive, component-driven interfaces.
            Progress bars represent self-assessed learning stages, not claims of seniority.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-tabs-container">
          <div className="skills-tabs glass-card">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'Frontend' && <Code2 size={15} />}
                {cat === 'Tools' && <Wrench size={15} />}
                {cat === 'Currently Learning' && <Sparkles size={15} />}
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div layout className="skills-grid">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="skill-card glass-card"
              >
                <div className="skill-card-top">
                  <div className="skill-category-badge">{skill.category}</div>
                  <span className="skill-estimate-tag">Estimate</span>
                </div>

                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-desc">{skill.description}</p>

                {/* Progress Bar (Learning-progress indicator) */}
                <div className="skill-progress-wrapper">
                  <div className="progress-labels">
                    <span className="progress-title">Learning Curve</span>
                    <span className="progress-value">{skill.progress}%</span>
                  </div>
                  <div className="progress-track" role="progressbar" aria-valuenow={skill.progress} aria-valuemin={0} aria-valuemax={100}>
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Note on progress metrics */}
        <div className="skills-disclaimer">
          <HelpCircle size={15} />
          <span>
            Percentages reflect concept understanding and hands-on practice depth in my beginner learning path.
          </span>
        </div>
      </div>
    </section>
  );
}
