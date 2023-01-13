import { useState} from "react";
import Grid from '@mui/material/Grid';
import "./animation.css";
import {
  Dashboard,
  DashboardWrapper,
  RoadWrapper,
} from "./Dashboard";
import { Road, TrafficWrapper } from "./Road";
import { Car_Img, Child } from "../../assets/exports";
import Speedometer_child from "../speedometer/speedometer_child";
import Batterystatus from "../speedometer/batterystatus";
import React from "react";
import VibrationOutlinedIcon from '@mui/icons-material/VibrationOutlined';
import AirlineSeatReclineExtraOutlinedIcon from '@mui/icons-material/AirlineSeatReclineExtraOutlined';

//code from sirarifarid-fiverr
//showTraffic and stopRoad useStates define behavior of animation. (traffic light appears and car stops = road stops)
//traffic light apperars after random time, Then car stops after 4 seconds
function Animation_child() {
  const [showChild, setShowChild] = useState(false);
  const [stopRoad, setStopRoad] = useState(false);
  const [iconcolor, seticonColor] = useState("green");
  /*
  React.useEffect(() => {
    const showChild = setTimeout(() => {
      setShowChild(true);
      seticonColor("red");
      
      setTimeout(() => {
        setStopRoad(true);
      }, 4000);
      setTimeout(()=>{
        setShowChild(false);
        setStopRoad(false);
      },10000)
    }, Math.random() * 4 * 2500);
    return () => {
      window.clearTimeout(showChild);
    };
  }, []);
  */
  React.useEffect(() => {
    let timers: any = [];
    const car_running_time = 12000;
    const traffic_delay = 4000;
    const restart_loop_delay = 4000;

    function loop() {
      // when loop reset
      setStopRoad(false);
      setShowChild(false);

      setTimeout(() => {
        // appear traffic light
        setShowChild(true);
        seticonColor("red");
        setTimeout(() => {
          // stop road after 4s (traffic light animation needs 4s)
          setStopRoad(true);

          // restart loop
          setTimeout(loop, restart_loop_delay);
        }, traffic_delay);
      }, car_running_time);
    }
    loop();
    return () => {
      window.clearTimeout(timers[0]);
    };
  }, []);

  return (
    
    <Grid container column={2}>
        <Grid item xs={4}>
            <Speedometer_child dataFromParent={{child:showChild,stop:stopRoad}} />
            <VibrationOutlinedIcon style={{height:100,width:100,color:iconcolor}}/>
        </Grid>
        <Grid item xs={4}>
            <Dashboard>
            <img src={Car_Img} />
            <DashboardWrapper>
                {showChild && (
                <TrafficWrapper className="child">
                    <img src={Child} />
                </TrafficWrapper>
                )}
                <RoadWrapper className={stopRoad ? "slowroad" : "dashboard_wrapper"}>
                <Road></Road>
                <Road></Road>
                <Road></Road>
                <Road></Road>
                </RoadWrapper>
            </DashboardWrapper>
            </Dashboard>
        </Grid>
        <Grid item xs={4}>
            <Batterystatus/>
            <AirlineSeatReclineExtraOutlinedIcon style={{height:100,width:100,color:iconcolor}}/>
        </Grid>
    </Grid>
    
  );
}

export default Animation_child;
