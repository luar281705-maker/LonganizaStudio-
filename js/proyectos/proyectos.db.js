/*
========================================

LONGANIZA STUDIO

Archivo:
proyectos.db.js

Versión:
1.0.0

Entrega:
010-A

Estado:
BASE DE DATOS DEL MÓDULO PROYECTOS

NO MODIFICAR
SIN INDICACIÓN.

========================================
*/



/*
========================================
CREAR PROYECTO NUEVO
========================================
*/


function crearProyectoBase(){


    return {


        id:

        generarID(),



        nombre:

        "",



        descripcion:

        "",



        serie:

        "Entre la risa y la longaniza",



        temporadaActual:

        1,



        estado:

        "En desarrollo",



        fechaCreacion:

        fechaHoraActual(),



        personajes:

        [],



        historias:

        [],



        escenarios:

        [],



        episodios:

        []



    };


}






/*
========================================
BUSCAR PROYECTO
========================================
*/


function obtenerProyectoPorID(id){


    return sistema.proyectos.find(


        proyecto => proyecto.id === id


    );


}






/*
========================================
VALIDAR PROYECTO
========================================
*/


function proyectoValido(proyecto){


    return (

        proyecto

        &&

        textoValido(proyecto.nombre)

    );


}
