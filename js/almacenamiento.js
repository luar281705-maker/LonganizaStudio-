/*
========================================

LONGANIZA STUDIO

Archivo:
almacenamiento.js

Versión:
1.1.0

Entrega:
011

Estado:
ALMACENAMIENTO PROFESIONAL

========================================
*/


const CLAVE_SISTEMA = "LONGANIZA_STUDIO_DATOS";



/*
========================================
CREAR SISTEMA BASE
========================================
*/

function crearSistemaBase(){

    return {

        version:"1.0.0",

        proyectoActivo:null,

        proyectos:[],


        configuracion:{

            nombreSoftware:
            "Longaniza Studio",

            nombreSerie:
            "Entre la risa y la longaniza",

            fraseOficial:
            "Quieren poner paz y la terminan embarrando más.",

            version:
            "1.0.0"

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

        JSON.stringify(
            window.LonganizaStudio.sistema
        )

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
REGISTRAR SISTEMA
========================================
*/

window.LonganizaStudio =
window.LonganizaStudio || {};



window.LonganizaStudio.sistema =
cargarDatos();



/*
========================================
COMPATIBILIDAD TEMPORAL

Mantiene funcionando módulos
anteriores mientras migramos.
========================================
*/

let sistema =
window.LonganizaStudio.sistema;
