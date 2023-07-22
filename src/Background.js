import React from "react";
import smog from "./smog.jpg";
import "./Background.css";

export default function Background() {
  return (
    <img className="background" src={smog} alt="partly-cloudy" id="image" />
  );
}
