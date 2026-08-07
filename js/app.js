/*
========================================

LONGANIZA STUDIO

Archivo:
app.js

Versión:
1.1.0

Entrega:
008-B

Estado:
CONTROL PRINCIPAL
CON NAVEGACIÓN INICIAL

NO MODIFICAR
SIN INDICACIÓN.

========================================
*/



/*
========================================
INICIAR APLICACIÓN
========================================
*/


function iniciarAplicacion(){



    console.log(

        "🌭 Longaniza Studio iniciado"

    );



    console.log(

        "Sistema actual:",

        sistema

    );



    configurarMenu();



}







/*
========================================
CONFIGURAR MENU
========================================
*/


function configurarMenu(){



    const btnProyectos =

    document.getElementById(

        "btnProyectos"

    );





    if(btnProyectos){


        btnProyectos.onclick =

        function(){


            renderBibliotecaProyectos();


        };


    }



}







/*
========================================
EVENTO INICIAL
========================================
*/


document.addEventListener(

    "DOMContentLoaded",

    iniciarAplicacion

);
