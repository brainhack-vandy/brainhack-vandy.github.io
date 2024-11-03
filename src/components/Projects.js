import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Particle from './Particle';
import ProjectCard from './ProjectCard';

// images must be imported as: import logo from './logo.png';

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
          BrainHack {year}
        </option>
      ))}
    </Form.Select>
  </Form.Group>
);

const ComingSoon = () => (
  <div className="coming-soon">
    <h3 className="coming-soon-title">Coming Soon!</h3>
    <p className="coming-soon-text">
      Project submissions for BrainHack 2025 will open later this year.
      Stay tuned for exciting new projects!
    </p>
  </div>
);

function Projects() {
  const [currentYear, setCurrentYear] = useState("2024");

  const projectData = {
    "2025": [],
    "2024": [
      {
        title: "PhysioQA",
        description: `A nifty deep-learning tool to automate quality assessment of physiological signals. It's like having a friendly expert on your team, making sure your research data is as good as it can be!`,
        ghLink: "https://github.com/brainhack-vandy/projects/blob/main/2024/physioQA.md",
        demoLink: "",
        imgPath: "",
      },
      {
        title: "Resting State Networks Across Age",
        description: `Resting state networks point to a characteristic of mental disorders, it is important to model how they change across age. We will compare methods to understand how resting state networks are retrieved and potentially model how they change across age.`,
        ghLink: "https://github.com/brainhack-vandy/projects/blob/main/2024/rsn-across-age.md",
        demoLink: "",
        imgPath: "",
      },
      {
        title: "fMRI-EEG Preprocessing",
        description: `Preprocessing is a critical step in neuroimaging analysis, laying the foundation for accurate and meaningful scientific discoveries. We will configure a pipeline to quality check for multiple datasets.`,
        ghLink: "https://github.com/brainhack-vandy/projects/blob/main/2024/fmri-eeg-preproc.md",
        demoLink: "",
        imgPath: "",
      },
      {
        title: "BIDS derivatives",
        description: `Derivatives structure and requirements for physiological data (i.e. cardiac, respiratory, blood pressure, etc.) are not yet covered by the BIDS specification. With this project, we hope to start a discussion around an eventual BIDS proposal on physiological derivatives.`,
        ghLink: "https://github.com/brainhack-vandy/projects/blob/main/2024/bids_derivatives.md",
        demoLink: "",
        imgPath: "",
      },
      {
        title: "Neural Manifolds",
        description: `We present a population of simultaneously-recorded neurons from the non-human primate during learning of a complex sequence memory task, and in sleep afterwards. These data are exceptionally rich for exploration, but also to address three fundamental questions.`,
        ghLink: "https://github.com/brainhack-vandy/projects/blob/main/2024/neural_manifolds.md",
        demoLink: "",
        imgPath: "",
      },
    ]
  };

  const years = Object.keys(projectData).sort((a, b) => b - a);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading text-center">
          Project Pitches <strong className="purple">BrainHack</strong>
        </h1>

        <div className="d-flex justify-content-center">
          <YearSelect
            years={years}
            currentYear={currentYear}
            onYearChange={setCurrentYear}
          />
        </div>

        {currentYear === "2025" ? (
          <ComingSoon />
        ) : (
          <Row className="project-card-row">
            {projectData[currentYear].map((project, index) => (
              <Col md={6} className="project-card-col" key={index}>
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