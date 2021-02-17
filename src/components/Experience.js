import React, { Component } from "react";
import styled from "styled-components";

import { colors } from "../util/Colors";
import "../util/styleReset.css";
import Fade from "react-reveal/Fade";

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

const JobList = styled.div`
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
  }

  &:hover {
    background-color: ${colors.mediumGreen};
    transition: 1s;
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
const JobDescription = styled.div`
  width: 70%;
  height: 400px;

  @media (max-width: 768px) {
    margin-top: 32px;
    width: 100%;
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
  margin: 64px 0;
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
    currentJob: "Faire",
  };

  render() {
    const { currentJob } = this.state;
    return (
      <ExperienceWrapper
        data-sal="fade"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        <Heading>Experience</Heading>

        <Experiences>
          <JobList>
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
          {currentJob === "Faire" ? (
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

function Faire() {
  return (
    <JobDescription>
      <Fade bottom>
        <JobTitle>Front-End 'React' Engineer [Co-op]</JobTitle>
        <JobCompany href="https://www.faire.com/" target="_blank">
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
    <JobDescription>
      <Fade bottom>
        <JobTitle>Director</JobTitle>
        <JobCompany
          href="https://www.youtube.com/channel/UC40GdqVnIsD23o_5fYvy3dQ"
          target="_blank"
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
    <JobDescription>
      <Fade bottom>
        <JobTitle>Motion Graphic Designer</JobTitle>
        <JobCompany href="https://fashionforchange.ca/" target="_blank">
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
    <JobDescription>
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
