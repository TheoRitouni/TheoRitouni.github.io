import { Box, ButtonBase, Grid, Typography } from '@mui/material';
import React from 'react';
import CenterTitle from './CenterTitle';

const InfoContact = () => {
    return (
        <div>
            <Box sx={{py:15}}>
                <Grid sx={{justifyContent : 'center'}}container direction="row">
                    <Grid item sx={{ width: 600,height: 400, textAlign:'center'}}>

                        <Typography variant="h3">t.ritouni@gmail.com</Typography><br/>

                        <CenterTitle title=""/>
                        <a href="https://www.linkedin.com/in/theo-ritouni-a36098171/">
                            <ButtonBase>
                                <Box  component="img"  
                                    src = "/assets/Linkedin.png" 
                                    sx={{width: 250, height: 250}}>
                                </Box>
                            </ButtonBase>
                        </a><br/>

                        <CenterTitle title=""/>

                        <a href="https://github.com/Zenkyns">
                            <ButtonBase>
                                <Box  component="img"  
                                    src = "/assets/github.png" 
                                    sx={{width: 250, height: 250}}>
                                </Box>
                            </ButtonBase>
                        </a>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default InfoContact;