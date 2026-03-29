import React from "react";
import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const isActive = container.classList.contains("what-content-active");
    const parent = container.parentElement;

    if (!parent) return;

    const allItems = Array.from(parent.querySelectorAll(".what-content"));

    if (isActive) {
      // If already active, close everything
      allItems.forEach((el) => {
        el.classList.remove("what-content-active", "what-sibling");
      });
    } else {
      // Open this one, shrink others
      allItems.forEach((el) => {
        if (el === container) {
          el.classList.add("what-content-active");
          el.classList.remove("what-sibling");
        } else {
          el.classList.remove("what-content-active");
          el.classList.add("what-sibling");
        }
      });
    }
  };

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            onClick={handleClick}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>UI/UX DESIGN</h3>
              <h4>Crafting User-Centric Experiences</h4>
              <p>
                Designing intuitive, engaging interfaces from wireframes to high-fidelity prototypes. Focusing on responsive web and mobile UI.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Figma</div>
                <div className="what-tags">Affinity</div>
                <div className="what-tags">Sketch</div>
                <div className="what-tags">Wireframing</div>
                <div className="what-tags">Prototyping</div>
                <div className="what-tags">User Research</div>
                <div className="what-tags">UX Flows</div>
                <div className="what-tags">Design Systems</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            onClick={handleClick}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>MEDIA STRATEGIST</h3>
              <h4>Brand Growth & Content Strategy</h4>
              <p>
                Elevating digital presence through strategic storytelling. I build organic brand authority and manage high-impact content calendars that convert followers into customers.
              </p>
              <h5>Tech Stack</h5>
              <div className="what-content-flex">
                <div className="what-tags">Adobe Creative Suite</div>
                <div className="what-tags">Notion</div>
                <div className="what-tags">Buffer</div>
                <div className="what-tags">Canva Pro</div>
                <div className="what-tags">Meta Business Suite</div>
                <div className="what-tags">LinkedIn Analytics</div>
                <div className="what-tags">Brand Positioning</div>
                <div className="what-tags">Audience Insights</div>
                <div className="what-tags">Lead Generation</div>
                <div className="what-tags">Trend Analysis</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
