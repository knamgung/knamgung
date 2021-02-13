import React, { Component } from "react";
import NavigationBar from "../../components/Navbar.js";
import styled from "styled-components";
import intro from "../../images/AWAIR/intro.png";
import logo from "../../images/AWAIR/logo.png";
import BigIdeaSummary from "../../images/AWAIR/Bigideasummary.png";
import HeroImage from "../../images/AWAIR/HeroImage.png";

import GreenBoard from "../../images/AWAIR/Proposal-Boards2.png";
import YellowBoard from "../../images/AWAIR/Proposal-Boards.png";
import BlueBoard from "../../images/AWAIR/Proposal-Boards3.png";

import PurpleBoard from "../../images/AWAIR/Proposal-Boards4.png";

import Vimeo from "@u-wave/react-vimeo";
import Instagram from "../../icons/instagram.js";
import Website from "../../icons/website.js";

import "../../util/styleReset.css";

import ScrollMenu from "react-horizontal-scrolling-menu";
import fullPropBoard from "../../resources/ProposalBoards.pdf";
import businessModelCanvas from "../../images/AWAIR/BMC.png";

import bmcFile from "../../resources/BMC.pdf";
import financeFile from "../../resources/Financial.pdf";

import { colors } from "../../util/Colors";

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

  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1280px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
  }
`;

const SubtleDiv = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  margin-top: 140px;
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
`;
const ProjectTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  width: 64px;
  height: 20px;
  background-color: #fdf51f;
  margin-bottom: 4px;
  margin-left: 24px;
`;
const ProjectTagName = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 10px;
  padding-top: 4px;
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
    margin-top: 24px;
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
    margin-top: 50px;

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
    width: 75%;
    margin-top: 32px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Sprint = styled(Ideation)``;
const SectionTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${colors.whiteGreen};
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
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "14px;")}

  }
`;

const SprintSection = styled.div`
  display: flex;
  margin-top: 80px;
`;

const EachSprint = styled.div`
  display: flex;
  flex-flow: column;
  margin-right: 50px;
  width: 300px;
  height: 500px;
  padding: 12px 24px;
  -webkit-box-shadow: -2px 6px 13px 2px rgba(0, 0, 0, 0.12);
  box-shadow: -2px 6px 13px 2px rgba(0, 0, 0, 0.12);
  background-color: ${(props) => props.color};
  justify-content: space-between;
  color: white;
  border-radius: 12px;
`;

const SprintBlock = styled.div`
  height: 50%;
`;

const TitleBox = styled.div`
  padding: 8px 12px;
  background-color: ${colors.sapGreen};
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  } ;
`;

const Solutions = styled(Ideation)``;

const SolutionsSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  flex-flow: column;
`;

const SolutionGrey = styled.div`
  background-color: ${colors.mediumGreen};
  padding: 8px 24px;
  text-align: center;
  display: flex;
  align-items: center;

  @media (max-width: 1280px) {
    flex-flow: column;
  }
`;

const Footer = styled.div`
  background-color: black;
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
  color: white;
`;

const FooterLink = styled.a`
  text-decoration: none;
  margin-bottom: 24px;
  color: white;
`;

const FooterGit = styled(FooterLink)`
  font-weight: 700;
  margin: 0;

  color: #fdf51f;
`;

const SprintVideo = styled(Vimeo)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const VidWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const EachSolution = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  height: 300px;
  margin-top: 50px;

  @media (max-width: 1280px) {
    flex-flow: column;
    height: auto;
    margin: 50px 0;
  }
`;

const SolutionText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

const SolutionFirst = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  width: 65%;
  height: 200px;
`;
const SolutionSecond = styled.div`
  width: 50%;

  padding: 0 64px;
  border-left: 1.25px solid;
  border-color: ${colors.mediumGreen};
  @media (max-width: 1280px) {
    margin: 32px 0;
    border-left: none;
    border-bottom: 1.25px solid;
    padding: 32px 0;
    width: 100%;
  }
