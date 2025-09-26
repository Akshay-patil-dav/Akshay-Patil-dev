import React from 'react'
import { useState } from "react";

export default function ProjectCard() {
     const allItems = [
    { id: 1, color: "red", type: "fruit" },
    { id: 2, color: "green", type: "vegetable" },
    { id: 3, color: "yellow", type: "fruit" },
    { id: 4, color: "orange", type: "vegetable" },
  ];

  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all" ? allItems : allItems.filter((item) => item.type === filter);

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
                <ul class="nav nav-pills mb-4" id="pillNav" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="nav-home-tab" onClick={() => setFilter("all")} data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">All</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="nav-profile-tab" onClick={() => setFilter("fruit")} data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Front-End</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="nav-contact-tab" onClick={() => setFilter("vegetable")} data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Back-End</button>
                    </li>
                </ul>

                {/* Display boxes */}
                <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                width: "80px",
                                height: "80px",
                                background: item.color,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "white",
                                fontWeight: "bold",
                            }}
                        >
                            {item.type}
                        </div>
                    ))}
                </div>
            </section>


        </>
    )
}
