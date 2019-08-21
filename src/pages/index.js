import React from 'react';
import Layout from '../components/Layout';
import SideBar from '../components/Sidebar';

import {
  Intro,
  About,
  Projects,
  Education,
  Contact
} from '../components/Sections';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'projects', name: 'Projects', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' }
  // { id: 'education', name: 'Education', icon: 'fa-graduation-cap' },
  // { id: 'contact', name: 'Contact', icon: 'fa-envelope' }
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />
    <Intro />
    <Projects />
    <About />
    {/* <Education /> */}
    {/* <Contact /> */}
  </Layout>
);

export default IndexPage;
