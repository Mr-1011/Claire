import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';

function Dashboard() {
  return (
    <div className='outter__div'>
      <h2>Speedometer</h2>

      <footer>
        <Link to='/profile'>
          <button onClick={() => window.scrollTo({ top: 0 })} className='button__next'>
            back
          </button>
        </Link>

        <Link to='/'>
          <button onClick={() => window.scrollTo({ top: 0 })} className='button__next'>
            home
          </button>
        </Link>
      </footer>

    </div>
  )
}

export default Dashboard