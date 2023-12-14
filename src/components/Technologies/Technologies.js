import React from 'react';
import { BsController } from "react-icons/bs";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { DiCode } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section nopadding id='tech'>
    <SectionDivider/>
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText> 
    I have worked on various aspects of game development, ranging from creating a game engine to developing different games.
    </SectionText>
  <List>
    <ListItem>
      
      <ListContainer>
        <ListTitle><DiCode size="3rem"/> Langages</ListTitle>
        <ListParagraph>
          <br/> 
          C++,  C#,  C,  Python  
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      
      <ListContainer>
        <ListTitle><AiOutlineCodeSandbox size="3rem"/> Engine</ListTitle>
        <ListParagraph>
          <br/>
          Unreal my love, Unity, Godot, <br/>
          Custom
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      
      <ListContainer>
        <ListTitle><BsController size="3rem"/> Gameplay</ListTitle>
        <ListParagraph>
          <br/>
          Camera, Movement, Behavior, <br/>Tools 
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  </Section>
);

export default Technologies;
