import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import TeamCard from './TeamCard';
import teamData from './teamData';
import './team.css';

const GROUP_ORDER = ["Chairs", "Team Leads", "Co-Leads", "Team Members", "Volunteers", "Admin"];

const GROUP_LABELS = {
    "Chairs":       null,
    "Team Leads":   "Team Leads",
    "Co-Leads":     "Co-Leads",
    "Team Members": "Team Members",
    "Volunteers":   "Volunteers",
    "Admin":        "Administration & Faculty",
};

const TeamSection = ({ title, members }) => (
  <div className="team-section-container">
    {title && (
      <>
        <hr className="team-group-divider" />
        <h3 className="team-group-heading">{title}</h3>
      </>
    )}
    <Row className="team-card-row">
      {members.map((member, index) => (
        <Col
          className="team-card-col col-lg-5-cols"
          md={3}
          sm={6}
          xs={12}
          key={`${member.title}-${index}`}
        >
          <TeamCard
            title={member.title}
            description={member.description}
            imgPath={member.imgPath}
            ghLink={member.ghLink}
            websiteLink={member.websiteLink}
            email={member.email}
            team={member.team}
          />
        </Col>
      ))}
    </Row>
  </div>
);

function Team() {
  const renderTeamSections = (yearData, year) => {
    if (!yearData || typeof yearData !== 'object') return null;

    const isGrouped = GROUP_ORDER.some(g => yearData[g]?.length > 0);

    return (
      <div className="year-section">
        {year !== "2025" && (
          <>
            <hr className="team-divider my-5" />
            <h1 className="team-heading text-center mb-5">
              {year} <strong className="purple">Team Members</strong>
            </h1>
          </>
        )}

        {isGrouped
          ? GROUP_ORDER.filter(g => yearData[g]?.length > 0).map(group => (
              <TeamSection key={group} title={GROUP_LABELS[group]} members={yearData[group]} />
            ))
          : yearData["Organizers"]?.length > 0 && (
              <TeamSection members={yearData["Organizers"]} />
            )
        }
      </div>
    );
  };

  return (
    <Container fluid className="team-section">
      <Particle />
      <Container>
        <h1 className="team-heading text-center mb-5">
          2026 <strong className="purple">Organizers</strong>
        </h1>

        {/* Render current year (2025) first */}
        {renderTeamSections(teamData["2025"], "2025")}

        {/* Render previous years */}
        {Object.keys(teamData)
          .sort((a, b) => b - a)
          .filter(year => year !== "2025")
          .map(year => renderTeamSections(teamData[year], year))}
      </Container>
    </Container>
  );
}

export default Team;