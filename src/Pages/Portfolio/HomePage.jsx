import React from "react";
import ToggleCard from "../../Components/Cards/ToggleCard.jsx";
import pic from "../../Components/img/pic.jpg"
import CV from  "../../Components/Header/CV.pdf";


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

export default function HomePage() {
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
        {/* <!-- Decoration --> */}
        <div className="position-absolute top-0 end-0 z-index-2 mt-6 me-n6  d-lg-block" style={{ zIndex:"-1 !important"}}>
          <img
            src="https://folio.webestica.com/assets/images/elements/grad-shape/05.png"
            className="h-250px"
            alt=""
          />
        </div>
        {/* <!-- Decoration --> */}
        <div className="position-absolute top-50 start-0 mt-n6  d-lg-block"  style={{display:"block !important", zIndex:"-1 !important"}}>
          <img
            src="https://folio.webestica.com/assets/images/elements/clay-decoration.png"
            className="h-300px"
            alt="Clay-decoration"
          />
        </div>

        {/* <!-- Title and content --> */}
        <div className="container position-relative">
          <div className="row">
            <div className="col-xxl-8 text-center mx-auto">
              {/* <!-- Pre title --> */}
              <div className="p-3 ">
                <img className="rounded-circle small-img" src={pic} alt="" />
              </div>
              <h1
                className="small fw-medium bg-secondary-grad rounded px-2 px-sm-3 py-2 mb-3 d-inline-flex"
                style={{ background: "white", color: "blue" }}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-lightning-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641z" />
                </svg>{" "}
                <b className="mx-1">Front-End Developer (vibe coding)</b>
              </h1>

              {/* <!-- Title --> */}
              <h1
                className="mb-3 lh-base text-white"
                style={{ fontFamily: "arial black" }}
              >
                <b>welcome to my profile </b>
              </h1>
              {/* <!-- Title --> */}
              <h3 className="mb-3 lh-base ">
                <b  style={{ color: "white",backgroundColor:"#784dc1", borderRadius:"10px" , border:"2px solid white", padding:"6px 20px" }}>I'm Akshay Patil </b>
              </h3>

              {/* <!-- Desc --> */}
              <p className="mb-4 lead" style={{color:"white"}}>
                From Last <b>1 Year's</b> i work at <b>MNJ Software</b> as an <b>Frontend
                Developer  Full-time.</b>
                <br />
                <h6 className="mt-3">
                  Front-End Design · Web Development · Web 2.0 · Debugging{" "}
                  
                </h6>
              </p>

              {/* <!-- Button --> */}
              <div className="d-flex justify-content-center flex-wrap gap-3">
                <a href="https://www.linkedin.com/in/akshay-patil-ui-dev/" className="btn btn-white-shadow mb-0 bg-white">
                  Akshay-Patil
                  <svg xmlns="http://www.w3.org/2000/svg" style={{borderRadius:"10%"}} width="20" height="20" fill="currentColor" class="bi bi-linkedin mx-2" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
                </a>
                <a
                 href={CV}
                              download="Akshay-Patil-Resume.pdf"
                            
                  target="_blank"
                  className="btn btn-dark icon-link icon-link-hover mb-0"
                >
                  Downlode CV{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-up-right-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

            
      {/* ********** */}
      {/* <!-- =======================
Main Banner END -->

<!-- =======================
Counter START --> */}
<section className="py-0 py-xl-5 bg-white " >
	<div className="container">
		<div className="row g-4">
			{/* <!-- Counter item --> */}
			<div className="col-sm-6 col-xl-3" >
				<div className="d-flex justify-content-center align-items-center p-4  bg-opacity-15 rounded-3" style={{backgroundColor: "rgba(247, 195, 46, 0.15)"}}>
					<span className="display-6 lh-1 text-warning mb-0"><i class="bi bi-envelope-at"></i></span>
					<div className="ms-4 h6 fw-normal mb-0">
            <p className="mb-0" style={{fontFamily:"arial black"}} >E-mail</p>
						<div className="d-flex mt-2">
							<h6 className="purecounter mb-0 fw-bold" style={{fontSize:"13px"}} data-purecounter-start="0" data-purecounter-end="10"	data-purecounter-delay="200">akshaypatil22082002@gmail.com</h6>
							{/* <span className="mb-0 h5">K</span> */}
						</div>
						
					</div>
				</div>
			</div>
			{/* <!-- Counter item --> */}
			<div className="col-sm-6 col-xl-3 " >
				<div className="d-flex justify-content-center align-items-center p-4 bg-blue bg-opacity-10 rounded-3" style={{backgroundColor: "rgba(29, 59, 83, 0.1)"}}>
					<span className="display-6 lh-1 text-blue mb-0"><i class="bi bi-building-check"></i></span>
					<div className="ms-4 h6 fw-normal mb-0">
						<div className="d-flex">
							<h5 className="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="200" data-purecounter-delay="200">1.3</h5>
							<span className="mb-0 h5 px-2">  year</span>
						</div>
						<p className="mb-0">Work Experience</p>
					</div>
				</div>
			</div>
			{/* <!-- Counter item --> */}
			<div className="col-sm-6 col-xl-3">
				<div className="d-flex justify-content-center align-items-center p-4 bg-purple bg-opacity-10 rounded-3">
					<span className="display-6 lh-1 text-purple mb-0"><i class="bi bi-journal-bookmark-fill"></i></span>
					<div className="ms-4 h6 fw-normal mb-0">
						<div className="d-flex">
							<h5 className="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="60"	data-purecounter-delay="200">B.C.A</h5>
							<span className="mb-0 h5"></span>
						</div>
						<p className="mb-0">Students / Graduation</p>
					</div>
				</div>
			</div>
			{/* <!-- Counter item --> */}
			<div className="col-sm-6 col-xl-3">
				<div className="d-flex justify-content-center align-items-center p-4 bg-info bg-opacity-10 rounded-3">
					<span className="display-6 lh-1 text-info mb-0"><i className="bi bi-patch-check-fill"></i></span>
					<div className="ms-4 h6 fw-normal mb-0">
						<div className="d-flex">
							<h5 className="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="6" data-purecounter-delay="300">Java FSD AI / ML</h5>
							
						</div>
						<p className="mb-0">Certified Courses</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
{/* <!-- =======================
Counter END --> */}
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

            <ToggleCard />

    </>
  );
}
