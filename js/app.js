/*
========================================

LONGANIZA STUDIO

Archivo:
app.js

Versión:
1.2.0

Entrega:
008-C

Estado:
CONTROL PRINCIPAL
NAVEGACIÓN MODULAR PROFESIONAL

========================================
*/



/*
========================================
INICIAR APLICACIÓN
========================================
*/


function iniciarAplicacion(){


console.log(
"🌭 Longaniza Studio iniciado"
);



console.log(

"Sistema actual:",

window.LonganizaStudio.sistema

);



configurarMenu();



}



/*
========================================
CONFIGURAR MENU
========================================
*/


function configurarMenu(){



/*
=========================
PROYECTOS
=========================
*/


const btnProyectos =

document.getElementById(
"btnProyectos"
);



if(btnProyectos){


btnProyectos.onclick = function(){


renderBibliotecaProyectos();


};


}



/*
=========================
PERSONAJES
=========================
*/


const btnPersonajes =

document.getElementById(
"btnPersonajes"
);



if(btnPersonajes){


btnPersonajes.onclick = function(){


mostrarModuloPersonajes();


};


}



/*
=========================
CONFIGURACION
=========================
*/


const btnConfiguracion =

document.getElementById(
"btnConfiguracion"
);



if(btnConfiguracion){


btnConfiguracion.onclick = function(){


mostrarConfiguracion();


};


}



/*
=========================
HISTORIAS
=========================
*/


const btnHistorias =

document.getElementById(
"btnHistorias"
);



if(btnHistorias){


btnHistorias.onclick = function(){


console.log(
"Módulo Historias pendiente"
);


};


}



/*
=========================
ESCENARIOS
=========================
*/


const btnEscenarios =

document.getElementById(
"btnEscenarios"
);



if(btnEscenarios){


btnEscenarios.onclick = function(){


console.log(
"Módulo Escenarios pendiente"
);


};


}



/*
=========================
EPISODIOS
=========================
*/


const btnEpisodios =

document.getElementById(
"btnEpisodios"
);



if(btnEpisodios){


btnEpisodios.onclick = function(){


console.log(
"Módulo Episodios pendiente"
);


};


}



console.log(
"Menú configurado correctamente"
);



}



/*
========================================
EVENTO INICIAL
========================================
*/


document.addEventListener(

"DOMContentLoaded",

iniciarAplicacion

);
