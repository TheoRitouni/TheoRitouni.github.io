import { Box, Grid } from '@mui/material';
import React from 'react';
import CenterTitle from './CenterTitle';

export default class MyPresentation extends React.Component{
    
    render(){
        return (
            <div>
                <Box sx={{py:15}}>
                    <Grid sx={{justifyContent : 'center'}}container direction="row">
                        <Grid item sx={{ width: 600,height: 350, textAlign:'center'}}>
                            <Box component="img" src={"../../assets/theo.png"} 
                            sx={{ width: 400,height: 400, borderRadius: 50, border :2}}/>
                            
                            <CenterTitle title="Compétences"></CenterTitle>
                            <Box>
                                    Versionning : Git, Perforce <br/>
                                    Moteur 3D : Unity, Unreal <br/>
                                    Langages : C, C++, C#, Python, html-css, glsl, Visual scripting <br/>
                                    API graphique : OpenGL, Vulkan <br/>
                                    IDE : Visual studio, vs code, QT <br/>
                                    Debug: Valgrind, RenderDoc, Visual studio <br/>

                            </Box>

                            <CenterTitle title="Expériences"></CenterTitle>
                            <Box>
                            Développeur 3D, Stage  <br/>
                            C++, Vulkan, OpenGL, Git, glsl, Socket Server   <br/>   
                            Oct 2021 – Juil 2022 : ModuloPi, île de France<br/><br/>
                            

                            Animateur en Programmation, CDD<br/>
                            Unity, python, robotique, Organisation, Transmission du savoir <br/>
                            Jan 2021 – Juin 2021 : MagicMakers, Paris<br/>


                            </Box>

                            <CenterTitle title="Etudes"></CenterTitle>
                            <Box>
                            Master Lead Game Programming : 2019 – 2023 <br/>
                            Isart Digital, Paris 11eme.<br/>
                            <br/>
    
                            Licence STAPS générale : 2018<br/>
                            Université de Limoges.<br/>

                            </Box>

                            <CenterTitle title="Passions"></CenterTitle>
                            <Box>
                                Mes passions sont le sport et notament la danse hip hop, contemporaine et rock. J'aime beaucoup faire des acrobaties. 
                                Et l'escalade me passionne depuis peu, je découvre ainsi la pratique du block.
                                Au dela du sport je suis passioné par le cinéma, j'aime les films où je plonge facilement dans leur histoire, univer.
                                Et bien évidemment j'adore les jeux vidéo, mon jeu préféré Jak and Daxter. 
                                <br/>
                            </Box>

                        </Grid>
                    </Grid>
                </Box>
            </div>
        )
    }
}
