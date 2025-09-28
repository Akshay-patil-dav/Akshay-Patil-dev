import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";  

const ProjectCard1 = () => {
  const categories = ["All", "Front-End", "Back-End", "UI", "Full-Stack"];

  const allProjects = [
    {
      id: 1,
      name: "Project 1",
      category: "Front-End",
      tech: ["HTML", "CSS", "React"],
      img: "https://via.placeholder.com/400x250.png?text=Project+1",
    },
    {
      id: 2,
      name: "Project 2",
      category: "Back-End",
      tech: ["Node.js", "Express", "MongoDB"],
      img: "https://via.placeholder.com/400x250.png?text=Project+2",
    },
    {
      id: 3,
      name: "Project 3",
      category: "UI",
      tech: ["Figma", "AdobeXD"],
      img: "https://via.placeholder.com/400x250.png?text=Project+3",
    },
    {
      id: 4,
      name: "Project 4",
      category: "Front-End",
      tech: ["HTML", "CSS", "Bootstrap"],
      img: "https://via.placeholder.com/400x250.png?text=Project+4",
    },
    {
      id: 5,
      name: "Project 5",
      category: "Full-Stack",
      tech: ["React", "Node.js", "MongoDB"],
      img: "https://via.placeholder.com/400x250.png?text=Project+5",
    },
    {
      id: 6,
      name: "Project 6",
      category: "Back-End",
      tech: ["Spring Boot", "Java", "MySQL"],
      img: "https://via.placeholder.com/400x250.png?text=Project+6",
    },
    {
      id: 7,
      name: "Project 7",
      category: "UI",
      tech: ["Figma", "Sketch"],
      img: "https://via.placeholder.com/400x250.png?text=Project+7",
    },
    {
      id: 8,
      name: "Project 8",
      category: "Front-End",
      tech: ["Vue", "CSS", "JavaScript"],
      img: "https://via.placeholder.com/400x250.png?text=Project+8",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <div className="portfolio-section container py-5" id="portfolioSection">
      {/* Filter Buttons */}
      <div className="portfolio-filters text-center mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn mx-2 portfolio-filter-btn ${
              activeCategory === cat ? "active-filter-btn" : ""
            }`}
            onClick={() => {
              setActiveCategory(cat);
              setCurrentPage(1);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="row">
        {currentProjects.map((project) => (
          <div
            key={project.id}
            className="col-lg-3 col-md-6 col-sm-12 mb-4 portfolio-card-col"
          >
            <div className="card portfolio-card h-100">
              <img
                src={project.img}
                className="card-img-top portfolio-card-img"
                alt={project.name}
              />
              <div className="card-body portfolio-card-body">
                <h5 className="card-title portfolio-card-title">
                  {project.name}
                </h5>
                <p className="portfolio-tech-list">
                  {project.tech.join(" • ")}
                </p>
                <p className="card-text portfolio-description">
                  Short description about {project.name}. Showcase your best
                  work here.
                </p>
                <div className="d-flex justify-content-between">
                  <a
                    href="#"
                    className="btn btn-primary portfolio-view-btn"
                    id={`viewProject-${project.id}`}
                  >
                    View Project
                  </a>
                  <a
                    href="#"
                    className="btn btn-dark portfolio-code-btn"
                    id={`viewCode-${project.id}`}
                  >
                    Code &lt;/&gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="portfolio-pagination d-flex justify-content-center mt-4">
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index + 1}
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard1;
