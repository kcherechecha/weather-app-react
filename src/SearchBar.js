import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="input-group search-row">
      <input
        type="search"
        id="city-enter"
        className="form-control search-form search-bar"
        placeholder="Enter city name..."
        autoComplete="off"
      />
      <span className="input-group-btn search-button">
        <button
          type="submit"
          id="search-city"
          className="btn btn-primary search-button"
        >
          Search
        </button>
      </span>
      <span className="input-group-btn current-button">
        <button
          type="submit"
          id="current-location"
          className="btn btn-primary current-button"
        >
          Current
        </button>
      </span>
    </div>
  );
}
