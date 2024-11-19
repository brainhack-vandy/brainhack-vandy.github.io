import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Sponsors() {
    const sponsors = [
        
        {
            href: 'https://engineering.vanderbilt.edu/ece',
            imgSrc: 'assets/sponsors/ece.png',
            alt: 'Electrical and Computer Engineering',
        },
        {
            href: 'https://www.vanderbilt.edu/vise',
            imgSrc: 'assets/sponsors/vise.png',
            alt: 'Vanderbilt Institute for Surgery and Engineering',
        },
        {
            href: 'https://engineering.vanderbilt.edu/cs',
            imgSrc: 'assets/sponsors/cs.png',
            alt: 'Computer Science',
        },
        {
            href: 'https://medschool.vanderbilt.edu/brain-institute',
            imgSrc: 'assets/sponsors/vbi.png',
            alt: 'Vanderbilt Brain Institute',
        },
        {
            href: 'https://vkc.vumc.org/vkc',
            imgSrc: 'assets/sponsors/vkc.png',
            alt: 'Vanderbilt Kennedy Center',
        },
        {
            href: 'https://engineering.vanderbilt.edu',
            imgSrc: 'assets/sponsors/vuse.png',
            alt: 'Vanderbilt University School of Engineering',
        },
        {
            href: 'https://www.vanderbilt.edu/datascience',
            imgSrc: 'assets/sponsors/dsi.png',
            alt: 'Vanderbilt Data Science Institute',
        },
        {
            href: 'https://www.vumc.org/vuiis',
            imgSrc: 'assets/sponsors/vuiis.png',
            alt: 'Vanderbilt University Institute of Imaging Science',
        },
        {
            href: 'https://engineering.vanderbilt.edu/bme',
            imgSrc: 'assets/sponsors/bme.png',
            alt: 'Biomedical Engineering',
        }
    ];

    return (
        <div className="sponsor-section">
            <Row className="justify-content-center">
                <Col xs={7} lg={10}>
                    <h2 className="project-pitch-heading">
                        2024 <span className="purple">Sponsors</span>
                    </h2>
                    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                        {sponsors.map((sponsor, index) => (
                            <Col key={index} lg={3} className="sponsor-icons">
                                <a href={sponsor.href} target="_blank" rel="noopener noreferrer">
                                    <img src={sponsor.imgSrc} alt={sponsor.alt} style={{ width: "100%", height: "auto" }} />
                                </a>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Sponsors;
