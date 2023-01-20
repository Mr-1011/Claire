import Speedometer from "../speedometer/speedometer";
import Animation from "../Animation/Animation";
import { useState } from "react";
import Grid from '@mui/material/Grid';


function Dashboard() {
    /*
    const [showTraffic,setShowTraffic] = useState(false);
    callbackFunction = (childData)=>{
        this.setShowTraffic(childData)
    }
    console.log(showTraffic);
    */
    return (
        <div>
            <Grid container column={2}>
                <Grid item xs={4}>
                    <Speedometer />
                </Grid>
                <Grid item xs={4}>
                    <Animation parentCallback={this.callbackFunction} />
                </Grid>
            </Grid>
        </div>

    )

}

export default Dashboard;