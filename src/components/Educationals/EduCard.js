import React from "react";
import { BsGithub } from "react-icons/bs";
import { PiCursorClickBold } from "react-icons/pi";
import { BsPersonBadge } from "react-icons/bs";



const EduCard = ({
  videoUrl,
  title,
  description,
  githubUrl,
  personalUrl,
  isResource = false,
  imageUrl,
  visitUrl
}) => {
  const renderMedia = () => {
    if (isResource && imageUrl) {
      return (
        <div className="thumbnail-wrapper">
          <a href={visitUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={imageUrl}
              alt={title}
              className="thumbnail rounded"
            />
          </a>
        </div>
      );
    }

    return (
      <div className="ratio ratio-16x9">
        <iframe
          src={videoUrl}
          title={title}
          allowFullScreen
          className="rounded"
        ></iframe>
      </div>
    );
  };

  const renderButtons = () => {
    if (isResource) {
      return (
        <a
          href={visitUrl}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PiCursorClickBold /> &nbsp; Visit
        </a>
      );
    }

    return (
      <>
        {githubUrl && (
          <a href={githubUrl} className="btn btn-primary">
            <BsGithub /> &nbsp; GitHub
          </a>
        )}
        {personalUrl && (
          <a href={personalUrl} className="btn btn-primary">
            <BsPersonBadge /> &nbsp; Speaker
          </a>
        )}
      </>
    );
  };

  return (
    <div className="project-card-view">
      {renderMedia()}
      <h5>{title}</h5>
      <p>{description}</p>
      {renderButtons()}
    </div>
  );
};

export default EduCard;