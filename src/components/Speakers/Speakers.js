import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import speakerData from './speakerData';
import './speakers.css';

const SpeakerRow = ({ speaker, isEven }) => {
    const Content = (
        <Row className={`speaker-content ${isEven ? 'flex-row-reverse' : ''}`}>
            <Col md={4} className="speaker-img-col">
                <img
                    src={speaker.imgPath}
                    alt={speaker.name}
                    className="speaker-img"
                />
            </Col>
            <Col md={8} className="speaker-info-col">
                <div className={`speaker-info ${isEven ? 'text-end' : 'text-start'}`}>
                    <h2 className="speaker-name">{speaker.name}</h2>
                    <p className="speaker-bio">{speaker.bio}</p>
                </div>
            </Col>
        </Row>
    );

    if (speaker.link) {
        return (
            <div id={speaker.id} className="speaker-row clickable">
                <a
                    href={speaker.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="speaker-link"
                >
                    {Content}
                </a>
            </div>
        );
    }

    return (
        <div id={speaker.id} className="speaker-row">
            {Content}
        </div>
    );
};

const SpeakerSection = ({ title, speakers }) => (
    <div className="speaker-section-group">
        <h2 className="speaker-category-heading">
            {title}
        </h2>
        {speakers.map((speaker, index) => (
            <SpeakerRow
                key={speaker.id}
                speaker={speaker}
                isEven={index % 2 !== 0}
            />
        ))}
    </div>
);

function Speakers() {
    // Split speakers into keynote speakers and panelists
    const keynoteSpeakers = speakerData.filter(speaker =>
        speaker.id.startsWith('keynote-')
    );

    const panelists = speakerData.filter(speaker =>
        speaker.id.startsWith('panelist-')
    );

    return (
        <section>
            <Container fluid className="speaker-section" id="speakers">
                <Particle />
                <Container>
                    <h1 className="page-heading">
                        Our <strong className="purple">Speakers</strong>
                    </h1>

                    {keynoteSpeakers.length > 0 && (
                        <SpeakerSection
                            title="Keynote Speaker"
                            speakers={keynoteSpeakers}
                        />
                    )}

                    {panelists.length > 0 && (
                        <SpeakerSection
                            title="Panelists"
                            speakers={panelists}
                        />
                    )}
                </Container>
            </Container>
        </section>
    );
}

export default Speakers;