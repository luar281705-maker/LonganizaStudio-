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




<hr>


<div id="listaPersonajes">

</div>


`;



listarPersonajes();


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




crearBasePersonajes()
.push(
personaje
);




guardarDatos();




listarPersonajes();



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



const lista =

document.getElementById(
"listaPersonajes"
);



if(!lista)
return;




lista.innerHTML="";




crearBasePersonajes()
.forEach(


personaje=>{


lista.innerHTML += `


<div class="tarjeta">


<h3>
🎭 ${personaje.nombre}
</h3>


<p>
Tipo:
${personaje.tipo}
</p>


<button>

Editar

</button>


</div>


`;


}



);



}
