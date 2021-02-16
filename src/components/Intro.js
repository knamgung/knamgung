import React, { Component } from "react";
import styled from "styled-components";
import resume from "../resources/resume.pdf";
import me from "../images/me.jpg";
import { colors } from "../util/Colors";
import Slide from "react-reveal/Slide";

const AboutDiv = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  margin-top: 200px;
  @media (max-width: 1280px) {
  }

  @media (max-width: 768px) {
    margin-top: 100px;
  }
`;
const Heading = styled.h1`
  font-weight: 900;
  font-size: 32px;
  color: ${colors.whiteGreen};
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: ${colors.lightGreen};
  line-height: 32px;
  margin-top: 24px;
`;

const DescDiv = styled.div`
  width: 65%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const AltHeading = styled(Heading)`
  padding: 0;
  margin: 0;
  padding-top: 4px;
`;

const ResumeLink = styled.a`
  width: 240px;
  color: ${colors.hyperlink};
  text-decoration: none;
  font-weight: 700;
`;
const HeadingBox = styled.div`
  width: 25%;
  padding: 8px 12px;
  background-color: ${colors.sapGreen};
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  @media (max-width: 768px) {
    width: 100%;

    padding: 8px 0px;
    padding-left: 8px;
  }
`;

const AboutInfo = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-flow: column-reverse;
    margin-top: 50px;
  }
`;

const MyImage = styled.div`
  width: 200px;
  margin-left: 80px;
  background-image: url(${me});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 0 24px 0;
    height: 250px;
  }
`;
export default class Intro extends Component {
  render() {
    return (
      <AboutDiv data-sal="fade" data-sal-duration="1000" data-sal-easing="ease">
        <Slide left duration={1000}>
          <HeadingBox>
            <AltHeading>Hello!</AltHeading>
          </HeadingBox>
        </Slide>
        <AboutInfo>
          <DescDiv>
            <Description>
              My name is Ken, and I am a graduate of a Web Development program
              and a current interactive design student. Throughout my time at
              Waterloo, I have been exposed to disciplines within the tech
              industry that entice my interests. Design was the direction that I
              sought out, however being around an environment of problem solvers
              and innovators I wanted to educate myself further than design. I
              want to design and create interactive products for pain points we
              experience everyday in our lives!
            </Description>
            <Description>
              In my free time, I enjoy expressing artistry through involvement
              in the local dance communities. Invests time in directing dance
              performances and instituting a positive and passionate environment
              for all levels of dancers and performers.
            </Description>
          </DescDiv>
          <MyImage></MyImage>
        </AboutInfo>
        <ResumeLink href={resume} target="_blank" rel="noopener">
          <p>Check out my resume!</p>
        </ResumeLink>
      </AboutDiv>
    );
  }
}
