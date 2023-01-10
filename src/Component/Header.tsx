import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import logo from "./Asset/tynker-byjus-logo-white.png";
import logo2 from "./Asset/tynker-byjus-logo.png";
import { IoLogoGameControllerB } from "react-icons/io";
import { GoGift } from "react-icons/go";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { GoChevronLeft } from "react-icons/go";
import { RiMicrosoftFill } from "react-icons/ri";
import { DiApple } from "react-icons/di";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineGoogle } from "react-icons/ai";
import Globaltext from "./Globaltext";

const Header = () => {
  const [show, setshow] = React.useState(false);
  const [show1, setshow1] = React.useState(false);
  const [show2, setshow2] = React.useState(false);
  const [show3, setshow3] = React.useState(false);
  const [show4, setshow4] = React.useState(false);
  const change = () => {
    if (window.scrollY >= 60) {
      setshow(true);
    } else {
      setshow(false);
    }
  };



  const first = () => {
    setshow1(!show1);
    setshow2(false);
    setshow3(false);
    setshow4(false);
  };
  const second = () => {
    setshow1(false);
    setshow2(!show2);
    setshow3(false);
    setshow4(false);
  };
  const third = () => {
    setshow1(false);
    setshow2(false);
    setshow3(!show3);
    setshow4(false);
  };
  const forth = () => {
    setshow1(false);
    setshow2(false);
    setshow3(false);
    setshow4(!show4);
  };

  const [count, setcount] = React.useState(0);
  const arr = ["none", "flex"];
  const remove = ["none", "flex"];
  const display: any = useRef();

  useEffect(() => {
    display.current.style.display = arr[count % arr.length];
    display.current.style.display = remove[count % remove.length];
  });

  const add = () => {
    setcount(count + 1);
  };

  window.addEventListener("scroll", change);

  return (
    <>
      {show ? (
        <Container bs="rgba(0, 0, 0, 0.16) 0px 1px 4px" bg="rgb(255, 255, 255)">
          <Logo src={logo2} />
          <Mid>
            <Nav cl="rgb(125, 125, 125)">
              <Gameicon cl="rgb(125, 125, 125)">
                <IoLogoGameControllerB />
              </Gameicon>
              play
            </Nav>
            <Nav cl="rgb(125, 125, 125)">parents</Nav>
            <Nav cl="rgb(125, 125, 125)">educators</Nav>
            <Nav cl="rgb(125, 125, 125)">why code?</Nav>
            <Nav cl="rgb(125, 125, 125)">
              <Icon cl="rgb(125, 125, 125)">
                <GoGift />
              </Icon>
              gift
            </Nav>
          </Mid>
          <Left>
            <Button1
              onClick={add}
              bc="rgb(125, 125, 125)"
              cl="rgb(125, 125, 125)"
            >
              <span>start </span> <span>for</span> <span>for</span>
            </Button1>
            <Button2 cl="rgb(125, 125, 125)">log in</Button2>
          </Left>
        </Container>
        
      ) : (
        <Container bs="" bg="#4492e1">
          <Logo src={logo} />
          <Mid>
            <Nav onClick={first} cl=" #e6edf6">
              <Gameicon cl=" #e6edf6">
                <IoLogoGameControllerB />
              </Gameicon>
              play
            </Nav>
            <Nav onClick={second} cl=" #e6edf6">
              parents
            </Nav>
            <Nav onClick={third} cl=" #e6edf6">
              educators
            </Nav>
            <Nav onClick={forth} cl=" #e6edf6">
              why code?
            </Nav>
            <Nav cl=" #e6edf6">
              <Icon cl="#e6edf6 ">
                <GoGift />
              </Icon>
              gift
            </Nav>
          </Mid>
          <Left>
            <Button1 onClick={add} bc="#e6edf6" cl="#e6edf6">
              <span>start </span> <span>for</span> <span>for</span>
            </Button1>
            <Button2 cl="#e6edf6">log in</Button2>
          </Left>
        </Container>
      )}
      <Join ref={display}>
        <Right>
          <nav>
            <GoChevronLeft />
            Back
          </nav>
          <h4>
            start your child's <br /> coding journey
          </h4>
          <h3>Why should kids learn to code?</h3>
          <p>
            Learning to code is fun and opens up a world of <br /> creativity.
            Coding helps kids:
          </p>
          <Hold>
            <div>
              <IoIosCheckmarkCircle />
              <span>Gain confidence</span>
            </div>
            <div>
              <IoIosCheckmarkCircle />
              <span>Build problem solving skills</span>
            </div>
            <div>
              <IoIosCheckmarkCircle />
              <span> Communicate better</span>
            </div>
            <div>
              <IoIosCheckmarkCircle />
              <span>Improve academic performance</span>
            </div>
          </Hold>
          <h6>privacy policy</h6>
        </Right>
        <JLeft>
          <J>
            <h3>
              join tynker <br />
              <h3>
                free <h3>!</h3>
              </h3>
            </h3>
          </J>
          <br />
          <S>
            Your child can join the 60 million kids learning to <br /> code! No
            credit card required for sign up.
          </S>
          <br />

          <G>
            <AiOutlineGoogle />
            <span>google</span>
          </G>
          <M>
            <RiMicrosoftFill />
            <span>microsoft</span>
          </M>
          <A>
            <DiApple />
            <span>apple</span>
          </A>
          <F>
            <FaFacebookSquare />
            <span>facebook</span>
          </F>
          <E>
            <MdEmail />
            <span>email</span>
          </E>

          <p>Already have an account?</p>

          <pre>log in</pre>
          <Exit onClick={add}>X</Exit>
        </JLeft>
      </Join>
      {show1 ? (
        <Hover1>
          <Globaltext
            tet="BYJU’S Coding Cup"
            tot="Coding Games"
            twt="Minecraft"
            txt="Hour of Code"
          />
        </Hover1>
      ) : null}
      {show2 ? (
        <Hover2>
          <Globaltext
            tet="Overview"
            tot="Cutticulum"
            twt="Get Started for Free"
            txt=""
          />
        </Hover2>
      ) : null}
      {show3 ? (
        <Hover3>
          <Globaltext
            tet="BYJU’S Coding Cup"
            tot="Coding Games"
            twt="Minecraft"
            txt="Hour of Code"
          />
        </Hover3>
      ) : null}
      {show4 ? (
        <Hover4>
          <Globaltext
            tet="Overview"
            tot="School Curriculum"
            twt="Request a Quote"
            txt="Training & pD"
          />
        </Hover4>
      ) : null}
    </>
  );
};

