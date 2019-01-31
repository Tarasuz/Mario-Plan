import React from "react";
import { Link } from "react-router-dom";

import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  const projectsList =
    projects &&
    projects.map(project => {
      return (
        <Link to={"project/" + project.id} key={project.id}>
          <ProjectSummary project={project} />
        </Link>
      );
    });
  return <div className="project-list section">{projectsList}</div>;
};

export default ProjectList;
