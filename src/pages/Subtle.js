import React, { Component } from "react";
import styled from "styled-components";
import preview from "../images/subtle/subtle-preview.png";
import problemSpace from "../images/subtle/problem-space.png";
import keyChallenges from "../images/subtle/key-challenges.png";
import demoDayImg from "../images/subtle/demo-day.jpeg";

import "../util/styleReset.css";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import { colors } from "../util/Colors";
const MainPage = styled.main`
  color: ${colors.lightGreen};
  width: 100%;
  margin: 0;
  padding: 0 320px;
  box-sizing: border-box;
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

const Subhead = styled.h5`
  font-size: 16px;
  color: ${colors.whiteGreen};
`;

const StackList = styled.div`
  display: flex;
  flex-flow: wrap;
  padding: 0;
  width: 100%;
  margin: 28px 0;
`;

const StackItems = styled.p`
  padding: 0 24px 0 0;
`;

const PreviewHeader = styled.div`
  background-color: ${colors.mediumGreen};
  width: 42%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 42px 0px;

  @media (max-width: 1280px) {
    width: 100%;
    margin-top: 40px;
  }
`;
const SectionDescription = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;

  }
`;
const PreviewImage = styled.img`
  width: 80%;
  height: auto;
`;

const Ideation = styled.div`
  margin: 100px 0;
`;

const IdeationSection = styled.div``;

const IdeationSub = styled.div`
  display: flex;
  margin-top: 50px;
  flex-flow: column-reverse;
  align-items: center;
`;
const IdeationSubText = styled(SectionDescription)`
  width: 100%;
`;

const ProblemSpace = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  background-color: ${colors.mediumGreen};
  padding: 12px 24px;
  margin-top: 14px;
`;

const IdeationImg = styled.img`
  width: 50%;
  margin: 40px 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const KeyChallenges = styled(Ideation)``;

const KeySection = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 80px;
  align-items: center;
`;

const KeyFirst = styled.div``;
const KeySecond = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 12px 24px;
  background-color: ${colors.mediumGreen};
  width: 100%;
`;

const KeyImg = styled.img`
  margin: 40px 0;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const SectionTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${colors.whiteGreen};
`;

const AltSectionTitle = styled(SectionTitle)``;

const TitleBox = styled.div`
  padding: 8px 12px;
  background-color: ${colors.sapGreen};

  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
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

const KeyText = styled.p`
  font-weight: 600;
  line-height: 24px;
  font-size: 12px;
  margin-bottom: 24px;
`;

const DemoDay = styled.div``;

const DemoSection = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 80px;
  align-items: center;
`;
const DemoImg = styled.img`
  width: 55%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DemoDescription = styled.div`
  width: 100%;
  margin: 50px 0;
