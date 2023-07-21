import { defaultModalContext } from "./context";
import { ModalAction, ModalActionType } from "./modal-action";
import { ModalContextType } from "./modal-context-type";

export default (state: ModalContextType, action: ModalAction): ModalContextType => {
    switch(action.type) {
        case ModalActionType.OPEN:
            console.log("Opening modal");
            return {
                ...state,
                youtubeId: action.payload?.youtubeId,
                visible: true
            };
        case ModalActionType.CLOSE:
            console.log("Closing modal");
            return {
                ...state,
                youtubeId: null,
                visible: false
            };
        default:
            console.log(`Invalid modal action type: ${action.type}`);
            return defaultModalContext;
    }
}