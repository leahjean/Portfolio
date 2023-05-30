import ExperienceContainer from "@/components/experience/experience-container";

export default function Home() {
    return (
        <main className="flex h-screen flex-row justify-between font-sans bg-inkblot">
            <div className="absolute w-full h-full bg-abstract z-0" />
            <div className="absolute w-full h-full bg-white/70 z-10 backdrop-blur" />
            <div className="flex-col items-start w-2/5 pl-32 pt-24 z-20">
                <h1 className="text-5xl font-bold">
                    Keji Chen
                </h1>
                <h2 className="text-2xl font-bold mt-4">
                    Software Engineer
                </h2>
                <p className="text-l mt-5">
                    Welcome to my page of wonders!
                </p>
            </div>

            <div className="flex-col items-start py-24 pr-32 w-3/5 ml-8 max-h-screen overflow-y-auto z-20">
                <ExperienceContainer />
            </div>
        </main>
    )
}
