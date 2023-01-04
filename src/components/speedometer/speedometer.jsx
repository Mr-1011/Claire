import { render } from "@testing-library/react";
import React from "react";
import "./engine.scss";
import Needle from "./needle/needle";
import { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import notification from "./notification.mp3";

function Speedometer(dataFromParent){

// set the start scenario: startspeed, acceleration (function or constant) and delta t (time horizon predicition)
let acceleration = 0.5;
const startspeed = 100;
let predicition_horizon = 5;

// angles for the needles in the speedometer(alpha = currentspeed)

const [alpha,setAlpha] = useState(startspeed+60);
const [beta,setBeta] = useState(startspeed+acceleration*predicition_horizon+60);
const [notifications,setNotifications] = useState("")

function play(){
	new Audio(notification).play()
}


useEffect(() =>{
	console.log("angle changed")
	if(dataFromParent.dataFromParent==true){
		setBeta(60);
		setNotifications("Red light detected")
		play();
		
	}

},[dataFromParent.dataFromParent])




//calculate the speed continiously and update the needle
//speed(t) = startspeed+t*acceleration

//predicted_speed = speed * Time_horizon* acceleration
const setPred_Speed = (acceleration,startspeed,predicition_horizon) => {
	let speed = startspeed+predicition_horizon*acceleration+60;
	setBeta(speed+60);
	return speed;
}

const rotate = keyframes`
to {
  transform: rotate(${beta-alpha}deg);
}
`

const InfiniteRotate = styled.div`
animation: ${rotate} 4s linear infinite;
position: absolute;
top: 50%;
left: 50%;
`





console.log(dataFromParent.dataFromParent);

    return(
        <div className="engine">
        <div className="head">
	        <h1>Engine simulator</h1>
        </div>

        <div className="dashboard">
			<h4 style={{color:"white"}}>current_speed: {startspeed} m/s</h4>
			<h4 style={{color:"white"}}>speed in 5 seconds: {beta-60}m/s</h4>
			<h4 style={{color:"red"}}>{notifications}</h4>
	        
	        <div className="meter meter--speed">

				<div className="grad" style={{left: (50 - (50 - 10) * Math.sin(60 * (Math.PI / 180))) + "%", top: (50 + (50 - 10) * Math.cos(60 * (Math.PI / 180))) + "%"}}>0</div>
				<div className="grad" style={{left: (50 - (50 - 10) * Math.sin(80 * (Math.PI / 180))) + "%", top: (50 + (50 - 10) * Math.cos(80 * (Math.PI / 180))) + "%"}}>20</div>
				<div className="grad" style={{left: (50 - (50 - 10) * Math.sin(100 * (Math.PI / 180))) + "%", top: (50 + (50 - 10) * Math.cos(100 * (Math.PI / 180))) + "%"}}>40</div>
				<div className="grad" style={{left: (50 - (50 - 10) * Math.sin(120 * (Math.PI / 180))) + "%", top: (50 + (50 - 10) * Math.cos(120 * (Math.PI / 180))) + "%"}}>60</div>
				<div className="grad" style={{left: (50 - (50 - 10) * Math.sin(140 * (Math.PI / 180))) + "%", top: (50 + (50 - 10) * Math.cos(140 * (Math.PI / 180))) + "%"}}>80</div>
				<div className="grad" style={{left: (50 - (50 - 10) * Math.sin(160 * (Math.PI / 180))) + "%", top: (50 + (50 - 10) * Math.cos(160 * (Math.PI / 180))) + "%"}}>100</div>
				<div className="grad" style={{left: (50 - (50 - 10) * Math.sin(180 * (Math.PI / 180))) + "%", top: (50 + (50 - 10) * Math.cos(180 * (Math.PI / 180))) + "%"}}>120</div>
				<div className="grad" style={{left: (50 - (50 - 10) * Math.sin(200 * (Math.PI / 180))) + "%", top: (50 + (50 - 10) * Math.cos(200 * (Math.PI / 180))) + "%"}}>140</div>
				<div className="grad" style={{left: (50 - (50 - 10) * Math.sin(220 * (Math.PI / 180))) + "%", top: (50 + (50 - 10) * Math.cos(220 * (Math.PI / 180))) + "%"}}>160</div>
				<div className="grad" style={{left: (50 - (50 - 10) * Math.sin(240 * (Math.PI / 180))) + "%", top: (50 + (50 - 10) * Math.cos(240 * (Math.PI / 180))) + "%"}}>180</div>
				<div className="grad" style={{left: (50 - (50 - 10) * Math.sin(300 * (Math.PI / 180))) + "%", top: (50 + (50 - 10) * Math.cos(260 * (Math.PI / 180))) + "%"}}>200</div>
				<div className="grad" style={{left: (50 - (50 - 10) * Math.sin(300 * (Math.PI / 180))) + "%", top: (50 + (50 - 10) * Math.cos(280 * (Math.PI / 180))) + "%"}}>220</div>
				<div className="grad" style={{left: (50 - (50 - 10) * Math.sin(300 * (Math.PI / 180))) + "%", top: (50 + (50 - 10) * Math.cos(300 * (Math.PI / 180))) + "%"}}>240</div>

				<div  style={{transform: "rotate("+alpha+"deg)",position: "absolute",top: "50%",left: "50%"}}>
				<InfiniteRotate>
					<div className="needle"></div>
				</InfiniteRotate>
				</div>
			
					<div className="needle" style={{background:"#00FF00",transform: "rotate("+beta+"deg)"}}></div>
				
			</div>
			
        </div>
		

       

        <button className="btn-volume active" onClick={()=> setAlpha(startspeed+acceleration)}>start</button>


        
        </div>
    );
	
}


export default Speedometer;