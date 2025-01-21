import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EduCard from "./EduCard";
import Particle from "../Particle";
import BrainHackGlobal from "./BrainHackGlobal";
import { videoData, resourceData, eventData, labData } from "./eduData";
import './educationals.css';

const CardSection = ({ title, subtitle, data, isResource = false }) => (
  <Container>
    <h2 className="project-heading">
      {title.split(' ').map((word, index) =>
        index === 1 ? <strong key={index} className="purple">{word} </strong> : word + ' '
      )}
    </h2>
    <p className="project-description">{subtitle}</p>
    <Row className="project-row">
      {data.map((item, index) => (
        <Col key={index} md={4} className="project-card">
          <EduCard {...item} isResource={isResource} />
        </Col>
      ))}
    </Row>
  </Container>
);

function Educationals() {
  return (
    <Container fluid className="project-section">
      <Particle />

      {/* Videos Section */}
      <CardSection
        title="BrainHack Vanderbilt"
        subtitle="Resources and past workshops"
        data={videoData}
      />

      <BrainHackGlobal />

      {/* Resources Section */}
      <CardSection
        title="Community Resources"
        subtitle="Explore these additional resources to learn more about neuroscience and open education."
        data={resourceData}
        isResource={true}
      />

      {/* Events Section */}
      <CardSection
        title="Community Events"
        subtitle="Join collaborative events spanning multiple scientific domains, from  building reproducibility practices across sciences, to advancing neuroscience through data science."
        data={eventData}
        isResource={true}
      />

      {/* Labs Section */}
      <CardSection
        title="Lab Spotlight"
        subtitle="Discover research groups dedicated to open science through accessible resources, and reproducible practices."
        data={labData}
        isResource={true}
      />

    </Container>
  );
}

export default Educationals;