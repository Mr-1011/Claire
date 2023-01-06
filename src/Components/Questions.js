import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';
import SingleQuestion from './SingleQuestion';
import Interface from './Interface';

function Questions() {
  return (
    <div>
      <Interface>
        <SingleQuestion></SingleQuestion>
        <Link to='/'>
          <button className='button__next'>
            back
          </button>
        </Link>

        <Link to='/profile'>
          <button className='button__next'>
            next
          </button>
        </Link>
      </Interface>
    </div >
  )
}

export default Questions