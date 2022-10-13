import React from 'react';
import PreviewBox from './articlesComp/PreviewBox';

const ViewArticles = () => {
    

    return (
        <div>
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
            navlinkstr =  "/articlesTPLM"/>

            {/* <PreviewBox title =  "Test"
            resume =  "Projet descSalutription"
            image = "../../assets/icon.png"
            color = {false}
            navlinkstr =  "/test"/> */}

        </div>
    );
};

export default ViewArticles;