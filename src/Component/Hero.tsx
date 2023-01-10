import React from "react";
import styled from "styled-components";
import Globalbutton from "./Globalbutton";
import img from "./Asset/hero.png";
import { FaPlay } from "react-icons/fa";
import svg from "./Asset/swoosh-lower-condensed-white-reversed.svg";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Text>
          <h3>
            Coding For Kids and <br /> Teens Made Easy
          </h3>
          <span>
            The fun way to learn programming and develop <br /> problem-solving
            & critical thinking skills!
          </span>
          <Globalbutton wd="50%" pd="16px 20px" text="get started for free" />
        </Text>
        <Image src={img} />
        <Video>
          <FaPlay />
        </Video>
      </Wrapper>
      <Svg src={svg} />
    </Container>
  );
};

export default Hero;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4492e1;
  justify-content: space-around;
  align-items: center;
`;

const Svg = styled.img`
  width: 100%;
  background-color: #4492e1;
  z-index: 1;
  height: 7%;
`;

const Video = styled.div`
  position: absolute;
  color: #e6edf6;
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 33px;
  background-color: #ff8d1a;
  border-radius: 50%;
  left: 66%;
  top: 46.5%;
`;

const Image = styled.img`
  width: 55%;
  position: relative;
  height: 100%;
  object-fit: contain;
  margin-top: 80px;
`;

const Text = styled.div`
  width: 37%;
  height: 50%;
  margin-left: 60px;

  h3 {
    margin: 0;
    font-weight: 800;
    font-size: 45px;
    color: #e6edf6;
  }

  span {
    color: #e6edf6;
    font-weight: 500;
    font-size: 20px;
  }
  flex-direction: column;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  margin-bottom: 40px;
`;

const Container = styled.div`
  width: 100%;
  height: 530px;
  display: flex;
  flex-direction: column;
  background-color: #4492e1;
`;
