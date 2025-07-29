import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h2>About StreamList</h2>
      <p>
        StreamList is a personal streaming tracker app that helps users keep a
        list of movies they want to watch or have already seen. It’s designed to
        make organizing your movie life simple and intuitive.
      </p>
      <p>
        This project was built using React and demonstrates local storage, routing,
        API integration with TMDB, and user-friendly UI components.
      </p>
      <p>
        The goal of StreamList is to offer a lightweight, easy-to-use platform
        without the clutter of full-blown streaming services.
      </p>
    </div>
  );
}

export default About;

