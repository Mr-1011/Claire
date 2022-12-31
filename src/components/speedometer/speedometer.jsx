import { render } from "@testing-library/react";
import React from "react";
import "./engine.scss";
import Needle from "./needle/needle";
import { useState } from "react";
import styled, { keyframes } from 'styled-components';


const Speedometer = () =>{

// set the start scenario: startspeed, acceleration (function or constant) and delta t (time horizon predicition)
let acceleration = 10;
const startspeed = 100;
let predicition_horizon = 5;

// angles for the needles in the speedometer(alpha = currentspeed)

const [alpha,setAlpha] = useState(10);
const [beta,setBeta] = useState(90);

//calculate the speed continiously and update the needle
//speed(t) = startspeed+t*acceleration

function delay(time) {
	return new Promise(resolve => setTimeout(resolve, time));
  }

const setSpeed = () => {
	let i = 0;
	while(i<100){
		delay(1000).then(() => {
			console.log('delayed by 1 second')});
		i=i+1;
	
	}

}
//predicted_speed = speed * Time_horizon* acceleration
const setPred_Speed = (acceleration,startspeed,predicition_horizon) => {
	let speed = startspeed+predicition_horizon*acceleration;
	return speed;
}

const rotate = keyframes`
to {
  transform: rotate(${setPred_Speed(acceleration,startspeed,predicition_horizon)-startspeed}deg);
}
`

const InfiniteRotate = styled.div`
animation: ${rotate} 10s linear infinite;
position: absolute;
top: 50%;
left: 50%;
`

setSpeed();

    return(
        <div className="engine">
        <div className="head">
	        <h1>Engine simulator</h1>
        </div>

        <div className="dashboard">
			<h4>current_speed: {startspeed} m/s</h4>
			<h4>acceleration: {acceleration} m/s</h4>
			<h4>speed in 5 seconds: {setPred_Speed(acceleration,startspeed,predicition_horizon)} m/s</h4>
	        <div className="meter meter--rpm meter--big-label"></div>
	        <div className="meter meter--gear"><div>1</div></div>
	        <div className="meter meter--speed">
				<div  style={{transform: "rotate("+startspeed+"deg)",position: "absolute",top: "50%",left: "50%"}}>
				<InfiniteRotate>
					<div className="needle"></div>
				</InfiniteRotate>
				</div>
			
					<div className="needle" style={{background:"#00FF00",transform: "rotate("+setPred_Speed(acceleration,startspeed,predicition_horizon)+"deg)"}}></div>
				
			</div>
			
        </div>
		<Needle/>
       

        <button className="btn-volume active">start</button>


        
        </div>
    );
	
}


export default Speedometer;