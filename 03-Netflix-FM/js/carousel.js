const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');



// Flecha Izquieda y Flecha derecha
flechaDerecha.addEventListener( 'click', ()=>{
    fila.scrollLeft = fila.scrollLeft + fila.offsetWidth;
    
    const indicadorActivo = document.querySelector('.indicadores .active');
    if( indicadorActivo.nextSibling ){
        indicadorActivo.nextSibling.classList.add('active');
        indicadorActivo.classList.remove('active');
    }
});
flechaIzquierda.addEventListener( 'click', ()=>{
    fila.scrollLeft = fila.scrollLeft - fila.offsetWidth;

    const indicadorActivo2 = document.querySelector('.indicadores .active');
    if( indicadorActivo2.previousSibling ){
        indicadorActivo2.previousSibling.classList.add('active');
        indicadorActivo2.classList.remove('active');
    }
});

// Indicadores
const numeroPaginas = Math.ceil(peliculas.length / 5);

for (let i = 0; i < numeroPaginas; i++) {
    
    const indicador = document.createElement('button');
    if(i === 0){
        indicador.classList.add('active');
    }

    document.querySelector('.indicadores').appendChild(indicador);

    indicador.addEventListener('click', (e)=>{
        fila.scrollLeft = i * fila.offsetWidth;
        document.querySelector('.indicadores .active').classList.remove('active');
        e.target.classList.add('active');
    });
}

