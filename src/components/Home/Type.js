import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{ display: "flex", alignItems: "baseline", padding: "0" }}>
    <h1 style={{ margin: "0 10px 0 0", padding: "0", fontSize: "1.5em" }}>Open to</h1>
      
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