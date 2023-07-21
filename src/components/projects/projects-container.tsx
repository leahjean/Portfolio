import {projectItemsList} from "./project-items-list"
import ProjectItem from "./project-item";

const ProjectsContainer = () => {
    const onThumbnailClick = (youtubeId: string): void => {
        
    }
    return (
        <div className="flex flex-col mt-4">
            <h1 className="uppercase text-xl font-semibold text-center mb-3">
                Projects
            </h1>
            <ul className="group/proj-list">
                {projectItemsList.map(projectItem => (
                    <ProjectItem
                        keyName={projectItem.keyName}
                        youtubeId={projectItem.youtubeId}
                        githubLink={projectItem.githubLink}
                        name={projectItem.name}
                        body={projectItem.body}
                        skills={projectItem.skills}
                        imagePath={projectItem.imagePath}
                        onImageClick={onThumbnailClick}
                    />
                ))}
            </ul>
        </div>
    )
}
export default ProjectsContainer;