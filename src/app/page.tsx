import ExperienceContainer from "@/components/experience/experience-container";
import LinksContainer from "@/components/links/links-container";
import ProjectsContainer from "@/components/projects/projects-container";
import ModalProvider from "../../context/modal/context";
import YoutubeModal from "@/components/projects/youtube-modal";

export default function Home() {
    return (
        <ModalProvider>
            <main className="h-screen justify-between font-sans">
                <div className="absolute w-full h-full bg-abstract z-0" />
                <div className="absolute w-full h-full bg-white/70 z-10 backdrop-blur" />
                <div className="flex flex-row h-screen overflow-auto max-w-screen-xl mx-auto">
                    <YoutubeModal />
                    <div className="flex-col sticky top-0 items-start w-2/5 lg:pl-32 pt-24 z-20">
                        <h1 className="text-5xl font-bold">
                            Keji Chen
                        </h1>
                        <h2 className="text-2xl font-bold mt-4">
                            Software Engineer
                        </h2>
                        <p className="text-l mt-5">
                            Welcome to my page of wonders!
                        </p>
                        <LinksContainer />
                    </div>

                    <div className="flex-col items-start py-24 lg:pr-32 w-3/5 ml-8 z-20">
                        <ExperienceContainer />
                        <ProjectsContainer />
                    </div>
                </div>
            </main>
        </ModalProvider>
    )
}
