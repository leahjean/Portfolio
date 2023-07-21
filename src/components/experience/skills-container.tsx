import SkillsItem from "./skills-item";
import { SkillsProp } from "./skills-props";

export default (skillsProps: SkillsProp) => (
    <div className="flex-row flex flex-wrap gap-2 w-full">
        {skillsProps.skills.map(skill => <SkillsItem skill={skill} />)}
    </div>
)