import { render } from "@testing-library/react";
import React from "react";
import "./engine.scss";
import Needle from "./needle/needle";
import { useState } from "react";

const Speedometer = () =>{

// set the start scenario: startspeed, acceleration (function or constant) and delta t (time horizon predicition)
let acceleration = 10;
const startspeed = 100;
let predicition_horizon = 5;

// angles for the needles in the speedometer(alpha = currentspeed)
const [alpha,setAlpha] = useState(100);
const [beta,setBeta] = useState(90);

//calculate the speed continiously and update the needle
//speed(t) = startspeed+t*acceleration

const setSpeed = () =>{
	console.log("button pressed");
	var startDate = new Date();
	var currentDate = new Date();
	while(Math.abs(currentDate-startDate)<100000){
		currentDate = new Date();
		var delta_t = Math.abs(currentDate-startDate)/1000;
		// formula for updating the speed: 
		var speed = startspeed + acceleration*delta_t;
		setAlpha(speed);
	}

}
//predicted_speed = speed * Time_horizon* acceleration
const setPred_Speed = (acceleration,startspeed,predicition_horizon) => {
	let speed = speed+predicition_horizon*acceleration;
	return speed;
}



    return(
        <div className="engine">
        <div className="head">
	        <h1>Engine simulator</h1>
        </div>

        <div className="dashboard">
	        <div className="meter meter--rpm meter--big-label"></div>
	        <div className="meter meter--gear"><div>1</div></div>
	        <div className="meter meter--speed">
				<div className="needle" style={{transform: "rotate("+alpha+"deg)"}}></div>
				<div className="needle" style={{background:"#00FF00",transform: "rotate("+setPred_Speed(acceleration,startspeed,predicition_horizon)+"deg)"}}></div>
			</div>
			
        </div>

       

        <button className="btn-volume active" onClick={setSpeed}>start</button>

        
        </div>
    );
	
}


export default Speedometer;