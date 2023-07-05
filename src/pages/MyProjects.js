import React from "react";
import Navbar from "../components/Navbar";
import Bottombar from "../components/Bottombar";

export default function MyProjects() {
  return (
    <div className="container">
      <div className="menu">
        <div className="title">
          <h1 style={{ fontFamily: "Arial" }}>My Projects!</h1>
        </div>
        <Navbar />
      </div>
      <div className="content">
        <p style={{ fontSize: "35px" }}>Sleepy Ninja</p>
      </div>
      <Bottombar />
    </div>
  );
}
