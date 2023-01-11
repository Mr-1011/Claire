import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import '../App.css';
import Interface from './Interface';
import { useLocation } from 'react-router-dom';
import level1audio from '../Audio/level1.mp3';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';


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
  else if (9 < score <= 15 ){
    setLevel(2)
    setAssistance("Complete Visual and basic Audio Assistance")
  }
  else if (15 < score <= 21 ){
    setLevel(3)
    setAssistance("Complete Visual Assistance")
  }
  else if(21 < score <= 25 ){
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
          Hello, your score is {score} out of 25! Claire will support you with assistance Level {level}，with {assistance} explanations.
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
          <SettingsVoiceIcon ></SettingsVoiceIcon>
          </div>
        </Interface>
    </div>
  )
}

export default Level