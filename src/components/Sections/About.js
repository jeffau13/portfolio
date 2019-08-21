import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import RichTextToReact from 'rich-text-to-react';
import { MARKS } from '@contentful/rich-text-types';

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
  grid-template-columns: 2fr 1fr;
  grid-gap: 6rem;
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
