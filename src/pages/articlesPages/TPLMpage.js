import React from 'react';
import Navigation from '../../components/Navigation';

import tplm from '../../assets/tplm.png'
import tplmM from '../../assets/tplmM.png'

import { Box, Grid } from '@mui/material';

const TPLMpage = () => {
    
    const imageTplm = window.innerWidth >= 650 ? tplm : tplmM;
    const colortheme = '#4f4f4f';

    return (
        <div>
            <Navigation/>
            <div>

            <Box sx={{ color: 'white', bgcolor: colortheme, py : 10 }}>
                <Grid sx={{justifyContent : 'center'}}container direction="row">   
                    <Box component="img" sx={{borderRadius: 5, border :3,  bgcolor: colortheme}} 
                        alt='tplmImg' src = {imageTplm}>
                    </Box>
                </Grid>
            </Box>
            
            <Box sx={{ color: 'white', bgcolor: colortheme, py : 7 }}>
                <Grid sx={{justifyContent : 'center'}}container direction="row">
                    <Grid item sx={{ width: 1/3 ,height: 400, textAlign:'center', borderColor : colortheme}}>
                        
                        <Box sx={{ py : 5 , px : 5,height: 200, textAlign :'center', fontSize : 36}}>
                            Résumé :
                        </Box>    
                        Bienvenue sur la place de la mairie. Vous ètes deux candidat à la mairie et vous effectuer la distribution 
                        de vos tracts. Amenez le plus de personnes à adhérer à votre partie. Mais attention votre adversaire essayera de tous 
                        faire pour s'accaparer le plus de vote.
                    </Grid>

                    <Grid item sx={{ width: 600,height: 400, textAlign:'center'}}>
                        <Box sx={{py : 5 , px : 5,height: 200, textAlign :'center', fontSize : 36}}>
                            Caractéristique :
                        </Box>    
                        <Box>
                            Genre : Arcade Multijoueur Local<br></br>
                            Platform  : PC <br></br>
                            Moteur  : Unity <br></br>
                            
                        </Box>
                    </Grid>

                </Grid>
            </Box>

            <Box sx={{ color: 'white', bgcolor: colortheme }}>
                <Grid sx={{justifyContent : 'center'}}container direction="row">
                    <Grid item sx={{ width: 720,height: 600, textAlign:'center', borderColor : colortheme}}>
                        
                        <Box sx={{ width: 720,height: 100, textAlign :'center', fontSize : 36}}>
                            Vidéo :
                        </Box>    
                        <iframe width="720" height="400" src="https://www.youtube.com/embed/M5-uLtvAjtg" title="TOUTPOURLEMAIRE WALKTHOUGH 30" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Grid>
                </Grid>
            </Box>
        </div>
        </div>
    );
};

export default TPLMpage;