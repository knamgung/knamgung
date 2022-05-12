import React, { Component } from "react";
import styled from "styled-components";

import { colors } from "../util/Colors";
import "../util/styleReset.css";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-scroll-parallax";

const ExperienceWrapper = styled.div`
  margin: 200px 0 240px 0;
`;
const Experiences = styled.div`
  width: 100%;
  display: flex;
  color: ${colors.lightGreen};

  justify-content: space-between;

  @media (max-width: 768px) {
    flex-flow: column;
  }
`;

const JobList = styled(Parallax)`
  display: flex;
  flex-flow: column;
  width: 20%;

  @media (max-width: 768px) {
    flex-flow: row;
    width: 100%;
  }
`;
const EachJob = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "Spartan";
  font-size: 16px;
  outline: none;
  height: 64px;
  width: 100%;
  font-weight: ${(props) => (props.company === props.state ? "600" : "400")};
  border: none;
  color: ${colors.lightGreen};
  text-align: left;
  background-color: ${colors.darkGreen};
  cursor: pointer;
  border-right: ${(props) =>
    props.company === props.state
      ? `1.5px solid ${colors.lightGreen};`
      : "none"};

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: ${(props) =>
      props.company === props.state
        ? `1.5px solid ${colors.lightGreen};`
        : "none"};
    font-size: 12px;
  }

  &:hover {
    background-color: ${colors.mediumGreen};
    transition: 0.5s;
  }
`;

const JobTitle = styled.h3`
  color: ${colors.whiteGreen};
  margin-bottom: 6px;
`;

const JobCompany = styled.a`
  link-style: none;
  text-decoration: none;
  color: ${colors.lightGreen};
  font-weight: 700;
  font-size: 16px;
  text-decoration: underline;

  &:hover {
    color: ${colors.sapGreen};
    transition: 0.25s;
  }
`;
const Dates = styled.p`
  font-family: "IBM Plex Mono", monospace;
  font-size: 10px;
  color: white;
`;
const JobDescription = styled(Parallax)`
  width: 70%;
  height: 400px;

  @media (max-width: 768px) {
    margin-top: 32px;
    width: 100%;
    height: auto;
  }
`;

const JobText = styled.p`
  font-family: "IBM Plex Mono", monospace;
  padding: 0 18px;
  color: ${colors.lightGreen};
  margin: 0;
  line-height: 18px;
  font-size: 12px;
`;

const JobPoints = styled.div`
  display: flex;
  margin: 42px 0;
  align-items: flex-start;
`;
const Heading = styled.h1`
  font-weight: 900;
  font-size: 32px;
  color: ${colors.whiteGreen};
  margin-bottom: 64px;
