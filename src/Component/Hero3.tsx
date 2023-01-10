import React from "react";
import styled from "styled-components";
import img from "./Asset/bg-squiggle-top.svg";
import Smallcardprops from "./Smallcardprops";
import { BsChevronCompactRight } from "react-icons/bs";
import logo1 from "./Asset/logo-apple.png";
import logo2 from "./Asset/logo-googleedu.png";
import logo3 from "./Asset/logo-microsoft.png";
import logo4 from "./Asset/logo-sylvan.png";
import logo5 from "./Asset/logo-pbs.png";
import logo6 from "./Asset/logo-bbc-learning.png";
import logo7 from "./Asset/logo-facebook.png";
import logo8 from "./Asset/logo-lego.png";
import logo9 from "./Asset/logo-mc.png";
import logo10 from "./Asset/logo-mattel.png";
import logo11 from "./Asset/logo-hotwheels.png";
import logo12 from "./Asset/logo-barbie.png";
import Globalbutton from "./Globalbutton";
import bg from "./Asset/bg-shape-testimonials.svg";
import map from "./Asset/map-blue.png";
import dot1 from "./Asset/dots.svg";
import dot2 from "./Asset/dots.svg";
import dot3 from "./Asset/dots.svg";
import Cardprops3 from "./Cardprops3";
import img1 from "./Asset/testimonial-student-cropped.png";
import img2 from "./Asset/testimonial-parent-cropped.png";
import img3 from "./Asset/testimonial-teacher-cropped.png";

import award1 from "./Asset/common-sense-selection-2020.webp";
import award2 from "./Asset/award-aasl.png";
import award3 from "./Asset/award-smart-media.png";
import award4 from "./Asset/award-parents-choice-gold@2x.png";
import award5 from "./Asset/award-twillywig.png";
import award6 from "./Asset/award-national-parenting-products.png";
import award7 from "./Asset/award-moms-choice.png";
import award8 from "./Asset/digital-education-awards-2021-winner.webp";
import award9 from "./Asset/parents-picks-awards-2022.webp";

const Hero3 = () => {
  return (
    <Container>
      <Img src={img} />
      <br />
      <Wrapper>
        <h3>
          {" "}
          Why Should Kids and Teens Learn to Code <br /> with Tynker?
        </h3>

        <span>
          Because <b>technology is so integrated</b> into virtually every aspect
          of our lives, learning about it is <b>more important than ever</b>.
          Our coding platform makes it convenient and fun for kids and teens to
          gain knowledge that will serve them well throughout their lives. You
          can count on our <b>trusted methods</b> to help them develop and grow
          their capabilities with computers.
          <br />
          <br />
          Tynker isn’t just for schools and coding camps, though. Parents who
          value <b>STEM education </b> and want their children to know how to
          code should know that our kids programming platform can be used at
          home, too. Tynker offers a range of solutions with icon-coding for
          pre-readers, block-based coding, and advanced courses in Python,
          JavaScript, data science, art, and image processing. There are
          individual and family home plans, and our online coding classes for
          all ages are an excellent way for them to gain the supplemental STEM
          skills needed for their future.
        </span>
      </Wrapper>
      <br />
      <br />
      <Cardwrapper>
        <Smallcardprops
          h5t="CODING BENEFITS"
          span1="Top 10 Reasons to Code"
          span2="Kids Coding Basics"
          span3="Develop 21st Century Skills"
          span4="Download eBooks on Coding"
          span5=""
          icon2={<BsChevronCompactRight />}
          icon3={<BsChevronCompactRight />}
          icon4={<BsChevronCompactRight />}
          icon5=""
          icon1={<BsChevronCompactRight />}
        />
        <Smallcardprops
          h5t="CODING GUIDES"
          span1="What is Coding for Kids"
          span2="Coding with Minecraft"
          span3="Coding with Electronic Kits"
          span4="Coding with Connected Toys"
          span5="More Coding Resources"
          icon2={<BsChevronCompactRight />}
          icon3={<BsChevronCompactRight />}
          icon4={<BsChevronCompactRight />}
          icon5={<BsChevronCompactRight />}
          icon1={<BsChevronCompactRight />}
        />
        <Smallcardprops
          h5t="TYNKER HIGHLIGHTS"
          span1="What’s New in Tynker?"
          span2="COVID-19 Impact report"
          span3="Meet our Featured Makers"
          span4="Seasonal Coding Projects"
          span5="Celebrating Women in STEM"
          icon2={<BsChevronCompactRight />}
          icon3={<BsChevronCompactRight />}
          icon4={<BsChevronCompactRight />}
          icon5={<BsChevronCompactRight />}
          icon1={<BsChevronCompactRight />}
        />
        <Smallcardprops
          h5t="CODING IN SCHOOLS"
          span1="K-12 School Plans"
          span2="AP Computer Science Principles"
          span3="AP Computer Science A"
          span4="Remote Learning"
          span5="K-12 Success Stories"
          icon2={<BsChevronCompactRight />}
          icon3={<BsChevronCompactRight />}
          icon4={<BsChevronCompactRight />}
          icon5={<BsChevronCompactRight />}
          icon1={<BsChevronCompactRight />}
        />
      </Cardwrapper>
      <br />
      <br />
      <br />
      <Up>
        <h3>Trusted by Leading Brands</h3>
        <br />
        <span>
          Our methods for learning to code all are provided within a safe,
          moderated community that is built around encouraging students to gain
          confidence in their abilities and do so without fear of failure.
        </span>
        <br />
      </Up>
      <Imagewrapper>
        <First>
          <Image src={logo1} />
          <Image src={logo2} />
          <Image src={logo3} />
          <Image src={logo4} />
          <Image src={logo5} />
          <Image src={logo6} />
        </First>
        <Second>
          <Image src={logo7} />
          <Image src={logo8} />
          <Image src={logo9} />
          <Image src={logo10} />
          <Image src={logo11} />
          <Image src={logo12} />
        </Second>
      </Imagewrapper>
      <br />
      <br />
      <Up>
        <h3>Join Tynker's Global Community</h3>
        <br />
        <Globalbutton pd="16px 43px" wd="" text="sign up" />
      </Up>
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
      <Testimo src={bg} />
      <Mapbg src={map} />
      <Dot1 src={dot1} />
      <Circle1>
        <h6>
          60 <br /> Million
        </h6>
        <span>students</span>
      </Circle1>
      <Circle2>
        <h6>
          Over 7 <br /> Billion
        </h6>
        <span>lines of code</span>
      </Circle2>
      <Circle3>
        <h6>Over 100 Thousand</h6>
        <span>schools</span>
      </Circle3>
      <Dot2 src={dot2} />
      <Dot3 src={dot3} />
      <Cardwrap>
        <Cardprops3
          mb=""
          top="9%"
          wd="330px"
          h6t="Tynker  Featured Maker"
          firsttxt="I thought a game was going to be extremely hard to make, but Tynker made it really easy."
          secondtxt=""
          image={img1}
        />
        <Cardprops3
          top="8%"
          wd="400px"
          mb=""
          h6t="Charlotte R."
          firsttxt="There's so much opportunity once they understand how coding works. It's amazing to see them create incredible things themselves."
          secondtxt="Parent | Melbourne, Australia"
          image={img2}
        />
        <Cardprops3
          top="5%"
          mb=""
          wd="330px"
          h6t="Charlotte R."
          firsttxt="Tynker has made programming fun, exciting, and simple and will help lead kids into their future."
          secondtxt="Parent | Melbourne, Australia"
          image={img3}
        />
      </Cardwrap>
      <Imgwrapper>
        <Childwrp>
          <div>
            <Awradimg src={award1} />
          </div>
          <div>
            <Awradimg src={award2} />
          </div>
          <div>
            <Awradimg src={award3} />
          </div>
          <div>
            <Awradimg src={award4} />
          </div>
          <div>
            <Awradimg src={award5} />
          </div>
          <div>
            <Awradimg src={award6} />
          </div>
          <div>
            <Awradimg src={award7} />
          </div>
          <div>
            <Awradimg src={award8} />
          </div>
          <div>
            <Awradimg src={award9} />
          </div>
        </Childwrp>
      </Imgwrapper>
    </Container>
  );
};

