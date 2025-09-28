import React from 'react'
import { useState } from "react";
import ProjectCard1 from './projectCard1';

export default function ProjectCard() {
    
    return (
        <>

            {/* <section className="min-vh-100 " > */}
            <div className="container bg-light mw-100 p-5 mt-5">
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
            <section className='container' style={{ position: "relative", bottom: "100px" }}>
                <ProjectCard1 />
            </section>


        </>
    )
}
