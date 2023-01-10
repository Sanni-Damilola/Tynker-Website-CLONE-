import React from "react";
import Cardprops from "./Cardprops";
import Hero from "./Hero";
import img from "./Asset/hp-banner@2x.png";
import leaningpath from "./Asset/learning-path.webp";
import logo from "./Asset/logo.png";
import Hero2 from "./Hero2";
import Mobileapps from "./Mobileapps";
import Hero3 from "./Hero3";
import Question from "./Question";

const Body = () => {
  return (
    <div>
      <Hero />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Cardprops
        bg=""
        mr="40px"
        bw="27%"
        bt="play now"
        pd="14px 18px"
        mid=""
        fd=""
        wd={36}
        timage={logo}
        Sp="Have you caught World Cup fever yet? With matches beginning in November, excitement is high all around the world. As part of the celebrations, Tynker from BYJU’s has teamed up with FIFA to promote kids coding in an all new way."
        Spp="When you play a match in BYJU’S Coding Cup, your team runs on code that you write! Can you code a smarter soccer team? You’ll learn a lot more by practicing and playing and of course — scoring! Anyone of any age or skill level can play for free. This is a perfect way for your child to start their love of coding!"
        Htext=""
        imw="50%"
        ht="100%"
        image={img}
      />
      <Cardprops
        bg=""
        mr=""
        mid="Our interactive story-based learning allows kids and teens to learn the basics with easy block-based coding challenges before seamlessly transitioning to real-world text-based languages like JavaScript and Python."
        bw="45%"
        imw="40%"
        ht="100%"
        bt="EXPLORE CURRICULUM"
        pd="15px 14px"
        wd={38}
        fd="row-reverse"
        timage=""
        Sp="With 70+ award-winning courses, there’s a learning path for every student, no matter their age or level. We have over 5,000 lessons, backed by hundreds of built-in tutorials, hands-on projects and interactive assessments."
        Spp="Tynker powers the creativity of over 60 million students and serves thousands of schools and educators worldwide."
        Htext="The #1 Coding Program for Kids and Teens"
        image={leaningpath}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Hero2 />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Mobileapps />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Hero3 />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question />
    </div>
  );
};

export default Body;
