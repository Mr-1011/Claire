import { useState } from "react";
import "./animation.css";
import {
  Dashboard,
  DashboardWrapper,
  RoadWrapper,
} from "./components/Dashboard";
import { Road, TrafficWrapper } from "./components/Road";
import { Car_Img, Traffic } from "../../assets/exports";
import React from "react";
function Animation() {
  const [count, setCount] = useState(0);
  const [showTraffic, setShowTraffic] = useState(false);
  const [stopRoad, setStopRoad] = useState(false);
  React.useEffect(() => {
    const showTraffic = setTimeout(() => {
      setShowTraffic(true);
      setTimeout(() => {
        setStopRoad(true);
      }, 4000);
    }, Math.random() * 4 * 1000);
    return () => {
      window.clearTimeout(showTraffic);
    };
  }, []);

  return (
    <Dashboard>
      <img src={Car_Img} />
      <DashboardWrapper>
        {showTraffic && (
          <TrafficWrapper className="traffic">
            <img src={Traffic} />
          </TrafficWrapper>
        )}
        <RoadWrapper className={stopRoad ? "" : "dashboard_wrapper"}>
          <Road></Road>
          <Road></Road>
          <Road></Road>
          <Road></Road>
        </RoadWrapper>
      </DashboardWrapper>
    </Dashboard>
  );
}

export default Animation;
