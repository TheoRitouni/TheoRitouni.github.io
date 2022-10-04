import { Box } from '@mui/material';
import React from 'react';

const ResumeMe = () => {
    return (
        <div>
            <Box sx={{ color: 'black', 
                 bgcolor: 'white',
                 textAlign : 'center',
                 py : 40 , fontSize: 24 }}>
                    Bonjour et bienvenue sur mon blog.
                    Je me présente Ritouni Théo 
                    <br/>
                    étudiant en dernière année à <a href="https://www.isart.fr/">Isart Digital</a>
            </Box>
        </div>
    );
};

export default ResumeMe;