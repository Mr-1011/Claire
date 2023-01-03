import Speedometer from "../speedometer/speedometer";
import Animation from "../Animation/Animation";

import Grid from '@mui/material/Grid';


function Dashboard () {
    return(
        <div>
        <Grid container column={2}>
        <Grid item xs={4}>
            <Speedometer/>
        </Grid>
        <Grid item xs={4}>
            <Animation/>
        </Grid>
        </Grid>
        </div>

    )

}

export default Dashboard;