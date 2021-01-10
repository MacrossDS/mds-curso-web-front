import {
    LOGIN
} from '../Types/SesionTypes';

export function loginAction(sesionData){
    return (dispatch) => {
        dispatch({
            type: LOGIN,
            sesionData
        })
    }
}