import React from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Button, ButtonGroup, Toolbar } from '@mui/material';

export default class MyNavigation extends React.Component{

    render() {
        return(
            <div className='navigation'>
            <Box >
                <AppBar component="nav" sx={{bgcolor:'#aeaed0', opacity:'0.9'}}>
                    <ButtonGroup  sx={{justifyContent: 'center', py : 2 }}>
                        <NavLink to='/' ><Button sx={{background : 'linear-gradient(#B7C4CF, #343434)', color:'white'}} variant="outlined">acceuil</Button></NavLink>
                        <NavLink to='/aboutme'> <Button sx={{background : 'linear-gradient(#B7C4CF, #343434)', color:'white'}} variant="outlined">aboutme</Button></NavLink>
                        <NavLink to='/contact'> <Button  sx={{background : 'linear-gradient(#B7C4CF, #343434)', color:'white'}} variant="outlined">contact</Button></NavLink>
                    </ButtonGroup> 
                </AppBar>
            </Box>
            <Toolbar />
        </div>
        )
    }
}