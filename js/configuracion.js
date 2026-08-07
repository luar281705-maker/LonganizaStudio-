/*
========================================

LONGANIZA STUDIO

Archivo:
configuracion.js

Versión:
1.1.0

Estado:
CONFIGURACIÓN CENTRAL DEL SISTEMA

NO MODIFICAR
SIN INDICACIÓN.

========================================
*/



/*
========================================
CREAR ESPACIO PRINCIPAL
DEL SISTEMA
========================================
*/


window.LonganizaStudio =

window.LonganizaStudio || {};





/*
========================================
CONFIGURACIÓN GENERAL
========================================
*/


LonganizaStudio.configuracion = {


    nombreSoftware:

    "Longaniza Studio",



    nombreSerie:

    "Entre la risa y la longaniza",



    fraseOficial:

    "Quieren poner paz y la terminan embarrando más.",



    version:

    "1.0.0",



    desarrollador:

    "Longaniza Studio",



    idioma:

    "es-MX"



};







/*
========================================
OBTENER CONFIGURACIÓN
========================================
*/


function obtenerConfiguracion(){


    return LonganizaStudio.configuracion;


}







/*
========================================
MOSTRAR CONFIGURACIÓN
========================================
*/


function mostrarConfiguracion(){


    console.log(

        "⚙ Configuración:",

        LonganizaStudio.configuracion

    );


}
