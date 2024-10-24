import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Particle from "../Particle";

const ConsoleBox = ({ children }) => (
  <div style={{
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "8px",
    padding: "20px",
    marginBottom: "25px",
    color: "white",
    fontFamily: "monospace"
  }}>
    {children}
  </div>
);

const ProjectTeam = ({ names }) => (
  <div style={{ marginTop: "15px" }}>
    <span style={{ color: "#98c379" }}>Project Lead: </span>
    <ul style={{
      listStyle: "none",
      paddingLeft: "20px",
      marginBottom: "0"
    }}>
      {names.map((name, index) => (
        <li key={index}>• {name}</li>
      ))}
    </ul>
  </div>
);

const YearSelect = ({ years, currentYear, onYearChange }) => {
  return (
    <Form.Group className="mb-4">
      <Form.Select
        value={currentYear}
        onChange={(e) => onYearChange(e.target.value)}
        style={{
          width: "200px",
          backgroundColor: "#623686",
          color: "white",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          cursor: "pointer"
        }}
      >
        {years.map((year) => (
          <option key={year} value={year.toString()}>
            BrainHack {year}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

const ComingSoon = () => (
  <ConsoleBox>
    <div style={{
      fontSize: "1.2em",
      textAlign: "center",
      padding: "40px 20px"
    }}>
      <h3 style={{ color: "#98c379" }}>Coming Soon!</h3>
      <p style={{ marginTop: "20px" }}>
        Project submissions for BrainHack 2025 will open later this year.
        Stay tuned for exciting new projects!
      </p>
    </div>
  </ConsoleBox>
);

function Projects() {
  const [currentYear, setCurrentYear] = useState("2024");

  const projectData = {
    "2025": [],
    "2024": [
      {
        title: "PhysioQA",
        description: `Functional magnetic resonance imaging (fMRI) measures blood-oxygen-level-dependent (BOLD) changes in the brain as a proxy for neural activity.

Two major influences on fMRI data are respiration and cardiac processes which affect blood-oxygen levels in the brain. While these measures are collected concurrently with fMRI, quality checking this data is challenging:

- Time-consuming manual labor
- Prone to human error
- Requires expertise to distinguish real data from artifacts

Our solution: Create a deep-learning tool to automate quality assessment that:
- Performs automated quality checks
- Identifies potential issues
- Provides guidance for resolving problems`,
        leads: ["Dr. Jane Smith"],
        repoUrl: "https://github.com/example/physioqa"
      },
      {
        title: "Resting State Networks Across Age",
        description: `Resting state networks have enhanced our understanding of cognitive functions including:
- Emotion processing
- Working memory
- Daydreaming

While these networks are potential biomarkers for mental disorders, it's crucial to understand how they change with age. Current research shows age influences network connectivity, but specific regional changes need further investigation.

Project Goal: Compare methods of resting state network analysis and model age-related changes in network connectivity.`,
        leads: ["Dr. John Doe"],
        repoUrl: "https://github.com/example/rsn-age"
      },
      {
        title: "fMRI-EEG Preprocessing",
        description: `This project focuses on developing a robust quality control pipeline for multiple neuroimaging datasets.

Key Aspects:
- Suitable for both beginners and experienced researchers
- Hands-on experience with raw fMRI/EEG data
- Development of visualization tools for different preprocessing stages
- Integration with major toolboxes (AFNI, FSL, ANTs, chronux)

The pipeline will ensure preprocessing steps are working as expected and verify data quality for future analyses.`,
        leads: ["Dr. Emily Chen"],
        repoUrl: "https://github.com/example/fmri-eeg-preproc"
      },
      {
        title: "BIDS derivatives",
        description: `Physiopy is developing solutions for handling neuroimaging physiological data through various tools:

- phys2bids: Standardizes raw physiological data per BIDS
- peakdet: Processes and analyzes data
- phys2denoise: Produces physiological regressors
- physioQC: Handles quality control

Project Goal: Initiate discussion and develop a BIDS proposal for physiological derivatives, as current specifications don't cover physiological data requirements.`,
        leads: ["Dr. Sarah Johnson"],
        repoUrl: "https://github.com/example/bids-deriv"
      },
      {
        title: "Neural Manifolds",
        description: `This project explores brain adaptability through neural ensemble activity, examining the balance between stability and flexibility in learning and memory.

Key Research Questions:
1. Can we decode behavioral states from ensemble dynamics?
2. What is the core representational geometry of the ensembles?
3. How does ensemble activity change with time and experience?

Data: Simultaneously-recorded neurons from non-human primates during:
- Complex sequence memory task learning
- Post-learning sleep states`,
        leads: ["Dr. Michael Wilson"],
        repoUrl: "https://github.com/example/neural-manifolds"
      }
    ]
  };

  const years = Object.keys(projectData).sort((a, b) => b - a);

  const handleYearChange = (year) => {
    setCurrentYear(year);
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Project Pitches <strong className="purple">BrainHack</strong>
        </h1>

        <YearSelect
          years={years}
          currentYear={currentYear}
          onYearChange={handleYearChange}
        />

        {currentYear === "2025" ? (
          <ComingSoon />
        ) : (
          projectData[currentYear]?.map((project, index) => (
            <section
              key={index}
              id={project.title.toLowerCase().replace(/\s+/g, '-')}
            >
              <h3 style={{
                color: "white",
                marginBottom: "20px",
                fontSize: "1.8em"
              }}>
                {project.title}
              </h3>
              <ConsoleBox>
                <div style={{
                  whiteSpace: "pre-wrap",
                  lineHeight: "1.6",
                  fontSize: "1.1em",
                  marginBottom: "15px"
                }}>
                  {project.description}
                </div>

                {project.repoUrl && (
                  <div>
                    <span style={{ color: "#61afef" }}>URL: </span>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#e5c07b" }}
                    >
                      {project.repoUrl}
                    </a>
                  </div>
                )}

                <ProjectTeam names={project.leads} />
              </ConsoleBox>
            </section>
          ))
        )}
      </Container>
    </Container>
  );
}

export default Projects;