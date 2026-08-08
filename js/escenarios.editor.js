/*
========================================
LONGANIZA STUDIO

Editor de Escenarios

Versión:
1.0.0

Entrega:
014-A
========================================
*/

let escenarioEditando = null;


console.log(
    "🌎 Editor de Escenarios cargado"
);


/*
========================================
MOSTRAR FORMULARIO
========================================
*/

function mostrarFormularioEscenario(){

    const editor =
        document.getElementById(
            "editorEscenario"
        );


    if(!editor){

        return;

    }


    editor.innerHTML = `

        <div class="formularioEscenario">

            <h2>
                🌎 Editor de Escenario
            </h2>


            <input
                id="nombreEscenario"
                placeholder="Nombre del escenario"
            >


            <input
                id="tipoEscenario"
                placeholder="Tipo de escenario"
            >


            <input
                id="ubicacionEscenario"
                placeholder="Ubicación"
            >


            <input
                id="ambienteEscenario"
                placeholder="Ambiente"
            >


            <textarea
                id="descripcionEscenario"
                placeholder="Descripción del escenario"
            ></textarea>


            <input
                id="imagenEscenario"
                placeholder="URL de imagen"
            >


            <select
                id="estadoEscenario"
            >

                <option value="Activo">
                    Activo
                </option>

                <option value="En desarrollo">
                    En desarrollo
                </option>

                <option value="Inactivo">
                    Inactivo
                </option>

            </select>


            <div class="accionesEditorEscenario">

                <button
                    id="btnGuardarEscenario"
                    onclick="guardarEscenario()"
                >

                    💾 Guardar Escenario

                </button>


                <button
                    type="button"
                    onclick="nuevoEscenario()"
                >

                    ➕ Nuevo Escenario

                </button>

            </div>

        </div>

    `;

}


/*
========================================
CAPTURAR DATOS
========================================
*/

function capturarDatosFormularioEscenario(
    escenario
){

    const nombre =
        document.getElementById(
            "nombreEscenario"
        );


    const tipo =
        document.getElementById(
            "tipoEscenario"
        );


    const ubicacion =
        document.getElementById(
            "ubicacionEscenario"
        );


    const ambiente =
        document.getElementById(
            "ambienteEscenario"
        );


    const descripcion =
        document.getElementById(
            "descripcionEscenario"
        );


    const imagen =
        document.getElementById(
            "imagenEscenario"
        );


    const estado =
        document.getElementById(
            "estadoEscenario"
        );


    escenario.nombre =
        nombre ?
            nombre.value :
            "";


    escenario.tipo =
        tipo ?
            tipo.value :
            "";


    escenario.ubicacion =
        ubicacion ?
            ubicacion.value :
            "";


    escenario.ambiente =
        ambiente ?
            ambiente.value :
            "";


    escenario.descripcion =
        descripcion ?
            descripcion.value :
            "";


    escenario.imagen =
        imagen ?
            imagen.value :
            "";


    escenario.estado =
        estado ?
            estado.value :
            "Activo";

}


/*
========================================
CARGAR ESCENARIO
========================================
*/

function cargarFormularioEscenario(
    escenario
){

    const nombre =
        document.getElementById(
            "nombreEscenario"
        );


    const tipo =
        document.getElementById(
            "tipoEscenario"
        );


    const ubicacion =
        document.getElementById(
            "ubicacionEscenario"
        );


    const ambiente =
        document.getElementById(
            "ambienteEscenario"
        );


    const descripcion =
        document.getElementById(
            "descripcionEscenario"
        );


    const imagen =
        document.getElementById(
            "imagenEscenario"
        );


    const estado =
        document.getElementById(
            "estadoEscenario"
        );


    if(nombre){

        nombre.value =
            escenario.nombre || "";

    }


    if(tipo){

        tipo.value =
            escenario.tipo || "";

    }


    if(ubicacion){

        ubicacion.value =
            escenario.ubicacion || "";

    }


    if(ambiente){

        ambiente.value =
            escenario.ambiente || "";

    }


    if(descripcion){

        descripcion.value =
            escenario.descripcion || "";

    }


    if(imagen){

        imagen.value =
            escenario.imagen || "";

    }


    if(estado){

        estado.value =
            escenario.estado || "Activo";

    }

}


/*
========================================
LIMPIAR
========================================
*/

function limpiarFormularioEscenario(){

    const campos = [

        "nombreEscenario",

        "tipoEscenario",

        "ubicacionEscenario",

        "ambienteEscenario",

        "descripcionEscenario",

        "imagenEscenario"

    ];


    campos.forEach(
        id => {

            const elemento =
                document.getElementById(
                    id
                );


            if(elemento){

                elemento.value = "";

            }

        }
    );


    const estado =
        document.getElementById(
            "estadoEscenario"
        );


    if(estado){

        estado.value =
            "Activo";

    }

}


/*
========================================
NUEVO ESCENARIO
========================================
*/

function nuevoEscenario(){

    escenarioEditando = null;


    limpiarFormularioEscenario();


    actualizarBotonGuardarEscenario();

}


/*
========================================
ACTUALIZAR BOTÓN
========================================
*/

function actualizarBotonGuardarEscenario(){

    const boton =
        document.getElementById(
            "btnGuardarEscenario"
        );


    if(!boton){

        return;

    }


    if(escenarioEditando){

        boton.innerHTML =
            "💾 Actualizar Escenario";

    }
    else{

        boton.innerHTML =
            "💾 Guardar Escenario";

    }

}
