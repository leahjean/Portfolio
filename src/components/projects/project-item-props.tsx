export interface ProjectItemProps {
    keyName: string,
    youtubeId: string,
    githubLink: string,
    name: string,
    body: string,
    skills: string[],
    imagePath: string,
    onImageClick: (youtubeId: string) => void
}