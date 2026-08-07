/*
========================================

LONGANIZA STUDIO

Módulo:
Personajes

Versión:
2.1.0

Entrega:
013-D

Estado:
SISTEMA PROFESIONAL + TARJETAS VISUALES

========================================
*/


console.log(
"🎭 Módulo Personajes Profesional 2.1 cargado"
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

BASE GLOBAL DE PERSONAJES

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

MOSTRAR MÓDULO

========================================
*/


function mostrarModuloPersonajes(){


const contenido =

document.getElementById(
"contenido"
);



if(!contenido)
return;



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


const personaje = {


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

return;

}



capturarDatosFormulario(personaje);



guardarDatos();



renderBibliotecaPersonajes();



limpiarFormularioPersonaje();



personajeEditando=null;



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



cargarFormularioPersonaje(personaje);



personajeEditando=id;



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



const lista =

crearBasePersonajes();



const posicion =

lista.findIndex(

p=>p.id===id

);



if(posicion!==-1){


lista.splice(posicion,1);



guardarDatos();



renderBibliotecaPersonajes();



}



}









/*
========================================

PREVIEW PERSONAJE

========================================
*/


function verPreviewPersonaje(id){


const personaje =

crearBasePersonajes()

.find(

p=>p.id===id

);



if(!personaje)
return;



const preview =

document.getElementById(
"previewPersonaje"
);



preview.innerHTML = `


<h2>

${personaje.identidad.nombre}

</h2>



<p>

Tipo:

${personaje.identidad.tipo}

</p>



<p>

Rol:

${personaje.identidad.rol}

</p>



<p>

Estado:

${personaje.produccion.estado}

</p>



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

CAPTURAR FORMULARIO

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

LISTAR

========================================
*/


function listarPersonajes(){


console.log(

crearBasePersonajes()

);


}
