import React, { useState } from 'react';
import PaginationPlayList from './PaginationPlayList';
import "./style.css";

// Actions de Redux
import { useDispatch, useSelector } from 'react-redux';
import {cambiarShowListSong} from '../../actions/spotifyActions';

import Pagination from '../../config/Pagination';

const Index = () => {

  // state del componente
  const [songDetail, setSongDetail] = useState({});

  // utilizar use dispatch y te crea una función
  const dispatch =  useDispatch();

  // Acceder al state del store
  const spotify = useSelector(state => state.spotify.spotify);
  const showListSongs = useSelector(state => state.spotify.showListSongs);
  
  const dataPagination = Pagination(spotify.data);

  // mandar llamar el action de detalle cancion
  const detalleCancion = (song, imagen) => {
    setSongDetail({...song, imagen});
    dispatch( cambiarShowListSong(false));
  }
  
  const cardSonds = (songs) => {
    return songs.map((song, i) => {
      const imagen = song.images.find(x => x.height = 640);
      const imagen300 = song.images.find(x => x.height = 300);
      
        return (
          <div key={i} className="Coles col-6 col-lg-3" onClick={ () => detalleCancion(song, imagen300)}>
            <div className="card">
              <div className="pop badge-spotify">
                <h5>
                  <span class="badge badge-secondary">
                    {song.type === 'user' ? 'Artista' : 'Canción'}
                  </span>
                </h5>
              </div>
              <img 
                className="card-img-top img-detail img-fluid" 
                src={imagen.url} 
                alt="Imagen de canción" />
              <div className="card-body" style={{maxHeight: '150px', height: '150px', overflowY: 'auto'}}>
                <h4 className="card-title">{song.name}</h4>
              </div>
          </div>
        </div>   
        );
    });

  }

  return (
    <>
      <section className="categorias mt-5">
        <h2 className="text-center">Resultado de tu busqueda</h2>
        <p className="text-center">Inspirate para escuchar tu musica favorita</p>
        <div className="align-items-center justify-content-center">
         
        </div>
        {spotify != null && typeof spotify.data !== 'undefined' ? 
          <>
            {showListSongs ?
            <>
              <div className="container-fluid mt-5">
                <div className="row justify-content-center">

                  {spotify.data.items.length > 0 ?
                    cardSonds(spotify.data.items)
                  :
                   <h2 className="text-center">No existen registros</h2>
                  }
                      
                </div>
              </div>
              <div className="container-fluid">
                <div className="row align-items-center justify-content-center">
                  <PaginationPlayList pagination={dataPagination} />
                </div>
              </div>
            </>
            :
            <>
              <div className="container-fluid mb-4 p-3">
                <div className="row align-items-center justify-content-center">
                <div className="row">
                  <div className="col-sm-12 col-md-4">
                    <div className="pop arrow-back-Content" onClick={() => dispatch( cambiarShowListSong(true)) }>
                      <i className="fas fa-arrow-alt-circle-left fa-w-16 fa-2x"></i>
                    </div>
                    <img 
                      className="img-fluid" 
                      src={songDetail.imagen.url} 
                      alt="imagen de canción" />
                  </div>
                  <div className="col-sm-12 col-md-8 ">
                    <p>{songDetail.type === 'user' ? 'Artista' : 'Canción'}</p>
                    <p>{songDetail.name}</p>
                    <p>{songDetail.owner.display_name}</p>
                    <hr />
                    {songDetail.description}
                  </div>
                </div>
                </div>
              </div>
            </>
            }
          </>
        : null
        }  
        
      </section>
    </>
  );
}

export default Index