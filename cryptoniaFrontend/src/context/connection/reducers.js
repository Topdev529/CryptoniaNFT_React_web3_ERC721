import { EXIST_CONNECTION } from "./types";

const initialState = {
    account:  null
}

export function ConnectionReducer(state = initialState, action) {
    switch (action.type) {

        case EXIST_CONNECTION:
            return {
                ...state,
                account: action.payload
            }

        default:
            return state;
    }
}