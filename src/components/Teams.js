import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Particle from './Particle';
import TeamsCard from './TeamsCard';


// Static paths for images and assets

const Catie_Chang = `${process.env.PUBLIC_URL}/images/team/Catie_Chang.svg`;
const Crystal_Jiang = `${process.env.PUBLIC_URL}/images/team/Crystal_Jiang.svg`;
const David_Zaha = `${process.env.PUBLIC_URL}/images/team/David_Zaha.svg`;
const Elyssa_McMaster = `${process.env.PUBLIC_URL}/images/team/Elyssa_McMaster.svg`;
const Kim_Rogge_Obando = `${process.env.PUBLIC_URL}/images/team/Kim_Rogge-Obando.svg`;
const Lily_Kriegel = `${process.env.PUBLIC_URL}/images/team/Lily_Kriegel.svg`;
const Liza_Akpoli = `${process.env.PUBLIC_URL}/images/team/Liza_Akpoli.svg`;
const Lucy_Wu = `${process.env.PUBLIC_URL}/images/team/Lucy_Wu.svg`;
const Mashiur_Khan = `${process.env.PUBLIC_URL}/images/team/Mashiur_Khan.svg`;
const Richard_Song = `${process.env.PUBLIC_URL}/images/team/Richard_Song.svg`;
const Roza_Bayrak = `${process.env.PUBLIC_URL}/images/team/Roza_Bayrak.svg`;
const Sarah_Goodale = `${process.env.PUBLIC_URL}/images/team/Sarah_Goodale.svg`;
const Sefika_Ozturk = `${process.env.PUBLIC_URL}/images/team/Sefika_Ozturk.svg`;
const Tasfiea_Tasnum = `${process.env.PUBLIC_URL}/images/team/Tasfiea_Tasnum.svg`;
const Terra_Lee = `${process.env.PUBLIC_URL}/images/team/Terra_Lee.svg`;
const Yusung_Hwang = `${process.env.PUBLIC_URL}/images/team/Yusung_Hwang.svg`;


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

const ComingSoon = () => (
  <div className="coming-soon">
    <h3 className="coming-soon-title">Coming Soon!</h3>
    <p className="coming-soon-text">
      Projects for BrainHack Vanderbilt 2025 will appear here soon.
      Stay tuned for exciting new projects!
    </p>
  </div>
);

function Teams() {
  const [currentYear, setCurrentYear] = useState("2024");

  const teamData = {
    "2025": [],
    "2024": [
      {
        title: "Catie Chang",
        description: "City, State",
        ghLink: "https://github.com",
        imgPath: Catie_Chang,
      },
      {
        title: "Crystal Jiang",
        description: "City, State",
        ghLink: "https://github.com",
        imgPath: Crystal_Jiang,
      },
      {
        title: "David Zaha",
        description: "City, State",
        ghLink: "https://github.com",
        imgPath: David_Zaha,
      },
      {
        title: "Elyssa McMaster",
        description: "City, State",
        ghLink: "https://github.com",
        imgPath: Elyssa_McMaster,
      },
      {
        title: "Kim Rogge Obando",
        description: "City, State",
        ghLink: "https://github.com",
        imgPath: Kim_Rogge_Obando,
      },
      {
        title: "Lily Kriegel",
        description: "City, State",
        ghLink: "https://github.com",
        imgPath: Lily_Kriegel,
      },
      {
        title: "Liza Akpoli",
        description: "City, State",
        ghLink: "https://github.com",
        imgPath: Liza_Akpoli,
      },
      {
        title: "Lucy Wu",
        description: "City, State",
        ghLink: "https://github.com",
        imgPath: Lucy_Wu,
      },
      {
        title: "Mashiur Khan",
        description: "City, State",
        ghLink: "https://github.com",
        imgPath: Mashiur_Khan,
      },
      {
        title: "Richard Song",
        description: "City, State",
        ghLink: "https://github.com",
        imgPath: Richard_Song,
      },
      {
        title: "Roza Bayrak",
        description: "City, State",
        ghLink: "https://github.com",
        imgPath: Roza_Bayrak,
      },
      {
        title: "Sarah Goodale",
        description: "City, State",
        ghLink: "https://github.com",
        imgPath: Sarah_Goodale,
      },
      {
        title: "Sefika Ozturk",
        description: "City, State",
        ghLink: "https://github.com",
        imgPath: Sefika_Ozturk,
      },
      {
        title: "Tasfiea Tasnum",
        description: "City, State",
        ghLink: "https://github.com",
        imgPath: Tasfiea_Tasnum,
      },
      {
        title: "Terra Lee",
        description: "City, State",
        ghLink: "https://github.com",
        imgPath: Terra_Lee,
      },
      {
        title: "Yusung Hwang",
        description: "City, State",
        ghLink: "https://github.com",
        imgPath: Yusung_Hwang,
      },
            
    ]
  };

  const years = Object.keys(teamData).sort((a, b) => b - a);

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

        {currentYear === "2025" ? (
          <ComingSoon />
        ) : (
          <Row className="team-card-row">
            {teamData[currentYear].map((team, index) => (
              <Col md={4} className="team-card-col" key={index}>
                <TeamsCard
                  title={team.title}
                  description={team.description}
                  imgPath={team.imgPath}
                  ghLink={team.ghLink}
                  
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </Container>
  );
}

export default Teams;
