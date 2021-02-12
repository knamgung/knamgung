import React, { Component } from "react";
import styled from "styled-components";
import Github from "../icons/github";
import Linkedin from "../icons/linkedin";
import { Link } from "gatsby";
import { colors } from "../util/Colors";

const Spacer = require("react-spacer");
const Navigation = styled.div`
  padding: 0px 32px;
  position: fixed;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  backdrop-filter: blur(6px);

  z-index: 99;
  @media (max-width: 1280px) {
    padding: 0 120px;
  }

  @media (max-width: 768px) {
    padding: 0 40px;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: ${colors.sapGreen};

  text-decoration: none;
`;

const Logo = styled.h1`
  font-weight: 800;
  letter-spacing: -4px;
  font-size: 28px;
`;

const Navlink = styled.h3`
  font-weight: 500;
  font-size: 16px;
  margin-left: 32px;
`;

export default class NavigationBar extends Component {
  render() {
    return (
      <Navigation>
        <NavWrapper>
          <Logo>
            <StyledLink to="/" activeStyle={{ color: colors.lightGreen }}>
              KBN
            </StyledLink>
          </Logo>

          <Navlink>
            <StyledLink to="/about" activeStyle={{ color: colors.lightGreen }}>
              about
            </StyledLink>
          </Navlink>

          <Navlink>
            <StyledLink
              to="/projects"
              activeStyle={{ color: colors.lightGreen }}
              partiallyActive={true}
            >
              projects
            </StyledLink>
          </Navlink>
        </NavWrapper>
        <NavWrapper>
          <Github className="github"></Github>
          <Spacer width="18px" />
          <Linkedin className="linked-in"></Linkedin>
        </NavWrapper>
      </Navigation>
    );
  }
}
