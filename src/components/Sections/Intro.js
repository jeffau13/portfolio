import React from 'react';
import styled from 'styled-components';
import Scroll from '../Scroll';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import {
  faGithub,
  faLinkedin,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Intro = () => {
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
                <h3>
                  <span role="img" aria-label="wave">
                    👋
                  </span>{' '}
                  Welcome to my portfolio!
                  <br />
                </h3>
                <h3>
                  My name is <span className="text-red">Jeff Au</span>
                </h3>
                <p>
                  I am a <span className="text-red">frontend javascript </span>{' '}
                  developer
                  <br />
                </p>
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

              <a href="https://www.dropbox.com/s/jludrkpo1w6ntkr/resume.pdf?dl=1">
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
              <a href="https://github.com/jffau">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a href="https://instagram.com/jeffau.dev">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="https://www.linkedin.com/in/jffau">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <Scroll type="id" element={'contact'}>
                <a href="#contact">
                  <FontAwesomeIcon icon={faEnvelopeOpen} size="lg" />
                </a>
              </Scroll>
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

export default Intro;
