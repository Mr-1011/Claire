import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';

function Questions() {
  return (
    <div>
      <div>Questions</div>

      <div className='next__div'>
        <Link to='/' className='back__link'>
          <button onClick={() => window.scrollTo({ top: 0 })} className='button__next'>
            back
          </button>
        </Link>

        <Link to='/profile' className='next__link'>
          <button onClick={() => window.scrollTo({ top: 0 })} className='button__next'>
            next
          </button>
        </Link>
      </div>

    </div>
  )
}

export default Questions