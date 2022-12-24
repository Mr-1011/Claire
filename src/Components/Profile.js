import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';

function Profile() {
  return (
    <div className='outter__div'>
      <h2>Profile</h2>

      <footer>
        <Link to='/question'>
          <button onClick={() => window.scrollTo({ top: 0 })} className='button__next'>
            back
          </button>
        </Link>

        <Link to='/dashboard'>
          <button onClick={() => window.scrollTo({ top: 0 })} className='button__next'>
            next
          </button>
        </Link>
      </footer>

    </div>
  )
}

export default Profile