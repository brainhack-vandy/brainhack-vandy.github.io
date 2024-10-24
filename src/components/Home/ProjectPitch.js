import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ProjectPitch() {
    return (
        <div className="project-pitch-section" id="project-pitch">
            <Container fluid="lg">
                <Row className="justify-content-center">
                    <Col md={10}>
                        <h2 className="project-pitch-heading">
                            Project <span className="purple">Pitches</span>
                        </h2>

                        <div className="project-pitch-container">
                            <Row className="align-items-center">
                                <Col lg={8}>
                                    <h3 className="project-pitch-subheading">
                                        Want to Lead a Project?
                                    </h3>
                                    <p className="project-pitch-text">
                                        Submit your project ideas online, then pitch them to your fellow
                                        attendees to recruit others to your team. Help shape the future
                                        of neuroscience research!
                                    </p>
                                </Col>
                                <Col lg={4} className="d-flex justify-content-center">
                                    <div className="project-pitch-button-container">
                                        <a
                                            href="https://docs.google.com/forms/d/e/1FAIpQLScLJXlY4obEaS8U5z4kiayC_9YKHTgxiPAfatZzvCMrW4Q_kQ/viewform"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn project-pitch-submit-button"
                                        >
                                            Submit a Project Pitch
                                        </a>
                                        <a
                                            href="/projects"
                                            className="btn project-pitch-view-button"
                                        >
                                            View Current Projects
                                        </a>
                                    </div>
                                </Col>
                            </Row>

                            <div className="project-guidelines">
                                <h4 className="project-guidelines-heading">
                                    Project Guidelines:
                                </h4>
                                <ul className="project-guidelines-list">
                                    <li className="project-guidelines-item">
                                        Projects should focus on open science in neuroimaging/neuroscience
                                    </li>
                                    <li className="project-guidelines-item">
                                        All skill levels are welcome to participate
                                    </li>
                                    <li className="project-guidelines-item">
                                        Projects can be technical or non-technical
                                    </li>
                                    <li className="project-guidelines-item">
                                        Collaborative and interdisciplinary projects are encouraged
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col >
                </Row >
            </Container >
        </div >
    );
}

export default ProjectPitch;