import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                                    <p className="project-pitch-text">
                                    Got a brilliant neuroscience idea brewing? Share it on our project board, then at BrainHack take the floor for a quick pitch that'll make your fellow brain enthusiasts want to join your crew. No need for a TED-worthy presentation; just bring your enthusiasm and watch as other curious minds gravitate toward your idea. Whether you're planning to revolutionize fMRI analysis or create the next big open-source neuroimaging tool, your future collaborators are in the room – they just don't know it yet!
                                    </p>
                                </Col>
                                <Col lg={4} className="d-flex justify-content-center">
                                    <div className="project-pitch-button-container">
                                        <Link
                                            to="/projects" // Replace with your actual route
                                            className="btn project-pitch-submit-button"
                                        >
                                            Pitch a Project
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ProjectPitch;