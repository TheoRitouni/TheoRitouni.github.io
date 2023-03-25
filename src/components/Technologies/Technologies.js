import React from 'react';
import { BsController } from "react-icons/bs";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { DiCode } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText> 
      J'ai travailler sur beaucoup de domaine du jeux vidéo allant de la création d'un moteur de jeu à la création de différents jeux.
    </SectionText>
  <List>
    <ListItem>
      <DiCode size="3rem"/>
      <ListContainer>
        <ListTitle>Langages</ListTitle>
        <ListParagraph>
          Experience en :<br/><br/>  
          C++, C#, C, Python  

        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <AiOutlineCodeSandbox size="3rem"/>
      <ListContainer>
        <ListTitle>Engine</ListTitle>
        <ListParagraph>
          Différents Moteur :<br/><br/> 
          Unreal, Unity, Construct, Godot

        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <BsController size="3rem"/>
      <ListContainer>
        <ListTitle>Gameplay</ListTitle>
        <ListParagraph>
          De nombreuses features :<br/><br/> 
          Caméra, Déplacement, Comportement, Outils 

        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  </Section>
);

export default Technologies;
