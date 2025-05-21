export default function ProjectLists({projects}) {
  return (
    <div className="Project-Container">
      {projects.map((project) => (
        <div key={project.id} className="projects">
          <img src={project.imgurl} alt={project.title} />
          <h3 className="projects-title">{project.title}</h3>
          <p className="projects-text">{project.description}</p>
        </div>
      ))}
    </div>
  );
}
