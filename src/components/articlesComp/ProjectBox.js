import { Box, ButtonBase, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import React from 'react';


export default class ProjectBox extends React.Component{
    
    render(){
        
        return (
        <div>
             <Grid container spacing={4} columns={15}>
                <Grid xs={7}>
                    <Box display="flex" 
                        sx={{height: 300, background: '#4f4f4f'}} 
                        alignItems="center"
                        justifyContent="flex-end">
                    
                        <NavLink to={this.props.navlinkstrL}>
                            <ButtonBase>
                                <Box  component="img"  
                                    src = {this.props.imageL}  
                                    sx={{height: 250, width: 300}}></Box>
                            </ButtonBase>
                        </NavLink>

                    </Box>
                </Grid>

                <Grid xs={1} sx={{height: 300, background: '#4f4f4f'}}/>

                <Grid xs={7}>
                    <Box display="flex" 
                        sx={{height: 300,  background: '#4f4f4f'}} 
                        alignItems="center"
                        justifyContent="flex-start">

                    <NavLink to={this.props.navlinkstrR}>
                        <ButtonBase onClick={ window.scrollTo(0,0)} >
                            <Box  component="img" 
                                src = {this.props.imageR} 
                                sx={{height: 250, width: 300}}></Box>
                        </ButtonBase>
                    </NavLink>

                    </Box>
                </Grid>
            </Grid>
        </div>
        )
    }
}

ProjectBox.defaultProps = {
    titleL: "Titre",
    resumeL: "Projet description",
    imageL : "../../assets/icon.png",
    navlinkstrL: "/",

    titleR: "Titre",
    resumeR: "Projet description",
    imageR : "../../assets/icon.png",
    navlinkstrR: "/"
}
