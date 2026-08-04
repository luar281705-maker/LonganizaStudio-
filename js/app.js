/*
========================================
LONGANIZA STUDIO
Sistema principal
Versión 0.1.0
Módulo:
Gestión de Proyectos
========================================
*/


console.log(
    "Longaniza Studio iniciado"
);


/*
========================================
BASE DEL SISTEMA
========================================
*/


const sistema = {


    nombre:
    "Longaniza Studio",


    version:
    "0.1.0",


    moduloActual:
    "inicio",


    proyectos:
    []


};


/*
========================================
BASE DE DATOS LOCAL
========================================
*/


function cargarDatos(){


    let datos =
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
MÓDULOS
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


<div class="formulario">


<input
id="nombreProyecto"
placeholder="Nombre de la serie"
/>


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


</div>


<hr>


<div id="listaProyectos">

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
MOSTRAR PROYECTOS
========================================
*/


function mostrarProyectos(){



const contenedor =

document.getElementById(
"listaProyectos"
);




if(!contenedor)
return;




contenedor.innerHTML="";





sistema.proyectos.forEach(

proyecto=>{



contenedor.innerHTML +=`


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


</div>


`;



}


);



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



sistema.moduloActual =
nombre;



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
INICIO
========================================
*/


window.onload=function(){



cargarDatos();



iniciarNavegacion();



console.log(
"Sistema preparado"
);



};
