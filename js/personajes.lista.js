/*
========================================
LONGANIZA STUDIO

Biblioteca de Personajes

Versión:
0.4.0
========================================
*/


function renderBibliotecaPersonajes(){


const proyecto = sistema.proyectoActivo;


if(!proyecto){

return "";

}



const personajes = crearBasePersonajes();



let html = `

<div class="biblioteca-personajes">


<div class="biblioteca-header">

<h3>
🎭 Personajes
</h3>

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

class="lista-personajes"

>

`;



personajes.forEach(personaje=>{


html += `

<div

class="item-personaje"

onclick="seleccionarPersonaje(${personaje.id})"

>

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

</div>

`;



return html;


}





function nuevoPersonaje(){


limpiarFormularioPersonaje();


}





function filtrarPersonajes(){


const texto =

document
.getElementById(
"buscarPersonaje"
)
.value
.toLowerCase();



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
