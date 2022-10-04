import { Box, Grid } from '@mui/material';
import React from 'react';

const InfoContact = () => {
    return (
        <div>
            <Box sx={{py:15}}>
                <Grid sx={{justifyContent : 'center'}}container direction="row">
                    <Grid item sx={{ width: 600,height: 400, textAlign:'center'}}>
                        t.ritouni@gmail.com<br/>
                        <a href="https://www.linkedin.com/in/theo-ritouni-a36098171/">Linkedin</a><br/>
                        <a href="https://github.com/Zenkyns">Github</a>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default InfoContact;