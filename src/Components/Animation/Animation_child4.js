import { useState } from "react";
import "./animation.css";
import { Dashboard, DashboardWrapper, RoadWrapper } from "./Dashboard";
import { Road, TrafficWrapper } from "./Road";
import { Car_Img, Child } from "../../assets/exports";
import Speedometer_child4 from "../speedometer/speedometer_child4";
import Batterystatus2 from "../speedometer/batterystatus2";
import React from "react";
import VibrationOutlinedIcon from "@mui/icons-material/VibrationOutlined";
import AirlineSeatReclineExtraOutlinedIcon from "@mui/icons-material/AirlineSeatReclineExtraOutlined";
import { Box, Stack } from "@mui/material";

//code from sirarifarid-fiverr
//showTraffic and stopRoad useStates define behavior of animation. (traffic light appears and car stops = road stops)
//traffic light apperars after random time, Then car stops after 4 seconds
function Animation_child() {
  const [showChild, setShowChild] = useState(false);
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
      setShowChild(false);
      seticonColor("green");
      setVibration("Off");
      setTimeout(() => {
        // appear traffic light
        setShowChild(true);
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
        <Speedometer_child4
          dataFromParent={{ child: showChild, stop: stopRoad }}
        />
        
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
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
      </Box>
      <Box
        sx={{
          width: "336px",
          scale: "0.6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Batterystatus2 />
        
        
      </Box>
    </Stack>
  );
}

export default Animation_child;
