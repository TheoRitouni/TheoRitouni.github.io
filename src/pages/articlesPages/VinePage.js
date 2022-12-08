import React from 'react';
import Navigation from '../../components/Navigation';

import vine from '../../assets/vine.png'

import { Box, Grid } from '@mui/material';

const VinePage = () => {

    const imageVine = window.innerWidth >= 650 ? vine : vine;
    const colortheme = '#4f4f4f';

    return (
        <div>
        <Navigation/>
        <div>

        <Box sx={{ color: 'white', bgcolor: colortheme, py : 10 }}>
            <Grid sx={{justifyContent : 'center'}}container direction="row">   
                <Box component="img" sx={{borderRadius: 5, border :3,  bgcolor: colortheme}} 
                    alt='tplmImg' src = {imageVine}>
                </Box>
            </Grid>
        </Box>
        
        <Box sx={{ color: 'white', bgcolor: colortheme, py : 7 }}>
            <Grid sx={{justifyContent : 'center'}}container direction="row">
                <Grid item sx={{ width: 1/3 ,height: 400, textAlign:'center', borderColor : colortheme}}>
                    
                    <Box sx={{ py : 5 , px : 5,height: 200, textAlign :'center', fontSize : 36}}>
                        Résumé :
                    </Box>    
                    Lors de ce projet j'ai crée un outil qui permet de créer des lianes qui s'adaptents au terrain.
                </Grid>

                <Grid item sx={{ width: 600,height: 400, textAlign:'center'}}>
                    <Box sx={{py : 5 , px : 5,height: 200, textAlign :'center', fontSize : 36}}>
                        Caractéristique :
                    </Box>    
                    <Box>
                        Genre : Tools<br></br>
                        Platform  : PC <br></br>
                        Moteur  : Unreal <br></br>
                        
                    </Box>
                </Grid>

            </Grid>
        </Box>
        </div>
        </div>

    );
};

export default VinePage;