`;

export default class Subtle extends Component {
  render() {
    return (
      <>
        <MainPage>
          <SubtleDiv>
            <ProjectHeader>
              <DescriptionHeader>
                <Slide left duration={1000}>
                  <TitleHeader>
                    <ProjectTitle>Subtle.</ProjectTitle>
                    <ProjectTag>
                      <ProjectTagName>CODE</ProjectTagName>
                    </ProjectTag>
                  </TitleHeader>
                </Slide>
                <Fade bottom duration={1500} cascade>
                  <SubtleDescription>
                    <b>BrainStation Capstone Project</b>
                  </SubtleDescription>
                  <ProjectDescMono>
                    a machine-learning application that analyzes poses in
                    photographs to provide a summary of repetitive gestures
                  </ProjectDescMono>
                </Fade>
                <Fade bottom duration={1000} delay={1000} cascade>
                  <div>
                    <Subhead>Front-End</Subhead>
                    <StackList>
                      <StackItems>Apollo</StackItems>
                      <StackItems>ml5.js</StackItems>
                      <StackItems>p5.js</StackItems>
                      <StackItems>React.js</StackItems>
                      <StackItems>Tensorflow.js</StackItems>
                    </StackList>
                  </div>
                </Fade>
                <Fade bottom duration={1000} delay={1500} cascade>
                  <div>
                    <Subhead>Back-End</Subhead>

                    <StackList>
                      <StackItems>Express.js</StackItems>
                      <StackItems>GraphQL</StackItems>
                      <StackItems>Mongoose</StackItems>
                      <StackItems>MongoDB</StackItems>
                    </StackList>
                  </div>
                </Fade>
              </DescriptionHeader>
              <PreviewHeader>
                <PreviewImage src={preview}></PreviewImage>
              </PreviewHeader>
            </ProjectHeader>

            <Ideation
              data-sal="fade"
              data-sal-duration="1000"
              data-sal-easing="ease"
            >
              <SectionTitle>Ideation</SectionTitle>
              <IdeationSection style={{ marginTop: "80px" }}>
                <IdeationSub>
                  <IdeationImg src={problemSpace}></IdeationImg>
                  <IdeationSubText>
                    Subtle was my first full stack project I worked on. While
                    being in BrainStation, I had the privilege to learn in an
                    environment surrounded by multiple “tech” disciplines. After
                    networking with different classes one subject that caught my
                    eye was Data Science. I was always interested in AI and
                    machine learning, but I’ve never known the process or had a
                    higher level of understanding on how it worked. I decided to
                    pursue my capstone project with this in mind. Although I
                    didn’t have the capabilities or resources to train my own
                    model, I wanted to see how I can map out a model of data on
                    my own. We were given two weeks to complete this project
                  </IdeationSubText>
                </IdeationSub>

                <ProblemSpace>
                  <SectionDescription>
                    Aside from the tech, I wanted to showcase a final project
                    that reflected my favourite interest, dancing. There were
                    only two weeks that I had to design, research, and code my
                    project so I had to make quick decisions on what I actually
                    wanted to make. gh 3/4 the course, I broke down each aspect
                    of dance.
                  </SectionDescription>
                  <SectionDescription>
                    At first I wanted to have an application that broke down and
                    analyzed one’s dancing. However, working with detailed
                    motion and video data points were out of my current
                    capabilities. This is why I broke it down to 3 levels.
                    Dance, Pose, and Pictures.
                  </SectionDescription>
                  <SectionDescription>
                    Tackling the issue one by one helped me get started and
                    initiated my project by focusing on pictures.
                  </SectionDescription>
                </ProblemSpace>
              </IdeationSection>
            </Ideation>

            <KeyChallenges
              data-sal="fade"
              data-sal-duration="1000"
              data-sal-easing="ease"
            >
              <TitleBox>
                <AltSectionTitle>Key Challenges</AltSectionTitle>
              </TitleBox>
              <KeySection>
                <KeyFirst>
                  <SectionDescription>
                    BrainStation always pushed independent learning when it came
                    to Web Development, and I realized it's one of the most
                    important assets to have.
                  </SectionDescription>
                  <SectionDescription>
                    For my project. I had to venture and find the perfect
                    libraries I could use for Subtle and overcome these
                    challenges.
                  </SectionDescription>
                </KeyFirst>
                <KeyImg src={keyChallenges}></KeyImg>

                <KeySecond>
                  <KeyText>
                    1. GraphQL | Being used to SQL and computational
                    programming, I wanted to use GraphQL as part of my backend.
                    As a GBDA student, it’s hard to find opportunities to code
                    and there’s no opportunities to learn about Object Oriented
                    Programming. GraphQL taught me a lot about data
                    organization, and a new definition to perceive Objects
                  </KeyText>
                  <KeyText>
                    2. P5.js | Having learned creative coding in GBDA, I was
                    excited to find a processing version for javascript. I was
                    already familiar with this library, and they provided a
                    great play- ground to test out. However, I did struggle
                    quite a bit integrating media frames into my project.
                  </KeyText>
                  <KeyText>
                    3. Files | I had no idea how to code a file upload
                    interaction. After getting the pop up to appear which
                    apparently was the easier part, it was a mess of asychronous
                    code I had to manage for it to function within my
                    applications. Further more, I realized I was un- aware how
                    phot data is used in the code.
                  </KeyText>
                </KeySecond>
              </KeySection>
            </KeyChallenges>

            <DemoDay>
              <SectionTitle>Demo Day</SectionTitle>
              <DemoSection>
                <DemoImg src={demoDayImg}></DemoImg>
                <DemoDescription>
                  <SectionDescription>
                    After two weeks, demo day arrived and I was extremely
                    nervous to showcase my project. BrainStation had invited
                    industry recruiters and BrainStation alumni to help us
                    network with professionals.
                  </SectionDescription>
                  <SectionDescription>
                    The reaction my project got from the staff and the guests
                    were overwhelmingly positive. I had the opportunity to
                    connect with employers from Vega, PeaceGeeks, Amazon, EA and
                    more! The BrainStation experience gave me the confidence to
                    know that my career was just beginning.
                  </SectionDescription>
                </DemoDescription>
              </DemoSection>
            </DemoDay>
          </SubtleDiv>
        </MainPage>
        <Footer>
          <FooterMsg>
            This has been featured in Brainstation's Summer 2019 Showcase
            Article, Take A Look!
          </FooterMsg>
          <FooterLink
            target="_blank"
            href={`https://blog.brainstation.io/summer-graduate-showcase/
`}
          >
            https://blog.brainstation.io/summer-graduate-showcase/
          </FooterLink>
          <FooterMsg>
            Or check it out on {` `}
            <FooterGit
              target="_blank"
              href={`https://github.com/knamgung/subtle`}
            >
              GitHub
            </FooterGit>
          </FooterMsg>
        </Footer>
      </>
    );
  }
}
