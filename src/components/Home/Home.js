import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeImg from "../../images/landing.svg";
import Particle from "../Particle";
import Introduction from "./Introduction";
import Location from "./Location";
// import Sponsors from "./Sponsors";
import ProjectPitch from "./ProjectPitch";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading heading-bottom-margin">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1
              >

              </h1>

              <h1 className="heading-name heading-small-margin">
                Welcome to
                <strong className="main-name"> BrainHack Vanderbilt</strong>
              </h1>

              <p className="event-date">
                January 24-26, 2025
              </p>
              <div className="button-container">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeX6AfQ0noO5hzIEO-SgBIcfsHfCuQyyEgLGxrP3N5UCg8w0w/viewform?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-primary application-button">
            Apply Here
          </button>
        </a>
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
      <Location />
      {/* <Sponsors /> */}
    </section>
  );
}

export default Home;
