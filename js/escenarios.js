/*
========================================
LONGANIZA STUDIO

Módulo:
Escenarios

Versión:
1.1.0

Entrega:
014-C

Estado:
ESCENARIOS FUNCIONALES
========================================
*/

console.log(
    "🌎 Módulo Escenarios Profesional 1.1 cargado"
);


/*
========================================
OBTENER SISTEMA CENTRAL
========================================
*/

function obtenerSistemaEscenarios(){

    if(
        !window.LonganizaStudio ||
        !window.LonganizaStudio.sistema
    ){

        console.error(
            "❌ Sistema central Longaniza Studio no disponible"
        );

        return null;

    }


    return window.LonganizaStudio.sistema;

}


/*
========================================
BASE GLOBAL DE ESCENARIOS
========================================
*/

function crearBaseEscenarios(){

    const sistema =
        obtenerSistemaEscenarios();


    if(!sistema){

        return [];

    }


    if(!Array.isArray(sistema.escenarios)){

        sistema.escenarios = [];

    }


    return sistema.escenarios;

}


/*
========================================
MOSTRAR MÓDULO
========================================
*/

function mostrarModuloEscenarios(){

    const contenido =
        document.getElementById(
            "contenido"
        );


    if(!contenido){

        console.error(
            "❌ No existe #contenido"
        );

        return;

    }


    contenido.innerHTML = `

        <div class="modulo-escenarios">

            <h1>
                🌎 Biblioteca Profesional
                de Escenarios
            </h1>


            <div
                id="bibliotecaEscenarios"
            >
            </div>


            <div
                id="editorEscenario"
            >
            </div>


        </div>

    `;


    mostrarFormularioEscenario();

    renderBibliotecaEscenarios();

}


/*
========================================
GUARDAR ESCENARIO
========================================
*/

function guardarEscenario(){

    if(
        typeof escenarioEditando !==
        "undefined" &&
        escenarioEditando
    ){

        actualizarEscenario();

        return;

    }


    crearEscenario();

}


/*
========================================
CREAR ESCENARIO
========================================
*/

function crearEscenario(){

    const escenario = {

        id:
            generarIDEscenario(),


        nombre:
            "",


        tipo:
            "",


        descripcion:
            "",


        ubicacion:
            "",


        ambiente:
            "",


        estado:
            "Activo",


        imagen:
            "",


        color:
            "#3498db",


        elementos: [],


        fechaCreacion:
            new Date().toLocaleString()

    };


    capturarDatosFormularioEscenario(
        escenario
    );


    if(
        escenario.nombre
            .trim() === ""
    ){

        alert(
            "Escribe un nombre para el escenario"
        );

        return;

    }


    const existe =
        crearBaseEscenarios()
            .some(

                escenarioExistente =>

                    escenarioExistente.nombre
                        .toLowerCase()
                        .trim() ===
                    escenario.nombre
                        .toLowerCase()
                        .trim()

            );


    if(existe){

        alert(
            "Ya existe un escenario con ese nombre"
        );

        return;

    }


    crearBaseEscenarios()
        .push(
            escenario
        );


    guardarDatos();


    renderBibliotecaEscenarios();


    limpiarFormularioEscenario();


    escenarioEditando = null;


    actualizarBotonGuardarEscenario();


    alert(
        "🌎 Escenario creado correctamente"
    );

}


/*
========================================
ACTUALIZAR ESCENARIO
========================================
*/

function actualizarEscenario(){

    if(!escenarioEditando){

        console.warn(
            "No existe un escenario en edición"
        );

        return;

    }


    const escenario =
        crearBaseEscenarios()
            .find(

                escenarioActual =>

                    escenarioActual.id ===
                    escenarioEditando

            );


    if(!escenario){

        alert(
            "No existe el escenario seleccionado"
        );

        return;

    }


    capturarDatosFormularioEscenario(
        escenario
    );


    if(
        escenario.nombre
            .trim() === ""
    ){

        alert(
            "El escenario necesita un nombre"
        );

        return;

    }


    guardarDatos();


    renderBibliotecaEscenarios();


    limpiarFormularioEscenario();


    escenarioEditando = null;


    actualizarBotonGuardarEscenario();


    alert(
        "🌎 Escenario actualizado correctamente"
    );

}


/*
========================================
EDITAR ESCENARIO
========================================
*/

function editarEscenario(id){

    const escenario =
        crearBaseEscenarios()
            .find(

                escenarioActual =>

                    escenarioActual.id === id

            );


    if(!escenario){

        console.error(
            "Escenario no encontrado:",
            id
        );

        return;

    }


    cargarFormularioEscenario(
        escenario
    );


    escenarioEditando =
        escenario.id;


    actualizarBotonGuardarEscenario();


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });


    console.log(
        "✏️ Editando escenario:",
        escenario.nombre
    );

}


/*
========================================
ELIMINAR ESCENARIO
========================================
*/

function eliminarEscenario(id){

    const confirmar =
        confirm(
            "¿Eliminar este escenario?"
        );


    if(!confirmar){

        return;

    }


    const escenarios =
        crearBaseEscenarios();


    const indice =
        escenarios.findIndex(

            escenario =>

                escenario.id === id

        );


    if(indice === -1){

        return;

    }


    const eliminado =
        escenarios[indice];


    escenarios.splice(
        indice,
        1
    );


    guardarDatos();


    renderBibliotecaEscenarios();


    limpiarFormularioEscenario();


    escenarioEditando = null;


    actualizarBotonGuardarEscenario();


    alert(
        "🗑 Escenario eliminado: " +
        eliminado.nombre
    );

}


/*
========================================
VISTA PREVIA
========================================
*/

function verPreviewEscenario(id){

    const escenario =
        crearBaseEscenarios()
            .find(

                escenarioActual =>

                    escenarioActual.id === id

            );


    if(!escenario){

        return;

    }


    console.log(
        "👁 Vista previa:",
        escenario
    );

}


/*
========================================
GENERAR ID
========================================
*/

function generarIDEscenario(){

    return (

        "esc_" +

        Date.now()
            .toString(36) +

        "_" +

        Math.random()
            .toString(36)
            .substring(2,8)

    );

}


/*
========================================
LISTAR ESCENARIOS
========================================
*/

function listarEscenarios(){

    console.log(
        "🌎 Escenarios:",
        crearBaseEscenarios()
    );

}
