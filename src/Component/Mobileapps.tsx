import React from "react";
import styled from "styled-components";
import img from "./Asset/graphic-mobile.webp";
import Globalbutton from "./Globalbutton";
import junior from "./Asset/icon-junior.webp";
import mod from "./Asset/icon-mod.webp";
import app from "./Asset/icon-app.webp";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const Mobileapps = () => {
  return (
    <Container>
      <br />
      <br />
      <br />
      <Up>
        <h3>3 Highly-Rated Mobile Apps for Learning Code</h3>
        <br />
        <span>Download Tynker apps and learn to code on the go.</span>
        <br />
        <Globalbutton pd="14px 0px" wd="10%" text="learn more" />
      </Up>
      <br />
      <br />
      <br />

      <Down>
        <Image src={img} />
        <Left>
          <Wrapper>
            <Game src={junior} />
            <Wrap>
              <Ptag>
                <Span>Tynker Junior</Span> <br />
                Tap-Tap picture coding with voice-overs. Pre-readers solve
                story-based puzzles and build their first programs in coding
                sandboxes. Ages 5-7
              </Ptag>
              <Div>
                <Cwrap>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <BsStarHalf />
                </Cwrap>
                <span>4.5</span>
                <span>2,200+ reviews</span>
              </Div>
            </Wrap>
          </Wrapper>
          <Wrapper>
            <Game src={app} />
            <Wrap>
              <Ptag>
                <Span>Tynker</Span> <br />
                Drag-and-drop block coding with a full-featured workshop. Build
                games and apps, compose music and art, control smart devices,
                and much, much more. Ages 7-12
              </Ptag>
              <Div>
                <Cwrap>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <BsStarHalf />
                </Cwrap>
                <span>4.7</span>
                <span>10,400+ reviews</span>
              </Div>
            </Wrap>
          </Wrapper>
          <Wrapper>
            <Game src={mod} />
            <Wrap>
              <Ptag>
                <Span>Mod Creator</Span> <br />
                Drag-and-drop Minecraft modding. Design skins, blocks and items.
                Modify mob behaviors. Create mods and add ons. Explore worlds!
                Ages 7-12
              </Ptag>
              <Div>
                <Cwrap>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <BsStarHalf />
                </Cwrap>
                <span>4.0</span>
                <span>3,300+ reviews</span>
              </Div>
            </Wrap>
          </Wrapper>
        </Left>
      </Down>
    </Container>
  );
};

export default Mobileapps;

const Ptag = styled.p`
  color: rgb(10, 10, 10, 0.9);
  font-size: 17px;
  font-weight: 400;
`;
const Span = styled.span`
  font-size: 23px;
  color: rgb(10, 10, 10, 0.9);
  font-weight: 400;
`;

const Div = styled.div`
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  span {
    color: rgb(10, 10, 10, 0.9);
    font-size: 15px;
    font-weight: 400;
    margin-right: 10px;
  }
`;

const Cwrap = styled.div`
  color: rgb(240, 202, 0, 0.9);
`;

const Container = styled.div`
  width: 100%;
  height: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;
const Up = styled.div`
  width: 100%;
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
  }

  justify-content: center;
  align-items: center;
`;
const Down = styled.div`
  width: 100%;
  display: flex;
  height: 400px;
  align-items: center;
  justify-content: space-around;
`;
const Image = styled.img``;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
`;
const Left = styled.div`
  width: 33%;
  height: 100%;
  flex-direction: column;
`;
const Game = styled.img`
  height: 50px;
  margin-top: 18px;
`;
const Wrap = styled.div`
  width: 86%;
`;
