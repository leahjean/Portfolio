import ExperienceItem from "../experience-item";

const AmazonAstro = () => <ExperienceItem
    keyName="amazon-astro"
    startMonth="MAR"
    startYear={2018}
    endMonth="JAN"
    endYear={2023}
    company="Amazon Lab126"
    roleName="Software Development Engineer"
    summary="Tech lead for several cloud services relating to Amazon Astro's personality. Prior to joining the personality team I worked as the scrum master for an algorithms team for finding users in the household. Developed Android middleware and system apps at the start of my tenure."
    skills={[
        "Java",
        "React",
        "JavaScript",
        "AWS",
        "Guice",
        "Node",
        "Android",
    ]} />
export default AmazonAstro;