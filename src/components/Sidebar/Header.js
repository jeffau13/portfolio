import React from 'react';
import { Link } from 'gatsby';
import Scroll from '../../components/Scroll';
export default function Header({ title, heading }) {
  return (
    <div id="logo">
      <span className="image avatar48"></span>
      <Scroll type="id" element="main">
        <Link to="#/">
          <h1 id="title">{title}</h1>
          <p>{heading}</p>
        </Link>
      </Scroll>
    </div>
  );
}
