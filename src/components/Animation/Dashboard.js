import styled from "styled-components";


// Animation for the Road and the moving visualization of the road. 
// The module styled div was used and the moving is done with a infinite animation
export const Dashboard = styled.div({
  background: "#0c0b11",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "600px",
  overflow: "hidden",
  position: "relative",
  width: 385,

  "> img": {
    width: 80,
    position: "absolute",
    marginBottom: "-10rem",
  },
  "::before": {
    position: "absolute",
    content: `""`,
    top: 0,
    width: "100vw",
    height: "17vh",
    left: 0,
    background: "linear-gradient(180deg, #0c0b11 60%, transparent)",
    zIndex: 10,
  },
  "::after": {
    position: "absolute",
    content: `""`,
    bottom: -11,
    height: 110,
    left: -2,
    right: -2,
    background: "linear-gradient(0deg, #0c0b11 60%, transparent)",
    zIndex: 10,
  },
});

export const RoadWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  position: "relative",
  transform: "rotateX(20deg)",
  background: "#4ad9ff0f",
  height: 1253,
});

export const DashboardWrapper = styled.div({
  perspective: 150,
  position: "relative",
  width: 250,
});