export default Hero3;

const Awradimg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const Childwrp = styled.div`
  width: 85%;
  display: flex;
  background-color: #b4f7ff;
  justify-content: space-around;
`;

const Imgwrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: #b4f7ff;
  position: absolute;
  top: 100%;
`;

const Cardwrap = styled.div`
  position: absolute;
  width: 88%;
  top: 78%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
`;

const Circle1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 140px;
  h6 {
    color: #fde867;
    margin: 0;
    font-size: 26px;
    text-align: center;
  }
  position: absolute;
  top: 54.5%;
  right: 23%;

  span {
    color: #f4f4f5;
  }
  flex-direction: column;
  height: 140px;
  border-radius: 50%;
  background-color: #33343b;
`;
const Circle2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 140px;
  h6 {
    color: #fde867;
    margin: 0;
    font-size: 26px;
    text-align: center;
  }
  position: absolute;
  top: 66.5%;
  left: 22.5%;
  z-index: 1;

  span {
    color: #f4f4f5;
  }
  flex-direction: column;
  height: 140px;
  border-radius: 50%;
  background-color: #33343b;
`;
const Circle3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 140px;
  z-index: 1;
  h6 {
    color: #fde867;
    margin: 0;
    font-size: 26px;
    text-align: center;
  }
  position: absolute;
  top: 69.4%;
  right: 29.9%;

  span {
    color: #f4f4f5;
  }
  flex-direction: column;
  height: 140px;
  border-radius: 50%;
  background-color: #33343b;
`;

const Dot1 = styled.img`
  position: absolute;
  top: 50%;
  right: 16%;
`;
const Dot2 = styled.img`
  position: absolute;
  top: 62%;
  left: 15%;
`;
const Dot3 = styled.img`
  position: absolute;
  top: 65%;
  left: 52%;
`;

const Mapbg = styled.img`
  position: absolute;
  top: 50%;
  width: 80%;
  object-fit: contain;
`;

const Testimo = styled.img`
  width: 100%;
  position: relative;
`;

const Image = styled.img`
  width: 250px;
  height: 130px;
  object-fit: contain;
`;

const First = styled.div`
  width: 83%;
  height: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
`;
const Second = styled.div`
  width: 89%;
  height: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
`;

const Imagewrapper = styled.div`
  width: 80%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
`;

const Up = styled.div`
  width: 60%;
  height: 20%;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 33px;
    margin: 0;
    color: rgb(10, 10, 10, 0.9);
  }
  span {
    font-size: 18px;
    color: rgb(10, 10, 10, 0.8);
    font-weight: 500;
    text-align: center;
  }

  justify-content: center;
  align-items: center;
`;

const Cardwrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 60%;
  height: 50%;
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;

  h3 {
    font-size: 33px;
    text-align: center;
    margin: 0;
    color: rgb(10, 10, 10, 0.9);
  }
  span {
    font-size: 17px;
    color: rgb(10, 10, 10, 0.8);
    font-weight: 400;
  }
`;

const Img = styled.img`
  width: 100%;
  background-color: #ebfcff;
  top: -6%;
  position: absolute;
`;

const Container = styled.div`
  position: relative;
  flex-direction: column;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ebfcff;
`;
