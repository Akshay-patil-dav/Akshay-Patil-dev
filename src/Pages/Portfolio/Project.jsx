import React from "react";
import ToggleCard from "../../Components/Cards/ToggleCard.jsx";
import pic from "../../Components/img/pic.jpg"
import rocket1 from "../../Components/img/rocket1.png"
import ProjectCard from "../../Components/Cards/ProjectCard.jsx";


const images = [
    "https://folio.webestica.com/landing/assets/images/pages-ss/08.jpg",
    "https://folio.webestica.com/landing/assets/images/pages-ss/14.jpg",
    "https://folio.webestica.com/landing/assets/images/pages-ss/15.jpg",
    "https://folio.webestica.com/landing/assets/images/pages-ss/04.jpg",
    "https://folio.webestica.com/landing/assets/images/pages-ss/03.jpg",
].map((image) => ({
    id: crypto.randomUUID(),
    image,
}));

export default function Project() {
    return (
        <>
            <section className="header-bg w-100" style={{ zIndex: "-1000" }}>
                <div className="header-section w-100"></div>
            </section>

            <div className="bg-opacity-50 position-relative overflow-hidden pb-7 pt-8">
                {/* <!-- Grad blur --> */}
                <div className="position-absolute start-0 top-0">
                    <img
                        src="../assets/images/elements/grad-shape/blur-decoration-2.svg"
                        className="opacity-2 blur-9 h-300px rotate-335"
                        alt="Grad shape"
                    />
                </div>
             
                

                {/* <!-- Title and content --> */}
                <div className="container position-relative">
                    <div className="row">
                        <div id="project-header-section" className="col-xxl-8 text-center mx-auto">
                            {/* <!-- Pre title --> */}



                            {/* <!-- Title --> */}
                            <h1
                                className="mb-3 lh-base text-white"
                                style={{ fontFamily: "arial black" }}
                            >
                                <b  >What i Create ..?</b>
                            </h1>
                            {/* <!-- Title --> */}
                            <h3 className="mb-3 lh-base ">
                                <b style={{ color: "white", backgroundColor: "#784dc1", borderRadius: "10px", border: "2px solid white", padding: "6px 20px" }}>Project Section  </b>
                            </h3>


                            {/* <!-- Button --> */}
                            <div className="d-flex justify-content-center flex-wrap gap-3">

                                <a
                                    href=""
                                    target="_blank"
                                    className="btn btn-dark icon-link icon-link-hover mb-0"
                                >
                                    Akshay-Patil-Dav {" "}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section id="project-slider-sec">
                <section className="p-1 overflow-hidden bg-transparent mt-5">
                    <div className=""></div>
                    <div className="slider-track">
                        <div className="slider-items">
                            {[...images, ...images].map((img, index) => (
                                <img
                                    key={index}
                                    src={img.image}
                                    className="slide-image rounded-2 shadow-lg"
                                    alt="portfolio-img"
                                />
                            ))}
                        </div>
                    </div>
                </section>
                <section className="p-5 overflow-hidden bg-transparent">

                    <div className="slider-track">
                        <div className="slider-items-1">
                            {[...images, ...images].map((img, index) => (
                                <img
                                    key={index}
                                    src={img.image}
                                    className="slide-image-1 rounded-2 shadow-lg"
                                    alt="portfolio-img"
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </section>
            
                            <ProjectCard />
        </>
    );
}
