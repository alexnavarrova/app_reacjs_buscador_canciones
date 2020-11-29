window.onscroll = function (e) {
    let scroll = window.scrollY;

    const headerScroll = document.querySelector('.header-scroll');
    if(scroll > 300) {
        headerScroll.classList.add('activo');
    } else {
        headerScroll.classList.remove('activo');
    }
};