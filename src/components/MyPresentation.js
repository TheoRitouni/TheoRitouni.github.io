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
                            
                            <CenterTitle title="Expériences"></CenterTitle>
                            
                            <CenterTitle title="Etudes"></CenterTitle>
                            
                            <CenterTitle title="Passions"></CenterTitle>
                       
                        </Grid>
                    </Grid>
                </Box>
            </div>
        )
    }
}
