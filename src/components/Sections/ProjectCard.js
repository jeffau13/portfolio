import React from 'react';
import Card from '@material-ui/core/Card';
import RichTextToReact from 'rich-text-to-react';
import styled from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Carousel from 'react-images';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider } from '@material-ui/core';

const ProjectCard = props => {
  const { title, demoUrl, repoUrl, tech, screenshot } = props.project.node;
  const { json } = props.project.node.description;
  // const { src: image } = screenshot[0].fluid;

  // formatting an array for carousel:
  const views = screenshot.map(image => {
    const url = image.fluid.src;
    return { src: url };
  });

  return (
    <>
      {props.project ? (
        <Card
          style={{
            boxShadow:
              '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
          }}
        >
          {views.length === 1 ? (
            <a href={demoUrl}>
              <Carousel views={views} styles={CarouselStyles} />
            </a>
          ) : (
            <Carousel views={views} styles={CarouselStyles} />
          )}
          <CardContent>
            <Title>
              <a href={demoUrl}>{title} </a>
            </Title>

            <Tech>
              {' '}
              {tech.map(tech => {
                return (
                  <span key={tech} className={`${tech}-tag tech-tag `}>
                    {' '}
                    {tech}{' '}
                  </span>
                );
              })}
            </Tech>
          </CardContent>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">Details</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Description>
                <RichTextToReact document={json} />
              </Description>
            </ExpansionPanelDetails>
            <Divider />
            <Links>
              {repoUrl !== 'none' ? (
                <Button size="medium" variant="text" href={repoUrl}>
                  View Source
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="lg"
                    style={{ marginLeft: '5px' }}
                  />
                </Button>
              ) : null}
              {demoUrl !== 'none' ? (
                <Button
                  size="medium"
                  variant="text"
                  color="primary"
                  href={demoUrl}
                >
                  DEMO
                </Button>
              ) : null}
            </Links>
          </ExpansionPanel>
        </Card>
      ) : (
        <p>Not loaded</p>
      )}
    </>
  );
};

const CarouselStyles = {
  footer: (base, state) => {
    const display = 'none';
    return { ...base, display };
  }
};

//styled-components

const Title = styled.h1`
  font-size: 2.5rem;
  color: #e25a53;
  margin-bottom: 1rem;

  a:hover {
    text-decoration: underline;
  }
`;

const Tech = styled.div`
  display: flex;
  justify-content: space-evenly;
  span {
    border-radius: 1em;
    padding: 0 0.8rem;
  }
  /* default tech-tag styles: */
  .tech-tag {
    background-color: #a4d9d6;
    color: #fd835d;
    font-size: 1.2rem;
    font-weight: 500;
  }

  /* colorized tags: */
  .node-tag {
    background-color: rgba(141, 197, 122, 0.8);
    color: black;
  }
  .scss-tag {
    background-color: rgba(216, 95, 137, 0.8);
    color: black;
  }
`;

const Description = styled.div`
  font-size: 1.2rem;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem;
`;

export default ProjectCard;
