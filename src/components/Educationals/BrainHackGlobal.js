import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineDown,
  AiOutlineUp,
  AiOutlineLaptop,
  AiOutlineGithub,
  AiOutlineProject,
  AiOutlineCode,
  AiOutlineDatabase,
  AiOutlineCluster,
  AiOutlineRobot,
  AiOutlineApi,
  AiOutlineBug,
} from "react-icons/ai";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Helper function to render text with custom link text
  const renderTextWithLinks = (text) => {
    const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      const [fullMatch, linkText, linkUrl] = match;
      parts.push(text.slice(lastIndex, match.index)); // Add preceding text
      parts.push(
        <a
          key={match.index}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="faq-link"
          onClick={(e) => e.stopPropagation()}
        >
          {linkText}
        </a>
      );
      lastIndex = match.index + fullMatch.length;
    }
    parts.push(text.slice(lastIndex)); // Add remaining text

    return parts;
  };

  const renderAnswer = (answer, icons) => {
    if (Array.isArray(answer)) {
      return (
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          {answer.map((point, index) => (
            <li
              key={index}
              style={{ display: "flex", alignItems: "center", margin: "0.5rem 0" }}
            >
              {/* Icon aligned with the specific point */}
              <span style={{ marginRight: "0.5rem" }}>{icons[index]}</span>
              <span>{renderTextWithLinks(point)}</span>
            </li>
          ))}
        </ul>
      );
    }
    return renderTextWithLinks(answer);
  };

  const faqData = [
    {
      question: "Installation and Setup",
      answer: [
        "[Set up a brainhack friendly computing environment](https://school-brainhack.github.io/modules/installation/).",
        "[An introduction to the terminal (Bash)](https://school-brainhack.github.io/modules/introduction_to_terminal/).",
      ],
      icons: [<AiOutlineLaptop />, <AiOutlineCode />],
    },
    {
      question: "Version Control Systems",
      answer: [
        "[Using Git and Github](https://school-brainhack.github.io/modules/git_github/).",
        "[Docker](https://school-brainhack.github.io/modules/containers/).",
        "[Standards for Project Management and Organization](https://school-brainhack.github.io/modules/project_management/)."
      ],
      icons: [<AiOutlineGithub />, <AiOutlineCode />, <AiOutlineProject />],
    },
    
    {
      question: "Introduction to Python for Data Analysis",
      answer: [
        "[Writing Scripts in Python](https://school-brainhack.github.io/modules/python_scripts/).",
        "[Python for Data Analysis](https://school-brainhack.github.io/modules/python_data_analysis/).",
        "[Data visualization in Python](https://school-brainhack.github.io/modules/python_visualization/).",
      ],
      icons: [<AiOutlineCode />, <AiOutlineDatabase />, <AiOutlineApi />],
    },
    {
      question: "Data",
      answer: [
        "[Open Data](https://school-brainhack.github.io/modules/open_data/).",
        "[Neuroimaging Data and File Structures in Python](https://school-brainhack.github.io/modules/nibabel/).",
        "[Research Data Management with Datalad](https://school-brainhack.github.io/modules/datalad/).",
        "[Brain Imaging Data Structures](https://school-brainhack.github.io/modules/bids/).",
      ],
      icons: [<AiOutlineDatabase />, <AiOutlineCluster />, <AiOutlineProject />, <AiOutlineCluster />],
    },
    {
      question: "Neuroimaging Basics and Key Concepts",
      answer: [
        "[fMRI parcellation](https://school-brainhack.github.io/modules/fmri_parcellation/).",
        "[fMRI connectivity](https://school-brainhack.github.io/modules/fmri_connectivity/).",
      ],
      icons: [<AiOutlineCluster />, <AiOutlineApi />],
    },
    {
      question: "Machine Learning for Neuroimaging",
      answer: [
        "[Machine Learning Basics](https://school-brainhack.github.io/modules/machine_learning_basics/).",
        "[Machine Learning Applications](https://school-brainhack.github.io/modules/machine_learning_neuroimaging/).",
      ],
      icons: [<AiOutlineRobot />, <AiOutlineRobot />],
    },
    {
      question: "Deep Learning for Neuroimaging",
      answer: [
        "[Deep Learning Basics](https://school-brainhack.github.io/modules/deep_learning_intro/).",
        "[Deep Learning Applications](https://school-brainhack.github.io/modules/dl_for_neuroimaging/).",
      ],
      icons: [<AiOutlineRobot />, <AiOutlineApi />],
    },
    {
      question: "Advanced Programming",
      answer: [
        "[Software Testing and Continuous Integration](https://school-brainhack.github.io/modules/testing/).",
      ],
      icons: [<AiOutlineBug />],
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section>
      <Container fluid className="faq-section" id="faq">
        <Container>
          <h1 className="page-heading">
            BrainHack <strong className="purple">Global</strong>
          </h1>
          <Row className="justify-content-center">
            <Col md={10} className="faq-content">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item ${activeIndex === index ? "active" : ""}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="faq-question">
                    <span>{item.question}</span>
                    {activeIndex === index ? (
                      <AiOutlineUp className="faq-icon" />
                    ) : (
                      <AiOutlineDown className="faq-icon" />
                    )}
                  </div>
                  <div
                    className={`faq-answer ${activeIndex === index ? "show" : ""}`}
                  >
                    {renderAnswer(item.answer, item.icons)}
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default FAQ;
