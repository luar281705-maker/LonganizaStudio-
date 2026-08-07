/*
========================================

LONGANIZA STUDIO

Módulo:
Personajes

Versión:
2.2.1

Entrega:
013-D.3

Estado:
SISTEMA PROFESIONAL ESTABLE

========================================
*/


console.log(
"🎭 Módulo Personajes Profesional 2.2.1 cargado"
);





/*
========================================

OBTENER SISTEMA CENTRAL

========================================
*/


function obtenerSistemaPersonajes(){

return window.LonganizaStudio.sistema;

}






/*
========================================

BASE GLOBAL

========================================
*/


function crearBasePersonajes(){


const sistema = obtenerSistemaPersonajes();



if(!sistema.personajes){


sistema.personajes=[];


}



return sistema.personajes;


}






/*
========================================

MOSTRAR MODULO

========================================
*/


function mostrarModuloPersonajes(){


const contenido =

document.getElementById(
"contenido"
);



if(!contenido){

return;

}



contenido.innerHTML = `


<div class="modulo-personajes">


<h1>
🎭 Biblioteca Profesional de Personajes
</h1>



<div id="bibliotecaPersonajes">

</div>



<div id="editorPersonaje">

</div>



<div id="previewPersonaje">


<p>

Ningún personaje seleccionado.

</p>


</div>



</div>


`;



prepararDatosVisualesPersonajes();



mostrarFormularioPersonaje();



renderBibliotecaPersonajes();



}









/*
========================================

GUARDAR PERSONAJE

========================================
*/


function guardarPersonaje(){



if(personajeEditando){


actualizarPersonaje();


}

else{


crearPersonaje();


}



}









/*
========================================

CREAR PERSONAJE

========================================
*/


function crearPersonaje(){



const personaje={



id:

generarIDPersonaje(),



identidad:{


nombre:"",

tipo:"",

rol:"",

importancia:"",

edad:"",

descripcion:""


},



visual:{


imagen:"",

color:"#e67e22"


},



apariencia:{


estiloVisual:

"Dibujo infantil tipo bolitas y palitos",


altura:"",

complexión:"",

cabello:"",

colorCabello:"",

ropa:"",

colores:"",

accesorios:"",

rasgos:""


},



personalidad:{


caracteristicas:"",

virtudes:"",

defectos:"",

miedos:"",

motivaciones:"",

gustos:"",

noGusta:"",

tipoHumor:"",

formaHablar:"",

frasesTipicas:""


},



voz:{


tipo:"",

tono:"",

velocidad:"",

referencia:""


},



relaciones:[],



historia:{


origen:"",

pasado:"",

objetivos:"",

secretos:""


},



evolucion:[],



produccion:{


estado:"Activo",

modeloVisual:"",

vozAsignada:""


},



fechaCreacion:

new Date().toLocaleString()



};




capturarDatosFormulario(personaje);





if(

personaje.identidad.nombre.trim()===""

){


alert(

"Escribe un nombre para el personaje"

);


return;

}






const existe =

crearBasePersonajes()

.some(

p =>

p.identidad.nombre.toLowerCase()

===

personaje.identidad.nombre.toLowerCase()

);



if(existe){


alert(

"Ya existe un personaje con ese nombre"

);


return;

}




crearBasePersonajes()

.push(personaje);




guardarDatos();




renderBibliotecaPersonajes();




limpiarFormularioPersonaje();




}





/*
========================================

ACTUALIZAR PERSONAJE

========================================
*/


function actualizarPersonaje(){


const personaje =

crearBasePersonajes()

.find(

p=>p.id===personajeEditando

);




if(!personaje){


alert(

"No existe el personaje"

);


return;

}





capturarDatosFormulario(personaje);




guardarDatos();




renderBibliotecaPersonajes();




verPreviewPersonaje(personaje.id);




limpiarFormularioPersonaje();




personajeEditando=null;





const boton =

document.getElementById(

"btnGuardarPersonaje"

);




if(boton){


boton.innerHTML =

"💾 Guardar Personaje";


}





}

/*
========================================

EDITAR PERSONAJE

========================================
*/


function editarPersonaje(id){



const personaje =

crearBasePersonajes()

.find(

p=>p.id===id

);



if(!personaje){

return;

}





personajeEditando = id;




cargarFormularioPersonaje(personaje);




verPreviewPersonaje(id);




const boton =

document.getElementById(

"btnGuardarPersonaje"

);




if(boton){


boton.innerHTML =

"💾 Actualizar Personaje";


}





window.scrollTo({

top:0,

behavior:"smooth"

});



}









/*
========================================

ELIMINAR PERSONAJE

========================================
*/


