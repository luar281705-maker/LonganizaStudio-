/*
========================================
LONGANIZA STUDIO

Biblioteca de Personajes

Versión:
0.4.0
========================================
*/


function renderBibliotecaPersonajes(){

const contenedor =
document.getElementById("bibliotecaPersonajes");

if(!contenedor){
    return;
}

const proyecto = sistema.proyectoActivo;

if(!proyecto){

    contenedor.innerHTML = `
        <p>No hay proyecto abierto.</p>
    `;

    return;
}

const personajes = crearBasePersonajes();

let html = `

<div class="biblioteca-header">

    <h3>🎭 Personajes</h3>

    <button onclick="nuevoPersonaje()">
        ➕
    </button>

</div>

<input
id="buscarPersonaje"
type="text"
placeholder="Buscar personaje..."
onkeyup="filtrarPersonajes()"
>

<div
id="listaBibliotecaPersonajes"
class="lista-personajes">

`;

personajes.forEach(personaje=>{

html += `

<div
class="item-personaje"
onclick="seleccionarPersonaje(${personaje.id})">

    <div class="nombre">
        ${personaje.nombre}
    </div>

    <div class="tipo">
        ${personaje.tipo}
    </div>

</div>

`;

});

html += `

</div>

`;

contenedor.innerHTML = html;

}




/*
========================================
BUSCAR PERSONAJES
========================================
*/


function filtrarPersonajes(){


const campoBusqueda =

document.getElementById(
"buscarPersonaje"
);



if(!campoBusqueda){

return;

}



const texto =

campoBusqueda.value.toLowerCase();



const items =

document.querySelectorAll(
".item-personaje"
);



items.forEach(item=>{


const nombre =

item.innerText.toLowerCase();



item.style.display =

nombre.includes(texto)

?

"block"

:

"none";


});


}





/*
========================================
SELECCIONAR PERSONAJE
========================================
*/


function seleccionarPersonaje(id){


const personaje =

crearBasePersonajes().find(

p=>p.id===id

);



if(!personaje){

return;

}



cargarFormularioPersonaje(

personaje

);


}
