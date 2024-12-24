import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './home.css'

function Location() {
    return (
        <Container fluid="lg" id="location" className="location-container">
            <Row>
                <Col lg="4" className="d-flex flex-column justify-content-start align-items-start">
                    <h2 className="location-heading">
                        Location
                    </h2>
                    <address className="location-address">
                        <a
                            href="https://www.google.com/maps/place/2205+West+End+Ave,+Nashville,+TN+37240"
                            title="Vanderbilt University"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="location-link"
                        >
                            Vanderbilt University
                        </a>
                        <br />
                        2205 West End Ave
                        <br />
                        Nashville, TN 37240
                    </address>
                    <h2 className="location-subheading">
                        Contact Us
                    </h2>
                    <a
                        href="mailto:brainhack.vanderbilt@gmail.com"
                        title="brainhack.vanderbilt@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="location-link"
                    >
                        brainhack.vanderbilt@gmail.com
                    </a>
                </Col>
                <Col lg="8" className="d-flex flex-column justify-content-start align-items-start">
                    <iframe
                        className="location-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.7647765102442!2d-86.8033593!3d36.1479402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886466bdc9353ebd%3A0xed8cb21c50dcfb63!2s2205%20West%20End%20Ave%2C%20Nashville%2C%20TN%2037240!5e0!3m2!1sen!2sus!4v1701899453515!5m2!1sen!2sus"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Vanderbilt University Location"
                    >
                    </iframe>
                </Col>
            </Row>
        </Container>
    );
}

export default Location;