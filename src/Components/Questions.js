import React from 'react'
import { Link } from "react-router-dom";
import SingleQuestion from './SingleQuestion';
import Interface from './Interface';
import '../App.css';
import ClaireGif from '../img/Claire.gif'


function Questions() {
  return (
    <div>
      <Interface>




        <SingleQuestion>

        </SingleQuestion>

        {/* <div style={{ display: "flex", margin: "20px 50px 0px 50px", justifyContent: "space-between" }}>
          <div className='morph__div'>
            <img alt={"..."} src={ClaireGif} style={{ width: "100px", height: "100", borderRadius: "100%" }}></img>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Link to='/profile'>
            <button className='morph__button'>
              Login
            </button>
            </Link>
            <Link to='/profile'>
              <button className='morph__button'>
                Create New Profile
              </button>
            </Link>
          </div>
        </div> */}

      </Interface>
    </div >
  )
}

export default Questions