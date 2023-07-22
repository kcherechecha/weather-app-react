import React from "react";
import "./Information.css";

export default function Information() {
  return (
    <div>
      <h1 className="city-name" id="name">
        Kyiv
      </h1>
      <p className="condition" id="date">
        date
      </p>
      <p className="condition" id="condition">
        Partly cloudy
      </p>
      <h2 className="temperature" id="temperature">
        15°C
      </h2>
    </div>
  );
}
