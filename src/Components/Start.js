import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';


function Start() {
  return (
    <div>
      <div>Start</div>




      <div className='next__div'>
        <Link to='/' className='back__link'>
          <button onClick={() => window.scrollTo({ top: 0 })} className='button__next'>
            back
          </button>
        </Link>

        <Link to='/question' className='next__link'>
          <button onClick={() => window.scrollTo({ top: 0 })} className='button__next'>
            next
          </button>
        </Link>
      </div>

    </div>
  )
}

export default Start