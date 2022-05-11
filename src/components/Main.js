import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

import resume from "../resources/resume.pdf";

import hero from "../images/hero-green.png";
import { colors } from "../util/Colors";
import Fade from "react-reveal/Fade";
const fadeIn = keyframes`
  0% {
    opacity: 0
  }

  100% {
    opacity: 1
  }
`;
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
  animation: ${fadeIn} 1s ease-in;

  @media (max-width: 768px) {
    background-size: 65%;
    justify-content: flex-start;
  }
`;
const Heading = styled.h1`
  font-weight: 800;
  font-size: 64px;
  color: ${colors.lightGreen};
  margin: 0;
  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const HeroIntro = styled.p`
  font-family: "IBM Plex Mono", monospace;
  margin-bottom: 40px;
  width: 45%;
  font-size: 14px;
  line-height: 20px;
  color: ${colors.lightGreen};
  @media (max-width: 1280px) {
    width: 65%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const IntroMessage = styled.p`
  color: ${colors.whiteGreen};
  font-family: "IBM Plex Mono", monospace;
  margin-top: 100px;
  margin-bottom: 24px;
  font-size: 12px;
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
  background-color: ${colors.darkGreen};

  &:hover {
    transition: 0.25s;
    background-color: ${colors.mediumGreen};
  }
`;

const ButtonTitle = styled.h5`
  font-size: 14px;
  font-family: "Spartan";
  color: ${colors.lightGreen};
`;

const Author = styled.a`
  text-align: center;

  link-style: none;
  text-decoration: none;
  outline: none;
  display: flex;
  justify-content: center;
  margin-top: 150px;
  cursor: default;
  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

const AuthorText = styled.p`
  color: ${colors.lightGreen};

  font-size: 12px;
  cursor: pointer;

  &:hover {
    color: ${colors.whiteGreen};
    transition: 1s;
  }
`;

const Wrapper = styled.div`
  animation: ${fadeIn} 1s ease-in;
`;
export default class Main extends Component {
  render() {
    return (
      <>
        <MainDiv>
          <Wrapper>
            <Fade cascade duration={3000} delay={1000}>
              <IntroMessage>Hello~ My name is</IntroMessage>
            </Fade>
            <Fade left cascade duration={1000} delay={1000}>
              <Heading>Bean Namgung</Heading>
              <HeroIntro>
                I also go by <IntroSpan>Ken!</IntroSpan> I am a React developer
                based in Vancouver, BC pursuing to build
                <IntroSpan> beautiful</IntroSpan>,
                <IntroSpan> responsive</IntroSpan>, and
                <IntroSpan> user-friendly</IntroSpan> application.
              </HeroIntro>
              <BioButton href={resume} target="_blank" rel="noopener">
                <ButtonTitle>My Resume</ButtonTitle>
              </BioButton>
            </Fade>
          </Wrapper>
        </MainDiv>
        <Fade bottom delay={1500}>
          <Author
            href="https://github.com/knamgung/knamgung"
            rel="noopener"
            target="_blank"
          >
            <AuthorText>
              Designed & Made by Bean Namgung
              <span role="img" aria-label="plant-emoji">
                {" "}
                🌱
              </span>
            </AuthorText>
          </Author>
        </Fade>
      </>
    );
  }
}
