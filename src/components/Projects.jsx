import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Sparkles, AlertCircle, Clock, Code2 } from 'lucide-react';
import { projects } from '../data/portfolioData';
import './Projects.css';

export function Projects() {
  const [activeNotice, setActiveNotice] = useState(null);

  const handleLinkClick = (e, projectTitle, type) => {
    e.preventDefault();
    setActiveNotice(`${projectTitle}: ${type} link is currently a placeholder. This project is a work-in-progress/concept!`);
    setTimeout(() => setActiveNotice(null), 4000);
  };

  return (
    <section id="projects" className="section-wrapper projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill glass-card">
            <FolderGit2 size={16} className="pill-icon" />
            <span>Featured Work & Concepts</span>
          </div>
          <h2 className="section-title">
            Project <span className="gradient-text">Showcase</span>
          </h2>
          <p className="section-subtitle">
            Explore my core project portfolio. These represent active learning implementations and structured concepts, not completed commercial client work.
          </p>
        </div>

        {/* Global Notice Toast if a placeholder is clicked */}
        {activeNotice && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="project-toast glass-card"
          >
            <AlertCircle size={18} className="toast-icon" />
            <span>{activeNotice}</span>
          </motion.div>
        )}

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="project-card glass-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              {/* Card Banner / Status Header */}
              <div className="card-top-bar">
                <span className={`status-tag ${project.statusType}`}>
                  <Clock size={13} /> {project.status}
                </span>
                <span className="card-index">0{index + 1}</span>
              </div>

              {/* Title & Tagline */}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-tagline">{project.tagline}</p>

              {/* Description */}
              <p className="project-desc">{project.description}</p>

              {/* Tech Stack Badges */}
              <div className="tech-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-badge">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer Actions */}
              <div className="project-actions">
                <button
                  type="button"
                  className="action-btn outline"
                  onClick={(e) => handleLinkClick(e, project.title, 'Source Code')}
                  title="Source code repository (Placeholder)"
                >
                  <Code2 size={16} /> Code (WIP)
                </button>
                <button
                  type="button"
                  className="action-btn fill"
                  onClick={(e) => handleLinkClick(e, project.title, 'Live Preview')}
                  title="Live preview (Placeholder)"
                >
                  <ExternalLink size={16} /> Preview (Concept)
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="projects-footer-card glass-card">
          <Sparkles size={20} className="footer-icon" />
          <p>
            <strong>Next Project Idea in Mind?</strong> I am actively expanding this portfolio with new animated interfaces, Three.js modules, and API integrations as my skills grow.
          </p>
        </div>
      </div>
    </section>
  );
}
