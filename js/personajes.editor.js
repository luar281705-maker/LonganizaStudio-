/*
========================================
LONGANIZA STUDIO

Editor de Personajes

Versión 0.4.0
========================================
*/

let personajeEditando = null;

function mostrarFormularioPersonaje(){


const editor =

document.getElementById(
"formularioPersonaje"
);


if(!editor){
return;
}



editor.innerHTML = `


<div class="panel">


<h3>
Información básica
</h3>


<input
id="nombrePersonaje"
placeholder="Nombre del personaje"
>


<select id="tipoPersonaje">

<option>
Principal
</option>

<option>
Secundario
</option>

<option>
Invitado
</option>

<option>
Mascota
</option>

</select>


<input
id="rolPersonaje"
placeholder="Rol dentro de la serie"
>


<textarea
id="descripcionPersonaje"
placeholder="Descripción general"
></textarea>


</div>





<div class="panel">


<h3>
Apariencia visual
</h3>


<input
id="edadPersonaje"
placeholder="Edad"
>


<input
id="cabelloPersonaje"
placeholder="Cabello"
>


<input
id="colorCabelloPersonaje"
placeholder="Color de cabello"
>


<select id="lentesPersonaje">

<option>
Sí
</option>

<option>
No
</option>

</select>


<input
id="ropaPersonaje"
placeholder="Ropa habitual"
>


<input
id="accesoriosPersonaje"
placeholder="Accesorios"
>


</div>





<div class="panel">


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

<button id="btnGuardarPersonaje" onclick="guardarPersonaje()">

💾 Guardar Personaje

</button>


</div>


`;

}

function limpiarFormularioPersonaje(){


const campos = [

"nombrePersonaje",
"rolPersonaje",
"descripcionPersonaje",
"edadPersonaje",
"cabelloPersonaje",
"colorCabelloPersonaje",
"ropaPersonaje",
"accesoriosPersonaje",
"caracteristicasPersonaje",
"formaHablarPersonaje",
"gustosPersonaje",
"defectosPersonaje"

];


campos.forEach(id=>{


const elemento = document.getElementById(id);


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


personajeEditando = null;


document.getElementById(
"btnGuardarPersonaje"
).innerHTML =
"💾 Guardar Personaje";


}

/*
========================================
CARGAR PERSONAJE EN EDITOR
========================================
*/


function cargarFormularioPersonaje(personaje){


document.getElementById(
"nombrePersonaje"
).value = personaje.nombre;



document.getElementById(
"rolPersonaje"
).value = personaje.rol;



document.getElementById(
"descripcionPersonaje"
).value = personaje.descripcion;



document.getElementById(
"edadPersonaje"
).value = personaje.apariencia.edad;



document.getElementById(
"cabelloPersonaje"
).value = personaje.apariencia.cabello;



document.getElementById(
"colorCabelloPersonaje"
).value = personaje.apariencia.colorCabello;



document.getElementById(
"ropaPersonaje"
).value = personaje.apariencia.ropa;



document.getElementById(
"accesoriosPersonaje"
).value = personaje.apariencia.accesorios;



document.getElementById(
"caracteristicasPersonaje"
).value = personaje.personalidad.caracteristicas;



document.getElementById(
"formaHablarPersonaje"
).value = personaje.personalidad.formaHablar;



document.getElementById(
"gustosPersonaje"
).value = personaje.personalidad.gustos;



document.getElementById(
"defectosPersonaje"
).value = personaje.personalidad.defectos;

personajeEditando = personaje.id;

document.getElementById(
"btnGuardarPersonaje"
).innerHTML =
"💾 Actualizar Personaje";



}
