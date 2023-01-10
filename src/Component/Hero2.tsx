import React from "react";
import styled from "styled-components";
import img from "./Asset/bg-squiggle-top.svg";
import imgb from "./Asset/bg-squiggle-bottom.svg";
import forparent from "./Asset/for-parents.webp";
import forteachers from "./Asset/for-teachers.webp";
import Cardprops from "./Cardprops";

const Hero2 = () => {
  return (
    <Container>
      <Bgit src={img} />
      <Cardprops
        bg="#ebfcff"
        mr=""
        mid="At Tynker, we teach kids and teens to code through both our self-paced, game-like courses and our teacher-led private online classes. With Tynker, there’s a path to coding certification for all ages and skill levels that will advance them to real-world Python, Web Dev, Data Science and more!"
        bw="27%"
        imw="35%"
        ht="100%"
        bt="learn more"
        pd="15px 14px"
        wd={38}
        fd="row"
        Spp="Coding plays a pivotal role in our daily lives from cars and coffee makers to life-changing advancements in medicine, environmental conservation, space exploration, and much more."
        timage=""
        Sp="Select the option that’s best for your child!"
        Htext="Parents"
        image={forparent}
      />
      <br />
      <br />
      <Cardprops
        bg="#ebfcff"
        mr=""
        Spp="Join over 100,000 schools that use Tynker to engage students with coding and connect with other educators who love to code!"
        mid="Teaching coding with Tynker is as easy as 1-2-3. In just minutes, you can create a free account, set up your virtual classroom, and assign ready-made lesson plans!"
        Sp="Tynker empowers K-12 educators with free PD, standards-aligned curricula, cross-curricular STEM coding, AP Computer Science courses, and many great coding resources."
        bw="27%"
        imw="30%"
        ht="100%"
        bt="learn more"
        pd="15px 14px"
        wd={38}
        fd="row-reverse"
        timage=""
        Htext="Educators"
        image={forteachers}
      />
      <Bgib src={imgb} />
    </Container>
  );
};

export default Hero2;

const Bgit = styled.img`
  width: 100%;
  background-color: #ebfcff;
  position: absolute;
  top: -17%;
`;
const Bgib = styled.img`
  position: absolute;
  width: 100%;
  bottom: -30;
  background-color: #ebfcff;
`;

const Container = styled.div`
  background-color: #ebfcff;
  position: relative;
  width: 100%;
  height: 900px;
`;