export default Header;

const Hover1 = styled.div`
  z-index: 999;
  position: absolute;
  width: 150px;
  left: 320px;
  top: 60px;
  height: 140px;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
`;
const Hover2 = styled.div`
  position: absolute;
  width: 130px;
  height: 140px;
  z-index: 999;

  left: 458px;
  top: 60px;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
`;
const Hover3 = styled.div`
  position: absolute;
  width: 130px;
  height: 140px;
  z-index: 999;

  left: 580px;
  top: 60px;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
`;
const Hover4 = styled.div`
  position: absolute;
  width: 130px;
  height: 140px;
  left: 717px;
  z-index: 999;

  top: 60px;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
`;

const Exit = styled.div`
  width: 37px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  color: white;
  position: absolute;
  top: -0.4%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  right: -1%;
  background-color: #444852;
`;

const J = styled.div`
  text-align: center;
  h3 {
    font-size: 60px;
    text-transform: capitalize;
    font-weight: 800;
    color: #3767c5;
    margin: 0;

    h3 {
      color: #ed6f50;
      margin: 0;
      display: flex;
      h3 {
        margin: 0;
        color: #3767c5;
      }
    }
  }
`;
const S = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 500;
  color: rgb(0, 0, 0, 0.6);
  font-size: 16px;
`;
const G = styled.div`
  width: 70%;
  margin-bottom: 15px;
  height: 50px;
  font-size: 22px;
  font-weight: 800;
  border-radius: 5px;
  background-color: #db4437;
  cursor: pointer;
  :hover {
    transition: all 350ms;
    background-color: #e23323;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin-right: 125px;
  }
  color: white;
  justify-content: space-around;
  text-transform: capitalize;
`;
const F = styled.div`
  margin-bottom: 15px;

  width: 70%;
  height: 50px;
  font-size: 22px;
  font-weight: 800;
  cursor: pointer;
  border-radius: 5px;
  background-color: #4267b2;
  :hover {
    transition: all 350ms;
    background-color: #2c59b3;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin-right: 98px;
  }
  justify-content: space-around;
  color: white;
  text-transform: capitalize;
