import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      
      <h1 style={{ margin: 0, paddingRight: 10 }}>Open to</h1>
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
  );
}

export default Type;