"use client";

import Image from 'next/image'
import { ProjectImageItemProps } from "./project-image-item-props";
import { useModal } from '../../../context/modal/context';
import { ModalContextType } from '../../../context/modal/modal-context-type';

export default (projectImageItemProps: ProjectImageItemProps) => {
    const modalContext: ModalContextType = useModal();
    const onClickHandler = (): void => {
        modalContext.openModal(projectImageItemProps.youtubeId);
    };
    return (
        <div className="w-full h-1/2 mr-4 mt-2 relative group/image cursor-pointer" onClick={onClickHandler}>
            <Image
                src={projectImageItemProps.imagePath}
                alt="Project thumbnail"
                sizes="100vw"
                width={0}
                height={0}
                style={{ width: '100%', height: '100%' }}
                className="absolute"
            />
            <div className="absolute group-hover/image:bg-black opacity-50 w-full h-full"/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="absolute z-10 stroke-2 stroke-black group-hover/image:stroke-white group-hover/image:w-6 group-hover/image:h-6 group-hover/image:inset-0 group-hover/image:m-auto w-4 h-4 top-1 right-1" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
            </svg>
        </div>
    )
}