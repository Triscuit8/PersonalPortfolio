import React from "react";
import Navbar from "../components/Navbar";
import Bottombar from "../components/Bottombar";

export default function Extracurricular() {
  return (
    <div className="container">
      <div className="menu">
        <div className="title">
          <h1 style={{ fontFamily: "Arial" }}>About Me</h1>
        </div>
        <Navbar />
      </div>
      <Bottombar />
    </div>
  );
}
