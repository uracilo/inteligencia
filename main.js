console.log('test');

/*
//Variables de respuestas

var respuesta_alegre = respuesta_alegre
var respuesta_trsite = respuesta_trsite

//Variables preguntas

var p_negativa = p_negativa
var p_positiva = p_positiva

*/
var inicio = prompt ("Hola!!! me llamo bot latam")


pepe=juego_compu[numero_random];
 console.log("pepe:"+pepe)

// situacion numero 1
if (tomas_elseñor == pepe) {

 console.log("empate")
}

// situacion numero 2 perdemos

if ((tomas_elseñor == "piedra" && pepe == "papel") || (tomas_elseñor == "tijeras" && pepe == "piedra") || (tomas_elseñor == "papel" && pepe== "tijeras") ) {
 console.log("pepe te gano")
}

// situacion numero 3 ganamos


if ((tomas_elseñor == "papel" && pepe == "piedra") || (tomas_elseñor == "piedra" && pepe == "tijeras") || (tomas_elseñor == "tijeras" && pepe== "papel") ) {
 console.log("pepe perdio")
}