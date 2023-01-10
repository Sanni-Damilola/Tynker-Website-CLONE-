import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa";

const Question = () => {
  const arr: string[] = ["none", "block"];

  const display: any = useRef();

  const [count, setcount] = useState(0);

  const add = () => {
    setcount(count + 1);
  };

  useEffect(() => {
    display.current.style.display = arr[count % arr.length];
  });

  return (
    <Conatainer>
      <Wrapper>
        <h5>Frequently asked questions</h5>
        <Div1 onClick={add}>
          <FaChevronRight />
          Is coding good for kids?
        </Div1>
        <Text ref={display}>
          We're living during a high-tech revolution, witnessing life-changing
          advancements in medicine, environmental conservation, and much more.
          At the core of all these amazing projects and discoveries is CODE.
          Code can be the thing that differentiates your child from peers and
          allows them to stand out as an asset for companies when they are
          looking for employment. The children who learn to code today will
          become the creators of the technology tomorrow. Learning how to code
          can help children make a major contribution to the world that they
          <br />
          <br />
          live in and make a lasting impact. As kids and teens learn to code,
          they also build essential skills like critical thinking, logic, and
          problem-solving. They learn to logically sequence events, create
          playable games, tell good stories, and model real situations. They
          also learn computational thinking by developing algorithmic and design
          thinking abilities. Learning to code has become an essential element
          of a child's education and an excellent way to express their
          creativity and imagination.
        </Text>
        <Div2>
          <FaChevronRight />
          How do I start my child coding?
        </Div2>

        <Div3>
          <FaChevronRight />
          What age is best to introduce coding to kids?
        </Div3>
        <Div4>
          <FaChevronRight />
          Which is the best coding for kids program?
        </Div4>
        <Div5>
          <FaChevronRight />
          Why is coding needed?
        </Div5>
        <Div6>
          <FaChevronRight />
          Why should we use Tynker coding for kids?
        </Div6>
        <Div7>
          <FaChevronRight />
          How do I teach my 7 year old code?
        </Div7>
        <Div8>
          <FaChevronRight />
          What options are there for coding for teens?
        </Div8>
      </Wrapper>
    </Conatainer>
  );
};

export default Question;

const Text = styled.div`
  font-size: 17px;
  display: none;
  font-weight: 600;
  color: rgb(0, 0, 0, 0.6);
  padding-bottom: 20px;
`;

const Div1 = styled.div`
  display: flex;
  cursor: pointer;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 23px;
  color: rgb(0, 0, 0, 0.6);
  :hover {
    color: #6cc26c;
    transition: all 100ms;
  }
`;
const Div2 = styled.div`
  display: flex;
  cursor: pointer;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 23px;
  color: rgb(0, 0, 0, 0.6);
  :hover {
    color: #6cc26c;
    transition: all 100ms;
  }
`;
const Div3 = styled.div`
  display: flex;
  cursor: pointer;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 23px;
  color: rgb(0, 0, 0, 0.6);
  :hover {
    color: #6cc26c;
    transition: all 100ms;
  }
`;
const Div4 = styled.div`
  display: flex;
  cursor: pointer;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 23px;
  color: rgb(0, 0, 0, 0.6);
  :hover {
    color: #6cc26c;
    transition: all 100ms;
  }
`;
const Div5 = styled.div`
  display: flex;
  cursor: pointer;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 23px;
  color: rgb(0, 0, 0, 0.6);
  :hover {
    color: #6cc26c;
    transition: all 100ms;
  }
`;
const Div6 = styled.div`
  display: flex;
  cursor: pointer;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 23px;
  color: rgb(0, 0, 0, 0.6);
  :hover {
    color: #6cc26c;
    transition: all 100ms;
  }
`;
const Div7 = styled.div`
  display: flex;
  cursor: pointer;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 23px;
  color: rgb(0, 0, 0, 0.6);
  :hover {
    color: #6cc26c;
    transition: all 100ms;
  }
`;
const Div8 = styled.div`
  display: flex;
  cursor: pointer;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 23px;
  color: rgb(0, 0, 0, 0.6);
  :hover {
    color: #6cc26c;
    transition: all 100ms;
  }
`;

const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  h5 {
    font-size: 32px;
  }
  width: 48%;
  border-bottom: 1px solid rgb(0, 0, 0, 0.3);
`;

const Conatainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
