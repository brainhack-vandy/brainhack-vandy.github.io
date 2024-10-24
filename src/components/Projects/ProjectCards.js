import React from "react";
import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ title, description, ghLink, leads }) {
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

        {/* Only render leads if they exist */}
        {leads && leads.length > 0 && (
          <Card.Text style={{
            fontSize: "1em",
            marginBottom: "20px"
          }}>
            <strong>Project Lead{leads.length > 1 ? 's' : ''}:</strong>
            <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
              {leads.map((lead, index) => (
                <li key={index}>• {lead}</li>
              ))}
            </ul>
          </Card.Text>
        )}

        {/* Only render GitHub link if it exists */}
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