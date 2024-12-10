import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Particle from '../Particle';
import TeamCard from './TeamCard';
import teamData from './teamData';

const YearSelect = ({ years, currentYear, onYearChange }) => (
  <Form.Group className="year-select-container">
    <Form.Select
      value={currentYear}
      onChange={(e) => onYearChange(e.target.value)}
      aria-label="Select BrainHack Year"
      className="year-select"
    >
      {years.map((year) => (
        <option key={year} value={year.toString()}>
          {year}
        </option>
      ))}
    </Form.Select>
  </Form.Group>
);

const TeamSection = ({ title, members }) => (
  <div className="team-section-container">
    <h2 className="team-category-heading"></h2>
    <Row className="team-card-row">
      {members.map((member, index) => (
        <Col className="team-card-col col-lg-5-cols" md={3} sm={6} xs={12} key={`${member.title}-${index}`}>
          <TeamCard
            title={member.title}
            description={member.description}
            imgPath={member.imgPath}
            ghLink={member.ghLink}
            team={member.team}
          />
        </Col>
      ))}
    </Row>
  </div>
);

function Team() {
  const [currentYear, setCurrentYear] = useState("2025");
  const years = Object.keys(teamData).sort((a, b) => b - a);

  const renderTeamSections = (yearData) => {
    if (!yearData || typeof yearData !== 'object') return null;

    return (
      <>
        {/* Team Leads Section */}
        {yearData["Team Leads"] && (
          <TeamSection
            title="Team Leads"
            members={yearData["Team Leads"]}
          />
        )}

        {/* Team Members Section */}
        {yearData["Team Members"] && (
          <TeamSection
            title="Team Members"
            members={yearData["Team Members"]}
          />
        )}

        {/* Faculty Leadership Section with Divider */}
        {yearData["Faculty Leadership"] && (
          <>
            <hr className="team-divider" />
            <TeamSection
              title="Faculty Leadership"
              members={yearData["Faculty Leadership"]}
            />
          </>
        )}
      </>
    );
  };

  return (
    <Container fluid className="team-section">
      <Particle />
      <Container>
        <h1 className="team-heading text-center">
          2025 <strong className="purple">Organizers</strong>
        </h1>

        <div className="d-flex justify-content-center">
          <YearSelect
            years={years}
            currentYear={currentYear}
            onYearChange={setCurrentYear}
          />
        </div>

        {renderTeamSections(teamData[currentYear])}
      </Container>
    </Container>
  );
}

export default Team;