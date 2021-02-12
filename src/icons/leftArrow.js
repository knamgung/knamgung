import React from "react";
import styled from "styled-components";

const Arrow = styled.div`
  padding: 20px;
  cursor: pointer;
`;

export default function leftArrow() {
  return <Arrow>{"<"}</Arrow>;
}
