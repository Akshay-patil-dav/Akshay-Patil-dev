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
                          <span className="badge bg-primary fs-6 me-3" id="year-2020">2020</span>
                        </div>
                        <h4 className="card-title fw-bold mb-2" id="title-company-founded">Company Founded</h4>
                        <p className="card-text text-muted mb-0" id="desc-company-founded">
                          Started with a vision to revolutionize digital collaboration
                        </p>
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
                          <span className="badge bg-success fs-6 me-3" id="year-2021">2021</span>
                        </div>
                        <h4 className="card-title fw-bold mb-2" id="title-first-users">First 1000 Users</h4>
                        <p className="card-text text-muted mb-0" id="desc-first-users">
                          Reached our first major user milestone and launched premium features
                        </p>
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
