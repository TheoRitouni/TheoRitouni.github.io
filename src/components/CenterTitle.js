import React from 'react';
import { Box } from "@mui/system"
import { Divider } from '@mui/material';

export default class CenterTitle extends React.Component{

    render(){
        return(
            <Box sx={{justifyContent : 'center', width: 600, my: 7, fontSize : 24}}>
                {this.props.title}
                <Box sx={{ width : 600 }}>
                    <Divider sx = {{ my : 5, border : 1}}/>
                </Box>
            </Box>
        )
    }
}

CenterTitle.defaultProps = {
    title: "titre"
}