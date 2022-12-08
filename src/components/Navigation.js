import React from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Button, Toolbar, Typography } from '@mui/material';

export default class MyNavigation extends React.Component{

    render() {
        return(
            <div className='navigation'>
            <Box >
                <AppBar component="nav" sx={{bgcolor:'#4f4f4f', opacity:'0.9'}}>
                    <Toolbar>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                            Théo Ritouni Portfolio
                        </Typography>
                        
                        <NavLink to='/' >
                            <Button color="inherit" sx = {{ color: '#fff' }}>accueil</Button>
                        </NavLink>
                        <NavLink to='/aboutme'> 
                            <Button color="inherit" sx = {{ color: '#fff' }}>aboutme</Button>
                        </NavLink>
                        <NavLink to='/contact'> 
                            <Button color="inherit" sx = {{ color: '#fff' }}>contact</Button>
                        </NavLink>

                    </Toolbar>    
                </AppBar>
            </Box>
        </div>
        )
    }
}