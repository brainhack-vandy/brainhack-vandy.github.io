import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Copyright @ 2025 BrainHack Vanderbilt</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/brainhack-vandy"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.youtube.com/@BrainHackVanderbilt"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillYoutube />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/brainhackvu/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
        <Col md="4" className="footer-recognitions">
          <span>
            <h3>Design based on{" "}
              <a
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", fontSize: "10px"}}
              >
                soumyajit4419
              </a>{" "}
              and{" "}
              <a
                href="https://brainhackwestern.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", fontSize: "10px"}}
              >
                Brainhack Western
              </a>
              . Illustrations by{" "}
              <a
                href="https://storyset.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", fontSize: "10px"}}
              >
                Storyset
              </a>
              .
            </h3></span>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;