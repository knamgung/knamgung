import * as React from "react";
import NavigationBar from "../components/Navbar.js";
import GlobalFonts from "../fonts/font";
import styled from "styled-components";
import Intro from "../components/Intro.js";
// styles
const AboutMain = styled.main`
  color: "#232129";
  width: 100%;
  margin: 0;
  padding: 0 232px;
  margin-top: 64px;
  box-sizing: border-box;
  display: flex;
  font-family: "Spartan";
  @media (max-width: 1280px) {
    padding: 0 112px;
  }

  @media (max-width: 768px) {
    padding: 0 32px;
  }
`;

// markup
const AboutPage = () => {
  return (
    <AboutMain>
      <GlobalFonts />
      <NavigationBar />
      <Intro></Intro>
    </AboutMain>
  );
};

export default AboutPage;
