/*
========================================

LONGANIZA STUDIO

Archivo:
configuracion.js

Versión:
1.0.0

Entrega:
009

Estado:
MÓDULO DE CONFIGURACIÓN BASE

NO MODIFICAR
SIN INDICACIÓN.

========================================
*/



/*
========================================
CONFIGURACIÓN PRINCIPAL
========================================
*/


const configuracionSistema = {


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


    return configuracionSistema;


}






/*
========================================
MOSTRAR CONFIGURACIÓN
========================================
*/


function mostrarConfiguracion(){


    console.log(

        "⚙ Configuración Longaniza Studio",

        configuracionSistema

    );


}
