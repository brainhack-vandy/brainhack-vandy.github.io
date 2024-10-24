import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Particle from "../Particle";

const ConsoleBox = ({ children }) => (
  <div className="console-box">
    {children}
  </div>
);

const ProjectTeam = ({ names }) => {
  if (!names || names.length === 0) return null;

  return (
    <div className="project-team">
      <div className="project-team-label">Project Lead:</div>
      <ul className="project-team-list">
        {names.map((name, index) => (
          <li key={index} className="project-team-item">{name}</li>
        ))}
      </ul>
    </div>
  );
};

const YearSelect = ({ years, currentYear, onYearChange }) => {
  return (
    <Form.Group className="year-select-container mb-4">
      <Form.Select
        value={currentYear}
        onChange={(e) => onYearChange(e.target.value)}
        aria-label="Select BrainHack Year"
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
    <div className="coming-soon">
      <h3 className="coming-soon-title">Coming Soon!</h3>
      <p className="coming-soon-text">
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
        description: `Functional magnetic resonance imaging (fMRI) is a powerful and widely used technique in human brain research, measuring blood-oxygen-level-dependent (BOLD) changes in the brain, as a PROXY for neural activity.

Due to blood-oxygen dependency, two major influences on fMRI data are respiration and cardiac related processes which affect blood-oxygen levels in the brain. So people collect the measures of respiration and heart rate concurrently with fMRI to study and also to remove these effects.

Fantastic! But here is the catch, like any other data we need to quality-check! Let's face it, checking the quality of this data can be a real headache. It usually involves a time consuming tedious manual labor and is prone to human error - you need to know what is real data, what is an artifact.

That's why we want to create a nifty deep-learning tool to automate quality assessment! This tool doesn't just check the quality of your data; it also points out any issues and gives you tips on how to fix them. It's like having a friendly expert on your team, making sure your research data is as good as it can be!`,
      },
      {
        title: "Resting State Networks Across Age",
        description: `Since their discovery, resting state networks have elucidated our understanding of cognitive function such as emotion processing, working memory, and daydreaming.

Additionally, a collective of scientists believe resting state networks may be a possible biomarker of mental disorders. However, before we can confirm resting state networks point to a characteristic of mental disorders it is important to model how they change across age.

Many studies have identified that age does influence the connectivity of resting state networks however which brain regions within resting state networks change specifically needs to be further understood.

The goal of this project is to compare methods of how resting state network information are retrieved and potentially model how they change across age.`
      },
      {
        title: "fMRI-EEG Preprocessing",
        description: `Preprocessing is a critical step in neuroimaging analysis, laying the foundation for accurate and meaningful scientific discoveries.

We need help configuring a pipeline to quality check for multiple datasets. This project will allow attendees with or without experience handling fMRI/EEG data to get a chance to work with what we call the "raw data".

Working on a QC pipeline includes devising visuals of what the data looks like at various stages to make sure that the preprocessing is working as you expected and the data collected is good quality for future analyses.

Toolboxes used include AFNI, FSL, ANTs, chronux, etc.`
      },
      {
        title: "BIDS derivatives",
        description: `Physiopy is a community dedicated to developing solutions for handling physiological data acquired in neuroimaging setups.

Currently, physiopy supports and maintains phys2bids, a library that standardizes raw physiological data in accordance with the Brain Imaging Data Structure (BIDS). The community is also developing and managing other libraries like peakdet (processing and analysing), phys2denoise (producing physiological regressors for neuroimaging denoising), and physioQC (quality control).

All those libraries produce a bunch of different derivatives. However, the derivatives structure and requirements for physiological data (i.e. cardiac, respiratory, blood pressure, etc.) are not yet covered by the BIDS specification.

With this project, we are hoping to start a discussion around an eventual BIDS proposal on physiological derivatives.`
      },
      {
        title: "Neural Manifolds",
        description: `What are the meaningful changes in the brain with experience, that allows for adaptive behavior?

When we look at the coordinated activity across spiking networks of neuronal ensembles, we see a delicate balance of stability and flexibility, as needed for a system that can both learn and remember.

In this project, we present a population of simultaneously-recorded neurons from the non-human primate during learning of a complex sequence memory task, and in sleep afterwards. These data are exceptionally rich for exploration, but also to address three fundamental questions:

(1) can we decode behavioral states from the ensemble dynamics?
(2) what is the core representational geometry of the ensembles (what factors are best preserved/differentiated in low-dimensional spaces, and how does the geometry constrain the computations and dynamics of the network?
(3) does the ensemble activity drift with time and experience, and if so, how?`
      },
    ]
  };

  // Get all years from projectData and sort them in descending order
  const years = Object.keys(projectData).sort((a, b) => b - a);

  const handleYearChange = (year) => {
    setCurrentYear(year);
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="project-container">
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
              <h3 className="project-title">{project.title}</h3>
              <ConsoleBox>
                <div className="project-description">
                  {project.description}
                </div>

                {project.repoUrl && (
                  <div className="project-url">
                    <span className="project-url-label">URL:</span>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-url-link"
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