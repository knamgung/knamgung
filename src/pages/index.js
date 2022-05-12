import * as React from "react";
import styled from "styled-components";
import Main from "../components/Main.js";
import "../util/styleReset.css";
import favicon from "../images/favicon.ico";
import { Helmet } from "react-helmet";
import { ParallaxProvider } from "react-scroll-parallax";
import Intro from "../components/Intro.js";
import Experience from "../components/Experience.js";
import AllProjects from "../components/allProjects";
// styles
const MainPage = styled.main`
  color: "#232129";
  width: 100%;
  margin: 0;
  padding: 0 320px;
  font-family: "Spartan", sans-serif;

  @media (max-width: 1280px) {
    padding: 0 112px;
  }

  @media (max-width: 768px) {
    padding: 0 32px;
  }
`;

const Section = styled.div`
  margin-top: 420px;
  margin-bottom: 200px;

  @media (max-width: 1280px) {
    margin-top: 200px;
    margin-bottom: 200px;
  }

  @media (max-width: 768px) {
    margin-top: 100px;
    margin-bottom: 200px;
  }
`;

// markup
const IndexPage = () => {
  return (
    <ParallaxProvider>
      <MainPage>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Web Developer | Bean Namgung</title>
          <link rel="canonical" href="https://namgung.ca/" />
          <link rel="icon" href={favicon} />
        </Helmet>
        <Main></Main>
        <Section>
          <Experience></Experience>
        </Section>
        <Section>
          <Intro></Intro>
        </Section>

        <Section>
          <AllProjects></AllProjects>
        </Section>
      </MainPage>
    </ParallaxProvider>
  );
};

export default IndexPage;
