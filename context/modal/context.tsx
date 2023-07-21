"use client";

import { Context, ReactNode, createContext, useContext, useReducer } from "react";
import { ModalContextType } from "./modal-context-type";
import modalReducer from "./reducer"
import { ModalActionType } from "./modal-action";

export const defaultModalContext: ModalContextType = {
    visible: false,
    openModal: (_youtubeId: string) => {},
    closeModal: () => {}
};

export const ModalContext: Context<ModalContextType> = createContext<ModalContextType>(defaultModalContext);

export function useModal(): ModalContextType {
    return useContext<ModalContextType>(ModalContext);
}

type ChildrenProps = { children: ReactNode };

export default ({children}: ChildrenProps) => {
    const [modalContext, modalDispatch] = useReducer(modalReducer, defaultModalContext);
    const openModal = (youtubeId: string): void => {
        modalDispatch({
            type: ModalActionType.OPEN,
            payload: { youtubeId }
        });
    };
    const closeModal = (): void => {
        modalDispatch({ type: ModalActionType.CLOSE });
    };
    const value: ModalContextType = {
        ...modalContext,
        openModal,
        closeModal
    };
    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
}
