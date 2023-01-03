import styled, { keyframes } from "styled-components";

export const Road = styled.div({
  width: 200,
  flex: 1,
  borderLeft: " 1px dashed #00c9ff91",
  borderRight: " 1px dashed #00c9ff91",
  marginBottom: 2,
  transform: "translateY(106px)",
  img: {
    width: 80,
    marginBottom: "-9rem",
  },
});

export const TrafficWrapper = styled.div({
  img: { width: 50 },
  position: "absolute",
  left: "-32px",
  top: "19rem",
});
