import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Particle from '../Particle';
import TeamCard from './TeamCard';
import teamData from './teamData';
import '../../style.css';

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

// Order of teams to display
const teamOrder = [
  "Leadership",
  "TrainTrack Team",
  "Marketing/Design Team",
  "Development Team",
  "Project Team",
  "Operations Team"
];

const TeamCategory = ({ title, members }) => (
  <>
    <h2 className="team-category-heading">{title}</h2>
    <Row className="team-card-row">
      {members.map((member, index) => (
        <Col md={4} className="team-card-col" key={`${member.title}-${index}`}>
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
  </>
);

function Team() {
  const [currentYear, setCurrentYear] = useState("2025");
  const years = Object.keys(teamData).sort((a, b) => b - a);

  const renderTeamsByCategory = (yearData) => {
    if (!yearData || typeof yearData !== 'object') return null;

    return teamOrder.map(category => {
      const members = yearData[category];
      if (!members || members.length === 0) return null;

      return (
        <TeamCategory
          key={category}
          title={category}
          members={members}
        />
      );
    });
  };

  return (
    <Container fluid className="team-section">
      <Particle />
      <Container>
        <h1 className="team-heading text-center">
          BrainHack <strong className="purple">Team</strong>
        </h1>

        <div className="d-flex justify-content-center">
          <YearSelect
            years={years}
            currentYear={currentYear}
            onYearChange={setCurrentYear}
          />
        </div>

        {renderTeamsByCategory(teamData[currentYear])}
      </Container>
    </Container>
  );
}

export default Team;