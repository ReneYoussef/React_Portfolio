
import projects from "./projectData"
import ProjectLists from "./ProjectList";

export default function Projects() {
  return (
    <div className="Projects-parent">
      <h2>Recent Project</h2>
      <ProjectLists projects={projects} />
    </div>
  );
}

