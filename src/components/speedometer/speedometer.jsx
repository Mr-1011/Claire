import { render } from "@testing-library/react";
import React from "react";
import "./engine.scss";
import Pie from "../testfield/pie";
import { useState, useEffect, AnimationEvent} from "react";
import styled, { keyframes } from 'styled-components';
import notification from "./notification.mp3";

function Speedometer(dataFromParent){

// set the start scenario: startspeed and delta t (time horizon predicition)

const startspeed = 100;
let predicition_horizon = 5;

// acceleration can change over time, that's why it is a UseState
// angles for the needles in the speedometer(alpha = currentspeed)
// beta is the predicited speed
// notifications show the current status and alarms in the dashboard
// animationtime and audiocounter exist to make the animation more stable
const [acceleration,setAcceleration] = useState(1.5);
const [alpha,setAlpha] = useState(startspeed+60);
const [beta,setBeta] = useState(180);
const [notifications,setNotifications] = useState("Set speed to 120 km/h")
const [audiocounter, setAudiocounter] = useState(0);
const [animationtime, setAnimationtime] = useState(10);

const [level, setLevel] = useState(0);
const [showSpeed, setShowSpeed] = useState(true);
const [showAudio, setShowAudio] = useState(true);
const [showNotification, setShowNotification] = useState(true);

function showlevel(level){
	if(level==2){
		setShowAudio(false);
	}
	if(level == 3){
		setShowSpeed(false);
		setShowAudio(false);
	}
	if(level == 4){
		setShowSpeed(false);
		setShowAudio(false);
		setShowNotification(false)
	}
}

function play(){
	new Audio(notification).play()
	setAudiocounter(1);
}

//the useEffect code is executed when the traffic light appears or the car stops
useEffect(() =>{
	
	showlevel(level);
	if(dataFromParent.dataFromParent.traffic==true){
		setBeta(60);
		setAcceleration(0);
		setAnimationtime(4);
		//make sure audio is only played once
		setNotifications("Red light detected")
		if(audiocounter==0&&showAudio==true){
			
			play();
		}
	}
	if(dataFromParent.dataFromParent.stop==true){
		setAlpha(60);
		
	}

},[dataFromParent.dataFromParent.traffic, dataFromParent.dataFromParent.stop])




//calculate the speed continiously and update the needle
//speed(t) = startspeed+t*acceleration
//predicted_speed = speed * Time_horizon* acceleration

const setPred_Speed = (acceleration,startspeed,predicition_horizon) => {
	let speed = startspeed+predicition_horizon*acceleration+60;
	setBeta(speed+60);
	return speed;
}

//animation for red needle (current speed)
const rotate = keyframes`
to {
  transform: rotate(${beta-alpha}deg);
}
`

const InfiniteRotate = styled.div`
animation: ${rotate} ${animationtime}s linear;
position: absolute;
top: 50%;
left: 50%;
`
//animation for predicted speed (green needle)
/*
const rotate_green = keyframes`
to {
  transform: rotate(${(beta+acceleration*predicition_horizon)-beta}deg);
}
`

const InfiniteRotateGreen = styled.div`
animation: ${rotate_green} ${animationtime}s linear infinite;
position: absolute;
top: 50%;
left: 50%;
`
*/

//not working function
/*
InfiniteRotate.addEventListener("animationend", myEndFunction);

function myEndFunction(){
	console.log("called");
}
*/
    return(
        <div className="engine">
        <div className="head">
	        <h1>Engine simulator</h1>
        </div>

        <div className="dashboard">
			<div style={{height:200}}></div>
			<h4 style={{color:"white"}}>current_speed: {startspeed} m/s</h4>
			<h4 style={{color:"white"}}>speed in 5 seconds: {beta-60}m/s</h4>
			<h4 style={{color:"red"}}>{showNotification ? notifications :<br></br>}</h4>
	        
	        <div className="meter meter--speed">

				{/* Enter the acceleration half round component here.  */}
				<div  style={{left: (50 - (50 - 10) * Math.sin(180 * (Math.PI / 180))) + "%", top: (50 + (50 - 10) * Math.cos(180 * (Math.PI / 180))) + "%",color:"green"}}>Place half round item here</div>
				
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

				<div className="grad-tick" style={{left: (50 - 50 * Math.sin(60 * (Math.PI / 180))) + "%", top: (50 + 50  * Math.cos(60 * (Math.PI / 180))) + "%", transform: "translate3d(-50%, 0, 0) rotate(" + (60 + 180) + "deg)"}}></div>
				<div className="grad-tick" style={{left: (50 - 50 * Math.sin(80 * (Math.PI / 180))) + "%", top: (50 + 50  * Math.cos(80 * (Math.PI / 180))) + "%", transform: "translate3d(-50%, 0, 0) rotate(" + (80 + 180) + "deg)"}}></div>
				<div className="grad-tick" style={{left: (50 - 50 * Math.sin(100 * (Math.PI / 180))) + "%", top: (50 + 50  * Math.cos(100 * (Math.PI / 180))) + "%", transform: "translate3d(-50%, 0, 0) rotate(" + (100 + 180) + "deg)"}}></div>
				<div className="grad-tick" style={{left: (50 - 50 * Math.sin(120 * (Math.PI / 180))) + "%", top: (50 + 50  * Math.cos(120 * (Math.PI / 180))) + "%", transform: "translate3d(-50%, 0, 0) rotate(" + (120 + 180) + "deg)"}}></div>
				<div className="grad-tick" style={{left: (50 - 50 * Math.sin(140 * (Math.PI / 180))) + "%", top: (50 + 50  * Math.cos(140 * (Math.PI / 180))) + "%", transform: "translate3d(-50%, 0, 0) rotate(" + (140 + 180) + "deg)"}}></div>
				<div className="grad-tick" style={{left: (50 - 50 * Math.sin(160 * (Math.PI / 180))) + "%", top: (50 + 50  * Math.cos(160 * (Math.PI / 180))) + "%", transform: "translate3d(-50%, 0, 0) rotate(" + (160 + 180) + "deg)"}}></div>
				<div className="grad-tick" style={{left: (50 - 50 * Math.sin(180 * (Math.PI / 180))) + "%", top: (50 + 50  * Math.cos(180 * (Math.PI / 180))) + "%", transform: "translate3d(-50%, 0, 0) rotate(" + (180 + 180) + "deg)"}}></div>
				<div className="grad-tick" style={{left: (50 - 50 * Math.sin(200 * (Math.PI / 180))) + "%", top: (50 + 50  * Math.cos(200 * (Math.PI / 180))) + "%", transform: "translate3d(-50%, 0, 0) rotate(" + (200 + 180) + "deg)"}}></div>
				<div className="grad-tick" style={{left: (50 - 50 * Math.sin(220 * (Math.PI / 180))) + "%", top: (50 + 50  * Math.cos(220 * (Math.PI / 180))) + "%",transform: "translate3d(-50%, 0, 0) rotate(" + (220 + 180) + "deg)"}}></div>
				<div className="grad-tick" style={{left: (50 - 50 * Math.sin(240 * (Math.PI / 180))) + "%", top: (50 + 50  * Math.cos(240 * (Math.PI / 180))) + "%", transform: "translate3d(-50%, 0, 0) rotate(" + (240 + 180) + "deg)"}}></div>
				<div className="grad-tick" style={{left: (50 - 50 * Math.sin(260 * (Math.PI / 180))) + "%", top: (50 + 50  * Math.cos(260 * (Math.PI / 180))) + "%",transform: "translate3d(-50%, 0, 0) rotate(" + (260 + 180) + "deg)"}}></div>
				<div className="grad-tick" style={{left: (50 - 50 * Math.sin(280 * (Math.PI / 180))) + "%", top: (50 + 50  * Math.cos(280 * (Math.PI / 180))) + "%",transform: "translate3d(-50%, 0, 0) rotate(" + (280 + 180) + "deg)"}}></div>
				<div className="grad-tick" style={{left: (50 - 50 * Math.sin(300 * (Math.PI / 180))) + "%", top: (50 + 50  * Math.cos(300 * (Math.PI / 180))) + "%",transform: "translate3d(-50%, 0, 0) rotate(" + (300 + 180) + "deg)"}}></div>

				<div style={{transform: "rotate("+alpha+"deg)",position: "absolute",top: "50%",left: "50%"}}>
				<InfiniteRotate>
					<div className="needle"></div>
				</InfiniteRotate>
				</div>

				<div style={{transform: "rotate("+beta+"deg)",position: "absolute",top: "50%",left: "50%"}}>
					
					<div className={showSpeed? "needle":""} style={{background:"#00FF00"}}></div>
				
				</div>
			</div>
			
        </div>
		


        
        </div>
    );
	
}


export default Speedometer;