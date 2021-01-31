


const categorias = document.querySelectorAll('#categorias .categoria');
const contenedorPreguntas = document.querySelectorAll('.contenedor-preguntas');

let categoriaActive = null;

categorias.forEach(( categoria )=>{
    categoria.addEventListener('click', (e)=>{

        categorias.forEach((elemeto)=>{
            elemeto.classList.remove('active');
        })

        e.currentTarget.classList.toggle('active');
        categoriaActive = categoria.dataset.categoria;
        
        
        // Activas contenedor de preguntas correcpondiente
        contenedorPreguntas.forEach(( contenedor )=>{
            if( contenedor.dataset.categoria ===  categoriaActive){
                contenedor.classList.add('active');
            }else{
                contenedor.classList.remove('active');
            }
        })
    })
})