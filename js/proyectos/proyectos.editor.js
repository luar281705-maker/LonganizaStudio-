/*
========================================

LONGANIZA STUDIO

Archivo:
proyectos.editor.js

Versión:
1.0.0

Entrega:
010-C

Estado:
EDITOR DE PROYECTOS

NO MODIFICAR
SIN INDICACIÓN.

========================================
*/



/*
========================================
MOSTRAR NUEVO PROYECTO
========================================
*/


function mostrarNuevoProyecto(){


    const contenido =

    document.getElementById("contenido");



    if(!contenido)

    return;




    contenido.innerHTML = `


    <section class="panel">


        <div class="panel-titulo">

            📁 Crear nuevo proyecto

        </div>



        <div class="formulario">


            <div class="campo">


                <label>
                Nombre del proyecto
                </label>


                <input

                id="nombreProyecto"

                type="text"

                placeholder="Ejemplo: Temporada 1"

                >


            </div>




            <div class="campo">


                <label>
                Descripción
                </label>


                <textarea

                id="descripcionProyecto"

                rows="5"

                placeholder="Descripción del proyecto"

                ></textarea>


            </div>



            <div>


                <button

                class="boton boton-principal"

                onclick="guardarProyecto()"

                >

                💾 Guardar Proyecto

                </button>



                <button

                class="boton boton-secundario"

                onclick="renderBibliotecaProyectos()"

                >

                ↩ Cancelar

                </button>


            </div>


        </div>


    </section>


    `;


}







/*
========================================
OBTENER DATOS DEL FORMULARIO
========================================
*/


function obtenerDatosProyectoFormulario(){



    return {


        nombre:

        document
        .getElementById("nombreProyecto")
        .value,


        descripcion:

        document
        .getElementById("descripcionProyecto")
        .value



    };


}






/*
========================================
LIMPIAR FORMULARIO
========================================
*/


function limpiarFormularioProyecto(){


    const nombre =

    document.getElementById("nombreProyecto");



    const descripcion =

    document.getElementById("descripcionProyecto");



    if(nombre)

    nombre.value="";



    if(descripcion)

    descripcion.value="";


}
