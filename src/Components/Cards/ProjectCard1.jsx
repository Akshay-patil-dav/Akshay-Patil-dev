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
            img: "https://cdn.dribbble.com/userupload/19426572/file/still-cec5b852446edbbd7d70746da9711ac9.png?resize=400x0",
        },
        {
            id: 2,
            name: "Project 2",
            category: "Back-End",
            tech: ["Node.js", "Express", "MongoDB"],
            img: "https://cdn.dribbble.com/userupload/12732585/file/original-90d0b72ce795ef3565fa47cd3853b0b5.png?crop=0x0-2400x1800&format=webp&resize=400x300&vertical=center",
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
    const projectsPerPage = 6;

    const filteredProjects =
        activeCategory === "All"
            ? allProjects
            : allProjects.filter((p) => p.category === activeCategory);

    const indexOfLast = currentPage * projectsPerPage;
    const indexOfFirst = indexOfLast - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

    return (
        <>


            <div className=" container py-5 " id="portfolioSection">

                {/* Filter Buttons */}
                <div className="portfolio-filters text-center mb-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`btn mx-2 portfolio-filter-btn ${activeCategory === cat ? "active-filter-btn" : ""
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
                <div className="grid-container">
                    {currentProjects.map((project) => (
                        <div
                            key={project.id}
                            className="grid-box"
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
                                    <div className=" gap-2 " id="cardbox_btn" >
                                        <a
                                            href="#"
                                            className="btn  portfolio-view-btn text-white"
                                            style={{ backgroundColor: "#6c63ff" }}
                                            id={`viewProject-${project.id}`}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                                            </svg>
                                            <b className="px-1"> View Project</b>
                                        </a>
                                        <a
                                            href="#"
                                            className="btn btn-dark portfolio-code-btn "
                                            id={`viewCode-${project.id}`}
                                        >
                                            <b className="px-2">
                                                Code &lt;/&gt;
                                            </b>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-github mx-1 " viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="portfolio-pagination d-flex justify-content-center mt-4">
                    <ul className="pagination gap-2">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <li
                                key={index + 1}
                                className={`page-item ${currentPage === index + 1 ? "active" : ""
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
        </>
    );
};

export default ProjectCard1;
