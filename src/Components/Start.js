import React from 'react'
import '../App.css';
import Claire from './Claire';
import Grid from '@mui/material/Grid';
import StartButton from './StartButton';

function Start() {
  return (
    <div className='outter__div'>
      <Grid container
        direction="row"
        justifyContent="flex-start"
        alignItems="center">
        <Grid item xs={7}>
          <div style={{ marginLeft: "50px", marginBottom: "100px" }}>
            <h1>Claire</h1>
            <p style={{ fontSize: "20px" }}>Experience the future of autonomous driving with Claire, your ultimate in-car digital assistant. With real-time information and guidance, Claire ensures a safe and enjoyable journey. Don't forget to activate sound for full access to Claire's capabilities.</p>
          </div>
          <StartButton>
          </StartButton>
        </Grid>
        <Grid item xs={5}>
          <Claire />
        </Grid>
      </Grid>
    </div>
  )
}

export default Start