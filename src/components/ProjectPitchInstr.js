import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ProjectPitchInstr() {
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
                            <div className="project-pitch-button-container mt-4">
                                <a
                                    className="btn project-pitch-submit-button"
                                    href="https://docs.google.com/forms/d/e/1FAIpQLScLJXlY4obEaS8U5z4kiayC_9YKHTgxiPAfatZzvCMrW4Q_kQ/viewform"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Submit a Project Pitch
                                </a>
                            </div>
                            <p className="project-pitch-text mt-4">
                                Scroll down to see some examples from last year's BrainHack Vanderbilt.
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

export default ProjectPitchInstr;