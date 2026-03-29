import React, { useState, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdClose } from "react-icons/md";
import { FaBehance, FaDribbble } from "react-icons/fa6";

interface Project {
  title: string;
  category: string;
  description: string;
  tools: string;
  image: string;
  details: React.ReactNode;
  link: string;
}

type TabType = "uiux" | "smm";

const uiuxProjects: Project[] = [
  {
  title: "Pharma 360",
    category: "Pharmacy Management System",
      description:
  "A comprehensive, end-to-end pharmacy management solution designed to simplify complex pharmaceutical workflows. The system features a multi-role access architecture that allows staff to seamlessly track real-time sales, manage sensitive medical inventory, and handle high-volume billing operations within a single, unified interface.",
    tools: "Figma, Multi-Role Access Control, Inventory Tracking System, Automated Billing Flow",
      image: "/images/p1.png",
        details: (
      <div className="details-formatted">
        <strong>Comprehensive Pharmacy Management System</strong>
        <p style={{ marginTop: '12px', marginBottom: '16px', lineHeight: '1.6' }}>
          While at Hasans IT Solution, I designed Pharma 360 from the ground up to solve the chaotic inventory and sales tracking issues faced by local pharmacies. This isn't just a pretty UI—it's a robust system architecture that handles multi-role access, ensuring that admins, pharmacists, and cashiers each have a tailored, secure workflow.
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px', lineHeight: '1.6' }}>
          <li>
            <strong>Core Focus:</strong> Transforming complex pharmaceutical data into a seamless, high-speed billing and inventory experience.
          </li>
          <li>
            <strong>Features:</strong> Real-time stock alerts, automated billing cycles, and multi-role permission management.
          </li>
          <li>
            <strong>Technical Edge:</strong> Designed with a deep understanding of database relationships to ensure data integrity across thousands of SKU entries.
          </li>
        </ul>
      </div>
    ),
    link: "https://www.figma.com/design/e3JRF8b8EuLWfcUVDM63ZC/Pharma360?node-id=0-1&t=TNglZiDGajpfUBiL-1",
  },
  {
  title: "Craftify Redesign",
    category: "E-commerce & Creative Marketplace",
      description:
  "A comprehensive UX overhaul of a creative marketplace, focusing on bridging the gap between independent creators and global buyers. The redesign optimizes the product discovery phase through enhanced filtering systems and a modernized aesthetic that emphasizes high-quality visual storytelling, resulting in a more intuitive and trust-driven shopping journey.",
    tools: "Figma, User-Centered Redesign (UCD), Advanced Filtering Logic, High-Fidelity Prototyping",
      image: "/images/p2.png",
        details: (
      <div className="details-formatted">
        <strong>E-commerce & Creative Marketplace Overhaul</strong>
        <p style={{ marginTop: '12px', marginBottom: '16px', lineHeight: '1.6' }}>
          This project was about taking a functional but dated marketplace and turning it into a premium shopping destination. I focused heavily on User-Centered Design (UCD) to ensure that the search for unique, handcrafted items was as enjoyable as the items themselves.
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px', lineHeight: '1.6' }}>
          <li>
            <strong>Filtering Logic:</strong> Rebuilt the advanced search and filtering system from scratch to help users navigate thousands of unique creative listings.
          </li>
          <li>
            <strong>Visual Storytelling:</strong> Redesigned product pages to prioritize high-resolution imagery and creator stories, which are the main drivers of trust in creative marketplaces.
          </li>
          <li>
            <strong>Outcome:</strong> A modernized, responsive layout that significantly reduces cognitive load during the browsing and checkout phases.
          </li>
        </ul>
      </div>
    ),
    link: "https://www.behance.net/gallery/229174061/Craftify-Redesign",
  },

{
  title: "Ancora",
    category: "Modern Fintech App",
      description:
  "A sleek, data-driven financial management application designed to empower users with smart money-tracking tools. The platform focuses on simplifying personal finance through intuitive expense categorization, real-time budget monitoring, and automated savings insights, all wrapped in a premium, modern UI that enhances financial literacy and user control.",
    tools: "Figma, Smart Budgeting Algorithms, Real-time Expense Tracking, Data-Visualized Financial Reports",
      image: "/images/p3.png",
        details: (
      <div className="details-formatted">
        <strong>Smart Personal Finance & Money Management</strong>
        <p style={{ marginTop: '12px', marginBottom: '16px', lineHeight: '1.6' }}>
          Ancora was designed for the user who wants total control over their financial future without the headache of spreadsheets. It's a sleek, data-heavy app that uses visualization to make "money talk" easier to understand.
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px', lineHeight: '1.6' }}>
          <li>
            <strong>Data Visualization:</strong> Created custom charts and progress indicators to help users visualize their spending habits and savings goals at a glance.
          </li>
          <li>
            <strong>UX Innovation:</strong> Simplified the expense entry process to a single-tap experience, encouraging better financial tracking habits.
          </li>
          <li>
            <strong>Aesthetic:</strong> A premium "Dark Mode" focused UI that uses subtle gradients and sharp shadows to create a high-end, modern feel.
          </li>
        </ul>
      </div>
    ),
    link: "https://www.behance.net/gallery/237450435/Ancora-Modern-Fintech-App-for-Smart-Money-Management",
  },
{
  title: "Networx",
    category: "Professional Social Network",
      description:
  "A mobile-focused social networking platform specifically tailored for professionals to connect, share insights, and collaborate. The app prioritizes usability and modern interaction flows, featuring streamlined profile management, community group hubs, and intuitive content creation tools to enhance user engagement within a professional ecosystem.",
    tools: "Figma, Professional Networking, Community Hubs, Content Creation Tools",
      image: "/images/p4.png",
        details: (
      <div className="details-formatted">
        <strong>Professional Networking & Community Mobile App</strong>
        <p style={{ marginTop: '12px', marginBottom: '16px', lineHeight: '1.6' }}>
          Currently in development, Networx is a modern take on professional social media, focusing on usability and high-quality engagement. I've designed the entire interaction flow to feel more personal and less "corporate," using clean layouts that prioritize community groups and professional discovery.
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px', lineHeight: '1.6' }}>
          <li>
            <strong>UX Strategy:</strong> Focused on reducing the friction of finding and joining professional communities through a modular "Group Hub" design.
          </li>
          <li>
            <strong>Interface:</strong> A sleek, minimal aesthetic with a focus on typography and clear calls to action (CTAs) for content creation and networking.
          </li>
          <li>
            <strong>Status:</strong> Currently refining the mobile interaction flows with a focus on user retention and engagement metrics.
          </li>
        </ul>
      </div>
    ),
    link: "https://www.figma.com/design/sDBNwczW4zdpMpwza5n2hB/Networx?node-id=0-1&t=71MEk8NgXE8ugOVi-1",
  },
{
  title: "PAYROT",
    category: "Global Payment Solutions",
      description:
  "A multi-platform Fintech ecosystem designed to simplify cross-border transactions for freelancers, businesses, and marketplaces. The project includes a high-converting landing page and a user-friendly mobile app that facilitates real-time currency exchange, secure global withdrawals, and seamless integration with international platforms like Upwork and Fiverr.",
    tools: "Figma, Cross-Border Payment Architecture, Foreign Exchange Rate Integration, Automated Withdrawal Workflows",
      image: "/images/p5.png",
        details: (
      <div className="details-formatted">
        <strong>Global Fintech & Cross-Border Payment Ecosystem</strong>
        <p style={{ marginTop: '12px', marginBottom: '16px', lineHeight: '1.6' }}>
          PAYROT is a complete fintech solution designed for the modern global workforce—freelancers, remote agencies, and international marketplaces. The project involved designing both a high-conversion landing page and a feature-rich mobile app that handles the complexities of international finance with a friendly, accessible interface.
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px', lineHeight: '1.6' }}>
          <li>
            <strong>The Challenge:</strong> Making "boring" financial tasks like currency exchange and bank withdrawals feel fast and secure.
          </li>
          <li>
            <strong>Design Highlight:</strong> Used a vibrant, mascot-driven visual language to build brand trust and differentiate it from traditional, cold banking apps.
          </li>
          <li>
            <strong>Key Features:</strong> Real-time foreign exchange rate tracking, smart withdrawal tools, and direct integration with global freelance platforms like Upwork and Fiverr.
          </li>
        </ul>
      </div>
    ),
    link: "#",
  },
{
    title: "PropDNA AI & CRM",
    category: "Real Estate Dashboard",
    description:
      "A high-performance AI platform designed to transform raw property data into investor-ready pitch decks and video presentations. The dashboard streamlines property management by automating the creation of professional analytics, allowing users to close deals faster with AI-driven insights.",
    tools: "Figma, AI Video Integration, Dynamic Data Visualization, Investor-Ready Pitch Generation",
    image: "/images/p6.png",
    details: (
      <div className="details-formatted">
        <strong>Real Estate Dashboard & AI Video Generator</strong>
        <p style={{ marginTop: '12px', marginBottom: '16px', lineHeight: '1.6' }}>
          PropDNA is a high-performance platform designed to bridge the gap between messy property data and professional investor relations. As the lead designer at Solvetech Solutions, I built an end-to-end responsive dashboard that automates the creation of investor-ready pitch decks and AI-powered video presentations. The goal was to eliminate "camera stress" and manual editing for real estate syndicators, allowing them to transform property files into polished marketing assets in just hours rather than weeks.
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px', lineHeight: '1.6' }}>
          <li>
            <strong>Problem:</strong> Real estate professionals often struggle to present complex data in a way that captures investor interest quickly.
          </li>
          <li>
            <strong>Solution:</strong> An AI-driven UI that handles file uploads, generates automated scripts, and produces lifelike AI video avatars to deliver the pitch.
          </li>
          <li>
            <strong>Key Impact:</strong> Streamlined property management workflows and significantly improved the efficiency of agent-to-investor communication.
          </li>
        </ul>
      </div>
    ),
link: "https://www.figma.com/design/nKQSfVps1zQnTsf393HCrb/PropDNA?node-id=0-1&p=f&t=aipUNA4aUx2eWMMk-0",
  },
];

