import {
    LOGIN
} from '../Types/SesionTypes';

const initialState = {
    token: null,
    user: null
}

export default function(state=initialState, action){
    switch (action.type) {
        case LOGIN:
            return action.sesionData;
            break;
    
        default:
            return state;
            break;
    }
}