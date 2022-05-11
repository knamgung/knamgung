import * as React from "react";
import NavigationBar from "../components/Navbar.js";
import styled from "styled-components";
import Main from "../components/Main.js";
import "../util/styleReset.css";
import favicon from "../images/favicon.ico";
import { Helmet } from "react-helmet";
import { ParallaxProvider } from "react-scroll-parallax";
import Intro from "../components/Intro.js";
import Experience from "../components/Experience.js";
import Dance from "../components/Dance.js";
import { Parallax } from "react-scroll-parallax";
import AllProjects from "../components/allProjects.js";

// styles
const MainPage = styled.main`
  color: "#232129";
  width: 100%;
  margin: 0;
  padding: 0 320px;
  font-family: "Spartan", sans-serif;

  margin-top: 64px;

  @media (max-width: 1280px) {
    padding: 0 112px;
  }

  @media (max-width: 768px) {
    padding: 0 32px;
  }
`;

const Section = styled.div`
  margin: 300px 0 300px 0;
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
        <NavigationBar />
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
