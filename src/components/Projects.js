import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Particle from './Particle';
import ProjectCard from './ProjectCard';
import ProjectPitchInstr from './ProjectPitchInstr';

import projectsData from '../data/data_utils';

const YearSelect = ({ years, currentYear, onYearChange }) => (
  <Form.Group className="year-select-container">
    <Form.Select
      value={currentYear}
      onChange={(e) => onYearChange(e.target.value)}
      aria-label="Select BrainHack Year"
      className="year-select"
    >
      {years.map((year) => (
        <option key={year} value={year.toString()}>
          {year}
        </option>
      ))}
    </Form.Select>
  </Form.Group>
);

const ComingSoon = () => (
  <div className="coming-soon">
    <h3 className="coming-soon-title">Coming Soon!</h3>
    <p className="coming-soon-text">
      Projects for BrainHack Vanderbilt will appear here soon.
      Stay tuned for exciting new projects!
    </p>
  </div>
);

function Projects() {
  const [currentYear, setCurrentYear] = useState("2025");

  console.log(`projectsData: ${projectsData}`);
  const years = Object.keys(projectsData).sort((a, b) => b - a);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading text-center">
          BrainHack <strong className="purple">Projects</strong>
        </h1>

        <ProjectPitchInstr />

        <div className="d-flex justify-content-center">
          <YearSelect
            years={years}
            currentYear={currentYear}
            onYearChange={setCurrentYear}
          />
        </div>

        {(projectsData[currentYear].length === 0) ? (
          <ComingSoon />
        ) : (
          <Row className="project-card-row">
            {projectsData[currentYear].map((project, index) => (
              <Col md={4} className="project-card-col" key={index}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imgPath={project.imgPath}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </Container>
  );
}

export default Projects;