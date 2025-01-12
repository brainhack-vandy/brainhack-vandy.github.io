import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { PiCursorClickBold } from "react-icons/pi";
import './projects.css';

function ProjectCards(props) {
    return (
        <Card className="project-card-view">
            {props.imgPath && (
                <Card.Img
                    variant="top"
                    src={props.imgPath}
                    alt="card-img"
                    className="card-img-top"
                />
            )}
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>
                <Button className="project-details-btn" variant="primary" href={props.issueLink} target="_blank">
                    <PiCursorClickBold /> &nbsp;Project Details
                </Button>
                {"\n"}
                {"\n"}

                {props.demoLink && (
                    <Button
                        variant="primary"
                        href={props.demoLink}
                        target="_blank"
                        style={{ marginLeft: "10px" }}
                    >
                        <CgWebsite /> &nbsp;
                        {"Demo"}
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}
export default ProjectCards;