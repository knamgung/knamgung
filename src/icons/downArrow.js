import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../util/Colors";

const bounceAnimation = keyframes`
0%   { transform: translateY(0);
    fill: ${colors.sapGreen};
    stroke: ${colors.sapGreen};
}
        30%  { transform: translateY(-5px);
            fill: ${colors.lightGreen};
            stroke: ${colors.lightGreen}; }
        50%  { transform: translateY(0);
            stroke: ${colors.lightGreen};
            fill: ${colors.lightGreen};}
        90% {
            stroke: ${colors.sapGreen};
            fill:${colors.lightGreen}
            }
        100% { transform: translateY(0);
            fill: ${colors.lightGreen}
            stroke: ${colors.sapGreen};
            ;
           }
`;

const ArrowDown = styled.svg`
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
  fill: ${colors.sapGreen};
  stroke: ${colors.sapGreen};

  animation-name: ${bounceAnimation};
  animation-timing-function: ease;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  &:hover {
    fill: ${colors.lightGreen};
  }
`;
const DownArrow = (props) => (
  <ArrowDown
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="bi bi-chevron-down"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
    />
  </ArrowDown>
);

export default DownArrow;
