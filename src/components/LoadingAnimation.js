import React from "react";
function LoadingAnimation(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default LoadingAnimation;
