/*
========================================

LONGANIZA STUDIO

Editor Profesional de Personajes

Versión:
2.1.0

Entrega:
013-D

Estado:
EDITOR CONECTADO A TARJETAS

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



<h2 id="tituloEditorPersonaje">

➕ Nuevo Personaje

</h2>



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
placeholder="Descripción del personaje"
></textarea>





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



`;



}









/*
========================================

LIMPIAR FORMULARIO

========================================
*/


function limpiarFormularioPersonaje(){



const campos=[


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





const titulo =

document.getElementById(
"tituloEditorPersonaje"
);



if(titulo){


titulo.innerHTML=

"➕ Nuevo Personaje";


}



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



if(!personaje){

return;

}



setValor(
"nombrePersonaje",
personaje.identidad.nombre
);



setValor(
"tipoPersonaje",
personaje.identidad.tipo
);



setValor(
"rolPersonaje",
personaje.identidad.rol
);



setValor(
"edadPersonaje",
personaje.identidad.edad
);



setValor(
"descripcionPersonaje",
personaje.identidad.descripcion
);




setValor(
"cabelloPersonaje",
personaje.apariencia.cabello
);



setValor(
"colorCabelloPersonaje",
personaje.apariencia.colorCabello
);



setValor(
"ropaPersonaje",
personaje.apariencia.ropa
);



setValor(
"accesoriosPersonaje",
personaje.apariencia.accesorios
);




setValor(
"caracteristicasPersonaje",
personaje.personalidad.caracteristicas
);



setValor(
"formaHablarPersonaje",
personaje.personalidad.formaHablar
);



setValor(
"gustosPersonaje",
personaje.personalidad.gustos
);



setValor(
"defectosPersonaje",
personaje.personalidad.defectos
);



setValor(
"tipoHumorPersonaje",
personaje.personalidad.tipoHumor
);



setValor(
"frasesPersonaje",
personaje.personalidad.frasesTipicas
);





personajeEditando = personaje.id;





const boton =

document.getElementById(
"btnGuardarPersonaje"
);



if(boton){


boton.innerHTML=

"💾 Actualizar Personaje";


}





const titulo =

document.getElementById(
"tituloEditorPersonaje"
);



if(titulo){


titulo.innerHTML=

"✏️ Editando: "

+

personaje.identidad.nombre;


}



if(

typeof verPreviewPersonaje === "function"

){


verPreviewPersonaje(personaje.id);


}



}









/*
========================================

ASIGNAR VALORES SEGURO

========================================
*/


function setValor(id,valor){


const elemento =

document.getElementById(id);



if(elemento){


elemento.value=

valor || "";


}



}
