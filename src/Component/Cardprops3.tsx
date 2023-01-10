import React from "react";
import styled from "styled-components";
import { MdFormatQuote } from "react-icons/md";
interface props {
  image: string;
  firsttxt: string;
  h6t: string;
  secondtxt: string;
  wd: string;
  top: string;
  mb: string;
}

const Cardprops3: React.FC<props> = ({
  image,
  wd,
  h6t,
  firsttxt,
  mb,
  secondtxt,
  top,
}) => {
  return (
    <Container wd={wd}>
      <Wrapper mb={mb}>
        <span>{firsttxt}</span>
      </Wrapper>
      <Div>
        <div>
          {" "}
          <h6>{h6t}</h6>
          <span>{secondtxt}</span>
        </div>
        <Image src={image} />
      </Div>
      <Icon top={top}>
        <MdFormatQuote />
      </Icon>
    </Container>
  );
};

export default Cardprops3;

const Br = styled.br``;

const Wrapper = styled.div<{ mb: string }>`
  display: flex;
  margin-bottom: ${(props) => props.mb};
  margin-right: 40px;
  justify-content: space-around;
`;

const Icon = styled.div<{ top: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform: rotate(180deg);
  top: ${(props) => props.top};
  left: 6%;
  color: #06afa6;
  font-size: 35px;
`;

const Container = styled.div<{ wd: string }>`
  width: 370px;
  position: relative;
  height: ${(props) => props.wd};
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #ffffff;

  span {
    font-family: "Open Sans";
    display: flex;
    font-size: 25px;
    width: 60%;
    color: rgb(0, 0, 0, 0.7);
  }
`;

const Div = styled.div`
  display: flex;
  margin-left: 40px;
  h6 {
    text-align: right;
    font-size: 16px;
    margin: 0;
    margin-right: 20px;
  }
  span {
    font-size: 17px;
    width: 90%;
    text-align: right;
  }
  div {
    margin-top: 20px;
  }
`;

const Image = styled.img`
  width: 90px;
  height: 90px;
  margin: 5px;
  object-fit: contain;
  border-radius: 50%;
`;





