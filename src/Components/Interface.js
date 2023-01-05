import React from 'react'
import '../App.css';
import Grid from '@mui/material/Grid';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import NearMeIcon from '@mui/icons-material/NearMe';
import WidgetsIcon from '@mui/icons-material/Widgets';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WifiIcon from '@mui/icons-material/Wifi';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';

function Interface({ children }) {
  return (
    <div className='outter__div'>
      <Grid container>
        <Grid item xs={1}>
          <div style={{ height: "600px", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>
            <IconButton aria-label="widget" size="large" sx={{ color: "grey" }} >
              <DirectionsCarIcon sx={{ fontSize: 60 }} />
            </IconButton>
            <IconButton aria-label="widget" size="large" sx={{ color: "grey" }} >
              <NearMeIcon sx={{ fontSize: 60 }} />
            </IconButton>
            <IconButton aria-label="widget" size="large" sx={{ color: "white" }}>
              <WidgetsIcon sx={{ fontSize: 60 }} />
            </IconButton>
            <IconButton aria-label="widget" size="large" sx={{ color: "grey" }}>
              <LibraryMusicIcon sx={{ fontSize: 60 }} />
            </IconButton>
            <IconButton aria-label="widget" size="large" sx={{ color: "grey" }}>
              <SettingsIcon sx={{ fontSize: 60 }} />
            </IconButton>
          </div>
        </Grid>
        <Grid item xs={11}>
          <div style={{ position: "relative", alignItems: "center", backgroundColor: "#24272C", width: "1265px", height: "620px", borderRadius: "36px" }}>
            <div style={{ margin: "auto", width: "1200px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <AccountCircleIcon sx={{ fontSize: 40, marginRight: 3 }} />
                <input type="text" placeholder="Search..." className="search"></input>
              </div>

              <div style={{ width: "220px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <WifiIcon sx={{ fontSize: 40 }} />
                <h2>21°</h2>
                <h2 style={{ marginRight: "20px" }}>22:10</h2>
              </div>
            </div>




            <div className="morph__div">
              {children}
            </div>




            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ backgroundColor: "#484D55", position: "absolute", bottom: "0", width: "1200px", height: "88px", borderRadius: "24px 24px 0px 0px" }}>
                <div style={{ width: "90%", margin: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "15px" }}>
                  <input type="range" min="1" max="100" value="50" className="slider" id="myRange"></input>
                  <button className='morph__button'>
                    AUTO
                  </button>
                  <button className='morph__button'>
                    <GppMaybeIcon />
                  </button>
                  <button className='morph__button'>
                    <GppMaybeIcon />
                  </button>
                  <button className='morph__button'>
                    <GppMaybeIcon />
                  </button>
                  <button className='morph__button'>
                    <GppMaybeIcon />
                  </button>
                  <input type="range" min="1" max="100" value="50" className="slider" id="myRange"></input>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>


    </div >
  )
}

export default Interface