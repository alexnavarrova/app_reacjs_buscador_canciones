import {
  COMENZAR_DERCARGA_SPOTIFY, 
  COMENZAR_DERCARGA_SPOTIFY_EXITO, 
  COMENZAR_DERCARGA_SPOTIFY_ERROR,
  ACTUALIZAR_INPUT_BUSQUEDA,
  ACTUALIZAR_SHOW_LIST_SONG,
} from '../types';

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

// FUNCION QUE CONSULTAR CANCIONES DE SPOTIFY
export function obtenerCancionesAction(inputBuscar, offset = 0) {
  return async (dispatch) => {

    dispatch(descargaCanciones());
    dispatch(actualizarShowListSong(true));

    try {
      const respuesta = await clienteAxios.get(`?q=${inputBuscar}&offset=${offset}`);

      dispatch(actualizarInputBusqueda(inputBuscar));

      dispatch(descargaCancionesExitosa(respuesta.data));
    } catch (error) { 
      descargaCancionesError();

      // alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'Hubo un error, intenta de nuevo'
      })
    }
  }
}

// FUNCION QUE ACTUALIZA MOSTRAR EL DETALLE DE LA CANCION O LISTAR CANCIONES
export function cambiarShowListSong(estado) {
  return async (dispatch) => {

    dispatch(actualizarShowListSong(estado));

  }
}

const actualizarInputBusqueda = (inputBuscar) => ({
  type: ACTUALIZAR_INPUT_BUSQUEDA,
  payload: inputBuscar
});

const actualizarShowListSong = (estado) => ({
  type: ACTUALIZAR_SHOW_LIST_SONG,
  payload: estado
});

const descargaCanciones = () => ({
  type: COMENZAR_DERCARGA_SPOTIFY,
  payload: true
}); 

const descargaCancionesExitosa = data => ({
  type: COMENZAR_DERCARGA_SPOTIFY_EXITO,
  payload: data
});

const descargaCancionesError = () => ({
  type: COMENZAR_DERCARGA_SPOTIFY_ERROR,
  payload: true
});
