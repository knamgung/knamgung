import * as React from "react";
import NavigationBar from "../components/Navbar.js";
import GlobalFonts from "../fonts/font";
import styled from "styled-components";
import Main from "../components/Main.js";
import "../util/styleReset.css";
import { colors } from "../util/Colors";
// styles
const MainPage = styled.main`
  color: "#232129";
  width: 100%;
  margin: 0;
  padding: 0 320px;
  margin-top: 64px;

  @media (max-width: 1280px) {
    padding: 0 112px;
  }

  @media (max-width: 768px) {
    padding: 0 32px;
  }
`;

const Author = styled.p`
  text-align: center;
  margin-top: 200px;
  color: ${colors.lightGreen};
  font-size: 12px;
`;

// markup
const IndexPage = () => {
  return (
    <MainPage>
      <GlobalFonts />
      <NavigationBar />
      <Main></Main>
      <Author>
        Designed & Made by Bean Namgung
        <span role="img" aria-label="plant-emoji">
          🌱
        </span>
      </Author>
    </MainPage>
  );
};

export default IndexPage;
