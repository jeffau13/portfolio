import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

export default function Footer({ socialLinks = [] }) {
  return (
    <div className="bottom">
      <ul className="icons">
        {socialLinks.map(social => {
          const { icon, name, url, tooltip } = social;
          return (
            <li key={url}>
              <Tooltip title={tooltip}>
                <a href={url} className={`icon ${icon}`}>
                  <span className="label">{name}</span>
                </a>
              </Tooltip>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
