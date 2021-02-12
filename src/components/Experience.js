import React, { Component } from "react";
import styled from "styled-components";

import { colors } from "../util/Colors";
import "../util/styleReset.css";

const ExperienceWrapper = styled.div`
  margin: 240px 0;
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
`;

const JobTitle = styled.h3`
  color: ${colors.whiteGreen};
`;

const JobCompany = styled.a`
  link-style: none;
  text-decoration: none;
  color: ${colors.lightGreen};
  font-weight: 700;
  font-size: 18px;
`;

const JobDescription = styled.div`
  width: 70%;
  height: 300px;

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
      <ExperienceWrapper>
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
          </JobList>
          {currentJob === "Faire" ? (
            <Faire></Faire>
          ) : currentJob === "Limelight" ? (
            <Limelight></Limelight>
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
      <JobTitle>Front-End 'React' Engineer [Co-op]</JobTitle>
      <JobCompany href="https://www.faire.com/" target="_blank">
        Faire
      </JobCompany>

      <JobPoints>
        <span role="img" aria-label="plant-emoji">
          🌱
        </span>
        <JobText>
          Ensured a positive trend in Faire’s GMV in weekly sprints by
          developing new features to relieve pain points for the brand’s order
          management experience.
        </JobText>
      </JobPoints>

      <JobPoints>
        <span role="img" aria-label="plant-emoji">
          🌱
        </span>
        <JobText>
          Established constant communication to avoid unnecessary conflicts and
          assure progress working from home.
        </JobText>
      </JobPoints>
    </JobDescription>
  );
}

function Limelight() {
  return (
    <JobDescription>
      <JobTitle>Director</JobTitle>
      <JobCompany
        href="https://www.youtube.com/channel/UC40GdqVnIsD23o_5fYvy3dQ"
        target="_blank"
      >
        Limelight Dance Crew
      </JobCompany>

      <JobPoints>
        <span role="img" aria-label="plant-emoji">
          🌱
        </span>
        <JobText>
          Contributes in diversifying Waterloo’s Dance Community by marketing
          Limelight’s performances and Youtube channel
        </JobText>
      </JobPoints>

      <JobPoints>
        <span role="img" aria-label="plant-emoji">
          🌱
        </span>
        <JobText>
          Efficient tools utilization and work habits reduce average production
          time by 2 weeks
        </JobText>
      </JobPoints>
    </JobDescription>
  );
}

function FC() {
  return (
    <JobDescription>
      <JobTitle>Motion Graphic Designer</JobTitle>
      <JobCompany href="https://fashionforchange.ca/" target="_blank">
        Fashion For Change
      </JobCompany>

      <JobPoints>
        <span role="img" aria-label="plant-emoji">
          🌱
        </span>
        <JobText>
          Conducted a team of videographers to film, edit and produce 50% of all
          the scene shoots for the final show
        </JobText>
      </JobPoints>
    </JobDescription>
  );
}
