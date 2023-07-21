export enum ModalActionType {
    OPEN,
    CLOSE
}

export interface ModalActionPayload {
    youtubeId: string
}

export interface ModalAction {
    type: ModalActionType,
    payload?: ModalActionPayload
}