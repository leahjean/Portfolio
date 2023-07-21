import { ExperienceItemProps } from "./experience-item-props"
import SkillsContainer from "./skills-container"


export default (experienceItem: ExperienceItemProps) => {
    return (
        <li key={experienceItem.keyName} className="group hover:!opacity-100 group-hover/exp-list:opacity-50">
            <div className="flex flex-row gap-3 mb-4 group-hover:bg-white/30 group-hover:drop-shadow-md group-hover:shadow-md rounded-lg py-4 px-6 transition ease-in-out">
                <div className="w-1/4 uppercase text-sm mt-1 flex flex-col">
                    <div>
                        {experienceItem.startMonth} {experienceItem.startYear} - 
                    </div>
                    <div>
                        {experienceItem.endMonth} {experienceItem.endYear}
                    </div>
                </div>
                <div className="w-3/4">
                    <h2 className="text-lg font-medium">
                        {experienceItem.company}
                    </h2>
                    <h2 className="text-lg text-slate-700 group-hover:text-slate-800 mb-2">
                        {experienceItem.roleName}
                    </h2>
                    <p className="mb-4">
                        {experienceItem.summary}
                    </p>
                    <SkillsContainer skills={experienceItem.skills} />
                </div>
            </div>
        </li>
    )
}