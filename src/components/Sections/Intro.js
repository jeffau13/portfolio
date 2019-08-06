import React from 'react';
import Scroll from '../Scroll';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

const Intro = () => {
  return (
    <section id="top" className="intro">
      <div className="container">
        <Card
          style={{
            display: 'flex',
            boxShadow:
              '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
            maxWidth: '750px',
            minHeight: '45vh',
            margin: 'auto',
            alignItems: 'center',
            opacity: '0.94',
            verticalAlign: 'middle',
            justifyContent: 'center'
          }}
          className="intro-container"
        >
          {' '}
          <header>
            <h2>
              <span role="img" aria-label="wave">
                👋
              </span>
              {'  '} My name is <span className="text-red">Jeffrey Au</span>
              <br />
            </h2>
            <p>
              {' '}
              Welcome to my portfolio! I am a{' '}
              <span className="highlight">javascript developer</span>.
              <br /> Check out my work below
            </p>
          </header>
          <footer>
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
          </footer>
        </Card>
      </div>
    </section>
  );
};

export default Intro;
