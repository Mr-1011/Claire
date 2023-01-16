import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import '../App.css';
import Interface from './Interface';
import { useLocation } from 'react-router-dom';
import ClaireGif from '../img/Claire.gif'

function Profile({ score }) {

  const [showSection, setshowSection] = useState(true);
  const [showLogin, setshowLogin] = useState(true);

  const [level, setLevel] = useState(1);
  const [assistance, setAssistance] = useState(true);
  useEffect(() => {
    if (score <= 9) {
      setLevel(1)
      setAssistance("Complete Visual and Audio Assistance")
    }
    else if (score > 9 && score <= 15) {
      setLevel(2)
      setAssistance("Complete Visual and basic Audio Assistance")
    }
    else if (score > 15 && score <= 21) {
      setLevel(3)
      setAssistance("Complete Visual Assistance")
    }
    else if (score > 21 && score <= 25) {
      setLevel(4)
      setAssistance("Basic Visual Assistance")
    }
  });
/**git  */
  return (
    <div style={{ display: "flex", margin: "20px 50px 0px 50px", justifyContent: "space-between" }}>
      <div className='morph__div'>
        <p className='landing__p'>Thank you</p>
        <p className='landing__p'>I have calculated the optimal way to support you with autonomous driving</p>
        <img alt={"..."} src={ClaireGif} style={{ width: "100px", height: "100", borderRadius: "100%" }}></img>
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <button className='morph__button' onClick={() => setshowLogin(!showLogin)}>
          {showLogin ? ("Export Account") : ("Not yet possible")}
        </button>
        <Link to={`/level${level}`} state={{ score: score }}>
          <button className='morph__button' onClick={() => setshowSection(false)}>
            Continue
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Profile