`;
const FinalVideo = styled(Vimeo)`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const AllSolutions = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  @media (max-width: 1280px) {
    padding: 0 120px;
    margin-top: 32px;
  }

  @media (max-width: 768px) {
    padding: 0 64px;
  }
`;

const BigHero = styled(Ideation)``;

const BigHeroSection = styled.div`
  margin-top: 50px;
`;

const BigHeroImagesWrap = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-flow: column;
    align-items: center;
  }
`;
const BigHeroImages = styled.img`
  width: 49%;
  @media (max-width: 768px) {
    margin: 12px 0;
    width: 80%;
  }
`;

const ProposalBoard = styled(Ideation)``;

const ProposalBoardSection = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;

  align-items: flex-start;

  @media (max-width: 768px) {
    flex-flow: column;
    align-items: center;
  }
`;
const BoardTexts = styled.div`
  width: 45%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Boards = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 45%;

  justify-content: space-between;
  background-color: ${colors.mediumGreen};
  padding: 12px 20px;
  @media (max-width: 768px) {
    margin-top: 64px;
    width: 80%;
  }
`;

const EachBoard = styled.img`
  width: 49%;
  margin: 8px 0;
`;

const ViewBoardButton = styled.a`
  outline: none;
  text-decoration: none;
  text-align: center;
  color: ${colors.hyperlink};
  font-weight: 700;
  link-style: none;
  &:active,
  &:focus,
  &:active {
    color: inherit;
  }
`;

const ViewBoardDiv = styled.div`
  width: 100%;
  margin-top: 64px;
`;

const BusinessModel = styled(Ideation)``;

const BMCSection = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-flow: column;
    align-items: center;
  }
`;

const BMCLinks = styled.div`
  display: flex;
  width: 100%;
  margin-top: 64px;
`;

const BMCImage = styled.img`
  width: 50%;
  @media (max-width: 768px) {
    margin-top: 64px;
    width: 80%;
  }
`;

const BMCLink = styled.a`
  outline: none;
  text-decoration: none;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)};
  color: ${colors.hyperlink};
  font-weight: 700;
  link-style: none;

  &:active,
  &:focus,
  &:active {
    color: inherit;
  }
`;

const BMCDescription = styled.div`
  display: flex;
  flex-flow: column;
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const sprintData = [
  {
    title: "Sprint 1 | Understand",
    summary:
      "This sprint illustrates our understanding of the brief, the problem we wanted to explore (air quality & poor air quality in dense cities).",
    videoId: "484963729",
    color: "#558fc7",
  },
  {
    title: "Sprint 2 | Define",
    summary:
      "We defined our problem, identifying the root cause of air pollution and creating user personas.",
    videoId: "464338659",
    color: "#4a72b3",
  },
  {
    title: "Sprint 3 | Diverge",
    summary:
      "Our 3rd sprint allowed us to divide and concur. We each independently ideated unique product designs to tackle our problem. We came together at the end to work together.",
    videoId: "471506743",
    color: "#95af53",
  },
  {
    title: "Sprint 4 | Decide",
    summary:
      "Sprint 4 lead us to voting on our ideas to decide on the most viable. We looked at our competitor analysis’ and voted on our likes & dislikes, and worked on implementing them into our solution.",
    videoId: "476081272",
    color: "#4d6f44",
  },
  {
    title: "Sprint 5 | Prototype",
    summary:
      "Our 6th and final sprint tells the whole story. We walk through the problem, our solution, user testing and our business viability.",
    videoId: "484581788",
    color: "#58495c",
  },
];

const Arrow = styled.div`
  padding: 20px;
  cursor: pointer;
  color: black;
  font-weight: 800;
