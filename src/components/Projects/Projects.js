import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Particle from '../Particle';
import ProjectCard from './ProjectCard';
import projectsData from '../../data/data_utils';
import './projects.css';

const ProjectPitchInstr = () => {
  return (
    <div className="project-pitch-instr-section py-5" id="project-pitch-instr">
      <Container fluid="lg">
        <Row className="justify-content-center align-items-start g-4">
          <Col md={6} className="text-start">
            <div className="project-pitch-container">
              <p className="project-pitch-text mb-4">
                BrainHack is an attendee-driven event. That means you get to bring
                the questions boggling your mind and we solve it together!
              </p>
              <div className="project-guidelines">
                <p className="mb-3">
                  Your project can be anything you want, with just two general guidelines. Your project should:
                </p>
                <ul className="project-guidelines-list">
                  <li className="project-guidelines-item">be broadly neuroscience related</li>
                  <li className="project-guidelines-item">contribute to open science</li>
                </ul>
              </div>
              {/* <div className="project-pitch-button-container mt-4">
                <a
                  className="btn project-pitch-submit-button"
                  href="https://github.com/brainhack-vandy/brainhack-vandy.github.io/issues/new?assignees=&labels=project-proposal&projects=&template=project-submission-template.yml&title=Project%3A+"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Submit a Project Pitch
                </a>
              </div> */}
              <p className="project-pitch-text mt-4">
                PROJECT PITCHES FOR 2025 ARE CLOSED!
              </p>
            </div>
          </Col>

          <Col md={6} className="text-start">
            <div className="project-pitch-container">
              <h3 className="project-pitch-subheading mb-4">
                Why and How to Pitch a Project?
              </h3>
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/Cu4kU7bE-JA"
                  title="Why and How to Pitch a Project?"
                  allowFullScreen
                  className="rounded"
                  style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}
                ></iframe>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

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
        <h1 className="page-heading text-center">
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

        {(projectsData[currentYear].length === 0 && currentYear !== '2024') ? (
          <ComingSoon />
        ) : (projectsData[currentYear].length === 0 && currentYear === '2024') ? (
          <p className="coming-soon-text">
            To see the projects pitched in 2024, please visit{' '}
            <a 
              href="https://github.com/brainhack-vandy/projects/tree/main/2024"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              brainhack-vandy/projects/2024
            </a>
          </p>
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
                  issueLink={project.issueLink}
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