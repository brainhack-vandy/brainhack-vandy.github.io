import React from "react";
import { Row, Col } from "react-bootstrap";
import './home.css'

function Sponsors() {
    const sponsors = [
        {
            href: 'https://www.vanderbilt.edu/valiant/',
            imgSrc: 'assets/sponsors/valiant.png',
            alt: 'Vanderbilt Lab for Immersive AI Translation',
        },
        {
            href: 'https://engineering.vanderbilt.edu/cs',
            imgSrc: 'assets/sponsors/cs.png',
            alt: 'Computer Science',
        },
        {
            href: 'https://www.vanderbilt.edu/datascience',
            imgSrc: 'assets/sponsors/dsi.png',
            alt: 'Vanderbilt Data Science Institute',
        },
        {
            href: 'https://engineering.vanderbilt.edu/ece',
            imgSrc: 'assets/sponsors/ece.png',
            alt: 'Electrical and Computer Engineering',
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
            href: 'https://engineering.vanderbilt.edu/bme',
            imgSrc: 'assets/sponsors/bme.png',
            alt: 'Biomedical Engineering',
        },
        {
            href: 'https://as.vanderbilt.edu/biological-sciences',
            imgSrc: 'assets/sponsors/casbs.png',
            alt: 'Biological Sciences',
        },
        {
            href: 'https://as.vanderbilt.edu/psychology/',
            imgSrc: 'assets/sponsors/casp.png',
            alt: 'Psychology',
        },
        {
            href: 'https://www.vanderbilt.edu/the-wondry/',
            imgSrc: 'assets/sponsors/wondry.png',
            alt: 'The Wondry',
        }
    ];

    return (
        <div className="sponsor-section">
            <Row className="justify-content-center">
                <Col xs={7} lg={10}>
                    <h2 className="page-heading">
                        2025 <span className="purple">Sponsors</span>
                    </h2>
                    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                        {sponsors.map((sponsor, index) => (
                            <Col key={index} lg={3} className="sponsor-icons">
                                <a href={sponsor.href} target="_blank" rel="noopener noreferrer">
                                    <img src={sponsor.imgSrc} alt={sponsor.alt} className="sponsor-image" />
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