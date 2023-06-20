import React from "react";
import Navbar from "../components/Navbar";
import Taipei from "../images/taipei.jpg";
import Bottombar from "../components/Bottombar";

export default function AboutMe() {
  return (
    <div className="container">
      <div className="menu">
        <div className="title">
          <h1 style={{ fontFamily: "Arial" }}>About Me</h1>
        </div>
        <Navbar />
      </div>
      <div className="content">
        <img style={{ float: "left" }} src={Taipei} alt="" />
        <p>
          My name is Triston and I was born in the beautiful capital of Taiwan,
          a tiny but beautiful island country in East Asia. It is home to over
          23 million people and has one of the highest population density in the
          world! I lived there for the first 9 years of my life. Living there
          had pros and cons, but mostly pros. The cons were that it is super
          crowded, you see people everywhere, even if it is a late night walk
          down the street. The traffic can be pretty bad, especially when
          eveyrone is trying to get to work.
          <br />
          <br />
          The other con being that the education system is super strict, which
          is unrivalled by western education system. School starts at 7 and can
          sometimes end at 5 in the afternoon. During the long hours at school,
          students go through classes from math to Enlgish to Mandarin. Contrary
          to regular assumptions, the torturous hours do not end when school
          ends. Most kids in Taiwan go to cram school right after school. This
          is because parents are often busy at work, therefore, leaving their
          children at cram school until they are off work.
          <br />
          <br />
          At cram schools, students work on the homework they were assigned from
          school, and after that they work on extra practice problems from
          workbooks. Education is everything in Taiwan. Kids are taught about
          the importance about education from the moment you are born. Kids
          compete with each other through their whole childhood to get into a
          top university in the country. This is the biggest con about being in
          Taiwan. Your worth in society is determined mostly by education level.
          <br />
          <br />
          Now, enough about the cons, there are also many wonderful pros about
          Taiwan. First, the food is amazing! In my biased opinion, Taiwanese
          cuisine is one of the best in the world. From street food in the night
          market to Michelin star restaurants, Taiwan has got it all. I
          personally recommend winter melon tea and stinky tofu.
          <br />
          <br />
          Fast forward to now, I am studying computer science at the University
          of British Columbia, one of the best universities in the world. I am
          so thankful for this opportunity to realize who I am and who I want to
          be. I have met many amazing people who have helped me along this
          journey and hopefully they will be by my side until the end!
        </p>
      </div>
      <Bottombar />
    </div>
  );
}
