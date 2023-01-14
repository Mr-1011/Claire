import React from 'react'
import "./engine.scss";
import { Link } from "react-router-dom";

export default function batterystatus() {
  return (
    <div className="engine">
        

        <div className="dashboard">
			
			
            <h2 style={{color:"green", border:"1px solid green", fontFamily:"Arial", fontSize:40}}>Battery Status: 88% </h2>
			
	        
	        <div className="meter meter--speed">

				
				<div className="grad" style={{left: (50 - (50 - 10) * Math.sin(60 * (Math.PI / 180))) + "%", top: (50 + (50 - 10) * Math.cos(60 * (Math.PI / 180))) + "%"}}>0%</div>
				<div className="grad" style={{left: (50 - (50 - 10) * Math.sin(84 * (Math.PI / 180))) + "%", top: (50 + (50 - 10) * Math.cos(84 * (Math.PI / 180))) + "%"}}>10%</div>
				<div className="grad" style={{left: (50 - (50 - 10) * Math.sin(108 * (Math.PI / 180))) + "%", top: (50 + (50 - 10) * Math.cos(108 * (Math.PI / 180))) + "%"}}>20%</div>
				<div className="grad" style={{left: (50 - (50 - 10) * Math.sin(132 * (Math.PI / 180))) + "%", top: (50 + (50 - 10) * Math.cos(132 * (Math.PI / 180))) + "%"}}>30%</div>
				<div className="grad" style={{left: (50 - (50 - 10) * Math.sin(156 * (Math.PI / 180))) + "%", top: (50 + (50 - 10) * Math.cos(156 * (Math.PI / 180))) + "%"}}>40%</div>
				<div className="grad" style={{left: (50 - (50 - 10) * Math.sin(180 * (Math.PI / 180))) + "%", top: (50 + (50 - 10) * Math.cos(180 * (Math.PI / 180))) + "%"}}>50%</div>
				<div className="grad" style={{left: (50 - (50 - 10) * Math.sin(204 * (Math.PI / 180))) + "%", top: (50 + (50 - 10) * Math.cos(204 * (Math.PI / 180))) + "%"}}>60%</div>
				<div className="grad" style={{left: (50 - (50 - 10) * Math.sin(228 * (Math.PI / 180))) + "%", top: (50 + (50 - 10) * Math.cos(228 * (Math.PI / 180))) + "%"}}>70%</div>
				<div className="grad" style={{left: (50 - (50 - 10) * Math.sin(252 * (Math.PI / 180))) + "%", top: (50 + (50 - 10) * Math.cos(252 * (Math.PI / 180))) + "%"}}>80%</div>
				<div className="grad" style={{left: (50 - (50 - 10) * Math.sin(276 * (Math.PI / 180))) + "%", top: (50 + (50 - 10) * Math.cos(276 * (Math.PI / 180))) + "%"}}>90%</div>
				<div className="grad" style={{left: (50 - (50 - 10) * Math.sin(300 * (Math.PI / 180))) + "%", top: (50 + (50 - 10) * Math.cos(300 * (Math.PI / 180))) + "%"}}>100%</div>


				<div className="grad-tick" style={{left: (50 - 50 * Math.sin(60 * (Math.PI / 180))) + "%", top: (50 + 50  * Math.cos(60 * (Math.PI / 180))) + "%", transform: "translate3d(-50%, 0, 0) rotate(" + (60 + 180) + "deg)"}}></div>
				<div className="grad-tick" style={{left: (50 - 50 * Math.sin(84 * (Math.PI / 180))) + "%", top: (50 + 50  * Math.cos(84 * (Math.PI / 180))) + "%", transform: "translate3d(-50%, 0, 0) rotate(" + (84 + 180) + "deg)"}}></div>
				<div className="grad-tick" style={{left: (50 - 50 * Math.sin(108 * (Math.PI / 180))) + "%", top: (50 + 50  * Math.cos(108 * (Math.PI / 180))) + "%", transform: "translate3d(-50%, 0, 0) rotate(" + (108 + 180) + "deg)"}}></div>
				<div className="grad-tick" style={{left: (50 - 50 * Math.sin(132 * (Math.PI / 180))) + "%", top: (50 + 50  * Math.cos(132 * (Math.PI / 180))) + "%", transform: "translate3d(-50%, 0, 0) rotate(" + (132 + 180) + "deg)"}}></div>
				<div className="grad-tick" style={{left: (50 - 50 * Math.sin(156 * (Math.PI / 180))) + "%", top: (50 + 50  * Math.cos(156 * (Math.PI / 180))) + "%", transform: "translate3d(-50%, 0, 0) rotate(" + (156 + 180) + "deg)"}}></div>
				<div className="grad-tick" style={{left: (50 - 50 * Math.sin(180 * (Math.PI / 180))) + "%", top: (50 + 50  * Math.cos(180 * (Math.PI / 180))) + "%", transform: "translate3d(-50%, 0, 0) rotate(" + (180 + 180) + "deg)"}}></div>
				<div className="grad-tick" style={{left: (50 - 50 * Math.sin(204 * (Math.PI / 180))) + "%", top: (50 + 50  * Math.cos(204 * (Math.PI / 180))) + "%", transform: "translate3d(-50%, 0, 0) rotate(" + (204 + 180) + "deg)"}}></div>
				<div className="grad-tick" style={{left: (50 - 50 * Math.sin(228 * (Math.PI / 180))) + "%", top: (50 + 50  * Math.cos(228 * (Math.PI / 180))) + "%", transform: "translate3d(-50%, 0, 0) rotate(" + (228 + 180) + "deg)"}}></div>
				<div className="grad-tick" style={{left: (50 - 50 * Math.sin(252 * (Math.PI / 180))) + "%", top: (50 + 50  * Math.cos(252 * (Math.PI / 180))) + "%",transform: "translate3d(-50%, 0, 0) rotate(" + (252 + 180) + "deg)"}}></div>
				<div className="grad-tick" style={{left: (50 - 50 * Math.sin(276 * (Math.PI / 180))) + "%", top: (50 + 50  * Math.cos(276 * (Math.PI / 180))) + "%", transform: "translate3d(-50%, 0, 0) rotate(" + (276 + 180) + "deg)"}}></div>
				<div className="grad-tick" style={{left: (50 - 50 * Math.sin(300 * (Math.PI / 180))) + "%", top: (50 + 50  * Math.cos(300 * (Math.PI / 180))) + "%",transform: "translate3d(-50%, 0, 0) rotate(" + (300 + 180) + "deg)"}}></div>
				
                <div className="needle1" style={{transform: "rotate(270deg)",}}></div>
				
			</div>
			
        </div>
		


        
        </div>
  )
}
