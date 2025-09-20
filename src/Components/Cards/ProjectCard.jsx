import React from 'react'

export default function ProjectCard() {
    return (
        <>
            <div className=" mt-5" id="journey-main-container">

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
            <div className='min-vh-100 mt-5'>

                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
                        <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Disabled</button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">...</div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">...</div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...</div>
                    <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
                </div>

            </div>
        </>
    )
}
