import styled from "styled-components";

export const SpeedometerWrapper = styled.div({
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  img: {
    width: 500,
    height: 500,
    position: "absolute",
  },
  svg: {
    scale: "5",
  },
});
