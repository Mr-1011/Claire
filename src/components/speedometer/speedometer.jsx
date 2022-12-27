import { render } from "@testing-library/react";
import React from "react";
import "./engine.scss";
import Needle from "./needle/needle";
import { useState } from "react";

const Speedometer = () =>{

let acceleration = 10;
const startspeed = 100;
let predicition_horizon = 5;

const sleep = ms => new Promise(r => setTimeout(r, ms));

const [alpha,setAlpha] = useState(100);
const [beta,setBeta] = useState(90);

const setSpeed = (acceleration,startspeed,predicition_horizon) => {
	let speed = startspeed+predicition_horizon*acceleration;
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
				<div className="needle" style={{transform: "rotate("+startspeed+"deg)"}}></div>
				<div className="needle" style={{background:"#00FF00",transform: "rotate("+setSpeed(acceleration,startspeed,predicition_horizon)+"deg)"}}></div>
			</div>
			
        </div>

       

        <button className="btn-volume active">♩</button>

        
        </div>
    );
	
}


export default Speedometer;