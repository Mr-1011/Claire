import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';
import Interface from './Interface';

function Profile() {
  return (
    <div>
      <Interface>
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
      </Interface>
    </div>
  )
}

export default Profile