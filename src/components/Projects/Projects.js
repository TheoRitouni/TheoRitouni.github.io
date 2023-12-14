import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';



const Projects = () => (

  <Section nopadding id="projects"> 
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id,title,image,description,tags,source,visit}) => (
        <BlogCard key={id}>
          <br/>
          <Img src={image} 
            style={{ width: '300px', height: '200px' }}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent></TitleContent>
            <TagList>
              {tags.map((tag,i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            {visit.trim().length !== 0 &&
            <ExternalLinks href={visit}>Vidéo</ExternalLinks>
            }
            {source.trim().length !== 0 &&
             <ExternalLinks href={source}>Code</ExternalLinks>
            }
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
    <br/><br/>
  </Section>
);

export default Projects;