export default function ExperienceLists({ experience }) {
  return (
    <div className="experience-container">
      {experience.map((exp) => (
        <div key={exp.id} className="experience-card">
          <h2 className="experience-title">{exp.title}</h2>
          <p className="experience-description">{exp.description}</p>
        </div>
      ))}
    </div>
  );
}
