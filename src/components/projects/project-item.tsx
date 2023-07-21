import SkillsContainer from "../experience/skills-container";
import ProjectImageItem from "./project-image-item";
import { ProjectItemProps } from "./project-item-props";

export default (projectItem: ProjectItemProps) => (
    <li key={projectItem.keyName} className="group hover:!opacity-100 group-hover/proj-list:opacity-50">
        <div className="flex flex-row gap-3 mb-4 group-hover:bg-white/30 group-hover:drop-shadow-md group-hover:shadow-md rounded-lg py-4 px-6 transition ease-in-out">
            <div className="w-1/4">
                <ProjectImageItem
                    imagePath={projectItem.imagePath}
                    youtubeId={projectItem.youtubeId}
                />
            </div>
            <div className="w-3/4 flex-col">
                <a href={projectItem.githubLink} target="_blank">
                    <span className="flex flex-row gap-2 items-center mb-2">
                        <h2 className="text-lg font-medium">
                            {projectItem.name}
                        </h2>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-2 hover:animate-bounce w-4 h-4 stroke-black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                    </span>
                </a>
                <p className="mb-4">
                    {projectItem.body}
                </p>
                <SkillsContainer skills={projectItem.skills} />
            </div>
        </div>
    </li>
)