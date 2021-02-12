import React, { Component } from "react";
import styled from "styled-components";

import { colors } from "../util/Colors";
import "../util/styleReset.css";
import YouTube from "react-youtube";

const DanceWrapper = styled.div`
  margin: 32px 0;
`;

const AltHeading = styled.h1`
  padding: 0;
  margin: 0;
  font-weight: 700;
  font-size: 24px;
  color: ${colors.whiteGreen};
  padding-top: 4px;
`;

const HeadingBox = styled.div`
  width: 100%;
  padding: 8px 12px;
  background-color: ${colors.sapGreen};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 8px 0px;
    padding-left: 8px;
  }
`;

const DanceSection = styled.div`
  margin-top: 100px;
`;

const EachDance = styled.div`
  margin: 64px 0;
  padding: 0;

  @media (max-width: 1280px) {
    padding: 0 0;
  }
`;

const Subhead = styled.h5`
  font-size: 16px;
  color: ${colors.whiteGreen};
`;

const AllVideos = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 32px;
  border-bottom: ${(props) =>
    props.last ? "none" : `1px solid ${colors.mediumGreen}`};
  padding-bottom: 64px;

  @media (max-width: 768px) {
    align-items: center;
    flex-flow: column;
  }
`;
const DanceVideo = styled(YouTube)`
  width: 100%;
  height: 160px;
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: ${colors.lightGreen};
  line-height: 32px;
  margin-bottom: 64px;
  width: 65%;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

export default class Dance extends Component {
  render() {
    return (
      <DanceWrapper>
        <HeadingBox>
          <AltHeading>Curious About My Dancing?</AltHeading>
        </HeadingBox>
        <DanceSection>
          <EachDance>
            <Subhead>Performance Director</Subhead>
            <Description>
              I had the privlige of being a Performance Director (PD) in both UW
              Hip Hop club (UWHH) and Limelight Dance Crew, and these are dances
              that I’ve had the pleasure of leading. My job was to lead the
              groups in order to create formations, transitions, and clean the
              dances to be filmed/showcased at our events!
            </Description>

            <AllVideos>
              <DanceVideo videoId="RUOFYs4q9u4"></DanceVideo>
              <DanceVideo videoId="FzfN7nXXLLw"></DanceVideo>
              <DanceVideo videoId="27PRCMs97ks"></DanceVideo>
            </AllVideos>
          </EachDance>

          <EachDance>
            <Subhead>Choreography</Subhead>
            <Description>
              Being part of UWHH has given me opportunities to choreograph my
              own pieces and teach them in drop-in classes! It allows me to
              explore my own artistry as a dancer and gain experiences breaking
              down dance moves to dancers of all skill level.
            </Description>

            <AllVideos>
              <DanceVideo videoId="84MjBOhOFmE"></DanceVideo>
              <DanceVideo videoId="UTvDvADncoQ"></DanceVideo>
            </AllVideos>
          </EachDance>

          <EachDance>
            <Subhead>Dance Covers</Subhead>
            <Description>
              In Limelight Dance Crew, we film or sometimes perform K-Pop Dance
              Covers to our favourite girl/boy groups! I have participated in
              many of the dance covers we produced and have taken the job as one
              of the production leads where I film and edit the covers as well.
            </Description>

            <AllVideos last={true}>
              <DanceVideo videoId="IllTRa-rhCY"></DanceVideo>
              <DanceVideo videoId="DaISOXXC-G8"></DanceVideo>
              <DanceVideo videoId="pXKuseREJ3g"></DanceVideo>
            </AllVideos>
          </EachDance>
        </DanceSection>
      </DanceWrapper>
    );
  }
}
