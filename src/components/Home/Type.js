import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <div className="type-container">
      <span className="type-fixed-text">Open to</span>
      <div className="type-writer-wrapper">
        <Typewriter
          options={{
            strings: [
              "Researchers",
              "Clinicians",
              "Surgeons",
              "Students",
              "Data Scientists",
              "Software Developers",
              "Faculty",
              "Postdocs",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </div>
    </div>
  );
};

export default Type;