import React, { Component } from "react";
import NavigationBar from "../../components/Navbar.js";
import styled from "styled-components";
import heading from "../../images/Pooler/heading.png";
import first from "../../images/Pooler/first.png";
import final from "../../images/Pooler/final.png";
import ideation from "../../images/Pooler/ideation.png";
import "../../util/styleReset.css";

import { colors } from "../../util/Colors";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
const MainPage = styled.main`
  color: ${colors.lightGreen};
  width: 100%;
  margin: 0;
  padding: 0 320px;
  display: flex;

  @media (max-width: 1280px) {
    padding: 0 112px;
  }

  @media (max-width: 768px) {
    padding: 0 32px;
  }
`;

const ProjectHeader = styled.div`
  width: 100%;
  margin: 240px 0 180px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1280px) {
    flex-direction: column;
    margin: 180px 0;
  }
`;

const SubtleDiv = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
`;

const TitleHeader = styled.div`
  display: flex;
  align-items: baseline;
`;
const ProjectTitle = styled.h1`
  margin-top: 0;
  color: ${colors.whiteGreen};
`;
const SubtleDescription = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 32px;
`;

const ProjectDescMono = styled.p`
  font-family: "IBM Plex Mono", monospace;
  font-size: 16px;
  margin-top: 0;
`;

const ProjectTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  width: 64px;
  height: 20px;
  background-color: ${colors.code};
  margin-bottom: 4px;
  margin-left: 24px;
`;
const ProjectTagName = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 10px;
  padding-top: 4px;
  color: ${colors.darkGreen};
`;

const DescriptionHeader = styled.div`
  display: flex;
  flex-flow: column;
  width: 50%;
  padding-right: 16px;
  border-right: 1.5px solid;
  border-color: ${colors.sapGreen};
  @media (max-width: 1280px) {
    width: 100%;
    border-right: none;
    border-bottom: 1.5px solid;
    padding-bottom: 12px;
    padding-right: 0;
  }
`;

const StackList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 28px 0;
`;

const StackItems = styled.li`
  display: inline;
  margin-right: 24px;
`;

const PreviewHeader = styled.div`
  width: 42%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  @media (max-width: 1280px) {
    width: 60%;
    margin-top: 50px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PreviewImage = styled.img`
  width: 80%;
  height: auto;
`;

const Ideation = styled.div`
  margin: 100px 0;
`;

const IdeationSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1280px) {
    align-items: center;

    flex-flow: column;
  }
`;

const IdeationDesc = styled.div`
  width: 55%;
  align-items: center;
  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const IdeationImg = styled.img`
  width: 40%;
  @media (max-width: 1280px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Brainstorm = styled(Ideation)``;
const SectionTitle = styled.h1`
font-size: 24px;
  color: ${colors.whiteGreen};

font-weight; 700;
`;

const AltSectionTitle = styled(SectionTitle)`
  color: ${colors.whiteGreen};
`;

const Subhead = styled.h5`
  font-size: 16px;
  color: ${colors.whiteGreen};
`;

const SectionDescription = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;

  }
`;

const BrainstormSection = styled.div`
  display: flex;
  margin-top: 50px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1280px) {
    flex-flow: column;
  }
`;

const BrainSub = styled.div`
  background-color: ${colors.mediumGreen};

  display: flex;
  text-align: center;
  margin-top: 52px;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
`;

const BrainSubText = styled.p`
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  margin: 0;
`;

const CoreFeatures = styled.div`
  margin-top: 60px;
`;

const BrainDesc = styled.div`
  width: 45%;

  @media (max-width: 1280px) {
    width: 100%;
    margin-top: 32px;
  }
`;

const BrainstormImg = styled.img`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TitleBox = styled.div`
  padding: 8px 12px;
  background-color: ${colors.sapGreen};

  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  } ;
`;

const Development = styled(Ideation)``;

const DevelopSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  @media (max-width: 1280px) {
    flex-flow: column-reverse;
    align-items: center;
  }
`;

const DevelopImg = styled.img`
  width: 40%;
  @media (max-width: 1280px) {
    width: 70%;
  }
`;

const DevelopSub = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 50%;

  @media (max-width: 1280px) {
    width: 100%;
    margin-top: 32px;
  }
`;

const DevelopGrey = styled.div`
  background-color: ${colors.mediumGreen};
  height: 200px;
  padding: 8px 24px;
  @media (max-width: 1280px) {
    width: auto;
  }
`;

const DevelopSecDesc = styled(SectionDescription)`
  margin-top: 50px;
  text-align: center;

  @media (max-width: 1280px) {
    text-align: left;
  }
`;

const Footer = styled.div`
  background-color: ${colors.sapGreen};
  display: flex;
  flex-flow: Column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  margin-top: 60px;
`;

const FooterMsg = styled.p`
  font-weight: 700;
  margin: 0;
  color: ${colors.darkGreen};
`;

const FooterLink = styled.a`
  text-decoration: none;
  margin-bottom: 24px;
  color: ${colors.lightGreen};
`;

const FooterGit = styled(FooterLink)`
  font-weight: 700;
  margin: 0;
  &:hover {
    text-decoration: underline;
  }
