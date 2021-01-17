import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const AllProjectDiv = styled.div`
  font-family: "Spartan";
  height: 600px;
  width: 100%;
  display: flex;
  flex-flow: column;
  margin-top: 120px;
  @media (max-width: 1280px) {
  }

  @media (max-width: 768px) {
  }
`;

const FilterButton = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  background-color: #5ab4ff;
  color: white;
  border-radius: 20px;
  outline: none;
  font-family: "Spartan";
  font-weight: 600;
  padding-top: 5px;
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
  color: Black;
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

const ProjectDiv = styled.div`
  width: 48%;
  height: 120px;
  background-color: white;
  -webkit-box-shadow: 9px 9px 17px 2px rgba(0, 0, 0, 0.13);
  box-shadow: 9px 9px 17px 2px rgba(0, 0, 0, 0.13);
  @media (max-width: 1280px) {
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 24px;
  }
`;
const ProjectTitleDiv = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 48px;
  background-color: #5ab4ff;
  padding: 4px 10px;
`;
const ProjecTitle = styled.h1`
  color: white;
  font-weight: 600;
  margin: 0;
  font-size: 18px;
`;

const ProjectDescrDiv = styled.div`
  padding: 0px 10px;
`;

const ProjectDescr = styled.p`
  font-size: 12px;
  color: black;
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
`;
const allProjectData = [
  {
    title: "Subtle",
    subject: ["CODE"],
    description:
      "BrainStation Capstone Project: a machine-learning application that analyzes poses in photographs to provide a summary of repetitive gestures",
  },
  {
    title: "Subtle",
    subject: ["CODE"],
    description:
      "BrainStation Capstone Project: a machine-learning application that analyzes poses in photographs to provide a summary of repetitive gestures",
  },
];
export default class AllProjects extends Component {
  renderProjects = () => {
    return allProjectData.map((project) => {
      const { title, subject, description } = project;
      return (
        <ProjectDiv>
          <StyledLink to={`${title}`}>
            <ProjectTitleDiv>
              <ProjecTitle>{title}</ProjecTitle>
              <ProjectTagDiv>
                <ProjectTag>
                  <ProjectTagName>{subject[0]}</ProjectTagName>
                </ProjectTag>
              </ProjectTagDiv>
            </ProjectTitleDiv>
            <ProjectDescrDiv>
              <ProjectDescr>{description}</ProjectDescr>
            </ProjectDescrDiv>
          </StyledLink>
        </ProjectDiv>
      );
    });
  };
  render() {
    return (
      <AllProjectDiv>
        <Heading>Projects</Heading>
        <FilterButtonDiv>
          <FilterButton>ALL</FilterButton>
          <FilterButton>DESIGN</FilterButton>
          <FilterButton>DEVELOP</FilterButton>
        </FilterButtonDiv>
        <ProjectAll>{this.renderProjects()}</ProjectAll>
      </AllProjectDiv>
    );
  }
}
