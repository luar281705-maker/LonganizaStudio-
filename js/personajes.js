/*
========================================

LONGANIZA STUDIO

Módulo:
Personajes

Versión:
1.0.0

Entrega:
012-A

Estado:
MIGRACIÓN A ARQUITECTURA PROFESIONAL

========================================
*/


console.log(
    "Módulo Personajes Profesional cargado"
);



/*
========================================
ACCESO AL SISTEMA CENTRAL
========================================
*/


function obtenerSistema(){

    return window.LonganizaStudio.sistema;

}



/*
========================================
BASE DE DATOS DE PERSONAJES
========================================
*/


function crearBasePersonajes(){

    const sistema =
    obtenerSistema();



    if(!sistema.proyectoActivo){

        return [];

    }



    if(!sistema.proyectoActivo.personajes){

        sistema.proyectoActivo.personajes=[];

    }



    return sistema.proyectoActivo.personajes;

}



/*
========================================
MOSTRAR MÓDULO PERSONAJES
========================================
*/


function mostrarModuloPersonajes(){


const contenido =
document.getElementById("contenido");



if(!contenido)
return;



contenido.innerHTML = `


<!-- ==========================
     BIBLIOTECA
=========================== -->


${renderBibliotecaPersonajes()}



<!-- ==========================
     EDITOR
=========================== -->


<div class="editor-personaje">

    <div id="editorPersonaje">

    </div>

</div>



<!-- ==========================
     VISTA PREVIA
=========================== -->


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

}
else{

    crearPersonaje();

}


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

p => p.id === personajeEditando

);



if(!personaje){

alert(
"No se encontró el personaje"
);

return;

}



cargarDatosFormulario(personaje);



guardarDatos();



renderBibliotecaPersonajes();



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



alert(
"Personaje actualizado correctamente"
);



}





/*
========================================
CARGAR DATOS DEL FORMULARIO
========================================
*/


function cargarDatosFormulario(personaje){



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



personaje.apariencia =
personaje.apariencia || {};



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



personaje.personalidad =
personaje.personalidad || {};



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
CREAR PERSONAJE
========================================
*/


function crearPersonaje(){


const sistema =
obtenerSistema();



if(!sistema.proyectoActivo){


alert(
"Primero abre un proyecto"
);


return;


}



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



apariencia:{},



personalidad:{},



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



cargarDatosFormulario(personaje);



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



personajeEditando=null;



alert(
"Personaje creado correctamente"
);



}



/*
========================================
GENERADOR DE ID
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
LISTAR PERSONAJES
========================================
*/


function listarPersonajes(){


console.log(

crearBasePersonajes()

);


}
