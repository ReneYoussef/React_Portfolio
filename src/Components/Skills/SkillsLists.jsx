export default function SkillsLists({skills}){
    return(
         <div className="SkillsList-container">
      {skills.map((skill) => (
        <div key={skill.id} className="skill-item">
          <div className="skill-name">{skill.name}</div>
          <div className="proficiency-bar">
            <div
              className="proficiency-fill"
              style={{ width: `${skill.proficiency}%` }}
            />
          </div>
          <div className="proficiency-percent">{skill.proficiency}%</div>
        </div>
      ))}
    </div>
    )
}