const smmProjects: Project[] = [
  {
    title: "Brand Starter Kit",
    category: "Social Media Branding",
    description:
      "A complete social media branding package including cohesive visual identity, content templates, and a posting strategy designed to build a strong and recognizable brand presence across Instagram, Facebook, and LinkedIn.",
    tools: "Canva, Content Calendar, Brand Guidelines, Hashtag Strategy",
    image: "/images/Solidx.png",
    details:
      "The Brand Starter Kit project involved creating a unified visual identity system for social media, including logo variations, color palettes, typography guidelines, and ready-to-use post templates. The strategy component covered content pillars, optimal posting schedules, and engagement tactics tailored to each platform.",
    link: "#",
  },
  {
    title: "Growth Campaign",
    category: "Performance Marketing",
    description:
      "A data-driven social media growth campaign focused on increasing follower count, engagement rate, and lead generation through a mix of organic content strategy and paid ad management across multiple platforms.",
    tools: "Meta Ads Manager, Analytics Dashboard, A/B Testing, Audience Segmentation",
    image: "/images/radix.png",
    details:
      "This growth campaign leveraged audience segmentation and A/B testing to optimize ad creatives and targeting. The organic strategy included trend-jacking, community management, and influencer collaborations, resulting in measurable increases in reach, engagement, and conversion rates.",
    link: "#",
  },
  {
    title: "Content Studio",
    category: "Content Creation & Strategy",
    description:
      "An end-to-end content creation pipeline covering ideation, production, and scheduling — delivering scroll-stopping visuals, reels, and carousel posts that align with brand voice and audience preferences.",
    tools: "Adobe Creative Suite, CapCut, Later, Content Pillars Framework",
    image: "/images/sapphire.png",
    details:
      "Content Studio is a holistic content creation workflow that transforms brand messaging into engaging social media content. The project included developing a content pillar framework, producing high-quality graphics and short-form videos, and implementing a consistent posting schedule with performance tracking and iterative optimization.",
    link: "#",
  },
];

