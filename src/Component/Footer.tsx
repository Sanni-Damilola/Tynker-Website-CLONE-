import React from "react";
import styled from "styled-components";
import img from "./Asset/tynker_small_darktm.png";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Abt>
          <h4>about</h4>
          <span>
            Tynker is the world’s leading K-12 creative coding platform,
            enabling students of all ages to learn to code at home, school, and
            on the go. Tynker’s highly successful coding curriculum has been
            used by one in three U.S. K-8 schools, 100,000 schools globally, and
            over 60 million kids across 150 countries.
          </span>{" "}
        </Abt>
        <Div>
          <h4>resources</h4>
          <span>blog</span> <br />
          <span>about us</span> <br />
          <span>press</span> <br />
          <span>jobs</span> <br />
          <span>mobile apps</span> <br />
          <span>forum</span> <br />
          <span>store</span> <br />
          <span>CS Authors</span> <br />
        </Div>
        <Div>
          <h4>parent</h4>
          <span>overview</span> <br />
          <span>curriculum</span> <br />
          <span>live classes</span> <br />
          <span>give a gift</span> <br />
          <span>redeem</span> <br />
          <span>why coding</span> <br />
          <span>featured makers</span> <br />
          <span></span> <br />
        </Div>
        <Div>
          <h4>educatos</h4>
          <span>overview</span> <br />
          <span>elementary</span> <br />
          <span>middle school</span> <br />
          <span>heigh school</span> <br />
          <span>AP CS Courses</span> <br />
          <span>PD</span> <br />
          <span>hour of code</span> <br />
          <span>STEM Projects</span> <br />
          <span>request a quote</span> <br />
        </Div>
        <Wrp>
          <h4>PARENT NEWSLETTER</h4>
          <div>
            <input type="email" placeholder="enter your email" />
            <button>ok</button>
          </div>
        </Wrp>
      </Wrapper>
      <Details>
        <Wrap>
          <div>
            <Image src={img} />
            <pre>© 2022 Neuron Fuel</pre> <span>Terms & Conditions</span>{" "}
            <i>|</i>
            <p>PRIVACY POLICY</p> <i>|</i> <span>Kids & Online Safety</span>{" "}
            <i>|</i>
            <span>About Us</span> <i>|</i>
            <span>Contact Us</span>
          </div>
        </Wrap>
      </Details>
    </Container>
  );
};

export default Footer;

const Image = styled.img`
  width: 100px;
  object-fit: contain;
  height: 50px;
  margin-right: 11px;
`;

const Wrap = styled.div`
  width: 90%;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    pre {
      font-size: 12px;
      color: #999999;
      margin-right: 11px;
    }

    i {
      color: whitesmoke;
      font-size: 13px;
      margin-right: 10px;
      font-weight: 100;
    }

    p {
      color: #ddf2cd;
      font-size: 13px;
      margin-right: 11px;
    }

    span {
      font-size: 12px;
      color: #999999;
      margin-right: 11px;

      cursor: pointer;
      :hover {
        color: rgb(54, 161, 216);
        text-decoration: underline;
      }
    }
  }
  border-top: 1px solid #353e46;
  height: 100%;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  background-color: #293037;
`;

const Wrp = styled.div`
  h4 {
    font-size: 15px;
    text-transform: uppercase;
    color: #999999;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      height: 31px;
      font-size: 15px;
      text-transform: capitalize;
      border: 1px solid white;
      background-color: #1f1f1f;
      outline: none;
      font-weight: 600;

      ::placeholder {
        color: #677575;
        padding: 5px;
      }
    }

    button {
      padding: 10px 19px;
      background-color: #00bcd4;
      border: 0;
      text-transform: uppercase;
      margin-left: 2px;
      color: white;
      font-weight: 600;
      outline: none;
      cursor: pointer;

      :hover {
        background-color: #17a9bd;
      }
    }
  }
`;

const Abt = styled.div`
  width: 250px;
  h4 {
    font-size: 15px;
    text-transform: uppercase;
    color: #999999;
  }

  span {
    color: #999999;
    text-transform: capitalize;
    line-height: 23px;
  }
`;

const Div = styled.div`
  margin-left: 30px;
  h4 {
    font-size: 15px;
    text-transform: uppercase;
    color: #999999;
  }

  span {
    color: #999999;
    text-transform: capitalize;
    grid-gap: 30px;
    cursor: pointer;
    line-height: 24px;
    :hover {
      text-decoration: underline;
    }
  }
`;
const Wrapper = styled.div`
  width: 85%;
  display: grid;
  justify-content: center;
  justify-content: space-between;
  grid-template-columns: repeat(5, 1fr);
`;

const Container = styled.div`
  width: 100%;
  background-color: #293037;
  height: 400px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  justify-content: center;
`;
