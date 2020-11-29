import React from "react";

//redux
import { useDispatch, useSelector } from 'react-redux';
import {obtenerCancionesAction} from '../../actions/spotifyActions';

const PaginationPlayList = (pagination) => {

  const dispatch =  useDispatch();

  const inputBuscar = useSelector(state => state.spotify.inputBuscar);

  const {paginador, paginas} = pagination.pagination;

  const cambiarPagina = (pagina) => {
    const ofset = (pagina -1) * 20;
    dispatch( obtenerCancionesAction(inputBuscar, ofset));
  }

  return (
    <nav aria-label="page navigation">
      <ul className="pagination">
        <li className={paginador.primero === 0 ?  'page-item disabled' : 'page-item' }>
          <a className="page-link text-secondary" onClick={() => cambiarPagina(paginador.primero)}>
            <i className="fas fa-angle-double-left"></i>
          </a>
        </li>
        <li className={paginador.anterior === 0 ?  'page-item disabled' : 'page-item' }>
          <a className="page-link text-secondary" onClick={() => cambiarPagina(paginador.anterior)}>
            <i className="fas fa-angle-left"></i>
          </a>
        </li>
        {paginas.map((page, index) =>(
          <li 
            key={index} 
            className={ page === paginador.actual ? 'page-item active text-light' : 'page-item text-secondary'}>
            <a onClick={() => cambiarPagina(page)} className="page-link">{page}</a>
          </li>
        ))}
        <li
          className={paginador.siguiente === 0 ?  'page-item disabled' : 'page-item' } >
          <a className="page-link text-secondary" onClick={() => cambiarPagina(paginador.siguiente)}>
            <i className="fas fa fa-angle-right"></i>
          </a>
        </li>
        <li className={paginador.ultimo === 0 ?  'page-item disabled' : 'page-item' } >
          <a className="page-link text-secondary" onClick={() => cambiarPagina(paginador.ultimo)}>
            <i className="fas fa fa-angle-double-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default PaginationPlayList;