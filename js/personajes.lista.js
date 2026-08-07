/*
========================================

LONGANIZA STUDIO

Biblioteca Profesional de Personajes

Versión:
2.0.1

Entrega:
013-C

Estado:
BIBLIOTECA PROFESIONAL CORREGIDA

========================================
*/


console.log(
"🎭 Biblioteca Profesional de Personajes cargada"
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
No existen personajes registrados.
</p>

`;


}




personajes.forEach(personaje=>{


html += `



<div

class="item-personaje tarjetaPersonaje"

onclick="seleccionarPersonaje('${personaje.id}')"

>



<h3>

🎭 ${personaje.identidad.nombre}

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



if(
contenido.includes(texto)
){


item.style.display =
"block";


}

else{


item.style.display =
"none";


}



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



}
