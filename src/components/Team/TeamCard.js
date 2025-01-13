import React from "react";
import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import './team.css';

function TeamCard(props) {
    const hasGitHub = props.ghLink && props.ghLink.trim() !== "" && props.ghLink !== "https://github.com";
    const hasWebsite = props.websiteLink && props.websiteLink.trim() !== "";

    return (
        <Card className="team-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" className="teamcard-img-top" loading="eager" />
            <Card.Body className="flex flex-col h-full">
                <Card.Title className="team-card-title">
                    {props.title}
                </Card.Title>
                {props.team && <div className="team-member-role">{props.team}</div>}
                <Card.Text className="team-card-description">{props.description}</Card.Text>
                <div className="mt-auto flex justify-center gap-8">
                    {hasGitHub && (
                        <a
                            href={props.ghLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-link"
                            aria-label={`${props.title}'s GitHub profile`}
                        >
                            <BsGithub className="github-icon" />
                        </a>
                    )}
                    {hasWebsite && (
                        <a
                            href={props.websiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="website-link"
                            aria-label={`${props.title}'s website`}
                        >
                            <FaLink className="website-icon" />
                        </a>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}

export default TeamCard;