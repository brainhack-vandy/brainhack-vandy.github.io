import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Introduction from "./Introduction";
import Location from "./Location";
// import ProjectPitch from "./ProjectPitch";
import Type from "./Type";
import Hosts from "./Hosts";
import SponsorSection from "./Sponsors";
import { PiCursorClickBold } from "react-icons/pi";


const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div className="content-wrapper">
                <h1 className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <div className="title-wrapper">
                  <h1 className="heading-name">
                    Welcome to
                    <strong className="main-name"> BrainHack Vanderbilt</strong>
                  </h1>
                </div>

                <div className="type-wrapper">
                  <Type />
                </div>

                <p className="event-date">
                  January 24-26, 2025
                </p>

                {/* <div className="button-wrapper">
                  <a
                    href="<insert_registration_form>"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn btn-primary application-button">
                      Register Now &nbsp; <PiCursorClickBold />
                    </button>
                  </a>
                </div> */}
                <button className="btn btn-primary application-button">
                    Registration Now Closed
                </button>
              </div>
            </Col>

            <Col md={5} className="home-image-container">
              <img
                src="/assets/landing.svg"
                alt="home pic"
                className="img-fluid home-image"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Introduction />
      <Hosts />
      {/* <ProjectPitch /> */}
      <SponsorSection />
      <Location />
    </section>
  );
};

export default Home;