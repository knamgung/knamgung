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
    margin-top: 180px;
  }

  @media (max-width: 768px) {
  }
`;
const Heading = styled.h1`
  font-weight: 900;
  font-size: 32px;
  color: ${colors.whiteGreen};
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
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
  width: 120px;
  color: ${colors.hyperlink};
  text-decoration: none;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
`;
const DesignLink = styled(ResumeLink)`
  width: 180px;
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

const LinkDiv = styled.div`
  display: flex;
`;
export default class Intro extends Component {
  render() {
    return (
      <AboutDiv>
        <Slide left duration={1000}>
          <HeadingBox>
            <AltHeading>Hello!</AltHeading>
          </HeadingBox>
        </Slide>
        <AboutInfo>
          <DescDiv>
            <Description>
              Hi I'm Bean, or you can call me Ken! I am a Web Developer based in
              Vancouver, BC.
            </Description>
            <Description>
              I dedicate my time designing and developing products that are
              dedicated to the user. I seek to solve uncharted human pain points
              to resolve the continuous gaps in user experience.
            </Description>
            <Description>
              In my free time, I enjoy expressing artistry through involvement
              in the local dance communities. Invests time in directing dance
              performances and instituting a positive and passionate environment
              for all levels of dancers and performers.
            </Description>
            <Description>
              Currently looking for full time opportunities!
            </Description>
          </DescDiv>
          <MyImage></MyImage>
        </AboutInfo>
        <LinkDiv>
          <ResumeLink href={resume} target="_blank" rel="noopener">
            <p>My Resume!</p>
          </ResumeLink>
          <DesignLink
            href="https://drive.google.com/drive/folders/1XMy7iLWXu5bmd8yWC9TSpXcOaF5pu_CU?usp=sharing"
            target="_blank"
            rel="noopener"
          >
            <p>My Design Drive</p>
          </DesignLink>
        </LinkDiv>
      </AboutDiv>
    );
  }
}
