import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      Welcome to my dev blog !  
      </SectionTitle>
      <SectionText><br/>
      <div>
      I m <b>Théo Ritouni</b>, and video games are more than just a passion for me, it s become my profession, my calling. I invite you to dive into the realm of my creations, where imagination comes to life, and innovation is my hallmark.
      </div>
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;