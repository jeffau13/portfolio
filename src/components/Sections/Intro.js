import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import RichText from 'rich-text-to-react';
import { MARKS } from '@contentful/rich-text-types';

import Scroll from '../Scroll';

// MUI
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

// icons:
import {
  faGithub,
  faLinkedin,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Intro = () => {
  const data = useStaticQuery(graphql`
    {
      getIntro: allContentfulPortfolioInfo {
        edges {
          node {
            introText {
              id
              json
            }
          }
        }
      }
    }
  `);

  const { json } = data.getIntro.edges[0].node.introText;

  return (
    <section id="top" className="intro">
      <div className="container">
        <Card
          style={{
            boxShadow:
              '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
            maxWidth: '900px',
            margin: 'auto',
            padding: '70px 15px',
            opacity: '0.94'
          }}
        >
          <IntroDiv className="intro-container">
            <div style={{ width: '80%' }}>
              <header>
                <RichText document={json} options={RichTextOptions} />
              </header>
            </div>
            <div style={{ flexGrow: 1 }}>
              <Scroll type="id" element={'projects'}>
                <a href="#projects" className="">
                  <Button
                    variant="contained"
                    color="primary"
                    className="intro-btn btn-orange"
                  >
                    View Projects
                  </Button>
                </a>
              </Scroll>

              <a href="https://www.dropbox.com/s/ghrzls0g1hlgqet/JeffAuResume.pdf?dl=1">
                <Button
                  variant="contained"
                  color="primary"
                  className="intro-btn btn-blue"
                >
                  View Resume
                </Button>
              </a>
            </div>
          </IntroDiv>

          <div className="socialLinks">
            <Divider />
            <SocialIcons>
              <Tooltip title="Github">
                <a href="https://github.com/jffau">
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              </Tooltip>

              {/* <a href="https://instagram.com/jeffau.dev">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a> */}

              <Tooltip title="LinkedIn">
                <a href="https://www.linkedin.com/in/jffau">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
              </Tooltip>

              <Tooltip title="Email me (jeffau13@gmail.com)">
                <a href="mailto:jeffau.dev@gmail.com">
                  <FontAwesomeIcon icon={faEnvelopeOpen} size="lg" />
                </a>
              </Tooltip>
            </SocialIcons>
          </div>
        </Card>
      </div>
    </section>
  );
};

const IntroDiv = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 45px;
  & a {
    margin: auto;
  }
`;

const RichTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text, key) => (
      <span key={key} className="text-red">
        {text}
      </span>
    )
  }
};

export default Intro;
