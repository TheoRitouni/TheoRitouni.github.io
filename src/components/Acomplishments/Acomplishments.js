import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 12, text: 'Projets en tant que gameplay programmer'},
  { number: 7, text: 'en BackEnd programmer', },
  { number: 4, text: 'en tool programmer', },
  { number: 3, text: 'en IA programmer', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card,index)=>(
       <Box key={index}>
        <BoxNum>{card.number}</BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box> 
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
