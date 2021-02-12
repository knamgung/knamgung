import React, { Component } from "react";
import styled from "styled-components";

import hero from "../images/hero-green.png";
import Anime from "react-anime";
import { colors } from "../util/Colors";

const MainDiv = styled.div`
  height: 600px;

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 60%;

  @media (max-width: 1280px) {
    background-size: contain;
  }

  @media (max-width: 768px) {
    background-size: contain;
  }
`;
const Heading = styled.h1`
  font-weight: 800;
  font-size: 64px;
  color: ${colors.lightGreen};
  margin: 0;
`;

const AltHeading = styled(Heading)`
  color: ${colors.whiteGreen};
  font-size: 32px;
  font-weight: 600;
  padding: 0;
  margin: 0;
`;

const HeroIntro = styled.p`
  font-family: "IBM Plex Mono", monospace;
  margin-bottom: 40px;
  width: 50%;
  font-size: 14px;
  line-height: 20px;
  color: ${colors.lightGreen};
`;
const HeadingBox = styled.div`
  padding: 12px;
  width: 70.5%;
  backdrop-filter: blur(4px);

  @media (max-width: 768px) {
    width: 100%;
    padding: 8px 0px;
    padding-left: 8px;
  }
`;

const IntroMessage = styled.p`
  color: white;
  margin-top: 100px;
  font-size: 16px;
  font-weight: 100;
`;

export default class Main extends Component {
  render() {
    return (
      <>
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
            <IntroMessage>Hello~ My name is</IntroMessage>
            <Heading>Bean Namgung</Heading>
            <HeroIntro>
              My name is Ken, and I am a graduate of a Web Development program
              and a current interactive design student. Throughout my time at
              Waterloo, I have been exposed to disciplines within the tech
              industry that entice my interests.
            </HeroIntro>
            <HeadingBox>
              <AltHeading>
                Building Solutions to Solve Human Problems
              </AltHeading>
            </HeadingBox>
          </Anime>
        </MainDiv>
      </>
    );
  }
}
