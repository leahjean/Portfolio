import SkillsItem from "./skills-item";
import { SkillsProp } from "./skills-props";

const SkillsContainer = (skillsProps: SkillsProp) => (
    <div className="flex-row flex flex-wrap gap-2 w-full">
        {skillsProps.skills.map(skill => <SkillsItem skill={skill} />)}
    </div>
)
export default SkillsContainer;