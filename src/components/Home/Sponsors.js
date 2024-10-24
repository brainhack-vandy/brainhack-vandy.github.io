import React from "react";
import { Col, Row } from "react-bootstrap";

// Sample sponsors data
const sponsorsData = {
    "title": "Sponsors",
    "sponsors": [
        {
            "name": "Vanderbilt Brain Institute",
            "url": "https://medschool.vanderbilt.edu/brain-institute/",
            "img": "../../images/sponsors/vbi.png",
            "dims": {
                "width": 250,
                "height": 150
            }
        },
        {
            "name": "VUCS",
            "url": "https://www.vanderbilt.edu/",
            "img": "../../images/sponsors/cs.png",
            "dims": {
                "width": 250,
                "height": 150
            }
        },
        {
            "name": "VUSE",
            "url": "https://www.vumc.org/",
            "img": "../../images/sponsors/vuse.png",
            "dims": {
                "width": 250,
                "height": 150
            }
        }
    ]
};

function Sponsors() {
    return (
        <>
            <h2 className="project-heading" style={{ paddingBottom: "20px" }}>
                Our <strong className="purple">Sponsors</strong>
            </h2>
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                {sponsorsData.sponsors.map((sponsor, index) => (
                    <Col xs={6} md={3} className="tech-icons" key={index}>

                        <a
                            href={sponsor.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                width: "100%"
                            }}
                        >
                            <img
                                src={sponsor.img}
                                alt={sponsor.name}
                                style={{
                                    maxWidth: sponsor.dims.width,
                                    maxHeight: sponsor.dims.height,
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "contain",
                                    padding: "20px"
                                }}
                            />
                        </a>
                    </Col>
                ))}
            </Row >
        </>
    );
}

export default Sponsors;