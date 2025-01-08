import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineQuestionCircle,
  AiOutlineCalendar,
  AiOutlineTeam,
  AiFillStar
} from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { CgGitFork } from "react-icons/cg";
import { RiSpeakLine } from "react-icons/ri";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src="assets/logo.png" className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome className="nav-icon" /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/projects" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen className="nav-icon" /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/schedule" onClick={() => updateExpanded(false)}>
                <AiOutlineCalendar className="nav-icon" /> Schedule
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/faq" onClick={() => updateExpanded(false)}>
                <AiOutlineQuestionCircle className="nav-icon" /> FAQ
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/speakers" onClick={() => updateExpanded(false)}>
                <RiSpeakLine className="nav-icon" /> Speakers
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/team" onClick={() => updateExpanded(false)}>
                <AiOutlineTeam className="nav-icon" /> Team
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/brainhack-vandy/brainhack-vandy.github.io"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork className="fork-btn-subicon" />{" "}
                <AiFillStar className="fork-btn-subicon" />
              </Button>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;