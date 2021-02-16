import React, { Component } from "react";
import styled from "styled-components";
import resume from "../resources/resume.pdf";

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
  background-size: 55%;
  font-family: "Spartan", sans-serif;

  @media (max-width: 768px) {
    background-size: 65%;
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
  @media (max-width: 1280px) {
    width: 65%;
  }
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

const IntroSpan = styled.span`
  color: ${colors.whiteGreen};
`;

const BioButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 64px;
  link-style: none;
  text-decoration: none;
  font-weight: 700;

  border: 2px ${colors.lightGreen} solid;
`;

const ButtonTitle = styled.a`
  font-size: 18px;
  font-family: "Spartan";
  color: ${colors.lightGreen};
`;
export default class Main extends Component {
  render() {
    return (
      <>
        <MainDiv>
          <IntroMessage>Hello~ My name is</IntroMessage>
          <Heading>Bean Namgung</Heading>
          <HeroIntro>
            I am a React developer based in Vancouver, BC pursuing to build
            <IntroSpan> beautiful</IntroSpan>,<IntroSpan> responsive</IntroSpan>
            , and
            <IntroSpan> user-friendly</IntroSpan> application.
          </HeroIntro>
          <BioButton href={resume} target="_blank">
            <ButtonTitle>Resume</ButtonTitle>
          </BioButton>
        </MainDiv>
      </>
    );
  }
}
