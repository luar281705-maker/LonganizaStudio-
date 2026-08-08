/*
========================================
LONGANIZA STUDIO

Biblioteca de Escenarios

Versión:
1.0.0

Entrega:
014-A
========================================
*/

console.log(
    "🌎 Biblioteca de Escenarios cargada"
);


/*
========================================
RENDER
========================================
*/

function renderBibliotecaEscenarios(){

    const contenedor =
        document.getElementById(
            "bibliotecaEscenarios"
        );


    if(!contenedor){

        return;

    }


    const escenarios =
        crearBaseEscenarios();


    let html = `

        <div class="cabeceraBibliotecaEscenarios">

            <div>

                <h2>
                    🌎 Biblioteca de Escenarios
                </h2>

                <p>
                    ${escenarios.length}
                    escenario(s)
                </p>

            </div>


            <button
                onclick="nuevoEscenario()"
            >

                ➕ Nuevo Escenario

            </button>

        </div>


        <input
            id="buscarEscenario"
            type="text"
            placeholder="🔎 Buscar escenario..."
            onkeyup="filtrarEscenarios()"
        >


        <div
            class="gridEscenarios"
            id="gridEscenarios"
        >

    `;


    if(escenarios.length === 0){

        html += `

            <div class="sinEscenarios">

                <div>
                    🌎
                </div>

                <h3>
                    No hay escenarios
                </h3>

                <p>
                    Crea el primer escenario
                    de tu producción.
                </p>

            </div>

        `;

    }


    escenarios.forEach(
        escenario => {

            const imagen =
                escenario.imagen ||
                "🌎";


            const imagenHTML =

                typeof imagen === "string" &&
                imagen.startsWith("http")

                ?

                `
                    <img
                        src="${imagen}"
                        alt="${escenario.nombre}"
                    >
                `

                :

                imagen;


            html += `

                <article
                    class="tarjetaEscenario"
                    onclick="
                        seleccionarEscenario(
                            '${escenario.id}'
                        )
                    "
                >

                    <div class="avatarEscenario">

                        ${imagenHTML}

                    </div>


                    <div class="contenidoEscenario">

                        <h3>
                            ${escenario.nombre}
                        </h3>


                        <span>
                            🌎
                            ${escenario.tipo || "Sin definir"}
                        </span>


                        <p>

                            <strong>
                                Ubicación:
                            </strong>

                            ${
                                escenario.ubicacion ||
                                "Sin definir"
                            }

                        </p>


                        <p>

                            ${
                                escenario.descripcion ||
                                "Sin descripción"
                            }

                        </p>


                        <span>

                            🟢
                            ${
                                escenario.estado ||
                                "Activo"
                            }

                        </span>

                    </div>


                    <div class="accionesEscenario">

                        <button
                            type="button"
                            onclick="
                                event.stopPropagation();
                                editarEscenario(
                                    '${escenario.id}'
                                );
                            "
                        >

                            ✏️ Editar

                        </button>


                        <button
                            type="button"
                            onclick="
                                event.stopPropagation();
                                eliminarEscenario(
                                    '${escenario.id}'
                                );
                            "
                        >

                            🗑 Eliminar

                        </button>

                    </div>

                </article>

            `;

        }
    );


    html += `

        </div>

    `;


    contenedor.innerHTML =
        html;

}


/*
========================================
BUSCAR
========================================
*/

function filtrarEscenarios(){

    const campo =
        document.getElementById(
            "buscarEscenario"
        );


    if(!campo){

        return;

    }


    const texto =
        campo.value
            .toLowerCase()
            .trim();


    const items =
        document.querySelectorAll(
            ".tarjetaEscenario"
        );


    items.forEach(
        item => {

            const contenido =
                item.innerText
                    .toLowerCase();


            item.style.display =

                contenido.includes(texto)

                ? ""

                : "none";

        }
    );

}


/*
========================================
SELECCIONAR
========================================
*/

function seleccionarEscenario(id){

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
        "🌎 Escenario seleccionado:",
        escenario.nombre
    );


    cargarFormularioEscenario(
        escenario
    );


    escenarioEditando =
        escenario.id;


    actualizarBotonGuardarEscenario();

}
