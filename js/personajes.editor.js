/*
========================================

LONGANIZA STUDIO

Editor Profesional de Personajes

Versión:
2.0.0

Entrega:
013-B

========================================
*/


let personajeEditando = null;





/*
========================================
MOSTRAR FORMULARIO
========================================
*/


function mostrarFormularioPersonaje(){


const editor =

document.getElementById(
"editorPersonaje"
);



if(!editor){

return;

}



editor.innerHTML = `


<div class="formulario-personaje">


<h2>
📝 Ficha del Personaje
</h2>



<h3>
Identidad
</h3>


<input
id="nombrePersonaje"
placeholder="Nombre del personaje"
>


<input
id="tipoPersonaje"
placeholder="Tipo de personaje"
>


<input
id="rolPersonaje"
placeholder="Rol dentro de la serie"
>


<input
id="edadPersonaje"
placeholder="Edad"
>


<textarea
id="descripcionPersonaje"
placeholder="Descripción general"
></textarea>




<h3>
Apariencia
</h3>


<input
id="cabelloPersonaje"
placeholder="Cabello"
>


<input
id="colorCabelloPersonaje"
placeholder="Color de cabello"
>


<input
id="ropaPersonaje"
placeholder="Ropa característica"
>


<input
id="accesoriosPersonaje"
placeholder="Accesorios"
>





<h3>
Personalidad
</h3>


<textarea
id="caracteristicasPersonaje"
placeholder="Características"
></textarea>


<textarea
id="formaHablarPersonaje"
placeholder="Forma de hablar"
></textarea>


<textarea
id="gustosPersonaje"
placeholder="Gustos"
></textarea>


<textarea
id="defectosPersonaje"
placeholder="Defectos"
></textarea>





<h3>
Producción
</h3>


<textarea
id="tipoHumorPersonaje"
placeholder="Tipo de humor"
></textarea>


<textarea
id="frasesPersonaje"
placeholder="Frases típicas"
></textarea>





<button
id="btnGuardarPersonaje"
onclick="guardarPersonaje()"
>

💾 Guardar Personaje

</button>



<button
onclick="nuevoPersonaje()"
>

➕ Nuevo Personaje

</button>


</div>


`;



}








/*
========================================
LIMPIAR FORMULARIO
========================================
*/


function limpiarFormularioPersonaje(){


const campos = [


"nombrePersonaje",

"tipoPersonaje",

"rolPersonaje",

"edadPersonaje",

"descripcionPersonaje",

"cabelloPersonaje",

"colorCabelloPersonaje",

"ropaPersonaje",

"accesoriosPersonaje",

"caracteristicasPersonaje",

"formaHablarPersonaje",

"gustosPersonaje",

"defectosPersonaje",

"tipoHumorPersonaje",

"frasesPersonaje"


];



campos.forEach(id=>{


const elemento =

document.getElementById(id);



if(elemento){

elemento.value="";

}



});



}








/*
========================================
NUEVO PERSONAJE
========================================
*/


function nuevoPersonaje(){


limpiarFormularioPersonaje();


personajeEditando=null;



const boton =

document.getElementById(
"btnGuardarPersonaje"
);



if(boton){

boton.innerHTML=

"💾 Guardar Personaje";

}



}









/*
========================================
CARGAR PERSONAJE
========================================
*/


function cargarFormularioPersonaje(personaje){



document.getElementById(
"nombrePersonaje"
).value =

personaje.identidad.nombre;





document.getElementById(
"tipoPersonaje"
).value =

personaje.identidad.tipo;





document.getElementById(
"rolPersonaje"
).value =

personaje.identidad.rol;





document.getElementById(
"edadPersonaje"
).value =

personaje.identidad.edad;





document.getElementById(
"descripcionPersonaje"
).value =

personaje.identidad.descripcion;






document.getElementById(
"cabelloPersonaje"
).value =

personaje.apariencia.cabello;





document.getElementById(
"colorCabelloPersonaje"
).value =

personaje.apariencia.colorCabello;





document.getElementById(
"ropaPersonaje"
).value =

personaje.apariencia.ropa;





document.getElementById(
"accesoriosPersonaje"
).value =

personaje.apariencia.accesorios;







document.getElementById(
"caracteristicasPersonaje"
).value =

personaje.personalidad.caracteristicas;





document.getElementById(
"formaHablarPersonaje"
).value =

personaje.personalidad.formaHablar;





document.getElementById(
"gustosPersonaje"
).value =

personaje.personalidad.gustos;





document.getElementById(
"defectosPersonaje"
).value =

personaje.personalidad.defectos;







document.getElementById(
"tipoHumorPersonaje"
).value =

personaje.personalidad.tipoHumor || "";





document.getElementById(
"frasesPersonaje"
).value =

personaje.personalidad.frasesTipicas || "";







personajeEditando = personaje.id;





document.getElementById(
"btnGuardarPersonaje"
).innerHTML =

"💾 Actualizar Personaje";



}
