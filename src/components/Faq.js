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
            question: "I have no prior coding experience. Can I still participate in BrainHack?",
            answer: "Yes! BrainHack is designed to be accessible to everyone. During the event, we offer beginner-friendly workshops in our TrainTrack to help you get started with coding basics. You'll have opportunities to pair with experienced programmers on projects, learn through hands-on experience, and build your skills in a supportive environment. Many of our most successful collaborations have included team members who were just starting their coding journey!"
        },
        {
            question: "I have no neuroscience background. Can I still participate in BrainHack?",
            answer: "Yes! BrainHack welcomes individuals from all backgrounds. We encourage collaboration between neuroscience experts and those from other fields like computer science, mathematics, statistics, or any other discipline. Your unique perspective and skills can contribute to innovative solutions in neuroscience research."
        },
        {
            question: "How does remote participation work?",
            answer: "Remote participants can fully engage through Discord, where we'll host virtual rooms for project collaboration, workshops, and social interactions. You'll be able to join video calls, share screens, participate in discussions, and contribute to projects just like in-person attendees. All presentations and workshops will be streamed with interactive Q&A sessions."
        },
        {
            question: "What does BrainHack mean by 'fostering open science'?",
            answer: "Open Science is about making the entire scientific process transparent, collaborative, and accessible to everyone. When scientists openly share their methods, data, code, and findings, it allows others to verify their work, build upon it, and contribute their own insights. At BrainHack, we put these principles into practice by working together on shared tools and datasets, documenting everything clearly, and welcoming participants from any background or skill level to join in the research process. Instead of keeping scientific knowledge locked behind institutional walls, we're creating an environment where everyone can learn, participate, and advance science together."        },
        {
            question: "What kind of projects are suitable for BrainHack?",
            answer: "Any project that is broadly related to neuroscience and can be made publicly available. Check out previous year's projects here: https://github.com/brainhack-vandy/projects"
        },
        {
            question: "Will my project be judged at BrainHack?",
            answer: "No. BrainHack is a purely collaborative event, and we encourage you to work with each other on projects."
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
            question: "What happens after BrainHack?",
            answer: "Projects and collaborations often continue beyond the event. You'll have access to: 1) Our Discord community for ongoing discussions, 2) Project repositories on GitHub, 3) Resources and materials from workshops, and 4) Opportunities to join future BrainHack events or get involved in organizing them."
        },
        {
            question: "What should I bring?",
            answer: "Your laptop and will collaborate attitude!"
        },
        {
            question: "Is there free food and fantastic merch?",
            answer: "Yes!"
        },
        {
            question: "How can I volunteer for BrainHack?",
            answer: "Fill out the volunteer section in the registration form. Or reach out to us at brianhack.vanderbilt@gmail.com througout the year."
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