/*
========================================
LONGANIZA STUDIO
Versión 0.1.0

Módulo:
Proyectos - Temporadas - Episodios

========================================
*/


console.log(
    "Longaniza Studio iniciado"
);





/*
========================================
OBJETO PRINCIPAL DEL SISTEMA
========================================
*/


const sistema = {


    nombre:
    "Longaniza Studio",


    version:
    "0.1.0",


    proyectos:
    [],


    proyectoActivo:
    null


};







/*
========================================
ALMACENAMIENTO LOCAL
========================================
*/


function cargarDatos(){


    const datos =

    localStorage.getItem(
        "longaniza_proyectos"
    );



    if(datos){


        sistema.proyectos =

        JSON.parse(datos);


    }


}





function guardarDatos(){


    localStorage.setItem(

        "longaniza_proyectos",

        JSON.stringify(
            sistema.proyectos
        )

    );


}








/*
========================================
PLANTILLAS DE PANTALLA
========================================
*/


const modulos = {



inicio:`

<h2>
🎬 Bienvenido a Longaniza Studio
</h2>


<p>
Centro de producción de series animadas.
</p>


`,






proyectos:`

<h2>
📁 Gestión de Proyectos
</h2>



<input

id="nombreProyecto"

placeholder="Nombre de la serie"

>



<select id="tipoProyecto">


<option>
Serie Animada
</option>


<option>
Cortometraje
</option>


<option>
Proyecto Comercial
</option>


</select>



<button onclick="crearProyecto()">

Crear Proyecto

</button>



<hr>


<div id="listaProyectos">

</div>


`,





detalle:`

<h2>
📺 Proyecto
</h2>



<div id="detalleProyecto">

</div>


`



};








/*
========================================
CREAR PROYECTO
========================================
*/


function crearProyecto(){



const nombre =

document.getElementById(
"nombreProyecto"
).value;




const tipo =

document.getElementById(
"tipoProyecto"
).value;




if(nombre.trim()===""){


alert(
"Escribe un nombre para el proyecto"
);


return;


}





const proyecto = {


id:
Date.now(),


nombre:


nombre,


tipo:


tipo,


estado:

"Desarrollo",


temporadas:

[],


personajes:

[],


escenarios:

[],


episodios:

[]


};





sistema.proyectos.push(
proyecto
);



guardarDatos();



mostrarProyectos();



}









/*
========================================
LISTAR PROYECTOS
========================================
*/


function mostrarProyectos(){



const lista =

document.getElementById(
"listaProyectos"
);



if(!lista)
return;




lista.innerHTML="";





sistema.proyectos.forEach(

proyecto=>{



lista.innerHTML += `


<div class="tarjeta">


<h3>

${proyecto.nombre}

</h3>


<p>

Tipo:
${proyecto.tipo}

</p>


<p>

Estado:
${proyecto.estado}

</p>



<button onclick="abrirProyecto(${proyecto.id})">

Abrir

</button>



</div>


`;



}


);



}









/*
========================================
ABRIR PROYECTO
========================================
*/


function abrirProyecto(id){



sistema.proyectoActivo =


sistema.proyectos.find(

p => p.id === id

);



cambiarModulo(
"detalle"
);



mostrarDetalle();


}









/*
========================================
DETALLE DEL PROYECTO
========================================
*/


function mostrarDetalle(){



const contenedor =

document.getElementById(
"detalleProyecto"
);




const proyecto =

sistema.proyectoActivo;




contenedor.innerHTML = `



<h3>

${proyecto.nombre}

</h3>



<p>

Tipo:
${proyecto.tipo}

</p>



<p>

Estado:
${proyecto.estado}

</p>



<button onclick="crearTemporada()">

Nueva Temporada

</button>



<hr>


<div id="temporadas">

</div>


`;



mostrarTemporadas();



}









/*
========================================
TEMPORADAS
========================================
*/


function crearTemporada(){



const proyecto =

sistema.proyectoActivo;




const numero =

proyecto.temporadas.length + 1;




proyecto.temporadas.push({


id:
Date.now(),


nombre:

"Temporada " + numero,


episodios:

[]


});




guardarDatos();



mostrarDetalle();



}









function mostrarTemporadas(){



const contenedor =

document.getElementById(
"temporadas"
);




if(!contenedor)
return;




contenedor.innerHTML="";





sistema.proyectoActivo.temporadas.forEach(

temporada=>{



contenedor.innerHTML += `


<div class="tarjeta">


<h4>

${temporada.nombre}

</h4>



<button onclick="crearEpisodio(${temporada.id})">

Nuevo Episodio

</button>



<div>

${

temporada.episodios.map(

episodio =>

"<p>🎞 "+episodio.nombre+"</p>"

).join("")

}


</div>



</div>


`;



}



);



}









/*
========================================
EPISODIOS
========================================
*/


function crearEpisodio(idTemporada){



const temporada =


sistema.proyectoActivo.temporadas.find(

t=>t.id===idTemporada

);




const numero =

temporada.episodios.length + 1;




temporada.episodios.push({


id:
Date.now(),


nombre:

"Episodio " + numero


});




guardarDatos();



mostrarDetalle();



}









/*
========================================
CAMBIO DE MÓDULO
========================================
*/


function cambiarModulo(nombre){



const contenido =

document.querySelector(
".contenido"
);



contenido.innerHTML =

modulos[nombre];




if(nombre==="proyectos"){


mostrarProyectos();


}



}









/*
========================================
NAVEGACIÓN
========================================
*/


function iniciarNavegacion(){



const botones =

document.querySelectorAll(
".menu button"
);




botones[0].onclick =

()=>cambiarModulo(
"proyectos"
);



}









/*
========================================
ARRANQUE DEL SISTEMA
========================================
*/


window.onload = function(){



cargarDatos();



iniciarNavegacion();



console.log(

"Longaniza Studio listo"

);



};
