import ExperienceLists from "./ExperienceLists";
import ExperienceData from "./ExperienceData";

export default function Experience() {
  return (
    <div className="experience-parent">
      <h2>Experience</h2>
      <ExperienceLists experience={ExperienceData} />
    </div>
  );
}
