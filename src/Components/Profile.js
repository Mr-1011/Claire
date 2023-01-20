import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import '../App.css';
import ClaireGif from '../img/Claire.gif'

// We first indicate that the level is calculated and show the possibility to export the account. This functionality is not yet developed. Therefore, the button changes the text to not yet possible. When the user clicks Next, he will be redirected to the level screen.

function Profile({ score }) {

  const [showLogin, setshowLogin] = useState(true);
  const [level, setLevel] = useState(1);
  const [assistance, setAssistance] = useState(true);

  useEffect(() => {
    if (score <= 9) {
      setLevel(1)
      setAssistance("visual assistance and detailed audio explanations. In an emergency, the steering wheel will turn red and the seat will vibrate.")
    }
    else if (score > 9 && score <= 15) {
      setLevel(2)
      setAssistance("visual assistance and basic audio explanations. In an emergency, the steering wheel will turn red and the seats will vibrate.")
    }
    else if (score > 15 && score <= 21) {
      setLevel(3)
      setAssistance("visual assistance. In an emergency, the steering wheel will turn red and the seats will vibrate.")
    }
    else if (score > 21 && score <= 25) {
      setLevel(4)
      setAssistance("with visual assistance.")
    }
  }, [score]);

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
        <Link to={`/level${level}`} state={{ score: score, assistance: assistance, level: level }}>
          <button className='morph__button'>
            Continue
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Profile