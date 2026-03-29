import { useState } from "react";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  onViewDetails?: () => void;
  projectLink?: string;
  disableHover?: boolean;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");

  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  const handleMouseLeave = () => {
    setIsVideo(false);
  };

  return (
    <div className="work-image">
      <div
        className="work-image-in"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => props.onViewDetails?.()}
      >
        <img src={props.image} alt={props.alt} />
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}

        {/* Hover Overlay with Buttons — visibility handled by CSS :hover */}
        {!props.disableHover && (
          <div className="work-image-overlay">
            <button
              className="overlay-btn overlay-btn-details"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                if (props.onViewDetails) {
                  props.onViewDetails();
                }
              }}
              data-cursor="disable"
            >
              View Details
            </button>
            {props.projectLink && (
              <a
                href={props.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="overlay-btn overlay-btn-project"
                onClick={(e) => e.stopPropagation()}
                data-cursor="disable"
              >
                See Project
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkImage;
