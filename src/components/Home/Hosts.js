import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './home.css'

function Hosts() {
    return (
        <Container fluid className="hosts-section" id="hosts">
            <Container>
                <div className="d-flex justify-content-center">
                    <Row className="align-items-center host-row">
                        <Col className="text-end">
                            <span className="host-text">Brought to you by</span>
                        </Col>
                        <Col xs="auto">
                            <a href="https://www.cchanglab.net/" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="/assets/neurdy_logo_color.png"
                                    alt="NEURDY Lab Logo"
                                    className="host-logo"
                                />
                            </a>
                        </Col>
                        <Col className="text-end">
                            <span className="host-text">co-hosted with</span>
                        </Col>
                        <Col xs="auto">
                            <a href="https://xy.vandyhacks.org/" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="/assets/vandyhacks_logo.png"
                                    alt="VandyHacks Logo"
                                    className="host-logo"
                                />
                            </a>

                        </Col>
                    </Row>
                </div>
            </Container>
        </Container>
    );
}

export default Hosts;