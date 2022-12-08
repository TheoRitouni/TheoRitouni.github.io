import React from 'react';
import Navigation from '../../components/Navigation';

import rts from '../../assets/rts.png'

import { Box, Grid } from '@mui/material';
//import ArticleTextBox from '../../components/articlesComp/ArticleTextBox';

const RTSpage = () => {
    
    const imageRts = rts;
    const colortheme = '#4f4f4f';

    return (
        <div>
        <Navigation/>
        <div>

        <Box sx={{ color: 'white', bgcolor: colortheme, py : 10 }}>
            <Grid sx={{justifyContent : 'center'}}container direction="row">   
                <Box component="img" sx={{borderRadius: 5, border :3,  bgcolor: colortheme}} 
                    alt='tplmImg' src = {imageRts}>
                </Box>
            </Grid>
        </Box>
        
        <Box sx={{ color: 'white', bgcolor: colortheme, py : 7 }}>
            <Grid sx={{justifyContent : 'center'}}container direction="row">
                <Grid item sx={{ width: 1/3 ,height: 400, textAlign:'center', borderColor : colortheme}}>
                    
                    <Box sx={{ py : 5 , px : 5,height: 200, textAlign :'center', fontSize : 36}}>
                        Résumé :
                    </Box>    
                    Solid RTS est un jeu développé sur Unity qui permet de se battre contre une IA. l'IA est au 
                    coeur de se projet où il à fallu immaginer les différentes actions de cette dernière pour qu'elle réagisent en conséquence.
                    Lors de ce projet nous avons élaborer un behaviour tree avec tous un systéme de tâches pour que l'ia effectues ses tâches dans l'ordre.
                </Grid>

                <Grid item sx={{ width: 600,height: 400, textAlign:'center'}}>
                    <Box sx={{py : 5 , px : 5,height: 200, textAlign :'center', fontSize : 36}}>
                        Caractéristique :
                    </Box>    
                    <Box>
                        Genre : RTS Platform<br></br>
                        Platform  : PC <br></br>
                        Moteur  : Unity <br></br>
                        
                    </Box>
                </Grid>

            </Grid>
        </Box>

        {/*<Box sx={{ color: 'white', bgcolor: colortheme }}>
            <Grid sx={{justifyContent : 'center'}}container direction="row">
                <Grid item sx={{ width: 720,height: 600, textAlign:'center', borderColor : colortheme}}>
                    
                    <Box sx={{ width: 720,height: 100, textAlign :'center', fontSize : 36}}>
                        Vidéo :
                    </Box>    
                    <iframe width="720" height="400" src="https://www.youtube.com/embed/M5-uLtvAjtg" title="TOUTPOURLEMAIRE WALKTHOUGH 30" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Grid>
            </Grid>
    </Box>*/}
    </div>
    </div>





/*
        <div>
            <Navigation/>
            <div    >
            <Box sx={{ py : 10 , backgroundImage :`url(${imageTplm})`,  backgroundPosition:'center' - 100, 
                        backgroundRepeat : 'no-repeat', backgroundSize: 'cover'}}>
                <Grid sx={{justifyContent : 'center'}}container direction="row">
                    <Grid item>
                        <Box sx={{ width: 600,height: 400}}></Box>
                    </Grid>
                </Grid>
            </Box>

            <ArticleTextBox 
            title = "Résumé :" 
            resume = {"Solid RTS est un jeu développé sur Unity qui permet de se battre contre une IA. l'IA est au " +
                    "coeur de se projet où il à fallu immaginer les différentes actions de cette dernière pour qu'elle réagisent en conséquence." +
                    "Lors de ce projet nous avons élaborer un behaviour tree avec tous un systéme de tâches pour que l'ia effectues ses tâches dans l'ordre."}/>
            <ArticleTextBox 
            color = {false} 
            title = "Caractéristique :" 
            resume = {"Genre : RTS Platform  : PC Moteur  : Unity " }/>
        
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
    </div>*/
    );
};

export default RTSpage;