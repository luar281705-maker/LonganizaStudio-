/*
========================================
LONGANIZA STUDIO

Módulo:
Personajes

Versión:
0.3.0

========================================
*/


console.log(
    "Módulo Personajes cargado"
);



/*
========================================
BASE DE DATOS DE PERSONAJES
========================================
*/


function crearBasePersonajes(){


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
VISTA PERSONAJES
========================================
*/


function mostrarModuloPersonajes(){


const contenido =

document.getElementById(
"contenido"
);



contenido.innerHTML = `


<h2>
🎭 Editor de Personajes
</h2>



<div id="formularioPersonaje" class="panel">

</div>



<hr>



<h3>
Biblioteca de Personajes
</h3>



<div

id="bibliotecaPersonajes"

class="biblioteca-personajes">

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
ACTUALIZAR PERSONAJE
========================================
*/


function actualizarPersonaje(){


const personaje =

crearBasePersonajes().find(

p => p.id === personajeEditando

);



if(!personaje){


alert(
"No se encontró el personaje."
);


return;


}



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




guardarDatos();


renderBibliotecaPersonajes();


limpiarFormularioPersonaje();



personajeEditando = null;



document.getElementById(
"btnGuardarPersonaje"
).innerHTML =

"💾 Guardar Personaje";



alert(
"Personaje actualizado correctamente."
);



}




/*
========================================
CREAR PERSONAJE
========================================
*/


function crearPersonaje(){



if(!sistema.proyectoActivo){


alert(
"Primero abre un proyecto"
);


return;


}



const personaje = {



id:

Date.now(),



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


edad:

document.getElementById(
"edadPersonaje"
).value,


cabello:

document.getElementById(
"cabelloPersonaje"
).value,


colorCabello:

document.getElementById(
"colorCabelloPersonaje"
).value,


lentes:

document.getElementById(
"lentesPersonaje"
).value,


ropa:

document.getElementById(
"ropaPersonaje"
).value,


accesorios:

document.getElementById(
"accesoriosPersonaje"
).value


},



personalidad:{


caracteristicas:

document.getElementById(
"caracteristicasPersonaje"
).value,


formaHablar:

document.getElementById(
"formaHablarPersonaje"
).value,


gustos:

document.getElementById(
"gustosPersonaje"
).value,


defectos:

document.getElementById(
"defectosPersonaje"
).value


},



evolucion:[]



};




if(personaje.nombre.trim()===""){


alert(
"Escribe un nombre para el personaje"
);


return;


}




const existe = crearBasePersonajes()

.some(

p =>

p.nombre.toLowerCase() === personaje.nombre.toLowerCase()

);



if(existe){


alert(
"Ya existe un personaje con ese nombre"
);


return;


}




crearBasePersonajes()

.push(

personaje

);



guardarDatos();


renderBibliotecaPersonajes();



limpiarFormularioPersonaje();



personajeEditando = null;



document.getElementById(
"btnGuardarPersonaje"
).innerHTML =

"💾 Guardar Personaje";



alert(
"Personaje creado correctamente"
);



}





/*
========================================
LISTAR PERSONAJES
========================================
*/


function listarPersonajes(){


console.log(

sistema.proyectoActivo.personajes

);



const lista =

document.getElementById(
"bibliotecaPersonajes"
);



if(!lista)

return;



lista.innerHTML="";



crearBasePersonajes()

.forEach(

personaje=>{


lista.innerHTML += `


<div class="personaje-card">


<h3>
🎭 ${personaje.nombre}
</h3>


<p>
<b>Tipo:</b>
${personaje.tipo}
</p>


<p>
<b>Rol:</b>
${personaje.rol}
</p>


<p>
${personaje.descripcion}
</p>



</div>


`;



}


);


}
