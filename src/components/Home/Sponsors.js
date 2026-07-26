import React from "react";
import { Row, Col } from "react-bootstrap";

function Sponsors() {
    const sponsors = [
        {
            href: 'https://www.vanderbilt.edu/valiant/',
            imgSrc: 'assets/sponsors/valiant.png',
            alt: 'Vanderbilt Lab for Immersive AI Translation',
            gold: true
        },
        {
            href: 'https://www.vumc.org/vuiis/welcome',
            imgSrc: 'assets/sponsors/vuiis.png',
            alt: 'Vanderbilt University Institute of Imaging Science',
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
            href: 'https://www.isis.vanderbilt.edu/',
            imgSrc: 'assets/sponsors/isis.png',
            alt: 'Institute for Software Integrated Systems',
        },
        {
            href: 'https://vkc.vumc.org/vkc',
            imgSrc: 'assets/sponsors/vkc.png',
            alt: 'Vanderbilt Kennedy Center',
        },
        {
            href: 'https://engineering.vanderbilt.edu/bme',
            imgSrc: 'assets/sponsors/bme.png',
            alt: 'Biomedical Engineering',
        },
        {
            href: 'https://engineering.vanderbilt.edu/cs',
            imgSrc: 'assets/sponsors/cs.png',
            alt: 'Computer Science',
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
    ];

    return (
        <div className="sponsor-section">
            <Row className="justify-content-center">
                <Col xs={7} lg={10}>
                    <h2 className="page-heading">
                        2026 <span className="purple">Sponsors</span>
                    </h2>
                    <p className="text-white text-center mb-8">
                        We gratefully acknowledge the generous support of our sponsors. A special thanks go to the partnership of VALIANT.
                    </p>
                    <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
                        {sponsors.filter(s => s.gold).map((sponsor, index) => (
                            <Col
                                key={index}
                                lg={3}
                                className="sponsor-icons sponsor-gold"
                            >
                                <a href={sponsor.href} target="_blank" rel="noopener noreferrer">
                                    <img src={sponsor.imgSrc} alt={sponsor.alt} className="sponsor-image" />
                                </a>
                            </Col>
                        ))}
                    </Row>
                    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                        {sponsors.filter(s => !s.gold).map((sponsor, index) => (
                            <Col
                                key={index}
                                lg={3}
                                className={`sponsor-icons ${sponsor.silver ? 'sponsor-silver' : ''}`}
                            >
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