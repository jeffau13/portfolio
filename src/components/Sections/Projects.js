import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';

import ProjectsList from './ProjectsList';

const Section = styled.section`
  background-color: rgb(241, 241, 241);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
  background-image: -webkit-linear-gradient(
      rgba(99, 133, 170, 0.3) 2px,
      transparent 2px
    ),
    -webkit-linear-gradient(0, rgba(99, 133, 170, 0.3) 2px, transparent 2px),
    -webkit-linear-gradient(rgba(99, 133, 170, 0.3) 1px, transparent 1px),
    -webkit-linear-gradient(0, rgba(99, 133, 170, 0.3) 1px, transparent 1px);
  background-image: -moz-linear-gradient(
      rgba(99, 133, 170, 0.3) 2px,
      transparent 2px
    ),
    -moz-linear-gradient(0, rgba(99, 133, 170, 0.3) 2px, transparent 2px),
    -moz-linear-gradient(rgba(99, 133, 170, 0.3) 1px, transparent 1px),
    -moz-linear-gradient(0, rgba(99, 133, 170, 0.3) 1px, transparent 1px);
  background-image: linear-gradient(
      rgba(99, 133, 170, 0.3) 2px,
      transparent 2px
    ),
    linear-gradient(90deg, rgba(99, 133, 170, 0.3) 2px, transparent 2px),
    linear-gradient(rgba(99, 133, 170, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 133, 170, 0.3) 1px, transparent 1px);
  -pie-background: linear-gradient(rgba(99, 133, 170, 0.3) 2px, transparent 2px) -2px -2px /
      100px,
    linear-gradient(90deg, rgba(99, 133, 170, 0.3) 2px, transparent 2px) -2px -2px /
      100px,
    linear-gradient(rgba(99, 133, 170, 0.3) 1px, transparent 1px) -1px -1px /
      20px,
    linear-gradient(90deg, rgba(99, 133, 170, 0.3) 1px, transparent 1px) -1px -1px /
      20px,
    #269;
`;

const Projects = () => {
  return (
    <Section id="projects" className="two">
      <div className="container">
        <header>
          <h2>Projects</h2>
        </header>

        <ProjectsList />
      </div>
    </Section>
  );
};

export default Projects;
