import React, { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import FilterSection from './FilterSection';
import Pagination from './Pagination';

const PROJECTS_PER_PAGE = 3;

// Sample project data
const sampleProjects = [
  {
    id: 'proj-001',
    title: 'E-Commerce Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    category: 'fullstack',
    technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    description: 'A comprehensive e-commerce dashboard with real-time analytics, inventory management, and order tracking capabilities.',
    liveDemo: 'https://example.com/demo',
    githubRepo: 'https://github.com/example/project',
  },
  {
    id: 'proj-002',
    title: 'Portfolio Website',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    category: 'frontend',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: 'A stunning personal portfolio showcasing creative work with smooth animations and responsive design.',
    liveDemo: 'https://example.com/demo',
    githubRepo: 'https://github.com/example/project',
  },
  {
    id: 'proj-003',
    title: 'REST API Service',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    category: 'backend',
    technologies: ['Node.js', 'Express', 'PostgreSQL'],
    description: 'A scalable RESTful API with authentication, rate limiting, and comprehensive documentation.',
    liveDemo: 'https://example.com/demo',
    githubRepo: 'https://github.com/example/project',
  },
  {
    id: 'proj-004',
    title: 'Mobile App Design',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    category: 'ui-design',
    technologies: ['Figma'],
    description: 'Complete UI/UX design for a fitness tracking mobile application with 50+ screens and design system.',
    liveDemo: 'https://example.com/demo',
    githubRepo: 'https://github.com/example/project',
  },
  {
    id: 'proj-005',
    title: 'Weather Application',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
    category: 'frontend',
    technologies: ['React', 'CSS', 'JavaScript'],
    description: 'A beautiful weather app with location-based forecasts, animated weather icons, and 7-day predictions.',
    liveDemo: 'https://example.com/demo',
    githubRepo: 'https://github.com/example/project',
  },
  {
    id: 'proj-006',
    title: 'Task Management System',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
    category: 'fullstack',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
    description: 'A collaborative task management platform with real-time updates, team features, and Kanban boards.',
    liveDemo: 'https://example.com/demo',
    githubRepo: 'https://github.com/example/project',
  },
  {
    id: 'proj-007',
    title: 'Blog Platform',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
    category: 'fullstack',
    technologies: ['React', 'Node.js', 'MongoDB'],
    description: 'A modern blogging platform with rich text editor, comments, and social sharing features.',
    liveDemo: 'https://example.com/demo',
    githubRepo: 'https://github.com/example/project',
  },
  {
    id: 'proj-008',
    title: 'Landing Page Design',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    category: 'ui-design',
    technologies: ['Figma'],
    description: 'Creative landing page design for a SaaS product with modern aesthetics and conversion optimization.',
    liveDemo: 'https://example.com/demo',
    githubRepo: 'https://github.com/example/project',
  },
  {
    id: 'proj-009',
    title: 'Authentication API',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    category: 'backend',
    technologies: ['Node.js', 'Express', 'PostgreSQL'],
    description: 'Secure authentication microservice with JWT tokens, OAuth2, and role-based access control.',
    liveDemo: 'https://example.com/demo',
    githubRepo: 'https://github.com/example/project',
  },
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return sampleProjects;
    }
    return sampleProjects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);

  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    const endIndex = startIndex + PROJECTS_PER_PAGE;
    return filteredProjects.slice(startIndex, endIndex);
  }, [filteredProjects, currentPage]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    document.getElementById('projectsGrid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="projectsContainer">
      <div className="projects-wrapper">
        <header id="projectsHeader">
          <h1 className="projects-title">
            My <span className="projects-title-accent">Projects</span>
          </h1>
          <p className="projects-subtitle">
            Explore my recent work across different technologies and domains.
            Each project represents a unique challenge and solution.
          </p>
        </header>

        <FilterSection
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />

        {paginatedProjects.length > 0 ? (
          <>
            <div id="projectsGrid" key={`page-${currentPage}-${activeFilter}`}>
              {paginatedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          <div className="no-results" id="noResultsMessage">
            <div className="no-results__icon">📂</div>
            <p className="no-results__text">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
