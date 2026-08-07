/*
========================================

LONGANIZA STUDIO

Archivo:
app.js

Versión:
1.3.0

Entrega:
008-D

Estado:
CONTROL PRINCIPAL
NAVEGACIÓN MODULAR PROFESIONAL

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



    if(window.LonganizaStudio){


        console.log(

            "Sistema actual:",

            window.LonganizaStudio.sistema

        );


    }else{


        console.error(

            "LonganizaStudio no está inicializado"

        );


    }



    configurarMenu();


}






/*
========================================
CONFIGURAR MENÚ
========================================
*/


function configurarMenu(){



    /*
    ========================
    PROYECTOS
    ========================
    */


    const btnProyectos =

    document.getElementById(
        "btnProyectos"
    );



    if(btnProyectos){


        btnProyectos.onclick = function(){



            if(typeof renderBibliotecaProyectos === "function"){


                renderBibliotecaProyectos();



            }else{


                mostrarModuloPendiente(
                    "Proyectos"
                );


            }


        };


    }






    /*
    ========================
    PERSONAJES
    ========================
    */


    const btnPersonajes =

    document.getElementById(
        "btnPersonajes"
    );



    if(btnPersonajes){


        btnPersonajes.onclick = function(){



            if(typeof mostrarModuloPersonajes === "function"){


                mostrarModuloPersonajes();



            }else{


                mostrarModuloPendiente(
                    "Personajes"
                );


            }


        };


    }







    /*
    ========================
    HISTORIAS
    ========================
    */


    const btnHistorias =

    document.getElementById(
        "btnHistorias"
    );



    if(btnHistorias){


        btnHistorias.onclick = function(){


            mostrarModuloPendiente(
                "Historias"
            );


        };


    }







    /*
    ========================
    ESCENARIOS
    ========================
    */


    const btnEscenarios =

    document.getElementById(
        "btnEscenarios"
    );



    if(btnEscenarios){


        btnEscenarios.onclick = function(){


            mostrarModuloPendiente(
                "Escenarios"
            );


        };


    }







    /*
    ========================
    EPISODIOS
    ========================
    */


    const btnEpisodios =

    document.getElementById(
        "btnEpisodios"
    );



    if(btnEpisodios){


        btnEpisodios.onclick = function(){


            mostrarModuloPendiente(
                "Episodios"
            );


        };


    }







    /*
    ========================
    AUDIO
    ========================
    */


    const btnAudio =

    document.getElementById(
        "btnAudio"
    );



    if(btnAudio){


        btnAudio.onclick = function(){


            mostrarModuloPendiente(
                "Audio"
            );


        };


    }







    /*
    ========================
    CONFIGURACIÓN
    ========================
    */


    const btnConfiguracion =

    document.getElementById(
        "btnConfiguracion"
    );



    if(btnConfiguracion){


        btnConfiguracion.onclick = function(){



            if(typeof mostrarConfiguracion === "function"){


                mostrarConfiguracion();



            }else{


                mostrarModuloPendiente(
                    "Configuración"
                );


            }



        };


    }







    console.log(

        "✅ Menú configurado correctamente"

    );



}








/*
========================================
MÓDULOS TEMPORALES
========================================
*/


function mostrarModuloPendiente(nombreModulo){



    const contenido =

    document.getElementById(
        "contenido"
    );



    if(!contenido)
    return;



    contenido.innerHTML = `


        <div class="modulo-pendiente">


            <h1>
            🚧 ${nombreModulo}
            </h1>



            <p>
            Este módulo está preparado
            para desarrollo.
            </p>



            <p>
            Longaniza Studio continuará
            creciendo módulo por módulo.
            </p>


        </div>


    `;



    console.log(

        "Módulo pendiente:",

        nombreModulo

    );



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
