import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default class PreviewBox extends React.Component{

    render(){

        const customSX = this.props.color ? { color: 'white', background: 'linear-gradient(#B7C4CF, #343434)', py : 12 } 
                        : { color: 'black', bgcolor: 'white', py : 12 };

        return( 
        <div>
            <Box sx= {customSX}>
                <Grid sx={{justifyContent : 'center'}}container direction="row">

                    {this.props.color === true &&
                        <Grid item>
                            <Box component="img" sx={{ width: 600,height: 400, borderRadius: 5, border :3}} alt='vineImg' src ={this.props.image}>
                            </Box>
                        </Grid>
                    }   

                    <Grid item sx={{  alignSelf: 'center'}}>
                        <Box sx={{ width: 600,height: 50, textAlign :'center', fontSize : 36}}>
                            {this.props.title}
                        </Box>
                        <Box sx={{py : 3 , px : 5 , width: 600,height: 150, textAlign :'center'}}>
                            {this.props.resume}
                        </Box>
                        <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <NavLink to={this.props.navlinkstr}><Button onClick={ window.scrollTo({top:0 })} 
                        sx={{background:'linear-gradient(#B7C4CF, #343434)', color:'black'}} variant="outlined">Show More</Button></NavLink>
                        </Box>  
                    </Grid>

                    {this.props.color === false &&
                        <Grid item>
                            <Box component="img" sx={{ width: 600,height: 400, borderRadius: 5, border :3}} alt='vineImg' src ={this.props.image}>
                            </Box>
                        </Grid>
                    }   

                </Grid>
            </Box>
        </div>
        )
    }

}

PreviewBox.defaultProps = {
    title: "Titre",
    resume: "Projet description",
    image : "../../assets/icon.png",
    color: false,
    navlinkstr: "/"
}
