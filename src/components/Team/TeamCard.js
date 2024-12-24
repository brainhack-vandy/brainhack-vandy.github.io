import React from "react";
import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";
import './team.css';

function TeamCard(props) {
    const hasGitHub = props.ghLink && props.ghLink.trim() !== "" && props.ghLink !== "https://github.com";

    return (
        <Card className="team-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" className="teamcard-img-top" />
            <Card.Body>
                <Card.Title className="team-card-title">
                    {props.title}
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
                </Card.Title>
                {props.team && <div className="team-member-role">{props.team}</div>}
                <Card.Text className="team-card-description">{props.description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default TeamCard;