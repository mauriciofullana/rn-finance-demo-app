import {
    CommonActions, SET_ERROR, CLEAR_ERROR, ICommonState, SET_LOADING, CLEAR_LOADING
} from './types';

const initialState: ICommonState = {
    error: false,
    errorMessage: "",
    loading: false
};

export default (state = initialState, action: CommonActions): ICommonState => {
    switch (action.type) {
        case SET_ERROR:
            return {
                error: true,
                errorMessage: action.payload,
                loading: false
            };
        case CLEAR_ERROR:
            return { 
                ...state, 
                error: false, 
                errorMessage: "" 
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case CLEAR_LOADING:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}