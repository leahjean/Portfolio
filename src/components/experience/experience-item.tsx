import { ExperienceItemProps } from "./experience-item-props"
import SkillsContainer from "./skills-container"


export default function ExperienceItem(experienceItem: ExperienceItemProps) {
    return (
        <li key={experienceItem.keyName}>
            <div className="flex flex-row gap-3 mb-4 bg-slate-200/20">
                <div className="w-1/4 uppercase text-sm mt-1">
                    {experienceItem.startMonth} {experienceItem.startYear} -{"\n"}
                    {experienceItem.endMonth} {experienceItem.endYear}
                </div>
                <div className="w-3/4">
                    <h2 className="text-lg">
                        {experienceItem.company}
                    </h2>
                    <h2 className="text-lg text-slate-600 mb-2">
                        {experienceItem.roleName}
                    </h2>
                    <p className="text-base mb-2">
                        {experienceItem.summary}
                    </p>
                    <SkillsContainer skills={experienceItem.skills} />
                </div>
            </div>
        </li>
    )
}