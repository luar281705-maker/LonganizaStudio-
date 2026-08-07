/*
========================================

LONGANIZA STUDIO

Módulo:
Personajes

Versión:
1.0.1

Entrega:
012-B

Estado:
BIBLIOTECA CREATIVA INDEPENDIENTE

========================================
*/


console.log(
"Módulo Personajes Independiente cargado"
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


const sistema =
obtenerSistemaPersonajes();



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
document.getElementById("contenido");



if(!contenido)
return;



contenido.innerHTML = `


<div class="modulo-personajes">


<h1>
🎭 Biblioteca de Personajes
</h1>


${renderBibliotecaPersonajes()}



<div class="editor-personaje">

<div id="editorPersonaje">

</div>

</div>



<div class="preview-personaje">


<h2>
👁 Vista previa
</h2>


<div id="previewPersonaje">

<p>
Ningún personaje seleccionado.
</p>


</div>


</div>


</div>


`;



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


}else{


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



nombre:
document.getElementById(
"nombrePersonaje"
).value,



tipo:
document.getElementById(
"tipoPersonaje"
).value,



rol:
document.getElementById(
"rolPersonaje"
).value,



descripcion:
document.getElementById(
"descripcionPersonaje"
).value,



apariencia:{


edad:"",

cabello:"",

colorCabello:"",

lentes:"",

ropa:"",

accesorios:""


},



personalidad:{


caracteristicas:"",

formaHablar:"",

gustos:"",

defectos:""


},



voz:{


tipo:"",

tono:"",

formaHablar:""


},



relaciones:[],



evolucion:[],



fechaCreacion:
new Date().toLocaleString()


};



capturarDatosFormulario(personaje);



if(personaje.nombre.trim()===""){


alert(
"Escribe un nombre para el personaje"
);


return;


}



const existe =

crearBasePersonajes()

.some(

p =>

p.nombre.toLowerCase()
===
personaje.nombre.toLowerCase()

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



alert(
"Personaje creado correctamente"
);



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



limpiarFormularioPersonaje();



personajeEditando=null;



alert(
"Personaje actualizado"
);



}



/*
========================================
CAPTURAR FORMULARIO
========================================
*/


function capturarDatosFormulario(personaje){


personaje.nombre =
document.getElementById(
"nombrePersonaje"
).value;


personaje.tipo =
document.getElementById(
"tipoPersonaje"
).value;


personaje.rol =
document.getElementById(
"rolPersonaje"
).value;


personaje.descripcion =
document.getElementById(
"descripcionPersonaje"
).value;



personaje.apariencia.edad =
document.getElementById(
"edadPersonaje"
).value;



personaje.apariencia.cabello =
document.getElementById(
"cabelloPersonaje"
).value;



personaje.apariencia.colorCabello =
document.getElementById(
"colorCabelloPersonaje"
).value;



personaje.apariencia.lentes =
document.getElementById(
"lentesPersonaje"
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
