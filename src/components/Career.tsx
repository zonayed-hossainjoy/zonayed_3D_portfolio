import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Designer</h4>
                <h5>Solvetech Solutions</h5>
              </div>
              <div className="career-year">
                <h3>2026</h3>
                <span>Sep 25 – Now</span>
              </div>
            </div>
            <p>
              Designing AI-driven dashboards for PropDNA and spearheading a total corporate website redesign. Currently developing a modern social media mobile application.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>System & UI/UX Designer</h4>
                <h5>Hasans IT Solution</h5>
              </div>
              <div className="career-year">
                <h3>2025</h3>
                <span>Feb 25 – Aug 25</span>
              </div>
            </div>
            <p>
              Designed end-to-end pharmacy (Pharma 360) and lawyer-client (UkilZone) management systems. Modernized website layouts to improve visitor engagement.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Sc. in CSE</h4>
                <h5>American International University-Bangladesh (AIUB)</h5>
              </div>
              <div className="career-year">
                <h3>2025</h3>
                <span>Jan 21 - Apr 25</span>
              </div>
            </div>
            <p>
              Graduated with a focus on software engineering and user-centric systems. Developed a strong foundation in frontend technologies and human-computer interaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
