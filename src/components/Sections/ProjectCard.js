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
  } = props.project.fields;
  const { url: image } = images[0].fields;
  return (
    <>
      {props.project ? (
        <Card>
          <CardMedia
            style={{ height: 0, paddingTop: '56.25%' }}
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
