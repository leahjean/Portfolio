import ExperienceItem from "../experience-item"

export default () => <ExperienceItem
    keyName="amazon-intern"
    startMonth="MAY"
    startYear={2017}
    endMonth="AUG"
    endYear={2017}
    company="Amazon AWS"
    roleName="Software Development Engineer Intern"
    summary="Revamped an internal AWS ElasticSearch devops tool. Migrated the webapp to React fixed pain points highlighted by devs on the team, and modernized the UI."
    skills={[
        "React",
        "JavaScript",
    ]} />