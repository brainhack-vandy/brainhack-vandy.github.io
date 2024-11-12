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
                                    Share your project ideas online and pitch them to a global audience to build your team. 
                                    Be part of shaping the future of neuroscience research!
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