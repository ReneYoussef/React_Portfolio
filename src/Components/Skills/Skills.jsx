import SkillsData from "./SkillsData";
import SkillsLists from "./SkillsLists"

export default function Skills(){
    return(
<div className="Skills-Parent">
<h2>Skills</h2>
        <SkillsLists skills={SkillsData}/>
</div>
    )
}