import { render } from "@testing-library/react";
import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import styled, { keyframes } from 'styled-components';

const needle = () => {
    

    const rotate = keyframes`
  to {
    transform: rotate(45deg);
  }
`

const InfiniteRotate = styled.div`
  animation: ${rotate} 1s linear infinite;
`
    return(
        <InfiniteRotate>🥴</InfiniteRotate>
    );

}
export default needle;