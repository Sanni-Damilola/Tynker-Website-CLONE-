import React from "react";
import styled from "styled-components";

interface props {
  text: string;
  pd: string;
  wd: string;
}

const Globalbutton: React.FC<props> = ({ text, pd, wd }) => {
  return (
    <Container wd={wd} pd={pd}>
      {text}
    </Container>
  );
};

export default Globalbutton;

const Container = styled.button<{ pd: string; wd: string }>`
  color: #e6edf6;
  font-size: 16px;
  font-weight: 600;
  width: ${(wd) => wd.wd};
  padding: ${(props) => props.pd};
  cursor: pointer;
  display: flex;
  border: 0;
  outline: none;
  background-color: #ff8d1a;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  :hover {
    transition: all 400ms;
    background-color: #f0851a;
  }
`;
