onsole.log('test');

/*
te responda
2 una respuesta independiente cada una
validar las palabras con las respuestas 
si pone mierda entonces agarra respuestas
primero encuentra las palabras y despues pone una respuesta
debe ser continuo
*/

/*
//=======Variables de respuesta=======//
var r_alegre=["hola", "bien gracias", "gracias", "bien", "si, gracias",
							"si","wii", "yeii", "genial", "increible",
							"wow"]

var r_triste=["me siento mal", "que mal", "que feo", "ayyy dolor", "no me digas eso",
							"ayyy", "voy a llorar", "que lastima"]

var r_amor=["yo también", "yo te quiero más", "te amo", "me gustas", "que dulce",
					 "que tierno es lo que dices"]

//======Variables de palabras=======//


var p_positiva ["hola","estas", "bien", "mejor","gusta"]

var p_negativa ["mal", "malo", "no", "peor", "lagrima",
								"llorar", "llanto", "triste"]

var p_amor ["corazon", "enamorado", "amor", "amo", "quiero",
					 "adoro", "lindo", "linda", "beso","abrazo"]
*/

/*
var inicio = prompt ("Hola!!! me llamo bot latam dime hola y platicamos :D")
var hola = "hola"

if (inicio == hola){
	prompt("¿cómo te sientes hoy?")
}
*/

/*
//Ahora una respuesta aleatoria
//Definir que tan aleatorio para 

aleatoria=parseInt(Math.random()*21);
console.log(aleatoria);

*/
//saluda
//responde
//libreria sentimientos
//respuesta random
//respeusta de distintas librerias



var tex="Dime algo y te contesto"
var texto2=["hola", "gracias", "muchas gracias", "bien", "si, gracias",
				"si","wii", "yeii", "genial", "increible",
				"wow"]

function aleatorio(){
	aleatoria=parseInt(Math.random()*11);
console.log(texto2[aleatoria]);
}


pregunta(tex,texto2);
function pregunta(tex,texto2){
	respuesta = prompt(tex);
	console.log(respuesta);
	if (respuesta =="adios"){
				} else {			
 				pregunta(aleatorio());

 		}	
}







