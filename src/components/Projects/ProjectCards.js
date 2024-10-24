// ProjectCards.js
import React from "react";
import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ title, description, ghLink }) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title style={{
          fontSize: "1.3em",
          fontWeight: "600",
          marginBottom: "15px"
        }}>
          {title}
        </Card.Title>
        <Card.Text style={{
          textAlign: "justify",
          fontSize: "1.1em",
          lineHeight: "1.6",
          marginBottom: "20px",
          whiteSpace: "pre-wrap"
        }}>
          {description}
        </Card.Text>
        {ghLink && (
          <a
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <BsGithub /> &nbsp;Project Repository
          </a>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;