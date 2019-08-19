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
              <>
                <RichTextToReact
                  document={json}
                  key={id}
                  options={RichTextOptions}
                />
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
              </>
            );
          }}
        />
      </div>
    </section>
  );
};

const Skills = styled(Tags)`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  span {
    border-radius: 1em;
    padding: 0 0.8rem;
  }
`;

const RichTextOptions = {
  renderMark: {
    // Render all bold text ... bold
    [MARKS.BOLD]: (text, key) => (
      <strong key={key} style={{ fontWeight: 'bold' }}>
        {text}
      </strong>
    )
  }
};

export default About;
