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
            question: "How do I register for BrainHack?",
            answer: "Our registration will open in late November the week before Thanksgiving. You can register by visiting the homepage of our website and clicking 'Register'. From there, you'll fill out a short form with some of your basic information, and we'll get in touch with you before BrainHack!"
        },
        {
            question: "Who should register for BrainHack?",
            answer: "We welcome people from all backgrounds, ranging from those with minimal experience in coding and research, to seasoned veterans in the neuroscience community. Anyone interested in making connections in the neuroscience and open science community is encouraged to register."
        },
        {
            question: "How do I become a volunteer for BrainHack?",
            answer: "Our volunteer registration form will open in January. Come back to our website then to register as a volunteer!"
        },
        {
            question: "How do projects work at BrainHack?",
            answer: "Before the BrainHack, the organizers will be actively recruiting individuals interested in pitching projects. During the BrainHack, attendees will be introduced to these projects and will be able to work closely together on addressing the goals that the project pitcher set out."
        },
        {
            question: "What kind of projects are suitable for BrainHack?",
            answer: "Any project that is broadly related to neuroscience that involves some data science component. That could be analyzing patterns in fMRI data, creating a data loader pipeline for a neural spiking dataset, preprocessing calcium imaging traces, running stats, etc. You can check out previous year's projects here: https://github.com/brainhack-vandy/projects"
        },
        {
            question: "Who should pitch a project?",
            answer: "Anyone who is passionate about collaborative research at the intersection of neuroscience and data science. Anyone who is in need of help with data analytics with your research project, or simply looking to connect with like-minded people in neuroscience. Anyone who is looking for help interpreting your research findings, or need someone with deep expertise."
        },
        {
            question: "Will my project be judged at BrainHack?",
            answer: "Nope! BrainHack is a purely collaborative event, and we encourage you to work with each other on projects."
        },
        {
            question: "Where will BrainHack be held?",
            answer: "We will be held both in person and hybrid over discord! The in-person component will be held on the 2nd floor of Alumni Hall."
        },
        {
            question: "When will BrainHack be held?",
            answer: "BrainHack will be held from Friday evening on 24 January 2025 to Sunday afternoon on 26 January 2025."
        },
        {
            question: "What is the format of BrainHack Vanderbilt?",
            answer: "BrainHack Vanderbilt will contain 3 primary components: HackTrack, TrainTrack, and EventTrack. In HackTrack, attendees are able to work on any of the projects that have been pitched beforehand and available during BrainHack. In TrainTrack, there will be speakers giving educational workshops covering topics ranging from basics of coding to analyzing neuroimaging. In EventTrack, attendees can participate in a variety of fun events, ranging from playing neuroscience jeopardy to engaging in social mixers."
        },
        {
            question: "I have no prior coding experience. Can I still participate in BrainHack?",
            answer: "Yes! BrainHack is an event tailored to individuals of all backgrounds. We encourage collaboration between seasoned researchers and those who are just getting started with research."
        },
        {
            question: "BrainHack is meant to foster open science. What exactly does that mean?",
            answer: "Open science generally refers to the process of publicizing and democratizing the scientific process. This means open sourcing code, curating publicly available datasets, documenting code clearly, and overall eliminating barriers to entry in scientific research."
        },
        {
            question: "How will we be communicating during BrainHack?",
            answer: "After all attendees have been approved, you will receive a discord invite. We will be posting announcements during the event there, and you will be able to communicate with the virtual attendees there as well."
        },
        {
            question: "What should I bring?",
            answer: "A device you can write code and/or make designs on, and a compatible charger."
        },
        {
            question: "Is there free food and merch?",
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
                    <h1 className="page-heading">
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