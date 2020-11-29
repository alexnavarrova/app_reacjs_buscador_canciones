import {combineReducers} from 'redux';
import spotifyReducers from './spotifyReducers';
import alertaReducer from './alertaReducer';
export default combineReducers({
    spotify: spotifyReducers,
    alerta: alertaReducer
});