function eliminarPersonaje(id){



const confirmar =

confirm(

"¿Eliminar este personaje?"

);



if(!confirmar){

return;

}





const personajes =

crearBasePersonajes();




const indice =

personajes.findIndex(

p=>p.id===id

);




if(indice!==-1){



personajes.splice(

indice,

1

);




guardarDatos();




renderBibliotecaPersonajes();




limpiarFormularioPersonaje();




personajeEditando=null;




const preview =

document.getElementById(

"previewPersonaje"

);



if(preview){


preview.innerHTML = `


<p>

Ningún personaje seleccionado.

</p>


`;



}




}



}









/*
========================================

VISTA PREVIA PROFESIONAL

========================================
*/


function verPreviewPersonaje(id){



const personaje =

crearBasePersonajes()

.find(

p=>p.id===id

);




if(!personaje){

return;

}




const preview =

document.getElementById(

"previewPersonaje"

);




if(!preview){

return;

}




const imagen =

personaje.visual?.imagen ||

"🎭";




const color =

personaje.visual?.color ||

"#e67e22";




const estado =

personaje.produccion?.estado ||

"Activo";






preview.innerHTML = `



<div

class="previewTarjeta"

style="border-top:10px solid ${color}"

>




<div class="previewImagen">


${

imagen.startsWith("http")

?

`

<img src="${imagen}">

`

:

imagen

}


</div>





<h2>

${personaje.identidad.nombre}

</h2>




<p>

<strong>

Tipo:

</strong>

<br>

${personaje.identidad.tipo || "Sin definir"}

</p>





<p>

<strong>

Rol:

</strong>

<br>

${personaje.identidad.rol || "Sin definir"}

</p>





<p>

<strong>

Estado:

</strong>

<br>

🟢 ${estado}

</p>





<hr>





<h3>

🎨 Apariencia

</h3>




<p>

${

personaje.apariencia.estiloVisual ||

"Sin definir"

}

</p>





<p>

Ropa:

${

personaje.apariencia.ropa ||

"Sin definir"

}

</p>





<hr>





<h3>

😂 Personalidad

</h3>





<p>

${

personaje.personalidad.caracteristicas ||

"Sin definir"

}

</p>





<p>

Humor:

${

personaje.personalidad.tipoHumor ||

"Sin definir"

}

</p>





<p>

Forma de hablar:

${

personaje.personalidad.formaHablar ||

"Sin definir"

}

</p>





<hr>





<h3>

🎙 Voz

</h3>





<p>

${

personaje.voz.tipo ||

"Pendiente"

}

</p>





</div>



`;



}









/*
========================================

PREPARAR DATOS VISUALES

========================================
*/


function prepararDatosVisualesPersonajes(){



const personajes =

crearBasePersonajes();




personajes.forEach(personaje=>{





if(!personaje.visual){



personaje.visual={


imagen:"",

color:"#e67e22"


};



}





if(!personaje.produccion){



personaje.produccion={


estado:"Activo",

modeloVisual:"",

vozAsignada:""


};



}





});





guardarDatos();





}









/*
========================================

GENERAR ID

========================================
*/


function generarIDPersonaje(){



return (


Date.now()

.toString(36)



+

Math.random()

.toString(36)

.substring(2,8)



);



}







/*
========================================

CAPTURAR DATOS DEL FORMULARIO

========================================
*/


function capturarDatosFormulario(personaje){



personaje.identidad.nombre =

document.getElementById(
"nombrePersonaje"
).value;



personaje.identidad.tipo =

document.getElementById(
"tipoPersonaje"
).value;



personaje.identidad.rol =

document.getElementById(
"rolPersonaje"
).value;



personaje.identidad.descripcion =

document.getElementById(
"descripcionPersonaje"
).value;



personaje.apariencia.cabello =

document.getElementById(
"cabelloPersonaje"
).value;



personaje.apariencia.colorCabello =

document.getElementById(
"colorCabelloPersonaje"
).value;



personaje.apariencia.ropa =

document.getElementById(
"ropaPersonaje"
).value;



personaje.apariencia.accesorios =

document.getElementById(
"accesoriosPersonaje"
).value;



personaje.personalidad.caracteristicas =

document.getElementById(
"caracteristicasPersonaje"
).value;



personaje.personalidad.formaHablar =

document.getElementById(
"formaHablarPersonaje"
).value;



personaje.personalidad.gustos =

document.getElementById(
"gustosPersonaje"
).value;



personaje.personalidad.defectos =

document.getElementById(
"defectosPersonaje"
).value;



if(document.getElementById("tipoHumorPersonaje")){


personaje.personalidad.tipoHumor =

document.getElementById(
"tipoHumorPersonaje"
).value;


}



if(document.getElementById("frasesPersonaje")){


personaje.personalidad.frasesTipicas =

document.getElementById(
"frasesPersonaje"
).value;


}



}

/*
========================================

LISTAR PERSONAJES

========================================
*/


function listarPersonajes(){


console.log(

crearBasePersonajes()

);



}
