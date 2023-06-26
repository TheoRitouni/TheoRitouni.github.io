import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
          Bienvenue sur mon dev blog !  
      </SectionTitle>
      <SectionText>
        Je m'appelle Théo Ritouni et les jeux vidéos sont une passion pour moi qui est devenu mon métier. Et je vous propose de plongez dans mes créations.
      </SectionText>
      <Button onClick={(e) => {
      window.location.href='http://isart.fr';
      }}>About my school</Button>
    </LeftSection>
  </Section>
);

export default Hero;