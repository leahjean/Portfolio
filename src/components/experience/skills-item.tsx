const SkillsItem = ({skill}: {skill: string}) => (
    <div key={skill} className="items-center rounded-full text-sm px-3 py-1 bg-slate-300 group-hover:bg-slate-200 font-medium">
        {skill}
    </div>
)
export default SkillsItem;