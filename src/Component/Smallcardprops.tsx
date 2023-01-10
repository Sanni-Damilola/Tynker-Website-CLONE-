import React from "react";
import styled from "styled-components";

interface props {
  h5t: string;
  span1: string;
  span2: string;
  span3: string;
  span4: string;
  span5: string;
  icon1: any;
  icon2: any;
  icon3: any;
  icon4: any;
  icon5: any;
}

const Smallcardprops: React.FC<props> = ({
  h5t,
  span1,
  span2,
  span3,
  span4,
  span5,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
}) => {
  return (
    <Container>
      <Wrapper>
        <h5>{h5t}</h5>
        <Div>
          {icon1}
          <span>{span1}</span>
        </Div>
        <Div>
          {icon2}
          <span>{span2}</span>
        </Div>
        <Div>
          {icon3}
          <span>{span3}</span>
        </Div>
        <Div>
          {icon4}
          <span>{span4}</span>
        </Div>
        <Div>
          {icon5}
          <span>{span5}</span>
        </Div>
      </Wrapper>
    </Container>
  );
};

export default Smallcardprops;

const Container = styled.div`
  width: 280px;
  height: 250px;
  display: flex;
  margin: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #ffffff;
`;
const Wrapper = styled.div`
  width: 70%;
  height: 50%;
  h5 {
    color: #0096aa;
    margin: 0;
    padding-bottom: 7px;
  }

  span {
    color: rgb(0, 0, 0, 0.8);
    font-size: 11px;
  }
`;
const Div = styled.div`
  font-size: 10px;
  padding: 4px;
  cursor: pointer;
`;
