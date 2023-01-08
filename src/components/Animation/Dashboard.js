import styled from "styled-components";

export const Dashboard = styled.div({
  background: "#0c0b11",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  position: "relative",
  "> img": {
    width: 80,
    position: "fixed",
    marginBottom: -60,
  },
  "::before": {
    position: "fixed",
    content: `""`,
    top: 0,
    width: "100vw",
    height: "17vh",
    left: 0,
    background: "linear-gradient(180deg, #0c0b11 60%, transparent)",
    zIndex: 10,
  },
  "::after": {
    position: "fixed",
    content: `""`,
    bottom: 0,
    height: 100,
    left: -2,
    right: -2,
    
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
  height: 800,
});

export const DashboardWrapper = styled.div({
  marginTop: "-14rem",
  perspective: 150,
  position: "relative",
});
