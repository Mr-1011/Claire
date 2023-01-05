import { useState} from "react";
import Grid from '@mui/material/Grid';
import "./animation.css";
import {
  Dashboard,
  DashboardWrapper,
  RoadWrapper,
} from "./components/Dashboard";
import { Road, TrafficWrapper } from "./components/Road";
import { Car_Img, Traffic } from "../../assets/exports";
import Speedometer from "../speedometer/speedometer";
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
    }, Math.random() * 4 * 2500);
    return () => {
      window.clearTimeout(showTraffic);
    };
  }, []);

  return (
    
    <Grid container column={2}>
        <Grid item xs={4}>
            <Speedometer dataFromParent={{traffic:showTraffic,stop:stopRoad}} />
        </Grid>
        <Grid item xs={4}>
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
        </Grid>
    </Grid>
    
  );
}

export default Animation;
