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

{/* Old Version, try to improve
            <PreviewBox title =  "Solid RTS"
            resume =  "Un projet qui m'as permis d'en apprendre plus sur le domaine de l'ia. Mise en place d'un behaviour tree sur unity avec le plugin Xnodes et mise en place d'un système de taches."
            image = "../../assets/rts.png"
            color = {true}
            navlinkstr =  "/articlesRTS"/>

            <PreviewBox title =  "Générateur de lianes"
            resume =  "Réaliser sur Unreal, ce projet permet à  son utilisateur de générer des lianes intelligentes qui s'adapte au terrain."
            image = "../../assets/vine.png"
            color = {false}
            navlinkstr =  "/articlesVine"/>

            <PreviewBox title =  "Tout pour le maire"
            resume =  "Incarnez des maires déchainés prêt à tout pour obtenir le plus de voix !"
            image = "../../assets/tplm.png"
            color = {true}
            navlinkstr =  "/articlesTPLM"/> */}

        </div>
    );
};

export default ViewArticles;