export interface ModalContextType {
    youtubeId?: string | null,
    visible: boolean,
    openModal: (youtubeId: string) => void,
    closeModal: () => void
}