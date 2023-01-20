import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';
import Interface from './Interface';
import { useLocation } from 'react-router-dom';
import level3audio from '../Audio/level3.mp3';
import ClaireGif from '../img/Claire.gif';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WaterIcon from '@mui/icons-material/Water';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

// We have a separate component for the four levels. Here the user sees how Claire will support the driver, and icons that summarize the communication channels. An audio file is played explaining the support with an AI voice 

function Level() {

  const location = useLocation()
  const { level, assistance } = location.state

  function play() {
    new Audio(level3audio).play()
  }
  play()


  return (
    <div>
      <Interface>
        <div style={{ display: "flex", margin: "20px 50px 0px 50px", justifyContent: "space-between" }}>
          <div className='morph__div__big'>
            <div style={{ display: "flex", alignItems: "center", fontSize: "32px", textAlign: "left" }}>
              <img alt={"..."} src={ClaireGif} style={{ margin: "0px 30px 0px 20px", width: "100px", height: "100px", borderRadius: "100%" }}></img>
              Claire will support you with assistance Level {level}, with {assistance}
            </div>
            <div style={{ display: "flex", marginTop: "40px", justifyContent: "space-around" }}>
              <div className='morph__div__box'>
                <VisibilityIcon sx={{ fontSize: 70 }} ></VisibilityIcon>
                Visual
              </div>
              <div className='morph__div__box'>
                <WaterIcon sx={{ fontSize: 70 }} ></WaterIcon>
                Haptic
              </div>
              <Link to='/speedometer' >
                <div className='morph__button__box'>
                  <KeyboardDoubleArrowRightIcon sx={{ fontSize: 120, color: "white" }}></KeyboardDoubleArrowRightIcon>
                </div>
              </Link>
            </div>
          </div>
        </div >
      </Interface>
    </div>
  )
}

export default Level