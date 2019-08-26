import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import RichTextToReact from 'rich-text-to-react';
import { MARKS } from '@contentful/rich-text-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

import styled from 'styled-components';
import { Tags } from '../Tags';

const getAbout = graphql`
  {
    aboutInfo: allContentfulPortfolioInfo {
      edges {
        node {
          id
          aboutText {
            json
          }
          skills
          upcoming
        }
      }
    }
  }
`;

const About = () => {
  return (
    <section id="about" className="three">
      <div className="container">
        <StaticQuery
          query={getAbout}
          render={data => {
            const { id, skills, upcoming } = data.aboutInfo.edges[0].node;
            const { json: aboutText } = data.aboutInfo.edges[0].node.aboutText;

            return (
              <Grid
                container
                spacing={10}
                alignItems="flex-start"
                style={{ padding: 2 }}
              >
                <Grid key={1} item xs={12} sm={12} lg={6} xl={6}>
                  <AboutText>
                    <Card
                      style={{
                        boxShadow:
                          '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
                        padding: '30px'
                      }}
                    >
                      <h2>About Me</h2>
                      <RichTextToReact
                        document={aboutText}
                        key={id}
                        options={RichTextOptions}
                      />
                    </Card>
                  </AboutText>
                </Grid>
                <Grid key={2} item xs={12} sm={12} lg={6} xl={6}>
                  <div>
                    <Card
                      style={{
                        boxShadow:
                          '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
                        padding: '30px'
                      }}
                    >
                      <div>
                        <h2>Skills</h2>
                        <SkillIntro>
                          {' '}
                          languages and technologies that I have worked with:
                        </SkillIntro>
                      </div>
                      <Skills>
                        {skills.map((skill, index) => {
                          return (
                            <span
                              key={index}
                              className={`${skill}-tag tech-tag`}
                            >
                              {skill}
                            </span>
                          );
                        })}
                      </Skills>
                      <Divider style={{ marginBottom: '2rem' }} />
                      <SkillIntro>
                        Technologies I am currently learning or interested to
                        learn in the short term future{' '}
                      </SkillIntro>
                      <Skills>
                        {upcoming.map((skill, index) => {
                          return (
                            <span
                              key={index}
                              className={`${skill}-tag tech-tag`}
                            >
                              {skill}
                            </span>
                          );
                        })}
                      </Skills>
                    </Card>
                  </div>
                </Grid>
              </Grid>
            );
          }}
        />
      </div>
    </section>
  );
};

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 2rem;
  margin-top: 20%;
  @media all and (max-width: 960px) {
    grid-template-columns: 1fr;
    margin-top: 0;
  }
`;

const AboutText = styled.div`
  text-align: left;
  h2 {
    text-align: Center;
  }
  p {
    font-size: 1.2rem;
  }
`;

const Skills = styled(Tags)`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  span {
    margin-bottom: 2.5rem;
    border-radius: 1em;
    padding: 0 0.8rem;
  }

  @media all and (max-width: 960px) {
    width: 90%;
    margin: auto;
  }
`;

const SkillIntro = styled.p`
  font-size: 0.75em;
`;

const RichTextOptions = {
  renderMark: {
    // Render all bold text ...
    [MARKS.BOLD]: (text, key) => (
      <strong key={key} style={{ fontWeight: 'bold' }}>
        {text}
      </strong>
    )
  }
};

export default About;
