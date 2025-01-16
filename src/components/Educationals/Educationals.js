import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EduCard from "./EduCard";
import Particle from "../Particle";
import './educationals.css';
import BrainHackGlobal from "./BrainHackGlobal";
import { BsGithub } from "react-icons/bs";


function Educationals() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          BrainHack<strong className="purple"> Educationals </strong>
        </h1>
        <p style={{ color: "white" }}>
          Resources and past workshops
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <div className="project-card-view">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/4km4-szETJA?list=PLYyjtw9w4UUAik7EvdeHKDDmVyBNOxh5s"
                  title="Introduction to Animal Connectome and Brain-Wide Activity Data | Mikail Rubinov @ BHVU 2024"
                  allowFullScreen
                  className="rounded"
                  style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}
                ></iframe>
              </div>
              <h5>Introduction to Animal Connectome and Brain-Wide Activity Data | Mikail Rubinov @ BHVU 2024</h5>
              <p>
                Discussion on Introduction to Animal Connectome and Brain-Wide Activity Data | Mikail Rubinov @ BHVU 2024
              </p>
              <a href="https://github.com/" className="btn btn-primary">
                <BsGithub /> &nbsp; GitHub
              </a>
              <a href="https://www.youtube.com/embed/4km4-szETJA?list=PLYyjtw9w4UUAik7EvdeHKDDmVyBNOxh5s" className="btn btn-primary">
                Video
              </a>
            </div>
          </Col>

          <Col md={4} className="project-card">
            <div className="project-card-view">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/lwxtkvPb4UA?list=PLYyjtw9w4UUAik7EvdeHKDDmVyBNOxh5s"
                  title="Practical Introduction to Structural and Diffusion MRI | Adam Anderson @ BHVU 2024"
                  allowFullScreen
                  className="rounded"
                  style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}
                ></iframe>
              </div>
              <h5>Practical Introduction to Structural and Diffusion MRI | Adam Anderson @ BHVU 2024</h5>
              <p>
                Discussion on Practical Introduction to Structural and Diffusion MRI | Adam Anderson @ BHVU 2024
              </p>
              <a href="https://github.com/" className="btn btn-primary">
                <BsGithub /> &nbsp; GitHub
              </a>
              <a href="https://www.youtube.com/embed/lwxtkvPb4UA?list=PLYyjtw9w4UUAik7EvdeHKDDmVyBNOxh5s" className="btn btn-primary">
                Video
              </a>
            </div>
          </Col>

          <Col md={4} className="project-card">
            <div className="project-card-view">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/ojnV7mWlQD8?list=PLYyjtw9w4UUAik7EvdeHKDDmVyBNOxh5s"
                  title="Open Science Best Practices | Remi Gau @ BHVU 2024"
                  allowFullScreen
                  className="rounded"
                  style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}
                ></iframe>
              </div>
              <h5>Open Science Best Practices | Remi Gau @ BHVU 2024</h5>
              <p>
                Discussion on Open Science Best Practices | Remi Gau @ BHVU 2024
              </p>
              <a href="https://github.com/" className="btn btn-primary">
                &nbsp; Slides
              </a>
              <a href="https://www.youtube.com/embed/ojnV7mWlQD8?list=PLYyjtw9w4UUAik7EvdeHKDDmVyBNOxh5s" className="btn btn-primary">
                Video
              </a>
            </div>
          </Col>

          <Col md={4} className="project-card">
            <div className="project-card-view">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/pONB6xAO9v0?list=PLYyjtw9w4UUAik7EvdeHKDDmVyBNOxh5s"
                  title="To build a home: 12 years of brainhack | Pierre Bellec @ BHVU 2024"
                  allowFullScreen
                  className="rounded"
                  style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}
                ></iframe>
              </div>
              <h5>To build a home: 12 years of brainhack | Pierre Bellec @ BHVU 2024</h5>
              <p>
                Discussion on To build a home: 12 years of brainhack | Pierre Bellec @ BHVU 2024
              </p>
              <a href="https://github.com/" className="btn btn-primary">
                <BsGithub /> &nbsp; GitHub
              </a>
              <a href="https://www.youtube.com/embed/pONB6xAO9v0?list=PLYyjtw9w4UUAik7EvdeHKDDmVyBNOxh5s" className="btn btn-primary">
                Video
              </a>
            </div>
          </Col>

          <Col md={4} className="project-card">
            <div className="project-card-view">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/4km4-szETJA?list=PLYyjtw9w4UUAik7EvdeHKDDmVyBNOxh5s"
                  title="Introduction to Animal Connectome and Brain-Wide Activity Data | Mikail Rubinov @ BHVU 2024"
                  allowFullScreen
                  className="rounded"
                  style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}
                ></iframe>
              </div>
              <h5>Introduction to Animal Connectome and Brain-Wide Activity Data | Mikail Rubinov @ BHVU 2024</h5>
              <p>
                Discussion on Introduction to Animal Connectome and Brain-Wide Activity Data | Mikail Rubinov @ BHVU 2024
              </p>
              <a href="https://github.com/" className="btn btn-primary">
                <BsGithub /> &nbsp; GitHub
              </a>
              <a href="https://www.youtube.com/embed/4km4-szETJA?list=PLYyjtw9w4UUAik7EvdeHKDDmVyBNOxh5s" className="btn btn-primary">
                Video
              </a>
            </div>
          </Col>

        </Row>
      </Container>
      <BrainHackGlobal />
      {/* Community Resources Section with Embedded Links */}
      <Container>
        <h2 className="project-heading" style={{ marginTop: "40px" }}>
          Community <strong className="purple">Resources</strong>
        </h2>
        <p style={{ color: "white" }}>
          Explore these additional resources to learn more about neuroscience and open education.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Resource 1 */}
          <Col md={4} className="project-card">
            <div className="project-card-view">
              <div className="thumbnail-wrapper">
                <a
                  href="https://neuromatch.io/open-education-resources/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/educationals/neuromatch-thumbnail.png"
                    alt="Neuromatch Open Education Resources"
                    className="thumbnail rounded"
                    style={{
                      width: "100%",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  />
                </a>
              </div>
              <h5>Neuromatch Open Education Resources</h5>
              <p>
                Neuromatch Academy offers a range of educational programs, primarily focused on computational neuroscience, artificial intelligence (AI), and climate science, designed to be accessible and inclusive globally. Their courses include deep, hands-on learning experiences, leveraging a "code-first" approach, with students engaging in group projects under the guidance of teaching assistants.
              </p>
              <a
                href="https://neuromatch.io/open-education-resources/"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </a>
            </div>
          </Col>

          <Col md={4} className="project-card">
            <div className="project-card-view">
              <div className="thumbnail-wrapper">
                <a
                  href="https://book.the-turing-way.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/educationals/book.the-turing-way.org.jpeg"
                    alt="book.the-turing-way.org.jpeg"
                    className="thumbnail rounded"
                    style={{
                      width: "100%",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  />
                </a>
              </div>
              <h5>The Turing Way</h5>
              <p>
                The Turing Way is an open, community-driven project promoting accessible, effective, and reproducible data science. It supports diverse contributors and provides resources for researchers, data scientists, engineers, and policymakers to ensure their projects are reproducible and reusable across sectors.
              </p>
              <a
                href="https://book.the-turing-way.org/"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </a>
            </div>
          </Col>

        </Row>
      </Container>

      {/* Community Events Section with Embedded Links */}
      <Container>
        <h2 className="project-heading" style={{ marginTop: "40px" }}>
          Community <strong className="purple">Events</strong>
        </h2>
        <p style={{ color: "white" }}>
          Explore these additional resources to learn more about neuroscience and open education.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Resource 1 */}
          <Col md={4} className="project-card">
            <div className="project-card-view">
              <div className="thumbnail-wrapper">
                <a
                  href="https://www.reprohack.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/educationals/reprohack.org.jpeg"
                    alt="reprohack.org.jpeg"
                    className="thumbnail rounded"
                    style={{
                      width: "100%",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  />
                </a>
              </div>
              <h5>ReproHack Hub</h5>
              <p>
                A ReproHack is a collaborative event where participants attempt to reproduce published research from a curated list of papers with publicly available code and data. In a supportive environment, they evaluate key aspects such as reproducibility, transparency, and reusability, documenting their experiences.
              </p>
              <a
                href="https://www.reprohack.org/"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </a>
            </div>
          </Col>

          <Col md={4} className="project-card">
            <div className="project-card-view">
              <div className="thumbnail-wrapper">
                <a
                  href="https://brainhack.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/educationals/brainhack.org.jpeg"
                    alt="brainhack.org.jpeg"
                    className="thumbnail rounded"
                    style={{
                      width: "100%",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  />
                </a>
              </div>
              <h5>BrainHack</h5>
              <p>
                Advancing neuroscience requires large datasets and complex analyses. Brainhack bridges data science and neuroscience communities to drive brain research forward. This unique global conference unites researchers from diverse disciplines to collaborate on innovative neuroscience projects. Annual global events foster open collaboration, while regional Brainhack events sustain progress year-round.
              </p>
              <a
                href="https://brainhack.org/"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </a>
            </div>
          </Col>

        </Row>
      </Container>
      {/* Community Events Section with Embedded Links */}
      <Container>
        <h2 className="project-heading" style={{ marginTop: "40px" }}>
          Labs
        </h2>
        <p style={{ color: "white" }}>
          Explore these additional resources to learn more about neuroscience and open education.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Resource 1 */}
          <Col md={4} className="project-card">
            <div className="project-card-view">
              <div className="thumbnail-wrapper">
                <a
                  href="https://neurodatascience.github.io/research.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/educationals/neurodatascience.github.io.png"
                    alt="reprohack.org.jpeg"
                    className="thumbnail rounded"
                    style={{
                      width: "100%",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  />
                </a>
              </div>
              <h5>Neuro Data Science</h5>
              <p>
                {/*TODO: enter description*/}
              </p>
              <a
                href="https://neurodatascience.github.io/research.html"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </a>
            </div>
          </Col>


        </Row>
      </Container>

    </Container>
  );
}

export default Educationals;

