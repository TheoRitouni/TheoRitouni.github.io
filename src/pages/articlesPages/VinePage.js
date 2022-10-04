import React from 'react';
import Navigation from '../../components/Navigation';

import vine from '../../assets/vine.png'

import { Box, Grid } from '@mui/material';

const VinePage = () => {
    return (
        <div>
            <Navigation/>
            <div    >
            <Box sx={{ py : 10 , backgroundImage :`url(${vine})`,  backgroundPosition:'center' - 100, 
                        backgroundRepeat : 'no-repeat', backgroundSize: 'cover'}}>
                <Grid sx={{justifyContent : 'center'}}container direction="row">
                    <Grid item>
                        <Box sx={{ width: 600,height: 400}}></Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ color: 'white', bgcolor: 'black', py : 15 }}>
                <Grid sx={{justifyContent : 'center'}}container direction="row">
                    <Grid item sx={{ width: 1/2 ,height: 400, textAlign:'center', borderColor : 'black'}}>
                        
                        <Box sx={{ py : 5 , px : 5,height: 200, textAlign :'center', fontSize : 36}}>
                            Résumé :
                        </Box>    
                        Lors de ce projet j'ai créer un générateur de lianes intelligents.
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{py : 10 }}>
                <Grid sx={{justifyContent : 'center'}}container direction="row">
                    <Grid item sx={{ width: 600,height: 400, textAlign:'center'}}>
                        <Box sx={{ py : 5 , px : 5, width: 600,height: 200, textAlign :'center', fontSize : 36}}>
                            Caractéristique :
                        </Box>    
                        <Box>
                            Genre : Plugin<br></br>
                            Platform  : PC <br></br>
                            Moteur  : Unreal <br></br>
                            
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ color: 'white', bgcolor: 'black', py : 5 }}>
                <Grid sx={{justifyContent : 'center'}}container direction="row">
                    <Grid item sx={{ width: 720,height: 600, textAlign:'center', borderColor : 'black'}}>
                        
                        <Box sx={{ width: 720,height: 100, textAlign :'center', fontSize : 36}}>
                            Vidéo :
                        </Box>    
                    </Grid>
                </Grid>
            </Box>
        </div>
        </div>
    );
};

export default VinePage;