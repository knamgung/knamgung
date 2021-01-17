import React, { Component } from "react";
import styled from "styled-components";

import hero from "../images/hero-image.png";
import Anime from "react-anime";

const MainDiv = styled.div`
  font-family: "Spartan";
  height: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-position: right bottom;

  @media (max-width: 1280px) {
    background-size: contain;
  }

  @media (max-width: 768px) {
    background-size: contain;
  }
`;
const Heading = styled.h1`
  font-weight: 900;
  font-size: 32px;
  color: Black;
  margin-bottom: 40px;
`;

const AltHeading = styled(Heading)`
  color: white;
  padding: 0;
  margin: 0;
`;
const HeadingBox = styled.div`
  padding: 8px 12px;
  background-color: black;
  width: 70.5%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 8px 0px;
    padding-left: 8px;
  }
`;

export default class Main extends Component {
  render() {
    return (
      <MainDiv>
        <Anime
          easing="easeInOutExpo"
          duration={1000}
          autoplay={true}
          direction="normal"
          delay={(el, index) => index * 240}
          scale={[0.8, 1]}
          elasticity={50}
        >
          <Heading>
            Hi, I'm Ken! <br />
            I'm a React Developer
          </Heading>
          <HeadingBox>
            <AltHeading>Building Solutions to Solve Human Problems</AltHeading>
          </HeadingBox>
        </Anime>
      </MainDiv>
    );
  }
}