`;
export default class Experience extends Component {
  state = {
    currentJob: "The Reframe Group",
  };

  render() {
    const { currentJob } = this.state;
    return (
      <ExperienceWrapper>
        <Heading>Experience</Heading>

        <Experiences>
          <JobList speed={5} easing="easeOut" translateY={[-10, 10]}>
            <EachJob
              company="The Reframe Group"
              onClick={() => this.setState({ currentJob: "The Reframe Group" })}
              state={currentJob}
            >
              The Reframe Group
            </EachJob>
            <EachJob
              company="Faire"
              onClick={() => this.setState({ currentJob: "Faire" })}
              state={currentJob}
            >
              Faire
            </EachJob>
            <EachJob
              company="Limelight"
              onClick={() => this.setState({ currentJob: "Limelight" })}
              state={currentJob}
            >
              Limelight
            </EachJob>
            <EachJob
              company="FC"
              onClick={() => this.setState({ currentJob: "FC" })}
              state={currentJob}
            >
              Fashion For Change
            </EachJob>
            <EachJob
              company="UWHH"
              onClick={() => this.setState({ currentJob: "UWHH" })}
              state={currentJob}
            >
              UW Hip Hop
            </EachJob>
          </JobList>
          {currentJob === "The Reframe Group" ? (
            <Reframe></Reframe>
          ) : currentJob === "Faire" ? (
            <Faire></Faire>
          ) : currentJob === "Limelight" ? (
            <Limelight></Limelight>
          ) : currentJob === "UWHH" ? (
            <UWHH></UWHH>
          ) : (
            <FC></FC>
          )}
        </Experiences>
      </ExperienceWrapper>
    );
  }
}
function Reframe() {
  return (
    <JobDescription speed={-5}>
      <Fade bottom>
        <JobTitle>Full Stack Developer</JobTitle>
        <JobCompany
          href="https://reframeinsurance.ca/"
          target="_blank"
          rel="noopener"
        >
          The ReFrame Group
        </JobCompany>
        <Dates>Vancouver, BC June. 2021 - Current</Dates>

        <JobPoints>
          <span role="img" aria-label="plant-emoji">
            🌱
          </span>
          <JobText>
            Delegated with the designer and financial advisors to devise a
            Financial Planning Software aimed to alleviate the pain point of the
            lack of education in financial literacy
          </JobText>
        </JobPoints>

        <JobPoints>
          <span role="img" aria-label="plant-emoji">
            🌱
          </span>
          <JobText>
            Developed front-end pages and reusable components written in React
            and Redux. Integrated backend REST API to front-end components using
            Axios with JWT Authentication
          </JobText>
        </JobPoints>

        <JobPoints>
          <span role="img" aria-label="plant-emoji">
            🌱
          </span>
          <JobText>
            Established a secure SMTP server for client emails and built a
            Amazon S3 bucket for object storage using methods under a Python
            Flask framework to view, download, and delete files.
          </JobText>
        </JobPoints>

        <JobPoints>
          <span role="img" aria-label="plant-emoji">
            🌱
          </span>
          <JobText>
            Implemented a series of APIs performing countless of financial
            calculations to provide users on the front end with comprehensive
            visual representation of their financial well-being
          </JobText>
        </JobPoints>
      </Fade>
    </JobDescription>
  );
}

function Faire() {
  return (
    <JobDescription speed={-5}>
      <Fade bottom>
        <JobTitle>Front-End 'React' Engineer</JobTitle>
        <JobCompany
          href="https://www.faire.com/"
          target="_blank"
          rel="noopener"
        >
          Faire
        </JobCompany>
        <Dates>Waterloo, ON May. 2020 - August 2020</Dates>

        <JobPoints>
          <span role="img" aria-label="plant-emoji">
            🌱
          </span>
          <JobText>
            Ensured a positive trend in Faire’s GMV using Agile by collaborating
            on new features with my pod to relieve pain points for the brand’s
            order management experience.
          </JobText>
        </JobPoints>

        <JobPoints>
          <span role="img" aria-label="plant-emoji">
            🌱
          </span>
          <JobText>
            Developed responsive TypeScript React components using MobX to
            manage states in order to integrate Faire’s API.
          </JobText>
        </JobPoints>

        <JobPoints>
          <span role="img" aria-label="plant-emoji">
            🌱
          </span>
          <JobText>
            Constructed Cypress and Jest user flow tests to determine all bugs
            in my work before they were deployed live to the website.
          </JobText>
        </JobPoints>

        <JobPoints>
          <span role="img" aria-label="plant-emoji">
            🌱
          </span>
          <JobText>
            Contributed in diversifying Waterloo’s Dance Community by marketing
            Limelight’s performances and Youtube channel.
          </JobText>
        </JobPoints>
      </Fade>
    </JobDescription>
  );
}

function Limelight() {
  return (
    <JobDescription speed={-5}>
      <Fade bottom>
        <JobTitle>Director</JobTitle>
        <JobCompany
          href="https://www.youtube.com/channel/UC40GdqVnIsD23o_5fYvy3dQ"
          target="_blank"
          rel="noopener"
        >
          Limelight Dance Crew
        </JobCompany>
        <Dates>Waterloo, ON Jan. 2018 - Dec. 2020</Dates>

        <JobPoints>
          <span role="img" aria-label="plant-emoji">
            🌱
          </span>
          <JobText>
            Contributes in diversifying Waterloo’s Dance Community by marketing
            Limelight’s performances and Youtube channel.
          </JobText>
        </JobPoints>

        <JobPoints>
          <span role="img" aria-label="plant-emoji">
            🌱
          </span>
          <JobText>
            Operated the production team to film and edit shots using Premiere
            Pro to create high quality dance covers.
          </JobText>
        </JobPoints>
      </Fade>
    </JobDescription>
  );
}

function FC() {
  return (
    <JobDescription speed={-5}>
      <Fade bottom>
        <JobTitle>Motion Graphic Designer</JobTitle>
        <JobCompany
          href="https://fashionforchange.ca/"
          target="_blank"
          rel="noopener"
        >
          Fashion For Change
        </JobCompany>
        <Dates>Waterloo, ON Oct 2018 - April 2019</Dates>

        <JobPoints>
          <span role="img" aria-label="plant-emoji">
            🌱
          </span>
          <JobText>
            Conducted a team of videographers to film, edit and produce 50% of
            all the scene shoots for the final show
          </JobText>
        </JobPoints>
        <JobPoints>
          <span role="img" aria-label="plant-emoji">
            🌱
          </span>
          <JobText>
            Animated graphic assets with Adobe After Effects to incorporate
            branding in Fashion For Change's promotional videos and show scenes.
          </JobText>
        </JobPoints>
      </Fade>
    </JobDescription>
  );
}

function UWHH() {
  return (
    <JobDescription speed={-5}>
      <Fade bottom>
        <JobTitle>Performance Director</JobTitle>
        <JobCompany
          href="https://www.instagram.com/uwhiphop/?hl=en"
          target="_blank"
        >
          UW Hip Hop
        </JobCompany>
        <Dates>Waterloo, ON Sept. 2019 - Dec. 2019</Dates>

        <JobPoints>
          <span role="img" aria-label="plant-emoji">
            🌱
          </span>
          <JobText>
            Directed a team of 100 performers to showcase a performance to
            represent University of Waterloo's hip hop community.
          </JobText>
        </JobPoints>
      </Fade>
    </JobDescription>
  );
}
