import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import RichTextToReact from 'rich-text-to-react';
import { MARKS } from '@contentful/rich-text-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
        }
      }
    }
  }
`;

const About = () => {
  return (
    <section id="about" className="three">
      <div className="container">
        <header>
          <h2>About Me</h2>
        </header>
        <StaticQuery
          query={getAbout}
          render={data => {
            const { id, skills } = data.aboutInfo.edges[0].node;
            const { json } = data.aboutInfo.edges[0].node.aboutText;

            return (
              <AboutContainer>
                <AboutText>
                  <RichTextToReact
                    document={json}
                    key={id}
                    options={RichTextOptions}
                  />
                </AboutText>
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
                      <p>
                        {' '}
                        Here's a list of languages and technologies that I have
                        experience working with:
                      </p>
                    </div>
                    <Skills>
                      {skills.map((skill, index) => {
                        return (
                          <span key={index} className={`${skill}-tag tech-tag`}>
                            {skill}
                          </span>
                        );
                      })}
                    </Skills>
                  </Card>
                </div>
              </AboutContainer>
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
