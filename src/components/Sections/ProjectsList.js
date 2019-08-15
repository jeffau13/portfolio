import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard';

const getProjects = graphql`
  {
    projects: allContentfulPortfolioProjects(
      sort: { fields: [order], order: ASC }
    ) {
      edges {
        node {
          id
          title
          tech
          description {
            json
          }
          demoUrl
          repoUrl
          pptUrl
          order
          screenshot {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;

const ProjectsList = () => {
  return (
    <StaticQuery
      query={getProjects}
      render={data => {
        return (
          <Container>
            <div>
              <Grid
                container
                spacing={10}
                alignItems="flex-start"
                style={{ padding: 2 }}
              >
                {data.projects.edges.map(item => {
                  return (
                    <Grid key={item.node.id} item xs={12} sm={12} lg={6} xl={6}>
                      <ProjectCard project={item} />
                    </Grid>
                  );
                })}
              </Grid>
            </div>
          </Container>
        );
      }}
    />
  );
};

export default ProjectsList;
