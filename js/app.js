/*
========================================
LONGANIZA STUDIO
Sistema principal
Versión 0.1.0
Módulo:
Navegación interna
========================================
*/


console.log(
    "Longaniza Studio iniciado correctamente"
);



const sistema = {


    nombre:
    "Longaniza Studio",


    version:
    "0.1.0",


    proyectoActual:
    null,


    moduloActual:
    "inicio"


};





/*
========================================
CONTENIDO DE LOS MÓDULOS
========================================
*/


const modulos = {


    inicio:`

        <h2>
            Bienvenido a Longaniza Studio
        </h2>

        <p>
            Centro de producción de series animadas.
        </p>

        <p>
            Selecciona un módulo para comenzar.
        </p>

    `,



    proyectos:`

        <h2>
            📁 Módulo de Proyectos
        </h2>

        <p>
            Aquí se administrarán las series,
            temporadas y episodios.
        </p>

    `,



    personajes:`

        <h2>
            🎭 Módulo de Personajes
        </h2>

        <p>
            Aquí se crearán y administrarán
            personajes.
        </p>

    `,



    historias:`

        <h2>
            📝 Módulo de Historias
        </h2>

        <p>
            Aquí se desarrollarán ideas y guiones.
        </p>

    `,



    escenarios:`

        <h2>
            🏠 Módulo de Escenarios
        </h2>

        <p>
            Biblioteca de lugares y ambientes.
        </p>

    `,



    episodios:`

        <h2>
            🎞 Módulo de Episodios
        </h2>

        <p>
            Control de producción.
        </p>

    `,



    audio:`

        <h2>
            🎙 Módulo de Audio
        </h2>

        <p>
            Voces, música y efectos.
        </p>

    `,



    configuracion:`

        <h2>
            ⚙ Configuración
        </h2>

        <p>
            Parámetros generales del sistema.
        </p>

    `


};







/*
========================================
CAMBIO DE MÓDULO
========================================
*/


function cambiarModulo(nombreModulo){


    const contenido =
    document.querySelector(".contenido");



    if(
        modulos[nombreModulo]
    ){


        contenido.innerHTML =

        modulos[nombreModulo];


        sistema.moduloActual =
        nombreModulo;


        console.log(
            "Módulo activo:",
            nombreModulo
        );


    }


}







/*
========================================
ACTIVACIÓN DE BOTONES
========================================
*/


function iniciarNavegacion(){


    const botones =
    document.querySelectorAll(
        ".menu button"
    );



    botones[0].onclick =
    function(){

        cambiarModulo("proyectos");

    };



    botones[1].onclick =
    function(){

        cambiarModulo("personajes");

    };



    botones[2].onclick =
    function(){

        cambiarModulo("historias");

    };



    botones[3].onclick =
    function(){

        cambiarModulo("escenarios");

    };



    botones[4].onclick =
    function(){

        cambiarModulo("episodios");

    };



    botones[5].onclick =
    function(){

        cambiarModulo("audio");

    };



    botones[6].onclick =
    function(){

        cambiarModulo("configuracion");

    };


}







window.onload = function(){


    console.log(
        sistema.nombre +
        " funcionando"
    );



    iniciarNavegacion();


};
