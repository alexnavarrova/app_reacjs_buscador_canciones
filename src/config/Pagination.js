
const Pagination = (data) => {

  if (typeof data === 'undefined') {
    return;
  }
  const {total, offset, limit} = data;

  let paginacion = {
    totalPaginas : 0,
    primero: 0,
    anterior: 0,
    siguiente: 0,
    ultimo: 0,
    actual: 0,
  };

  let numPaginas = Math.ceil(total / limit);
  let pagina = offset / limit;

  pagina += 1;

  paginacion.actual = pagina;
    paginacion.total = total;

    if (pagina > 1) {
        paginacion.primero = 1;
        paginacion.anterior = pagina - 1;
    } else {
        paginacion.primero = 0;
        paginacion.anterior = 0;
    }

    if (pagina < numPaginas) {
      paginacion.ultimo = numPaginas;
      paginacion.siguiente = pagina + 1;
    } else {
      paginacion.ultimo = 0;
      paginacion.siguiente = 0;
    }

    let limitePaginacion = 6;
    let rangoPaginacion = 0;
    let prePaginacion = 2;
    let mitadPaginacion = limitePaginacion / 2;

    let inicio =  1;

    if (numPaginas < 6) {
      rangoPaginacion = numPaginas + 1;
    } else if (pagina < (limitePaginacion - prePaginacion)) {
      rangoPaginacion = limitePaginacion;
    } else {
      rangoPaginacion = pagina + mitadPaginacion;
      inicio =  pagina - prePaginacion;
    }

    let paginas= [];

    for (let i = inicio; i < rangoPaginacion; i++) {
      paginas.push(i);
    }
    
    return {paginador: paginacion, paginas};

}

export default Pagination;