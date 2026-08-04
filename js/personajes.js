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
🎭 Personajes
</h2>


<div class="panel">


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



<button onclick="crearPersonaje()">

Crear Personaje

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



const nombre =

document.getElementById(
"nombrePersonaje"
).value;



const tipo =

document.getElementById(
"tipoPersonaje"
).value;




if(nombre.trim()===""){


alert(
"Escribe un nombre"
);


return;


}



const personaje = {


id:
Date.now(),


nombre:


nombre,


tipo:


tipo,


apariencia:{},


personalidad:{},


evolucion:[]


};





crearBasePersonajes()
.push(
personaje
);



guardarDatos();



listarPersonajes();



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
