/*
========================================

LONGANIZA STUDIO

Archivo:
proyectos.lista.js

Versión:
1.0.0

Entrega:
010-B

Estado:
BIBLIOTECA VISUAL DE PROYECTOS

NO MODIFICAR
SIN INDICACIÓN.

========================================
*/



/*
========================================
RENDER BIBLIOTECA PROYECTOS
========================================
*/


function renderBibliotecaProyectos(){


    const contenido =

    document.getElementById("contenido");



    if(!contenido)

    return;




    let html = `


    <section class="panel">


        <div class="panel-titulo">

            📁 Proyectos

        </div>



        <button 
        class="boton boton-principal"
        onclick="mostrarNuevoProyecto()"
        >

            + Nuevo Proyecto

        </button>



        <hr>



        <div class="lista">


    `;



    if(sistema.proyectos.length === 0){


        html += `


        <div class="lista-item">


            No existen proyectos creados.


        </div>


        `;


    }



    sistema.proyectos.forEach(proyecto => {



        html += `


        <div 

        class="lista-item"

        onclick="seleccionarProyecto('${proyecto.id}')"

        >


            <h3>

            ${proyecto.nombre || "Proyecto sin nombre"}

            </h3>


            <p>

            ${proyecto.estado}

            </p>


            <small>

            Creado:
            ${proyecto.fechaCreacion}

            </small>


        </div>


        `;


    });



    html += `


        </div>


    </section>


    `;



    contenido.innerHTML = html;


}







/*
========================================
SELECCIONAR PROYECTO
========================================
*/


function seleccionarProyecto(id){


    const proyecto =

    obtenerProyectoPorID(id);



    if(!proyecto)

    return;



    sistema.proyectoActivo = proyecto;



    guardarDatos();



    mensajeSistema(

        "Proyecto activo: "

        +

        proyecto.nombre

    );



    renderBibliotecaProyectos();


}







/*
========================================
ACTUALIZAR LISTA
========================================
*/


function actualizarListaProyectos(){


    renderBibliotecaProyectos();


}
