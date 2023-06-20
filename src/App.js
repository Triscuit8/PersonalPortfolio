import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Bottombar from "./components/Bottombar";

export default function App() {
  return (
    <div className="container">
      <div className="menu">
        <div className="title">
          <h1 style={{ fontFamily: "Arial" }}> Triston's Personal Website</h1>
        </div>
        <Navbar />
      </div>
      <div className="content">
        <h1 style={{ paddingBottom: "25px", paddingLeft: "10px" }}>
          Hi, welcome to my website!
        </h1>
      </div>
      <p>
        This is a website I have created out of personal interests. I am
        learning web development on my own at the moment and have decidede to
        use this opporunity to showcase my life, my passions, and my adventures.
        <br />
        <br />
        This website was developed with React.js, a JavaScript framework that
        allows for efficient and easy web development, HTML, CSS, JavaScript,
        and Node.js, all in Visual Studio Code.
        <br />
        <br />
        The journey for building this website was not easy. Although I took
        computer programming in high school, worked with HTML and CSS
        development, I had to relearn everything since it has just been so long
        since high school. This required hours of learning the syntax, the
        methods of setting React.js and Node.js up, as well as planning the
        website. There were problems and frustrations every step of the way,
        however, my desire to express myself through my own creation bested the
        obstacles.
        <br />
        <br />I am hoping that by this website I can prove to myself that as
        long as I have the will and passion, I can do anything. I hope this
        website can always inspire other people, to show them that the most
        difficult part is taking the first step. Before the creation of this
        website, I was always amazed by the creations of others. I remember
        thinking to myself that I wasn't good enough, that I wasn't capable of
        keeping up with everyone else. I did not know where to start, however, I
        knew that wanted to do something, I wanted to break my negative train of
        thoughts of underestimating myself. Once I started, things did not get
        easier. I had to search up solutions for almost every single problem I
        ran into, which took hours of searching for some. The thing is, once I
        started, there was no doubt about whether I would be able to do it, it
        was how I could do it, because I started to believe in myself, I
        believe that as long as I pour my heart and soul into doing something,
        I can do it.
      </p>
      <Bottombar />
    </div>
  );
}
