/*
========================================

LONGANIZA STUDIO

Archivo:
almacenamiento.js

Versión:
1.0.0

Entrega:
006

Estado:
SISTEMA DE ALMACENAMIENTO BASE

NO MODIFICAR
SIN INDICACIÓN.

========================================
*/



/*
========================================
CLAVE PRINCIPAL
========================================
*/


const CLAVE_SISTEMA = "LONGANIZA_STUDIO_DATOS";





/*
========================================
ESTRUCTURA BASE DEL SISTEMA
========================================
*/


function crearSistemaBase(){


    return {


        version:"1.0.0",


        proyectoActivo:null,


        proyectos:[],


        configuracion:{


            nombre:

            "Longaniza Studio",


            serie:

            "Entre la risa y la longaniza"


        }


    };


}







/*
========================================
GUARDAR DATOS
========================================
*/


function guardarDatos(){


    localStorage.setItem(

        CLAVE_SISTEMA,

        JSON.stringify(sistema)

    );


}







/*
========================================
CARGAR DATOS
========================================
*/


function cargarDatos(){


    const datos =

    localStorage.getItem(CLAVE_SISTEMA);



    if(datos){


        return JSON.parse(datos);


    }



    return crearSistemaBase();


}







/*
========================================
BORRAR DATOS
========================================
*/


function borrarDatos(){


    localStorage.removeItem(

        CLAVE_SISTEMA

    );


}






/*
========================================
INICIALIZACIÓN
========================================
*/


let sistema = cargarDatos();
