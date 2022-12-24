import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';
import Claire from './Claire';
import Grid from '@mui/material/Grid';

function Start() {
  return (
    <div className='outter__div'>
      <Grid container
        direction="row"
        justifyContent="flex-start"
        alignItems="center">
        <Grid item xs>
          <div style={{ marginLeft: "50px" }}>
            <h1>Claire</h1>
            <p>Welcome to the world's first in-car digital assistant to help you drive autonomously. Claire helps you figure out where and how to communicate driving-relevant information to make you feel safe.</p>
          </div>
          <Link to='/question'>
            <button onClick={() => window.scrollTo({ top: 0 })} className='button__start'>
              Start
            </button>
          </Link>
        </Grid>
        <Grid item xs>
          <Claire />
        </Grid>
      </Grid>
    </div>
  )
}

export default Start