import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import '../App.css';
import Interface from './Interface';
import { useLocation } from 'react-router-dom';
import level1audio from '../Audio/level1.mp3';
import {VolumeUpIcon, VisibilityIcon, SpeedIcon, SensorsIcon} from '@mui/icons-material/SettingsVoice';


function Level() {
  
    const location = useLocation()
    const { score } = location.state 

const [level, setLevel] = useState(1);
const [assistance, setAssistance] = useState(true);
useEffect(() => {
  if (score <= 9) {
    setLevel(1)
    setAssistance("Complete Visual and Audio Assistance")
  }
  if (9 < score <= 15 ){
    setLevel(2)
    setAssistance("Complete Visual and basic Audio Assistance")
  }
  if (15 < score <= 21 ){
    setLevel(3)
    setAssistance("Complete Visual Assistance")
  }
  if(21 < score <= 25 ){
    setLevel(4)
    setAssistance("Basic Visual Assistance")
  }
});

function play(){
  new Audio(level1audio).play()
}
play()


  return (
    <div>
        
        <Interface>
        <div className = '/question-text'>
          Hello, Claire will support you in assistance Level {level}，with {assistance} explanations. You will receive detailed explanations 
          about the car's actions on the dashboard and also through audio announcement. Additionally, Claire will ask you to take control 
          in an emergency by vibrating the seat and turning the steering wheel red.
        </div>
          <Link to='/question'>
            <button className='button__next'>
              back
            </button>
          </Link>

          <Link to='/speedometer'>
            <button className='button__next'>
              next
            </button>
          </Link>
          <div>
          <VisibilityIcon ></VisibilityIcon>
          <VolumeUpIcon ></VolumeUpIcon>
          <SpeedIcon ></SpeedIcon>
          <SensorsIcon ></SensorsIcon>
          </div>
        </Interface>
    </div>
  )
}

export default Level