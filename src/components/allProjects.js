import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { colors } from "../util/Colors";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const AllProjectDiv = styled.div`
  height: 600px;
  width: 100%;
  display: flex;
  flex-flow: column;
  margin-top: 200px;
  @media (max-width: 1280px) {
    margin-top: 180px;
  }
`;

const FilterButton = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  background-color: ${(props) =>
    props.active ? `${colors.lightGreen}` : `${colors.mediumGreen}`};
  color: ${(props) =>
    props.active ? `${colors.darkGreen}` : `${colors.lightGreen}`};
  border-radius: 20px;
  outline: none;
  font-family: "Spartan";
  font-weight: 600;
  padding-top: 5px;
  cursor: pointer;

  &:hover {
    transition: 0.25s;
    background-color: ${(props) =>
      props.active ? `${colors.mediumGreen}` : `${colors.sapGreen}`};
  }
`;

const FilterButtonDiv = styled.div`
  display: flex;
  width: 320px;
  justify-content: space-between;
  text-alight: center;
`;
const Heading = styled.h1`
  font-weight: 700;
  font-size: 32px;
  color: ${colors.whiteGreen};
  margin-top: 0;
`;

const ProjectAll = styled.div`
  width: 100%;
  margin-top: 64px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

const ProjectDiv = styled.div``;
const ProjectTitleDiv = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 48px;
  background-color: ${colors.mediumGreen};
  padding: 10px 20px;
`;
const ProjecTitle = styled.h1`
  color: white;
  font-weight: 600;
  margin: 0;
  font-size: 20px;
`;

const ProjectDescrDiv = styled.div`
  padding: 10px 20px;
`;

const ProjectDescr = styled.p`
  font-size: 12px;
  color: white;
`;

const ProjectTagDiv = styled.div``;

const ProjectTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  width: 64px;
  height: 20px;
  background-color: #fdf51f;
  margin-bottom: 4px;
`;

const ProjectTagName = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 10px;
  padding-top: 4px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  width: 48%;
  height: 180px;
  background-color: ${colors.sapGreen};
  margin: 24px 0;
  -webkit-box-shadow: 9px 9px 17px 2px rgba(0, 0, 0, 0.13);
  box-shadow: 9px 9px 17px 2px rgba(0, 0, 0, 0.13);

  &:hover {
    transform: translateY(-5px);
    transition: 1s;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 24px;
  }
`;
const allProjectData = [
  {
    title: "Subtle",
    subject: "CODE",
    description:
      "BrainStation Capstone Project: a machine-learning application that analyzes poses in photographs to provide a summary of repetitive gestures",
  },
  {
    title: "Pooler",
    subject: "CODE",
    description:
      "Pooler is a mobile rideshare application that provides passengers with consistent reliable rides, and drivers with solution to cost calculation and payment receiving capabilities.",
  },
  {
    title: "AWAIR",
    subject: "DESIGN",
    description:
      "RSA Student Design Project: AWAIR is an art exhibiton designed to empower citizens to make meaningful change through education about air quality",
  },
];
export default class AllProjects extends Component {
  state = {
    projectFilter: "ALL",
  };
  renderProjects = () => {
    return allProjectData
      .filter((project) => {
        if (this.state.projectFilter !== "ALL") {
          return this.state.projectFilter === project.subject;
        } else {
          return true;
        }
      })
      .map((project) => {
        const { title, subject, description } = project;
        return (
          <StyledLink to={`${title}`}>
            <ProjectDiv>
              <ProjectTitleDiv>
                <ProjecTitle>{title}</ProjecTitle>
                <ProjectTagDiv>
                  <ProjectTag>
                    <ProjectTagName>{subject}</ProjectTagName>
                  </ProjectTag>
                </ProjectTagDiv>
              </ProjectTitleDiv>
              <ProjectDescrDiv>
                <ProjectDescr>{description}</ProjectDescr>
              </ProjectDescrDiv>
            </ProjectDiv>
          </StyledLink>
        );
      });
  };
  render() {
    const { projectFilter } = this.state;
    return (
      <AllProjectDiv>
        <Slide left duration={1000}>
          <Heading>Projects</Heading>
        </Slide>

        <Fade bottom duration={1000}>
          <FilterButtonDiv>
            <FilterButton
              active={projectFilter === "ALL"}
              onClick={() => this.setState({ projectFilter: "ALL" })}
            >
              ALL
            </FilterButton>
            <FilterButton
              active={projectFilter === "DESIGN"}
              onClick={() => this.setState({ projectFilter: "DESIGN" })}
            >
              DESIGN
            </FilterButton>
            <FilterButton
              active={projectFilter === "CODE"}
              onClick={() => this.setState({ projectFilter: "CODE" })}
            >
              CODE
            </FilterButton>
          </FilterButtonDiv>
        </Fade>
        <Fade duration={2000}>
          <ProjectAll>{this.renderProjects()}</ProjectAll>
        </Fade>
      </AllProjectDiv>
    );
  }
}
