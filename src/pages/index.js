import * as React from "react";
import NavigationBar from "../components/Navbar.js";
import styled from "styled-components";
import Main from "../components/Main.js";
import "../util/styleReset.css";
import { Helmet } from "react-helmet";

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

// markup
const IndexPage = () => {
  return (
    <MainPage>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bean Namgung</title>
        <link rel="canonical" href="https://namgung.ca/" />
      </Helmet>
      <NavigationBar />
      <Main></Main>
    </MainPage>
  );
};

export default IndexPage;
