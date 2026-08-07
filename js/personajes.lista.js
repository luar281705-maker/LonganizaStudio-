/*
========================================

LONGANIZA STUDIO

Biblioteca Profesional de Personajes

Versión:
2.1.0

Entrega:
013-D

Estado:
TARJETAS VISUALES PROFESIONALES

========================================
*/


console.log(
"🎭 Biblioteca Profesional de Personajes 2.1 cargada"
);





/*
========================================

RENDER BIBLIOTECA

========================================
*/


function renderBibliotecaPersonajes(){


const contenedor =

document.getElementById(
"bibliotecaPersonajes"
);



if(!contenedor){

return;

}



const personajes =

crearBasePersonajes();



let html = `



<div class="barraPersonajes">


<button

onclick="nuevoPersonaje()"

>

➕ Nuevo Personaje

</button>



<input

id="buscarPersonaje"

type="text"

placeholder="Buscar personaje..."

onkeyup="filtrarPersonajes()"

>


</div>



<div class="listaPersonajes">

`;




if(personajes.length===0){


html += `

<p>

No hay personajes registrados.

</p>

`;


}




personajes.forEach(personaje=>{



const color =

personaje.visual?.color ||

"#e67e22";



const estado =

personaje.produccion?.estado ||

"Activo";



const imagen =

personaje.visual?.imagen ||

"🎭";




html += `



<div

class="item-personaje tarjetaPersonaje"

style="border-top:8px solid ${color}"

onclick="seleccionarPersonaje('${personaje.id}')"

>



<div class="imagenPersonaje">


${

imagen.startsWith("http")

?

`<img src="${imagen}">`

:

imagen

}


</div>




<h3>

${personaje.identidad.nombre}

</h3>




<p>

<strong>
Tipo:
</strong>

<br>

${

personaje.identidad.tipo ||

"Sin definir"

}

</p>




<p>

<strong>
Rol:
</strong>

<br>

${

personaje.identidad.rol ||

"Sin definir"

}

</p>




<p>

${

personaje.identidad.descripcion ||

"Sin descripción"

}

</p>




<p>

<strong>
Estado:
</strong>

🟢 ${estado}

</p>




<button

onclick="event.stopPropagation(); editarPersonaje('${personaje.id}')"

>

✏️ Editar

</button>



<button

onclick="event.stopPropagation(); eliminarPersonaje('${personaje.id}')"

>

🗑️ Eliminar

</button>



<button

onclick="event.stopPropagation(); verPreviewPersonaje('${personaje.id}')"

>

👁 Vista previa

</button>




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

campoBusqueda.value

.toLowerCase();



const items =

document.querySelectorAll(
".item-personaje"
);



items.forEach(item=>{


const contenido =

item.innerText

.toLowerCase();



item.style.display =


contenido.includes(texto)

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

crearBasePersonajes()

.find(

p=>p.id===id

);



if(!personaje){


console.log(

"No encontrado:",

id

);


return;


}



console.log(

"Personaje seleccionado:",

personaje.identidad.nombre

);



cargarFormularioPersonaje(

personaje

);



personajeEditando = id;



verPreviewPersonaje(id);



}
