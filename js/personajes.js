/*
========================================

LONGANIZA STUDIO

Módulo:
Personajes

Versión:
2.0.0

Entrega:
013-A

Estado:
SISTEMA PROFESIONAL DE PERSONAJES

========================================
*/


console.log(
"🎭 Módulo Personajes Profesional 2.0 cargado"
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





identidad:{


    nombre:"",

    tipo:"",

    rol:"",

    importancia:"",

    edad:"",

    descripcion:""


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







alert(

"Personaje profesional creado correctamente"

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

p =>

p.id === personajeEditando

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





/*
APARIENCIA
*/


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





/*
PERSONALIDAD
*/


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
LISTAR PERSONAJES
========================================
*/


function listarPersonajes(){


console.log(

crearBasePersonajes()

);


}
