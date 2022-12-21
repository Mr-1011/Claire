import React, { useEffect, useState } from "react";
import { Container, Typography, Grid, Box, TextField} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";


//import SignIn from '../NOTinUSE-don't delete/SignIn';


const Profile = () => {
 
  const[speed,setSpeed] = useState(100);
  const[acceleration,setAcceleration] = useState(0);

  return (
    <Container justify="center">
      <Box sx={{ display: "flex " }}>
        


        <Grid
          container
          direction="row"
          spacing={1}
          paddingTop="100px"
          align="center"
        >
          <Grid item sm={12}>
            <Typography variant="h5" align="center">
              Speedometer
            </Typography>
           
          </Grid>
          <Grid item sm={12}>
            <TextField
                  required
                  fullWidth
                  id="current_speed"
                  name="current speed"
                  variant="standard"
                  style={{ minWidth: "160px" }}
                  label="Current Speed in m/s"
                  type="number"
                
                  value={speed}
                  onChange={(e)=> setSpeed(e.target.value)}
            />
           
          </Grid>
          <Grid item sm={12}>
          <TextField
                  required
                  fullWidth
                  id="current_a"
                  name="acceleration"
                  variant="standard"
                  style={{ minWidth: "160px" }}
                  label="constant acceleration in m/s^2"
                  type="number"
                
                  value={acceleration}
                  onChange={(e)=> setAcceleration(e.target.value)}
            />
           
          </Grid>

          <Grid item sm={12}>
            <Typography variant="h5" align="center">
              Speed in 5 seconds
            </Typography>
          
            
          </Grid>
          <Grid item sm={12}>
            <Typography variant="h5" align="center">
              {speed+acceleration*5} m/s
            </Typography>
          
            
          </Grid>
          <Grid item sm={12}>
            <Typography variant="h5" align="center">
              calculated with formula: v(5) = input speed + acceleration*5
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Profile;
