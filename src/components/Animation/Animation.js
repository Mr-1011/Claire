import { useState } from "react";
import { Link } from "react-router-dom";
import "./animation.css";
import { Dashboard, DashboardWrapper, RoadWrapper } from "./Dashboard";
import { Road, TrafficWrapper } from "./Road";
import { Car_Img, Traffic } from "../../assets/exports";
import Speedometer from "../speedometer/speedometer";
import Batterystatus from "../speedometer/batterystatus";
import React from "react";
import VibrationOutlinedIcon from "@mui/icons-material/VibrationOutlined";
import AirlineSeatReclineExtraOutlinedIcon from "@mui/icons-material/AirlineSeatReclineExtraOutlined";
import { Box, Stack } from "@mui/material";


//showTraffic and stopRoad useStates define behavior of animation. (traffic light appears and car stops = road stops)
//traffic light apperars after 12 seconds, Then car stops after 4 seconds. The car will stay stopped for another 4 seconds
//then the loop starts again. 

function Animation() {
  const [showTraffic, setShowTraffic] = useState(false);
  const [stopRoad, setStopRoad] = useState(false);
  const [iconcolor, seticonColor] = useState("green");
  const [vibration, setVibration] = useState("Off");



  React.useEffect(() => {
    let timers = [];
    const car_running_time = 12000;
    const traffic_delay = 4000;
    const restart_loop_delay = 4000;

    function loop() {
      // when loop reset
      setStopRoad(false);
      setShowTraffic(false);
      seticonColor("green");
      setVibration("Off");
      setTimeout(() => {
        // appear traffic light
        setShowTraffic(true);
        seticonColor("red");
        setVibration("On");
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
    <Stack
      sx={{
        overflow: "hidden",
        maxWidth: 1100,
        margin: "auto",
        height: "100vh",
        alignItems: "center",
      }}
      flexDirection={"row"}
      justifyContent={"space-between"}
    >
      
      <Box
        sx={{
          width: "336px",
          height: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          scale: "0.6",
        }}
      >
        {/*show speedometer on left side of dashboard
        The speedometer handles changes when the traffic light appears or the car stops*/}
        <Speedometer
          dataFromParent={{ traffic: showTraffic, stop: stopRoad }}
        />
        <h2 style={{color:iconcolor, fontFamily:"Arial"}}>Belt vibration: {vibration}</h2>
        <VibrationOutlinedIcon
          style={{ height: 100, width: 100, color: iconcolor }}
        />
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
         {/*show Animation of road scenario in the middle of dashboard*/}
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
      </Box>
      
      <Box
        sx={{
          width: "336px",
          height: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          scale: "0.6",
        }}
      >
        {/*show other component on the right of dashboard*/}
        <Link to="/speedometer_child">
              <button className='button__next'>
                Next
              </button>
        </Link>
        <Batterystatus />
        <h2 style={{color:iconcolor}}>Seat vibration: {vibration}</h2>
        
        <AirlineSeatReclineExtraOutlinedIcon style={{ height: 100, width: 100, color: iconcolor }}/>
        
      </Box>
    </Stack>
  );
}

export default Animation;
