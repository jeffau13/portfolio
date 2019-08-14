import React from 'react';
import Card from '@material-ui/core/Card';
import RichTextToReact from 'rich-text-to-react';
import styled from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

const ProjectCard = props => {
  const { title, images, demoUrl, repoUrl, tech } = props.project.node;
  const { json } = props.project.node.description;
  const { src: image } = props.project.node.screenshot[0].fluid;
  return (
    <>
      {props.project ? (
        <Card
          style={{
            boxShadow:
              '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
          }}
        >
          <CardMedia
            style={{ height: 100, paddingTop: '56.25%', objectFit: 'cover' }}
            image={image}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom component="h2">
              {title}
            </Typography>
            <Tech>
              {' '}
              {tech.map(tech => {
                return (
                  <span className={`${tech}-tag tech-tag `}> {tech} </span>
                );
              })}
            </Tech>
          </CardContent>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">Details</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography variant="body1">
                <RichTextToReact document={json} />
              </Typography>
            </ExpansionPanelDetails>
            <Divider />
            <Links>
              {repoUrl !== 'none' ? (
                <Button size="large" variant="outlined" href={repoUrl}>
                  View Source
                </Button>
              ) : null}
              {demoUrl !== 'none' ? (
                <Button
                  size="large"
                  variant="outlined"
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

const Tech = styled.div`
  display: flex;
  justify-content: space-evenly;
  span {
    border-radius: 1em;
    padding: 0 0.8rem;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem;
`;

export default ProjectCard;
