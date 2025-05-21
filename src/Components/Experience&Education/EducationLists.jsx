
export default function EducationLists({educations}) {
  return (
    <div className="Education-container">
      {educations.map((edu) => (
        <div key={edu.id} className="Education-card">
          <h3>{edu.degree}</h3>
          <p>{edu.institution} {edu.year}</p>
        
        </div>
      ))}
    </div>
  );
}
