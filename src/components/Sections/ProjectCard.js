import React from 'react';
import Card from '@material-ui/core/Card';
import RichText from 'rich-text-to-react';
import { MARKS } from '@contentful/rich-text-types';
import styled from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Carousel from 'react-images';
import { Tags } from '../Tags';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider } from '@material-ui/core';

const ProjectCard = props => {
  const {
    title,
    demoUrl,
    repoUrl,
    pptUrl,
    tech,
    screenshot
  } = props.project.node;
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
              <Carousel
                views={views}
                interactionIsIdle={false}
                styles={CarouselStyles}
              />
            </a>
          ) : (
            <Carousel
              views={views}
              interactionIsIdle={false}
              styles={CarouselStyles}
            />
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
                <RichText document={json} options={RichTextOptions} />
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
              {pptUrl !== 'none' ? (
                <Button
                  size="medium"
                  variant="text"
                  color="primary"
                  href={demoUrl}
                >
                  Presentation
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

const Tech = styled(Tags)`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  span {
    border-radius: 1em;
    padding: 0 0.8rem;
  }
  @media all and (max-width: 500px) {
    span {
      margin-bottom: 0.5rem;
      width: 35%;
    }
  }
`;

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
  font-weight: 500;
  margin-bottom: 1rem;

  a:hover {
    text-decoration: underline;
    color: #fd835d;
  }

  @media all and (max-width: 500px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.div`
  font-size: 1.2rem;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 1rem;
`;

const RichTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text, key) => (
      <strong key={key} style={{ fontWeight: 'bold' }}>
        {text}
      </strong>
    )
  }
};

export default ProjectCard;
