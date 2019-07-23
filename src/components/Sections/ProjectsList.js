import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ProjectCard from './ProjectCard';

const localProjects = [
  {
    sys: { id: 0 },
    fields: {
      title: 'Project 1',
      images: [],
      description: 'this is my finest project',
      demoUrl: 'https://projects.com',
      repoUrl: 'https://github.com/jffau',
      tags: 'javascript, react, frontend',
      order: 0
    }
  },
  {
    sys: { id: 1 },
    fields: {
      title: 'Project 2',
      images: [],
      description: 'this is my finest project',
      demoUrl: 'https://projects.com',
      repoUrl: 'https://github.com/jffau',
      tags: 'javascript, react, frontend',
      order: 1
    }
  },
  {
    sys: { id: 2 },
    fields: {
      title: 'Project 3',
      images: [],
      description: 'this is my finest project',
      demoUrl: 'https://projects.com',
      repoUrl: 'https://github.com/jffau',
      tags: 'javascript, react, frontend',
      order: 2
    }
  },
  {
    sys: { id: 3 },
    fields: {
      title: 'Project 4',
      images: [],
      description: 'this is my finest project',
      demoUrl: 'https://projects.com',
      repoUrl: 'https://github.com/jffau',
      tags: 'javascript, react, frontend',
      order: 3
    }
  },
  {
    sys: { id: 4 },
    fields: {
      title: 'Project 5',
      images: [],
      description: 'this is my finest project',
      demoUrl: 'https://projects.com',
      repoUrl: 'https://github.com/jffau',
      tags: 'javascript, react, frontend',
      order: 4
    }
  }
];

class ProjectsList extends Component {
  state = {
    projects: [],
    loading: true
  };

  componentDidMount() {
    this.getProjects();
  }

  getProjects() {
    this.setState({ projects: localProjects, loading: false });
  }

  render() {
    const projects = [...this.state.projects];
    return (
      <Container>
        <div>
          <Grid container spacing={4} alignItems="top" style={{ padding: 2 }}>
            {projects.map(item => {
              return (
                <Grid key={item.id} item xs={12} sm={6} lg={4} xl={3}>
                  <ProjectCard project={item} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Container>
    );
  }
}

export default ProjectsList;
