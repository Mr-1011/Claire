import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';
import Interface from './Interface';

function Profile({ score }) {
  return (
    <div>

      Your score is {score}

      <Link to='/speedometer'>
        <button className='button__next'>
          next
        </button>
      </Link>

    </div>
  )
}

export default Profile