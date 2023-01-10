import React from "react";
import styled from "styled-components";

interface props {
  Spp: string;
  Sp: string;
  Htext: string;
  image: string;
  timage: string;
  fd: string;
  bg: string;
  wd: number;
  pd: string;
  bw: string;
  bt: string;
  ht: string;
  imw: string;
  mr: string;
  mid: string;
}

const Cardprops: React.FC<props> = ({
  Sp,
  wd,
  bg,
  fd,
  Spp,
  image,
  timage,
  Htext,
  pd,
  bw,
  bt,
  imw,
  ht,
  mr,
  mid,
}) => {
  return (
    <Container bg={bg} fd={fd}>
      <Image imw={imw} ht={ht} src={image} />
      <Text mr={mr} wd={wd}>
        <TextImage src={timage} />
        <br />
        <H4>{Htext}</H4>
        <br />
        <Spanprops>{Spp}</Spanprops>
        <br />
        <Mid>{mid}</Mid>
        <br />
        <Span>{Sp}</Span>
        <br />
        <Globalbutton bw={bw} pd={pd}>
          {bt}
        </Globalbutton>
      </Text>
    </Container>
  );
};

export default Cardprops;

const Mid = styled.span`
  font-size: 17px;
  font-weight: 500;
  line-height: 25px;
  color: rgb(10, 10, 10, 0.7);
`;

const Globalbutton = styled.button<{ pd: string; bw: string }>`
  color: #e6edf6;
  font-size: 16px;
  font-weight: 600;
  width: ${(bw) => bw.bw};
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

const TextImage = styled.img``;
const H4 = styled.h4`
  margin: 0;
  text-transform: capitalize;
  font-size: 30px;
`;
const Spanprops = styled.span`
  font-size: 17px;
  font-weight: 500;
  color: rgb(10, 10, 10, 0.7);
  line-height: 25px;
`;
const Span = styled.span`
  font-size: 17px;
  font-weight: 500;
  line-height: 25px;
  color: rgb(10, 10, 10, 0.7);
`;

const Text = styled.div<{ wd: number; mr: string }>`
  width: ${(props) => props.wd}%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin-right: ${(props) => props.mr};
`;

const Image = styled.img<{ imw: string; ht: string }>`
  width: ${(imw) => imw.imw};
  height: ${(ht) => ht.ht};
  object-fit: contain;
`;

const Container = styled.div<{ fd: string; bg: string }>`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 500px;
  flex-direction: ${(props) => props.fd};
  background-color: ${(bg) => bg.bg};
`;
