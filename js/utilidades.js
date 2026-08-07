/*
========================================

LONGANIZA STUDIO

Archivo:
utilidades.js

Versión:
1.0.0

Entrega:
007

Estado:
HERRAMIENTAS GENERALES

NO MODIFICAR
SIN INDICACIÓN.

========================================
*/



/*
========================================
GENERAR ID ÚNICO
========================================
*/


function generarID(){


    return Date.now().toString(36)
    +
    Math.random().toString(36).substring(2,8);


}






/*
========================================
FECHA ACTUAL
========================================
*/


function fechaActual(){


    return new Date()
    .toLocaleDateString("es-MX");


}






/*
========================================
FECHA Y HORA COMPLETA
========================================
*/


function fechaHoraActual(){


    return new Date()
    .toLocaleString("es-MX");


}






/*
========================================
COPIA SEGURA DE OBJETOS
========================================
*/


function clonarObjeto(objeto){


    return JSON.parse(

        JSON.stringify(objeto)

    );


}






/*
========================================
VALIDAR TEXTO
========================================
*/


function textoValido(texto){


    return (

        typeof texto === "string"

        &&

        texto.trim().length > 0

    );


}






/*
========================================
MENSAJES DEL SISTEMA
========================================
*/


function mensajeSistema(mensaje){


    console.log(

        "🌭 Longaniza Studio:",

        mensaje

    );


}






/*
========================================
CAPITALIZAR TEXTO
========================================
*/


function capitalizar(texto){


    if(!texto)

    return "";


    return texto.charAt(0)
    .toUpperCase()

    +

    texto.slice(1);


}
