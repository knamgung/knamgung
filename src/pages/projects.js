import * as React from "react";
import NavigationBar from "../components/Navbar.js";
import styled from "styled-components";
import AllProjects from "../components/allProjects.js";
import "../util/styleReset.css";

// styles
const MainPage = styled.main`
  color: "#232129";
  width: 100%;
  margin: 0;
  padding: 0 320px;
  display: flex;
  font-family: "Spartan", sans-serif;

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
      <NavigationBar />
      <AllProjects></AllProjects>
    </MainPage>
  );
};

export default IndexPage;
