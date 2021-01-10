import { combineReducers} from 'redux';
import SesionReducer from './SesionReducer'

export default combineReducers({
    sesion: SesionReducer
})