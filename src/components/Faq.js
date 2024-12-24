import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    // Helper function to render text with links
    const renderTextWithLinks = (text) => {
        // Regular expression to match URLs
        const urlRegex = /(https?:\/\/[^\s]+)/g;

        // Split the text by URLs
        const parts = text.split(urlRegex);

        return parts.map((part, index) => {
            // Check if this part matches a URL
            if (part.match(urlRegex)) {
                return (
                    <a
                        key={index}
                        href={part}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="faq-link"
                        onClick={(e) => e.stopPropagation()} // Prevent accordion from toggling when clicking link
                    >
                        {part}
                    </a>
                );
            }
            return part;
        });
    };

    const faqData = [
        {
            question: "Who can come to BrainHack?",
            answer: "Anyone, virtually. Vanderbilt affiliates can choose to attend in-person. However, the seats are limited. Either way don't forget to register!"
        },
        {
            question: "How can I volunteer for BrainHack?",
            answer: "Fill out the volunteer section in the registration form. Or reach out to us at brianhack.vanderbilt@gmail.com througout the year."
        },
        {
            question: "What kind of projects are suitable for BrainHack?",
            answer: "Any project that is broadly related to neuroscience and can be made publicly available. Check out previous year's projects here: https://github.com/brainhack-vandy/projects"
        },
        {
            question: "Who should pitch a project?",
            answer: "Anyone who is passionate about collaborative research at the intersection of neuroscience and open science. "
        },
        {
            question: "Will my project be judged at BrainHack?",
            answer: "Nope! BrainHack is a purely collaborative event, and we encourage you to work with each other on projects."
        },
        {
            question: "Where will BrainHack be held?",
            answer: "BrainHack Vanderbilt is hybrid. The in-person component will be held on the 2nd floor of Alumni Hall."
        },
        {
            question: "What is the format of BrainHack Vanderbilt?",
            answer: "BrainHack Vanderbilt will contain 3 primary components: HackTrack, TrainTrack, and EventTrack. In HackTrack, attendees will join teams to work on one (or more) of the projects that have been pitched! In TrainTrack, we will host educational workshops covering topics ranging from basics of coding to analyzing neuroimaging. In EventTrack, attendees can participate in a variety of events, ranging from keynote to panels to engaging in social mixers."
        },
        {
            question: "I have no prior coding experience. Can I still participate in BrainHack?",
            answer: "Yes! BrainHack welcomes individuals from all backgrounds. We encourage collaboration between seasoned researchers and those who are just getting started with research."
        },
        {
            question: "BrainHack is meant to foster open science. What exactly does that mean?",
            answer: "Open Science generally refers to the process of publicizing and democratizing the scientific process. This means open sourcing code, curating and using publicly available datasets, documenting code clearly, and overall eliminating barriers to entry in scientific research."
        },
        {
            question: "How will we be communicating during BrainHack?",
            answer: "After all attendees have been approved, you will receive a discord invite. We will be posting announcements during the event there, and you will be able to communicate with the virtual attendees there as well."
        },
        {
            question: "What should I bring?",
            answer: "Your laptop and will collaborate attitude!"
        },
        {
            question: "Is there free food and fantastic merch?",
            answer: "Yes!"
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section>
            <Container fluid className="faq-section" id="faq">
                <Container>
                    <h1 className="project-heading">
                        Frequently Asked <strong className="purple">Questions</strong>
                    </h1>
                    <Row className="justify-content-center">
                        <Col md={10} className="faq-content">
                            {faqData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <div className="faq-question">
                                        <span>{item.question}</span>
                                        {activeIndex === index ?
                                            <AiOutlineUp className="faq-icon" /> :
                                            <AiOutlineDown className="faq-icon" />
                                        }
                                    </div>
                                    <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                                        {renderTextWithLinks(item.answer)}
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