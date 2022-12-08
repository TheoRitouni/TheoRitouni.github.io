import { Box} from '@mui/material';
import React from 'react';
import ProjectBox from './articlesComp/ProjectBox';

const ViewArticles = () => {
    

    return (
        <div>
            
            <Box  sx={{color: 'white', background: '#4f4f4f', py : 12, fontSize : 36}} textAlign= 'center'>
                    Mes Projets
            </Box>     

            <ProjectBox 
                imageL = "../../assets/rts.png" 
                navlinkstrL = "/articlesRTS"
                imageR = "../../assets/tplm.png"
                navlinkstrR = "/articlesTPLM"/>

            <ProjectBox 
                imageL = "../../assets/vine.png" 
                navlinkstrL = "/articlesVine"
                imageR = "../../assets/icon.png"/>

            <ProjectBox 
                imageL = "../../assets/icon.png" 
                imageR = "../../assets/icon.png"/>
            
            <ProjectBox 
                imageL = "../../assets/icon.png" 
                imageR = "../../assets/icon.png"/>

        </div>
    );
};

export default ViewArticles;