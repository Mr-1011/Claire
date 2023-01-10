import React, { useState, useEffect } from "react";
import { SpeedometerWrapper } from "./SpeedometerWrapper";
import { Speedometer_Img } from "../../assets/exports";

function Speedometer(dataFromParent){

  const size = 90;
  const strokeWidth = 10;
  const startAngle = 0;
  // basic calculations to add the stroke
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;


  const [speed,setSpeed] = useState(30);
  // calculate the progress to show stroke width in simple word
  const strokeDashoffset = circumference - (speed / 100) * circumference;

  

  useEffect(()=>{
    if(dataFromParent.dataFromParent.traffic==true){
      setSpeed(10);
    }


  },[dataFromParent.dataFromParent.traffic, dataFromParent.dataFromParent.stop])


  return (
    <div>
      <img src={Speedometer_Img} />
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={"#582ced"}
          strokeWidth={4}
          fill="transparent"
          strokeDasharray={circumference}
          // this attribute is to set the svg start and end
          strokeDashoffset={strokeDashoffset}
          style={{
            transformOrigin: "center",
            transform: `rotate(${startAngle + 150}deg)`,
            strokeDashoffset,
            transition: "all 1s linear",
          }}
        />
      </svg>
      </div>
  );
};

export default Speedometer;
