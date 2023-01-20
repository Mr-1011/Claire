import React, { useState } from 'react';
import SingleQuestion from './SingleQuestion';
import Interface from './Interface';
import '../App.css';
import ClaireGif from '../img/Claire.gif'

// we placed the question to sign in here. We want to develop the functionality to take your personal account with you. Currently the sign in button changes its text to not possible.

function Questions() {
  const [showSection, setshowSection] = useState(true);
  const [showLogin, setshowLogin] = useState(true);

  return (
    <div>
      <Interface>
        {showSection ? (
          <div style={{ display: "flex", margin: "20px 50px 0px 50px", justifyContent: "space-between" }}>
            <div className='morph__div'>
              <p className='landing__p'>Welcome to Claire</p>
              <p className='landing__p'>Sign in or create a new profile to enjoy personalized driving support.</p>
              <img alt={"..."} src={ClaireGif} style={{ width: "100px", height: "100", borderRadius: "100%" }}></img>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <button className='morph__button' onClick={() => setshowLogin(!showLogin)}>
                {showLogin ? ("Login") : ("Not yet possible")}
              </button>
              <button className='morph__button' onClick={() => setshowSection(false)}>
                Create New Profile
              </button>
            </div>
          </div>
        ) : (
          // here we pass the questions to creata driver profile as a separate component         
          <SingleQuestion />
        )}
      </Interface>
    </div >
  )
}

export default Questions