`;
const M = styled.div`
  width: 70%;
  cursor: pointer;
  margin-bottom: 15px;
  :hover {
    transition: all 350ms;
    background-color: #098dca;
  }
  height: 50px;
  font-size: 22px;
  font-weight: 800;
  border-radius: 5px;
  background-color: #00a4ef;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin-right: 98px;
  }
  justify-content: space-around;
  color: white;
  text-transform: capitalize;
`;
const A = styled.div`
  cursor: pointer;
  width: 70%;
  height: 50px;
  margin-bottom: 15px;
  :hover {
    transition: all 350ms;
    background-color: #444343;
  }
  font-size: 22px;
  font-weight: 800;
  border-radius: 5px;
  background-color: #555555;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin-right: 130px;
  }
  justify-content: space-around;
  color: white;
  text-transform: capitalize;
`;
const E = styled.div`
  width: 70%;
  height: 50px;
  cursor: pointer;
  font-size: 22px;
  margin-bottom: 15px;
  :hover {
    transition: all 350ms;
    background-color: #5134c5;
  }
  font-weight: 800;
  border-radius: 5px;
  background-color: #5b40cb;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin-right: 130px;
  }
  justify-content: space-around;
  color: white;
  text-transform: capitalize;
`;

const Hold = styled.div`
  width: 100%;
  padding: 23px;

  div {
    color: #f4f9fa;
    font-size: 20px;
    display: flex;
    padding-bottom: 10px;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }
`;

const Right = styled.div`
  width: 50%;
  h6 {
    margin: 0;
    font-size: 20px;
    padding: 24px;
    font-weight: 800;
    color: white;
    text-transform: capitalize;
    cursor: pointer;
    :hover {
      text-decoration: underline;
      transition: all 350ms;
    }
  }
  height: 100%;

  background-color: rgb(84, 69, 154);

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
    font-size: 17px;
    padding: 24px;
    font-weight: 800;
    color: white;

    cursor: pointer;
    :hover {
      text-decoration: underline;
      transition: all 350ms;
    }
  }

  h4 {
    font-size: 42px;
    color: #f4f9fa;
    text-transform: capitalize;
    padding: 24px;
    margin: 0;
  }

  h3 {
    color: #f4f9fa;
    padding: 24px;
    margin: 0;
    font-size: 20px;
  }

  p {
    padding: 24px;
    color: #f4f9fa;
    font-size: 17px;
  }
`;

const JLeft = styled.div`
  width: 50%;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f9fa;

  p {
    font-size: 18px;
    color: rgb(0, 0, 0, 0.5);
    font-weight: 600;
  }

  pre {
    color: #00bcd4;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    text-transform: capitalize;
    :hover {
      text-decoration: underline;
      transition: all 350ms;
    }
  }
`;

const Join = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 70%;
  top: 1%;
  left: 17%;
  height: 750px;
  transition: all 400ms;
  z-index: 999;
`;

const Button2 = styled.button<{ cl: string }>`
  color: ${(props) => props.cl};
  border: 0;
  outline: none;
  padding: 11px 6px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color: rgb(118, 184, 83);
    color: white;
    border: 0;
    transition: all 350ms;
  }
`;
const Button1 = styled.button<{ cl: string; bc: string }>`
  color: ${(props) => props.cl};
  border: 1px solid ${(props) => props.bc};
  outline: none;
  padding: 11px 6px;
  display: flex;
  span {
    margin-left: 5px;
    font-weight: 600;
  }
  text-transform: uppercase;
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color: rgb(118, 184, 83);
    color: white;
    border: 0;
    transition: all 350ms;
  }
`;

const Mid = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Nav = styled.button<{ cl: string }>`
  color: ${(props) => props.cl};
  margin: 20px;
  font-size: 16px;
  font-weight: 600;
  padding: px 40px;
  cursor: pointer;
  display: flex;
  border: 0;
  outline: none;
  background-color: transparent;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img`
  width: 20%;
  height: 22px;
  object-fit: contain;
`;
const Left = styled.div`
  width: 17%;
  margin-right: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
`;

const Icon = styled.div<{ cl: string }>`
  color: ${(props) => props.cl};
  display: flex;

  justify-content: center;
  align-items: center;
  font-size: 17px;
  margin-right: 3px;
`;
const Gameicon = styled.div<{ cl: string }>`
  color: ${(props) => props.cl};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin-right: 3px;
`;

const Container = styled.div<{ bg: string; bs: string }>`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  transition: all 400ms;
  z-index: 999;
  top: 0;
  justify-content: space-around;
  height: 60px;
  background-color: ${(props) => props.bg};
  box-shadow: ${(props) => props.bs};
`;
