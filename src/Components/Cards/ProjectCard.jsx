import React from 'react'

export default function ProjectCard() {
    return (
        <>
            <div className="min-vh-100 mt-5" id="journey-main-container">

            <section className="py-5 bg-light" id="journey-header-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <h1 className="fw-bold mb-3 text-dark" id="journey-main-title">
                                Project Work
                            </h1>
                            <p className="lead text-muted mb-0" id="journey-subtitle">
                                Project's{" "}
                                <span className="text-primary fw-semibold">Developed</span> by
                                {" "}
                                <span className="text-primary fw-semibold">
                                  Me
                                </span>{" "}

                            </p>
                        </div>
                    </div>
                </div>
            </section>
          </div>
        </>
    )
}
