import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import '../App.css';
import Interface from './Interface';
import { useLocation } from 'react-router-dom';

function Profile({score}) {
 
 

const [level, setLevel] = useState(1);
const [assistance, setAssistance] = useState(true);
useEffect(() => {
  if (score <= 9) {
    setLevel(1)
    setAssistance("Complete Visual and Audio Assistance")
  }
  else if (9 < score <= 15){
    setLevel(2)
    setAssistance("Complete Visual and basic Audio Assistance")
  }
  else if (15 < score <= 21 ){
    setLevel(3)
    setAssistance("Complete Visual Assistance")
  }
  else if(21 < score <= 25 ) {
    setLevel(4)
    setAssistance("Basic Visual Assistance")
  }
});

  return (
    <div>

      Calculating your score...

      <Link to={`/level${level}`} state={{score: score}}>
        <button className='button__next'>
          See my result
        </button>
      </Link>

    </div>
  )
}

export default Profile