import {
    COMENZAR_DERCARGA_SPOTIFY, 
    COMENZAR_DERCARGA_SPOTIFY_EXITO, 
    COMENZAR_DERCARGA_SPOTIFY_ERROR,
    DESCARGA_SPOTIFY_EXITO,
    ACTUALIZAR_INPUT_BUSQUEDA,
    ACTUALIZAR_SHOW_LIST_SONG,
} from '../types';

//cada reducer tiene su propio state

const initialState = {
    spotify: {},
    error: null,
    loading: false,
    inputBuscar: '',
    showListSongs: true
}

export default function(state = initialState, action) {
    switch(action.type) {
        case COMENZAR_DERCARGA_SPOTIFY:
            return {
                ...state,
                loading: action.payload
            }
        case ACTUALIZAR_INPUT_BUSQUEDA:
            return {
                ...state,
                inputBuscar: action.payload
            }
        case ACTUALIZAR_SHOW_LIST_SONG:
            return {
                ...state,
                showListSongs: action.payload
            }
        case COMENZAR_DERCARGA_SPOTIFY_EXITO:
            return {
                ...state,
                loading: false,
                spotify: action.payload
            }
        case COMENZAR_DERCARGA_SPOTIFY_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DESCARGA_SPOTIFY_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                spotify: action.payload
            }
        default:
            return state;

    }  
}