`;

export default class AWAIR extends Component {
  state = {
    selected: 484963729,
  };

  onSelect = (key) => {
    this.setState({ selected: key });
  };

  Arrow = ({ text }) => {
    return <Arrow>{text}</Arrow>;
  };
  render() {
    console.log(this.state.selected);
    return (
      <>
        <MainPage>
          <NavigationBar></NavigationBar>
          <SubtleDiv>
            <ProjectHeader>
              <DescriptionHeader>
                <TitleHeader>
                  <ProjectTitle>AWAIR</ProjectTitle>
                  <ProjectTag>
                    <ProjectTagName>DESIGN</ProjectTagName>
                  </ProjectTag>
                </TitleHeader>
                <SubtleDescription>
                  <b>RSA Student Design Project</b>

                  <ProjectDescMono>
                    AWAIR is an art exhibiton, located first in Toronto,
                    designed to empower citizens to make meaningful change
                    through education about air quality.
                  </ProjectDescMono>
                </SubtleDescription>
                <div>
                  <Subhead>Team</Subhead>
                  <StackList>
                    <StackItems>Tessa Bennett</StackItems>
                    <StackItems>Jocasta Hon</StackItems>
                    <StackItems>Krystyna Poremba</StackItems>
                    <StackItems>Sophia Tomaini</StackItems>
                  </StackList>
                </div>
                <div>
                  <Subhead>Front-End</Subhead>

                  <StackList>
                    <StackItems>React Native</StackItems>
                    <StackItems>Axios</StackItems>
                    <StackItems>Expo</StackItems>
                  </StackList>
                </div>
              </DescriptionHeader>
              <PreviewHeader>
                <PreviewImage src={logo}></PreviewImage>
              </PreviewHeader>
            </ProjectHeader>

            <Ideation>
              <SectionTitle>Ideation</SectionTitle>
              <IdeationSection>
                <IdeationDesc>
                  <SectionDescription>
                    Our team selected a brief from a list released by the RSA.We
                    chose carefully based on personal interest, opportunity for
                    innovation and market potential in different industries.
                    Ultimately, we settled on “The Right to Breathe”, the brief
                    outlining the devastating effects of air pollution.
                  </SectionDescription>
                  <SectionDescription style={{ marginTop: "30px" }}>
                    We quickly discovered that densely populated cities
                    worldwide suffer from poor air quality, perpetuated by a
                    lack of relevant, meaningful education surrounding this
                    issue.
                  </SectionDescription>
                </IdeationDesc>
                <IdeationImg src={intro}></IdeationImg>
              </IdeationSection>
            </Ideation>

            <Sprint>
              <TitleBox>
                <AltSectionTitle>Our Sprints</AltSectionTitle>
              </TitleBox>

              <SprintSection>
                <ScrollMenu
                  menuStyle={{
                    width: "100%",
                  }}
                  alignCenter={false}
                  itemStyle={{ outline: "none" }}
                  wheel={true}
                  scrollToSelected={true}
                  selected={this.state.selected}
                  onSelect={this.onSelect}
                  data={sprintData.map((sprint) => {
                    return (
                      <EachSprint color={sprint.color} key={sprint.videoId}>
                        <SprintBlock>
                          <Subhead>{sprint.title}</Subhead>
                          <SectionDescription>
                            {sprint.summary}
                          </SectionDescription>
                        </SprintBlock>
                        <VidWrapper>
                          <SprintVideo video={sprint.videoId}></SprintVideo>
                        </VidWrapper>
                      </EachSprint>
                    );
                  })}
                ></ScrollMenu>
              </SprintSection>
            </Sprint>

            <BigHero>
              <SectionTitle>Big Idea Summary & Hero Image</SectionTitle>
              <BigHeroSection>
                <BigHeroImagesWrap>
                  <BigHeroImages src={BigIdeaSummary}></BigHeroImages>
                  <BigHeroImages src={HeroImage}></BigHeroImages>
                </BigHeroImagesWrap>
              </BigHeroSection>
            </BigHero>

            <ProposalBoard>
              <TitleBox>
                <AltSectionTitle>Proposal Boards</AltSectionTitle>
              </TitleBox>

              <ProposalBoardSection>
                <BoardTexts>
                  <SectionDescription>
                    These are the proposal boards for AWAIR. Each board dives
                    deep into one topic: Environmental & Social Impact, Research
                    & Insights, Systems Thinking and Viability. By creating
                    these, we are easily able to illustrate the details and
                    reasons behind AWAIR.
                  </SectionDescription>
                  <ViewBoardDiv>
                    <ViewBoardButton href={fullPropBoard} target="_blank">
                      Full Proposal Boards
                    </ViewBoardButton>
                  </ViewBoardDiv>
                </BoardTexts>
                <Boards>
                  <EachBoard src={GreenBoard}></EachBoard>
                  <EachBoard src={YellowBoard}></EachBoard>
                  <EachBoard src={BlueBoard}></EachBoard>
                  <EachBoard src={PurpleBoard}></EachBoard>
                </Boards>
              </ProposalBoardSection>
            </ProposalBoard>

            <BusinessModel>
              <SectionTitle>Business Model Canvas</SectionTitle>

              <BMCSection>
                <BMCDescription>
                  <SectionDescription>
                    Our Business Model Canvas and Supplementary Financial
                    Documents are meant to highlight the viability of our
                    project. We dive deep into project revenues, our value
                    proposition and how we plan to stay a float.
                  </SectionDescription>
                  <BMCLinks>
                    <BMCLink target="_blank" href={bmcFile}>
                      Business Model Canvas
                    </BMCLink>
                    <BMCLink
                      marginLeft={"32px;"}
                      target="_blank"
                      href={financeFile}
                    >
                      Financials
                    </BMCLink>
                  </BMCLinks>
                </BMCDescription>
                <BMCImage src={businessModelCanvas}></BMCImage>
              </BMCSection>
            </BusinessModel>

            <Solutions>
              <SectionTitle>Our Solutions</SectionTitle>
              <SolutionsSection>
                <SolutionGrey>
                  <SectionDescription>
                    Our solution? We created a temporary, immersive, educational
                    experience, located first in Toronto. We call it AWAIR, and
                    it’s not your average exhibit.
                  </SectionDescription>
                  <SectionDescription>
                    AWAIR has a few components: <b> instagram</b> page for
                    marketing, a <b>website</b> for ticket sales and
                    information, and of course, the <b>exhibit </b> itself.
                  </SectionDescription>
                </SolutionGrey>
                <AllSolutions>
                  <EachSolution>
                    <SolutionFirst>
                      <Instagram></Instagram>
                    </SolutionFirst>
                    <SolutionSecond>
                      <Subhead>Instagram Page</Subhead>

                      <SolutionText>
                        Featured on our page are teaser-posters for our exhibit,
                        introductions of its creators, our company goals, and
                        various facts and figures regarding air quality in the
                        city in which AWAIR resides at that time.
                      </SolutionText>
                    </SolutionSecond>
                  </EachSolution>

                  <EachSolution>
                    <SolutionFirst>
                      <FinalVideo video={489069816}></FinalVideo>
                    </SolutionFirst>

                    <SolutionSecond>
                      <Subhead>The Exhibit</Subhead>
                      <SolutionText>
                        AWAIR: A temporary, immersive exhibit designed to
                        educate and bring awareness to poor air quality in dense
                        cities and encourages viewers to participate in
                        small-scale changes to combat it.
                      </SolutionText>
                    </SolutionSecond>
                  </EachSolution>

                  <EachSolution>
                    <SolutionFirst>
                      <Website></Website>
                    </SolutionFirst>
                    <SolutionSecond>
                      <Subhead>The Website</Subhead>
                      <SolutionText>
                        The website invites users to purchase tickets and hosts
                        resources for visitors to read and listen to before and
                        after the experience. It allows them to access the
                        written and audio materials at their convenience,
                        creating value that can last.
                      </SolutionText>
                    </SolutionSecond>
                  </EachSolution>
                </AllSolutions>
              </SolutionsSection>
            </Solutions>
          </SubtleDiv>
        </MainPage>
        <Footer>
          <FooterMsg>
            Check it out on {` `}
            <FooterGit
              target="_blank"
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
