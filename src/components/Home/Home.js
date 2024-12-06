import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeImg from "../../images/landing.svg";
import Particle from "../Particle";
import Introduction from "./Introduction";
import Location from "./Location";
import ProjectPitch from "./ProjectPitch";
import Type from "./Type";
import SponsorSection from "./Sponsors";

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

                <div className="button-wrapper">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeX6AfQ0noO5hzIEO-SgBIcfsHfCuQyyEgLGxrP3N5UCg8w0w/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn btn-primary application-button">
                      Apply Here
                    </button>
                  </a>
                </div>
              </div>
            </Col>

            <Col md={5} className="home-image-container">
              <img
                src={homeImg}
                alt="home pic"
                className="img-fluid home-image"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Introduction />
      <ProjectPitch />
      <SponsorSection />
      <Location />
    </section>
  );
};

export default Home;