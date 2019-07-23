import React from 'react';

const ProjectCard = props => {
  const { project } = props;
  return (
    <div>
      <h1>{project.fields.title}</h1>
    </div>
  );
};

export default ProjectCard;
