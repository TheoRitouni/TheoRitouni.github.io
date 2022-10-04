import { Box, Grid } from '@mui/material';
import React from 'react';

const MyPresentation = () => {
    return (
        <div>
            <Box sx={{py:15}}>
                <Grid sx={{justifyContent : 'center'}}container direction="row">
                    <Grid item sx={{ width: 600,height: 400, textAlign:'center'}}>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                        dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                        Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                        sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default MyPresentation;