import React from "react";
import Navbar from "../components/Navbar";
import Bottombar from "../components/Bottombar";
import Gmail from "../images/gmail.png";
import Instagram from "../images/instaimage.jpeg";
import Snapchat from "../images/snapchatimage.jpeg";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="container">
      <div className="menu">
        <div className="title">
          <h1 style={{ fontFamily: "Arial" }}>Contact</h1>
        </div>
        <Navbar />
      </div>
      <div className="content">
        <img
          src={Gmail}
          style={{ float: "left", height: "200px", width: "200px" }}
        />
        <br />
        <br />
        <br />
        <br />
        <p className="aboutMeText">tristontsui@gmail.com</p>
        <br />
        <br />
        <img
          src={Instagram}
          style={{ float: "left", height: "200px", width: "200px" }}
        />
        <br />
        <br />
        <br />
        <br />
        <p className="aboutMeText">
          <Link to="https://www.instagram.com/tristontsui/">@tristontsui</Link>
        </p>
        <br />
        <br />
        <img
          src={Snapchat}
          style={{ float: "left", height: "200px", width: "200px" }}
        />
        <br />
        <br />
        <br />
        <br />
        <p className="aboutMeText">@tristoniscool8</p>
      </div>
      <Bottombar />
    </div>
  );
}
