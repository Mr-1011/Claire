import { useState} from "react";
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import "./animation.css";
import {
  Dashboard,
  DashboardWrapper,
  RoadWrapper,
} from "./Dashboard";
import { Road, TrafficWrapper } from "./Road";
import { Car_Img, Traffic } from "../../assets/exports";
import Speedometer from "../speedometer/speedometer";
//import Speedometer from "../testfield/Speedometer";
import Batterystatus from "../speedometer/batterystatus";
import React from "react";
import VibrationOutlinedIcon from '@mui/icons-material/VibrationOutlined';
import AirlineSeatReclineExtraOutlinedIcon from '@mui/icons-material/AirlineSeatReclineExtraOutlined';

//code from sirarifarid-fiverr
//showTraffic and stopRoad useStates define behavior of animation. (traffic light appears and car stops = road stops)
//traffic light apperars after random time, Then car stops after 4 seconds
function Animation() {
  const [showTraffic, setShowTraffic] = useState(false);
  const [stopRoad, setStopRoad] = useState(false);
  const [iconcolor, seticonColor] = useState("green");
  
  /*
  React.useEffect(() => {
    const showTraffic = setTimeout(() => {
      setShowTraffic(true);
      seticonColor("red");
      setTimeout(() => {
        setStopRoad(true);
      }, 4000);
    }, Math.random() * 4 * 2500);
    return () => {
      window.clearTimeout(showTraffic);
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
      setShowTraffic(false);

      setTimeout(() => {
        // appear traffic light
        setShowTraffic(true);
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
    
    <Grid container column={3}>
        <Grid item xs={4}>
            <Speedometer dataFromParent={{traffic:showTraffic,stop:stopRoad}} />
            <VibrationOutlinedIcon style={{height:100,width:100,color:iconcolor}}/>
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
        <Grid item xs={4}>
            <Batterystatus/>
              <Grid container direction="column">
                <Grid item>
                <AirlineSeatReclineExtraOutlinedIcon style={{height:100,width:100,color:iconcolor}}/>
                </Grid>
                <Grid item>
                <Link to='/speedometer_child'>
                  <button style={{color:"white",background:"black",borderColor:"black"}}>
                    next scenario
                  </button>
                </Link>
                </Grid>
                </Grid>
        </Grid>
           
      </Grid>
    
  );
}

export default Animation;
