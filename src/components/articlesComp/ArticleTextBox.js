import React from 'react';
import { Box, Grid } from '@mui/material';

export default class ArticleTextBox extends React.Component{

    render(){

        const customSX = this.props.color ? { color: 'white', bgcolor: 'black', py : 12 } : { color: 'black', bgcolor: 'white', py : 12 };

        return(
            <Box sx={customSX}>
                <Grid sx={{justifyContent : 'center'}}container direction="row">
                    <Grid item sx={{ width: 1/2 ,height: 400, textAlign:'center', borderColor : 'black'}}>
                        <Box sx={{ py : 5 , px : 5,height: 200, textAlign :'center', fontSize : 36}}>
                            {this.props.title}
                        </Box>    
                            {this.props.resume}    
                    </Grid>
                </Grid>
            </Box>
        )
    }

}

ArticleTextBox.defaultProps = {
    color: true,
    title: "titre",
    resume: "resume here"
}