import React from 'react';

const techIcons = {
  HTML: '🌐',
  CSS: '🎨',
  JavaScript: '⚡',
  React: '⚛️',
  TypeScript: '📘',
  'Node.js': '🟢',
  Python: '🐍',
  MongoDB: '🍃',
  PostgreSQL: '🐘',
  Figma: '🎯',
  'Next.js': '▲',
  Express: '🚀',
  Tailwind: '💨',
  Bootstrap: '🅱️',
};

const categoryLabels = {
  frontend: 'Front-end',
  backend: 'Back-end',
  fullstack: 'Full-Stack',
  'ui-design': 'UI Design',
};

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card" id={`project-${project.id}`}>
      <div className="project-card__image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-card__image"
          loading="lazy"
        />
        <span className="project-card__category-badge">
          {categoryLabels[project.category]}
        </span>
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>

        <div className="project-card__tech-section">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="project-card__tech-tag"
              id={`tech-${project.id}-${index}`}
            >
              <span className="project-card__tech-icon">
                {techIcons[tech] || '💻'}
              </span>
              {tech}
            </span>
          ))}
        </div>

        <p className="project-card__info">{project.description}</p>

        <div className="project-card__actions">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__btn project-card__btn--primary"
            id={`live-demo-${project.id}`}
          >
            <svg
              className="project-card__btn-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            Live Demo
          </a>
          <a
            href={project.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__btn project-card__btn--secondary"
            id={`github-${project.id}`}
          >
            <svg
              className="project-card__btn-icon"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
