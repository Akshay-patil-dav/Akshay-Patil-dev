import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './timeline.css';

export default  function AToggleCardpp() {
  return (
    <div className="min-vh-100" id="journey-main-container">
      {/* Header Section */}
      <section className="py-5 bg-light" id="journey-header-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h1 className="fw-bold mb-3 text-dark" id="journey-main-title">My Journey</h1>
              <p className="lead text-muted mb-0" id="journey-subtitle">
                From a <span className="text-primary fw-semibold">simple idea</span> to a <span className="text-primary fw-semibold">global platform</span> trusted by <span className="text-primary fw-semibold">hundreds of thousands</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-5" id="journey-timeline-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="timeline-container" id="journey-timeline-container">
                
                {/* 2020 - Company Founded */}
                <div className="timeline-item timeline-item-left" id="milestone-2020">
                  <div className="timeline-content">
                    <div className="card shadow-sm border-0" id="card-company-founded">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center mb-2">
                          <span className="badge bg-primary fs-6 me-3" id="year-2020">2024 - Present</span>
                        </div>
                        <h6> <b>Full-Time</b> (Intern)</h6>
                        <h4 className="card-title fw-bold mb-2" id="title-company-founded">
                          <a href="https://www.linkedin.com/company/mnjsoftware/posts/?feedView=all" style={{textDecoration:"none"}}>Front-End Developer</a>
                        </h4>
                        <p className="card-text text-muted mb-0" id="desc-company-founded">
                       Work As Full-Time at <b> MNJ Software </b>  from last <b>11 Month's</b>
                        </p>
                        <div className='mt-3 '>
                           <a href="https://www.mnjsoftware.com/" className='mx-2 ' style={{textDecoration:"none"}}>
                       Company Page
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="mx-1 bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
</svg>
                           </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-marker" id="marker-2020"></div>
                </div>

                {/* 2021 - First 1000 Users */}
                <div className="timeline-item timeline-item-right" id="milestone-2021">
                  <div className="timeline-content">
                    <div className="card shadow-sm border-0" id="card-first-users">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center mb-2">
                          <span className="badge bg-success fs-6 me-3" id="year-2021">2024</span>
                        </div>
                          <h6> <b>Full-Time</b> (Intern)</h6>
                        <h4 className="card-title fw-bold mb-2" id="title-company-founded">
                          <a href="https://www.linkedin.com/company/quadiro-technologies-llp/" style={{textDecoration:"none"}}>Front-End Developer</a>
                        </h4>
                        <p className="card-text text-muted mb-0" id="desc-company-founded">
                       Work As Full-Time at <b> MNJ Software </b>  from last <b>11 Month's</b>
                        </p>
                         <div className='mt-3 '>
                           <a href="https://www.linkedin.com/company/quadiro-technologies-llp/" className='mx-2 ' style={{textDecoration:"none"}}>
                       Company Page
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="mx-1 bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
</svg>
                           </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-marker" id="marker-2021"></div>
                </div>

                {/* 2022 - Series A Funding */}
                <div className="timeline-item timeline-item-left" id="milestone-2022">
                  <div className="timeline-content">
                    <div className="card shadow-sm border-0" id="card-series-funding">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center mb-2">
                          <span className="badge bg-warning fs-6 me-3" id="year-2022">2022</span>
                        </div>
                        <h4 className="card-title fw-bold mb-2" id="title-series-funding">Series A Funding</h4>
                        <p className="card-text text-muted mb-0" id="desc-series-funding">
                          Secured $15M in funding to accelerate product development
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-marker" id="marker-2022"></div>
                </div>

                {/* 2023 - Global Expansion */}
                <div className="timeline-item timeline-item-right" id="milestone-2023">
                  <div className="timeline-content">
                    <div className="card shadow-sm border-0" id="card-global-expansion">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center mb-2">
                          <span className="badge bg-info fs-6 me-3" id="year-2023">2023</span>
                        </div>
                        <h4 className="card-title fw-bold mb-2" id="title-global-expansion">Global Expansion</h4>
                        <p className="card-text text-muted mb-0" id="desc-global-expansion">
                          Expanded to 50+ countries with localized support
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-marker" id="marker-2023"></div>
                </div>

                {/* 2024 - AI Integration */}
                <div className="timeline-item timeline-item-left" id="milestone-2024">
                  <div className="timeline-content">
                    <div className="card shadow-sm border-0" id="card-ai-integration">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center mb-2">
                          <span className="badge bg-secondary fs-6 me-3" id="year-2024">2024</span>
                        </div>
                        <h4 className="card-title fw-bold mb-2" id="title-ai-integration">AI Integration</h4>
                        <p className="card-text text-muted mb-0" id="desc-ai-integration">
                          Launched AI-powered features to enhance user productivity
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-marker" id="marker-2024"></div>
                </div>

                {/* 2025 - Market Leader */}
                <div className="timeline-item timeline-item-right" id="milestone-2025">
                  <div className="timeline-content">
                    <div className="card shadow-sm border-0" id="card-market-leader">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center mb-2">
                          <span className="badge bg-dark fs-6 me-3" id="year-2025">2025</span>
                        </div>
                        <h4 className="card-title fw-bold mb-2" id="title-market-leader">Market Leader</h4>
                        <p className="card-text text-muted mb-0" id="desc-market-leader">
                          Became the leading platform in our category with 500K+ users
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-marker" id="marker-2025"></div>
                </div>

                {/* Timeline Line */}
                <div className="timeline-line" id="journey-timeline-line"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
