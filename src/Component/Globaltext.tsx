import React from "react";
import styled from "styled-components";

interface props {
  txt: string;
  tet: string;
  tot: string;
  twt: string;
}

const Globaltext: React.FC<props> = ({ tet, tot, twt, txt }) => {
  return (
    <Container>
      <div>{tet}</div>
      <div>{tot}</div>
      <div>{twt}</div>
      <div>{txt}</div>
    </Container>
  );
};

export default Globaltext;

const Container = styled.div`
  div {
    width: 95%;
    display: flex;
    font-size: 13px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding-bottom: 7px;
    font-weight: 400;
    color: rgb(0, 0, 0, 0.6);
    cursor: pointer;
    :hover {
      background-color: lavender;
    }
  }
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  text-align: center;
`;
