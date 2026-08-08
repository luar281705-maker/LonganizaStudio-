/*
========================================
LONGANIZA STUDIO

Editor Profesional de Escenarios

Versión:
1.1.0

Entrega:
014-C.2
========================================
*/

let escenarioEditando = null;


console.log(
    "🌎 Editor Profesional de Escenarios 1.1 cargado"
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

        console.error(
            "❌ No existe #editorEscenario"
        );

        return;

    }


    editor.innerHTML = `

        <div class="formularioEscenario">

            <h2>
                🌎 Editor de Escenario
            </h2>


            <input
                id="nombreEscenario"
                type="text"
                placeholder="Nombre del escenario"
            >


            <input
                id="tipoEscenario"
                type="text"
                placeholder="Tipo de escenario"
            >


            <input
                id="ubicacionEscenario"
                type="text"
                placeholder="Ubicación"
            >


            <input
                id="ambienteEscenario"
                type="text"
                placeholder="Ambiente"
            >


            <textarea
                id="descripcionEscenario"
                placeholder="Descripción del escenario"
            ></textarea>


            <input
                id="imagenEscenario"
                type="text"
                placeholder="URL de imagen (opcional)"
            >


            <select
                id="estadoEscenario"
            >

                <option value="Activo">
                    🟢 Activo
                </option>

                <option value="En desarrollo">
                    🟡 En desarrollo
                </option>

                <option value="Inactivo">
                    🔴 Inactivo
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

    if(!escenario){

        return;

    }


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
        nombre
            ? nombre.value.trim()
            : "";


    escenario.tipo =
        tipo
            ? tipo.value.trim()
            : "";


    escenario.ubicacion =
        ubicacion
            ? ubicacion.value.trim()
            : "";


    escenario.ambiente =
        ambiente
            ? ambiente.value.trim()
            : "";


    escenario.descripcion =
        descripcion
            ? descripcion.value.trim()
            : "";


    escenario.imagen =
        imagen
            ? imagen.value.trim()
            : "";


    escenario.estado =
        estado
            ? estado.value
            : "Activo";

}


/*
========================================
CARGAR ESCENARIO
========================================
*/

function cargarFormularioEscenario(
    escenario
){

    if(!escenario){

        return;

    }


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
LIMPIAR FORMULARIO
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


    const nombre =
        document.getElementById(
            "nombreEscenario"
        );


    if(nombre){

        nombre.focus();

    }

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
