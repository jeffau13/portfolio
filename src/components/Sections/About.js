import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import RichTextToReact from 'rich-text-to-react';
const getAbout = graphql`
  {
    aboutInfo: allContentfulPortfolioInfo {
      edges {
        node {
          id
          aboutText {
            json
          }
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
            const { id } = data.aboutInfo.edges[0].node.id;
            const { json } = data.aboutInfo.edges[0].node.aboutText;
            return <RichTextToReact document={json} key={id} />;
          }}
        />
      </div>
    </section>
  );
};

export default About;
