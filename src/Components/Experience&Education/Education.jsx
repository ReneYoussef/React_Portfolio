import EducationLists from "./EducationLists";
import EducationData from "./EducationData";

export default function Experience() {
  return (
    <div className="Education-parent">
      <h2>Education</h2>
      <EducationLists educations={EducationData} />
    </div>
  );
}
