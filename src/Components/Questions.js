import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';

function Questions() {
  return (
    <div className='outter__div'>
      <h2>Questions</h2>

      <footer>
        <Link to='/'>
          <button onClick={() => window.scrollTo({ top: 0 })} className='button__next'>
            back
          </button>
        </Link>

        <Link to='/profile'>
          <button onClick={() => window.scrollTo({ top: 0 })} className='button__next'>
            next
          </button>
        </Link>
      </footer>

    </div>
  )
}

export default Questions