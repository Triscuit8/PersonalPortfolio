import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="Navbar">
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          navigate("/AboutMe");
        }}
      >
        About Me
      </button>
      <button
        onClick={() => {
          navigate("/MyProjects");
        }}
      >
        My Projects
      </button>
      <button
        onClick={() => {
          navigate("/Extracurricular");
        }}
      >
        Extracurricular
      </button>
      <button
        onClick={() => {
          navigate("/Contact");
        }}
      >
        Contact
      </button>
    </div>
  );
}
