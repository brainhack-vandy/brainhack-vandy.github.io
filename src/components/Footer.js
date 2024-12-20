import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="footer-copywright">
            <h3>Copyright @ 2025 BrainHack Vanderbilt</h3>
          </Col>
          <Col md={4} className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/brainhack-vandy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/@BrainHackVanderbilt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/brainhackvu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="footer-recognitions">
            <h3>
              Design based on{" "}
              <a
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                soumyajit4419
              </a>{" "}
              and{" "}
              <a
                href="https://brainhackwestern.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Brainhack Western
              </a>
              . Illustrations by{" "}
              <a
                href="https://storyset.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Storyset
              </a>
              .
            </h3>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;