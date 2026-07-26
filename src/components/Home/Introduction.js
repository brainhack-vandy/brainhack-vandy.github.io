import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import './home.css'

function Introduction() {
  return (
    <Container fluid className="introduction-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="introduction-description">
            <h1 className="introduction-heading">
              <span className="purple">A Quick Dive into Brainhack</span>
            </h1>
            <div className="introduction-body">
              <p>So, you've heard of hackathons, right? Now, imagine that vibe but tailored specifically for the brainy world of neuroscience. That's Brainhack for you!</p>
              <h2 className="introduction-subheading purple">
                Why the Buzz Around Brainhack?
              </h2>
              <p>Neuroscience has some big questions on its plate. To tackle them (we're talking about massive datasets and some serious analytical firepower) Brainhack steps in. It's like a global rendezvous for brain enthusiasts, data geeks, and everyone in between.</p>
              <h2 className="introduction-subheading purple">
                What's Cooking at Brainhack?
              </h2>
              <p>Brainhack isn't just another science conference. Picture a global playground where researchers from all corners and fields come together. They roll up their sleeves and dive headfirst into some cool neuroscience projects.</p>
              <p>Brainhack has this groovy mix of Hackathon energy with Unconference spontaneity. Workshops? Check. Brainstorming data science tools for neuroscience? Double-check. A major chunk is all about open collaboration. Imagine teams from different disciplines geeking out and brainstorming solutions for neuroscience puzzles.</p>
              <p>And because learning never stops, Brainhack has a side of tutorials. Dive into Python, get friendly with GitHub, float around in cloud computing, or dive deep into some fresh statistical methods. To wrap it up, Brainhack isn't just an event—it's a vibe. A place where data science flirts with neuroscience, all in the name of unlocking the secrets of the brain. Cool, right?</p>
              <div className="introduction-notice">
                Brainhack Vanderbilt is dedicated to ensuring a welcoming, harassment-free experience for everyone. We adhere to the Global Brainhack {" "}
                <a href="https://brainhack.org/code-of-conduct.html"
                  target="_blank"
                  rel="noreferrer"
                  className="purple introduction-link">
                  Code of Conduct.</a>
              </div>
            </div>
          </Col>
          <Col md={4} className="introduction-image">
            <Tilt>
              <img src="assets/science1.svg" className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container >
  );
}
export default Introduction;