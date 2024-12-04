import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import {
    AiFillGithub,
    
  } from "react-icons/ai";


function TeamsCards(props) {
    return (
        <Card className="team-card-view">
            {props.imgPath && (
                <Card.Img
                    variant="top"
                    src={props.imgPath}
                    alt="card-img"
                    className="teamcard-img-top"
                />
            )}
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                    {props.description}
                </Card.Text>
                <ul className="home-about-social-links">
  <li className="social-icons">
    <a
      href={props.ghLink}
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <AiFillGithub />
    </a>
  </li>

  
</ul>

                
                
    
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
export default TeamsCards;