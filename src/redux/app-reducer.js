import {getAuthUserData} from "./auth-reducer";

const SET_INISIALIZED_SUCCESS = 'SET_INISIALIZED_SUCCESS';


let initialState = {
    initialized: false
};

const AppReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INISIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

export const inisializedSuccess = () => ({type: SET_INISIALIZED_SUCCESS});

export const inisializeApp = ()  => (dispatch) => {
   let promise = dispatch(getAuthUserData());

    promise.then (() => {
        dispatch(inisializedSuccess());
    });
};



export default AppReducer;