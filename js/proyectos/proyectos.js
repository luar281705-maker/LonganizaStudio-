/*
========================================

LONGANIZA STUDIO

Archivo:
proyectos.js

Versión:
1.0.0

Entrega:
010-D

Estado:
CONTROLADOR PRINCIPAL
DEL MÓDULO PROYECTOS

NO MODIFICAR
SIN INDICACIÓN.

========================================
*/



/*
========================================
INICIAR MÓDULO PROYECTOS
========================================
*/


function iniciarProyectos(){


    renderBibliotecaProyectos();


}







/*
========================================
GUARDAR PROYECTO
========================================
*/


function guardarProyecto(){



    const datos =

    obtenerDatosProyectoFormulario();




    if(!textoValido(datos.nombre)){


        alert(

            "El proyecto necesita un nombre."

        );


        return;


    }





    const proyecto =

    crearProyectoBase();




    proyecto.nombre =

    datos.nombre.trim();




    proyecto.descripcion =

    datos.descripcion.trim();




    sistema.proyectos.push(

        proyecto

    );





    sistema.proyectoActivo =

    proyecto;





    guardarDatos();




    mensajeSistema(

        "Proyecto creado correctamente"

    );




    renderBibliotecaProyectos();


}







/*
========================================
ELIMINAR PROYECTO
========================================
*/


function eliminarProyecto(id){



    const confirmar =

    confirm(

        "¿Eliminar proyecto?"

    );



    if(!confirmar)

    return;





    sistema.proyectos =

    sistema.proyectos.filter(

        proyecto =>

        proyecto.id !== id

    );






    if(

        sistema.proyectoActivo

        &&

        sistema.proyectoActivo.id === id

    ){


        sistema.proyectoActivo = null;


    }






    guardarDatos();




    renderBibliotecaProyectos();


}







/*
========================================
CARGAR PROYECTOS AL INICIAR
========================================
*/


document.addEventListener(


    "DOMContentLoaded",


    function(){


        if(

            typeof renderBibliotecaProyectos

            ===

            "function"

        ){


            renderBibliotecaProyectos();


        }


    }


);
