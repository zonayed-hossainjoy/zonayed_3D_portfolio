import "./styles/Landing.css";

const Landing = () => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              ZONAYED
              <br />
              <span>HOSSAIN</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>An expert</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1" style={{ whiteSpace: "nowrap" }}>UI/UX</div>
              <div className="landing-h2-2" style={{ whiteSpace: "nowrap" }}>Social media</div>
            </h2>
            <h2>
              <div className="landing-h2-info" style={{ whiteSpace: "nowrap" }}>Designer</div>
              <div className="landing-h2-info-1" style={{ whiteSpace: "nowrap" }}>Strategist</div>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
