import React, {useState} from  'react';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { obtenerCancionesAction } from '../actions/spotifyActions';
import { mostrarAlerta, ocultarAlertaAction } from '../actions/alertaActions';
import Loading from './Loading';

const Header = () => { 

  const dispatch =  useDispatch();

  // Acceder al state del store
  const alerta = useSelector(state => state.alerta.alerta);
  const cargando = useSelector( state => state.spotify.loading );

  const [inputBuscar, setInputBuscar] = useState('');

  const consultarCanciones = async (e) => {
    e.preventDefault();

    // validar formulario
    if(inputBuscar.trim() === '') {

      const alerta = {
          msg: 'El campo busqueda es obligatorio',
          classes: 'alert alert-danger text-center text-uppercase p3'
      }
      dispatch( mostrarAlerta(alerta) );

      return;
    }

     // si no hay errores
     dispatch( ocultarAlertaAction() );

    //consultar api
    dispatch( obtenerCancionesAction(inputBuscar));
  }

  return (
    <>
      
      { cargando ?  <Loading /> : null }
     
      <div className="header-scroll pt-4">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between">
              <div className="col-sm-1">
                <h1>Spotify</h1>
              </div>
              <div className="col-sm-8 col-md-4">
                <form className="busqueda" onSubmit={(e) => consultarCanciones(e) }>
                  <div className="input-group">
                    <input 
                      onChange={(e) => setInputBuscar(e.target.value)}
                      value={inputBuscar}
                      type="text"
                      className="form-control" 
                      placeholder="¿Que canción buscas1?" />
                    <div 
                      className="input-group-append">   
                      <input type="submit" value="Buscar" className="btn btn-success" />
                    </div>
                  </div>
                </form>
              </div>
          </div>
        </div>
      </div>
      
      <header className="header pt-4">
        <div className="container">
          <div className="row justify-content-between text-center">
            <div className="col-md-4 mb-3 mb-md-0">
                <img height="60" width="60" src="img/logo.png" />
            </div>
            <div className="col-md-8 ">
              <nav className="nav d-flex justify-content-end flex-column flex-md-row">
                <a href="#" className="nav-link">Iniciar Sesión</a>
                <a className="btn btn-outline-light text-light">Acceder</a>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="container">
          <div className="row justify-content-center buscador align-items-center">
            <div className="col-md-8 text-light text-center ">
              <h1 className="display-4 titulo">Buscador de canciones</h1>
              <p>Podrá encontrar tus canciones favoritas en spotify</p>

              <form className="busqueda mt-5" onSubmit={(e) => consultarCanciones(e) }>
                <div className="input-group">
                  <input 
                    onChange={(e) => setInputBuscar(e.target.value)}
                    value={inputBuscar}
                    type="text" 
                    className="form-control" 
                    placeholder="¿Que canción buscas?" />

                  <div className="input-group-append">   
                    <input
                      type="submit"
                      value="Buscar"
                      className="px-2 py-3 btn btn-lg btn-success" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </header>
      {alerta ? <p className={alerta.classes}> {alerta.msg} </p> : null }
    </>
  );
}

export default Header;