const Work = () => {
  const [activeTab, setActiveTab] = useState<TabType>("uiux");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const isHoveredRef = useRef(false);
  const isInViewRef = useRef(false);
  const workRef = useRef<HTMLDivElement>(null);

  const activeProjects = activeTab === "uiux" ? uiuxProjects : smmProjects;

  const handleTabSwitch = (tab: TabType) => {
    if (tab === activeTab || isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveTab(tab);
      setCurrentIndex(0);
      setIsFading(false);
    }, 300);
  };

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 1000);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? activeProjects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, activeProjects.length, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === activeProjects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, activeProjects.length, goToSlide]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isInViewRef.current = entry.isIntersecting;
        });
      },
      { threshold: 0 }
    );

    if (workRef.current) {
      observer.observe(workRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      // Check refs to see if it's safe to scroll
      if (isInViewRef.current && !isHoveredRef.current) {
        goToNext();
      }
    }, 8000);

    return () => clearInterval(timer);
  }, [goToNext]);

  const openDetails = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  return (
    <div
      className="work-section"
      id="work"
      ref={workRef}
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { isHoveredRef.current = false; }}
    >
      <div className="work-container section-container">
        <div className="work-header">
          <h2>
            My <span>Work</span>
          </h2>
          <div className="work-tabs">
            <button
              className={`work-tab ${activeTab === "uiux" ? "work-tab-active" : ""}`}
              onClick={() => handleTabSwitch("uiux")}
              data-cursor="disable"
            >
              UIUX Design
            </button>
            <span className="work-tab-divider" />
            <button
              className={`work-tab ${activeTab === "smm" ? "work-tab-active" : ""}`}
              onClick={() => handleTabSwitch("smm")}
              data-cursor="disable"
            >
              Social media management
            </button>
          </div>
        </div>

        <div className="carousel-wrapper">
          {/* Slides */}
          <div className={`carousel-track-container ${isFading ? "carousel-fading" : ""}`}>
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {activeProjects.map((project, index) => (
                <div className="carousel-slide" key={`${activeTab}-${index}`}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-description">
                          {project.description}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        onViewDetails={() => openDetails(project)}
                        projectLink={project.link}
                        disableHover={activeTab === "smm"}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation: Arrows + Dots together */}
            <div className="carousel-nav">
              <button
                className="carousel-arrow"
                onClick={goToPrev}
                aria-label="Previous project"
                data-cursor="disable"
              >
                <MdArrowBack />
              </button>
              <div className="carousel-dots">
                {activeProjects.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                      }`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to project ${index + 1}`}
                    data-cursor="disable"
                  />
                ))}
              </div>
              <button
                className="carousel-arrow"
                onClick={goToNext}
                aria-label="Next project"
                data-cursor="disable"
              >
                <MdArrowForward />
              </button>
            </div>
          </div>
        </div>

        {/* Portfolio CTA */}
        <div className="portfolio-cta">
          <h3 className="portfolio-cta-title">
            Not convinced yet?<br />
            <span className="portfolio-cta-highlight">Wanna see more?</span>
          </h3>
          <p className="portfolio-cta-subtitle">
            Yeah... there's more. Check below....
          </p>
          <div className="portfolio-cta-buttons">
            <a
              href="https://www.behance.net/zonayed"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-cta-btn portfolio-cta-btn--behance"
              data-cursor="disable"
            >
              <FaBehance />
              Behance Designs
            </a>
            <a
              href="https://dribbble.com/Zonayed_h"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-cta-btn portfolio-cta-btn--dribbble"
              data-cursor="disable"
            >
              <FaDribbble />
              Dribbble Shots
            </a>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject &&
        createPortal(
          <div className="project-modal-overlay" onClick={closeDetails}>
            <div
              className="project-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="project-modal-close"
                onClick={closeDetails}
                data-cursor="disable"
              >
                <MdClose />
              </button>
              <div className="project-modal-content">
                <div className="project-modal-image">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                  />
                </div>
                <div className="project-modal-info">
                  <h3>{selectedProject.title}</h3>
                  <span className="project-modal-category">
                    {selectedProject.category}
                  </span>
                  <div className="project-modal-details">
                    {selectedProject.details}
                  </div>
                  <div className="project-modal-tools">
                    <span className="tools-label">Tools & Features</span>
                    <p>{selectedProject.tools}</p>
                  </div>
                  {selectedProject.link && selectedProject.link !== "#" && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-modal-link"
                    >
                      Visit Project →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Work;
