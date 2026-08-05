/*
========================================
LONGANIZA STUDIO

Editor de Personajes

Versión 0.4.0
========================================
*/


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



<button onclick="crearPersonaje()">

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