`;
export default class Pooler extends Component {
  render() {
    return (
      <>
        <MainPage>
          <NavigationBar></NavigationBar>
          <SubtleDiv>
            <ProjectHeader>
              <DescriptionHeader>
                <Slide left duration={1000}>
                  <TitleHeader>
                    <ProjectTitle>Pooler</ProjectTitle>
                    <ProjectTag>
                      <ProjectTagName>CODE</ProjectTagName>
                    </ProjectTag>
                  </TitleHeader>
                </Slide>
                <Fade bottom duration={1500} cascade>
                  <SubtleDescription>
                    <b>GBDA 301 Final Project </b>
                  </SubtleDescription>
                  <ProjectDescMono>
                    A mobile rideshare application that provides passengers with
                    consistent reliable rides, and drivers with solution to cost
                    calculation and payment receiving capabilities
                  </ProjectDescMono>
                </Fade>
                <Fade bottom duration={1000} delay={1000} cascade>
                  <div>
                    <Subhead>Team</Subhead>
                    <StackList>
                      <StackItems>Kevin Tang</StackItems>
                    </StackList>
                  </div>
                </Fade>
                <Fade bottom duration={1000} delay={1500} cascade>
                  <div>
                    <Subhead>Front-End</Subhead>

                    <StackList>
                      <StackItems>React Native</StackItems>
                      <StackItems>Axios</StackItems>
                      <StackItems>Expo</StackItems>
                    </StackList>
                  </div>
                </Fade>
              </DescriptionHeader>
              <PreviewHeader>
                <PreviewImage src={heading}></PreviewImage>
              </PreviewHeader>
            </ProjectHeader>

            <Ideation
              data-sal="fade"
              data-sal-duration="1000"
              data-sal-easing="ease"
            >
              <SectionTitle>Ideation</SectionTitle>
              <IdeationSection>
                <IdeationDesc>
                  <SectionDescription>
                    I wanted to explore mobile development after having done
                    work strictly on the web. Once we got our syllabus for GBDA
                    301, I had asked my friend Kevin if he wanted to do a
                    project of our own for this course, he said yes and quickly
                    we got to thinking what kind of solution we wanted to solve.
                    Due to the fact that all the classes were located in
                    Stratford for the third years, Kevin had been driving our
                    friends almost every single day. He was explaining to me how
                    it was challenging for him to calculate how much everyone
                    owed by the end of every month (e.g. sick days/missing
                    class). We took his pain point and used it as our starting
                    point in ideation.
                  </SectionDescription>
                  <SectionDescription style={{ marginTop: "30px" }}>
                    Our project proposal was for a mobile application that aimed
                    to make record-keeping for carpooling easier to create and
                    upkeep; allowing for the driver to update due payments
                    consistently, to give riders better access to information on
                    their payment 'tabs'.
                  </SectionDescription>
                </IdeationDesc>
                <IdeationImg src={ideation}></IdeationImg>
              </IdeationSection>
            </Ideation>

            <Brainstorm
              data-sal="fade"
              data-sal-duration="1000"
              data-sal-easing="ease"
            >
              <TitleBox>
                <AltSectionTitle>Brainstorm + First Iteration</AltSectionTitle>
              </TitleBox>
              <BrainstormSection>
                <BrainstormImg
                  alt="first-iteration-design"
                  src={first}
                ></BrainstormImg>
                <BrainDesc>
                  <SectionDescription>
                    Kevin tackled the design for this project. For our first
                    quick deadline, he drafted a simple and easy to use design
                    on how the application would work and the features that
                    would be included in it.
                  </SectionDescription>
                  <CoreFeatures>
                    <Subhead>Core Features</Subhead>
                    <SectionDescription>
                      • Two Seperate Users (Driver & Passengers)
                    </SectionDescription>
                    <SectionDescription>
                      • Drivers are able to create rides, add passengers, and
                      access each profile to set ride count and costs.
                    </SectionDescription>
                    <SectionDescription>
                      • Ability to find long-term carpool rides
                    </SectionDescription>
                  </CoreFeatures>
                </BrainDesc>
              </BrainstormSection>
              <BrainSub>
                <BrainSubText>
                  We also wanted to eventually work on short term ride-shares
                  without competing with services like Uber. We wanted to
                  eliminate the need for the rideshare groups on Facebook and
                  look for more thrifty carpool options.
                </BrainSubText>
              </BrainSub>
            </Brainstorm>

            <Development>
              <SectionTitle>Development</SectionTitle>
              <DevelopSection>
                <DevelopSub>
                  <SectionDescription>
                    Using Expo, I developed the app using React Native. After
                    using React on web, I realized that the learning curve
                    wasn’t difficult at all. However, I did feel a lot of
                    restrictions implementing certain components and open source
                    libraries within the application.
                  </SectionDescription>
                  <DevelopGrey>
                    <SectionDescription>
                      We had around two weeks to completely learn, design, and
                      execute this project so we tried to keep it simple by
                      having a fully functional front-end. But I also wanted to
                      tackle a small challenge when exploring react native by
                      implementing a working map api/geocode for routing
                      destinations
                    </SectionDescription>
                  </DevelopGrey>
                </DevelopSub>
                <DevelopImg src={final}></DevelopImg>
              </DevelopSection>
              <DevelopSecDesc>
                This project was a short sprint that Kevin and I wanted to
                tackle. Although this project was meant to be finished in a
                short amount of time, we had to make quick cut decisions for
                every dilemma we came across to hand in a functional project.
                React Native was definitely something I wanted to keep
                exploring, each page felt more independent than it did on the
                web which caused me to run into problems dealing with data.
              </DevelopSecDesc>
            </Development>
          </SubtleDiv>
        </MainPage>
        <Footer>
          <FooterMsg>
            Check it out on {` `}
            <FooterGit
              target="_blank"
              rel="noopener"
              href={`https://github.com/knamgung/pooler`}
            >
              GitHub
            </FooterGit>
          </FooterMsg>
        </Footer>
      </>
    );
  }
}
