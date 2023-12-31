"use client";

import YouTube from "react-youtube";
import { useModal } from "../../../context/modal/context";
import { ModalContextType } from "../../../context/modal/modal-context-type";

const YoutubeModal = () => {
    const modalContext: ModalContextType = useModal();
    const options = {
        width: "100%",
        height: "100%"
    };
    return modalContext.visible ?
    (
        <div className="absolute w-5/6 h-5/6 m-auto inset-0 z-30">
            <svg xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="w-6 h-6 absolute -top-6 -right-6 stroke-black cursor-pointer"
                viewBox="0 0 16 16"
                onClick={modalContext.closeModal}>
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            <YouTube
                videoId={modalContext.youtubeId ?? ""}
                opts={options}
                className="absolute w-full h-full inset-0 m-auto"
            />
        </div>
    ) :
    <div />
}
export default YoutubeModal;