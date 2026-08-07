/*
========================================

LONGANIZA STUDIO

Biblioteca Profesional de Personajes

Versión:
2.0.0

Entrega:
013-C

Estado:
BIBLIOTECA PROFESIONAL

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


<div class="cabecera-biblioteca">


<h2>
🎭 Personajes
</h2>



<button onclick="nuevoPersonaje()">

➕

</button>



<input

id="buscarPersonaje"

type="text"

placeholder="Buscar personaje..."

onkeyup="filtrarPersonajes()"

>


</div>



<div class="lista-personajes">


`;







if(personajes.length===0){


html += `


<p>
No existen personajes creados.
</p>


`;



}







personajes.forEach(personaje=>{



html += `



<div class="item-personaje"

onclick="seleccionarPersonaje('${personaje.id}')"

>



<div class="nombre">


🎭 ${

personaje.identidad.nombre

}


</div>





<div class="tipo">


Tipo:

${

personaje.identidad.tipo || "Sin definir"

}


</div>





<div class="rol">


Rol:

${

personaje.identidad.rol || "Sin definir"

}


</div>





<div class="descripcion">


${

personaje.identidad.descripcion || ""

}


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





cargarFormularioPersonaje(

personaje

);



}
