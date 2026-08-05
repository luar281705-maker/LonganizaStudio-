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
FORMULARIO PERSONAJE
========================================
*/


function mostrarFormularioPersonaje(){


const formulario =

document.getElementById(
"formularioPersonaje"
);



if(!formulario)
return;



formulario.innerHTML = `


<h3>
Nuevo Personaje
</h3>


<input 
id="nombrePersonaje"
placeholder="Nombre del personaje">


<input 
id="tipoPersonaje"
placeholder="Tipo (humano, animal, avatar...)">


<input 
id="rolPersonaje"
placeholder="Rol en la historia">


<textarea
id="descripcionPersonaje"
placeholder="Descripción del personaje">
</textarea>



<h4>
Apariencia
</h4>


<input 
id="edadPersonaje"
placeholder="Edad">


<input 
id="cabelloPersonaje"
placeholder="Cabello">


<input 
id="colorCabelloPersonaje"
placeholder="Color de cabello">


<input 
id="lentesPersonaje"
placeholder="Lentes">


<input 
id="ropaPersonaje"
placeholder="Ropa">


<input 
id="accesoriosPersonaje"
placeholder="Accesorios">


<h4>
Personalidad
</h4>


<textarea
id="caracteristicasPersonaje"
placeholder="Características">
</textarea>


<textarea
id="formaHablarPersonaje"
placeholder="Forma de hablar">
</textarea>


<textarea
id="gustosPersonaje"
placeholder="Gustos">
</textarea>


<textarea
id="defectosPersonaje"
placeholder="Defectos">
</textarea>



<button onclick="crearPersonaje()">

💾 Guardar Personaje

</button>


`;



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


alert(
"Personaje creado correctamente"
);



limpiarFormularioPersonaje();


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



<button>
Editar
</button>


</div>


`;


}

);


}

/*
========================================
LIMPIAR FORMULARIO PERSONAJE
========================================
*/


function limpiarFormularioPersonaje(){


const formulario =

document.getElementById(
"formularioPersonaje"
);



if(!formulario)
return;



const campos =

formulario.querySelectorAll(
"input, textarea"
);



campos.forEach(

campo=>{

campo.value="";

}

);



}
