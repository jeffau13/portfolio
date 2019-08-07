import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

const ProjectCard = props => {
  const {
    title,
    images,
    description,
    demoUrl,
    repoUrl,
    tags
  } = props.project.node;
  const { src: image } = props.project.node.screenshot[0].fluid
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
            <Typography gutterBottom variant="headline" component="h2">
              {title}
            </Typography>
            <Typography gutterBottom variant="headline" component="h5">
              technology: {tags}
            </Typography>
          </CardContent>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">Description</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography variant="body1">{description}</Typography>
            </ExpansionPanelDetails>

            <ExpansionPanelDetails>
              <Typography variant="body2" style={{ color: '#475757' }}>
                {tags && `Tags: ${tags}`}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Card>
      ) : (
        <p>Not loaded</p>
      )}
    </>
  );
};

export default ProjectCard;
