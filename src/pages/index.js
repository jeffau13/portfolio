import React from 'react';

import Layout from '../components/Layout';
import SideBar from '../components/SideBar';

import Scroll from '../components/Scroll';
import {
  Intro,
  About,
  Projects,
  Education,
  Contact
} from '../components/Sections';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'education', name: 'Education', icon: 'fa-graduation-cap' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' }
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />
    <Intro />
    <About />
    <Projects />
    <Education />
    <Contact />
  </Layout>
);

export default IndexPage;
