const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');

preguntas.forEach( ( pregunta )=>{

    pregunta.addEventListener('click', (e)=>{
        e.currentTarget.classList.toggle('active');
        
        let respuesta = pregunta.querySelector('.respuesta');
        let alturaRespuesta = respuesta.scrollHeight;

        if( !respuesta.style.maxHeight ){
            respuesta.style.maxHeight = `${alturaRespuesta}px`;
        }else{
            respuesta.style.maxHeight = '';
        }


        // Reiniciamos toas la pregutas(Las ocultamos)
        preguntas.forEach((elemento)=>{
            if(pregunta !== elemento){
                elemento.classList.remove('active');
                elemento.querySelector('.respuesta').style.maxHeight = null;
            }
        });


    });

});