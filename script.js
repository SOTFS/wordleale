let intentos = 5;

const API = "https://random-word-api.herokuapp.com/word?length=5&lang=es";
let respuesta ;
let palabra;

const button = document.getElementById("guess-button");
const input = document.getElementById("guess-input");
const valor = input.value;
const GRID = document.getElementById("grid");
const ROW = document.createElement('div');
const TITULO = document.getElementById("intento");
ROW.className = 'row';


window.addEventListener('load', iniciar());
function iniciar() {

    fetch(API).then((response) => {


        response.json().then((body) => {
            respuesta = body[0].toUpperCase();
        });

    }).catch((error) => {
        console.log(error);
    });
    
}


function intentar(){
    palabra = respuesta;
    console.log(palabra);
    const INTENTO = leerIntento();
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    
    
    ROW.className = 'row';
    console.log(intentos);
    
        
        
        console.log(intentos);
        
        for (let i in palabra){
            const SPAN = document.createElement('span');
            SPAN.className = 'letter';
            if (INTENTO===palabra) {

                terminar("<H1>Adivinaste!</H1>");
                
            }
            if (INTENTO[i]===palabra[i]){ //VERDE
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = 'green';

            } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = 'yellow';
            } else {      //GRIS
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = 'grey';
            }

            ROW.appendChild(SPAN);
        }
        GRID.appendChild(ROW);
        
        intentos -= 1;
        TITULO.innerHTML = "Intento: "+intentos;
        if (intentos == 0) {
            terminar("<h1 style='color: WHITE'>PERDISTE. La palabra correcta es:"+palabra+"</h1>");
        }
    
    
   
    
}

button.addEventListener("click", intentar);

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}
for (let i in palabra){
	console.log(palabra[i]);
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML = mensaje;
}

