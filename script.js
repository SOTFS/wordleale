let intentos = 5;
let diccionario = ['ARBOL', 'ACTOR', 'VALOR', 'VICIO','BARCO','PILAR',''];
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
const button = document.getElementById("guess-button");
const input = document.getElementById("guess-input");
const valor = input.value;
const GRID = document.getElementById("grid");
const ROW = document.createElement('div');
ROW.className = 'row';

function intentar(){
    const INTENTO = leerIntento();
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    if (intentos!=0) {
        console.log(intentos);
        intentos -= 1;
        for (let i in palabra){
            const SPAN = document.createElement('span');
            SPAN.className = 'letter';
            if (INTENTO===palabra) {

                terminar("<H1>GANASTE!</H1>");
                
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
        
        
    }
    
    else if (intentos==0) {
        
    

        terminar("<H1>PERDISTE!</H1>");


    }
   

}


//probar si la funcion se define antes del event liStener//
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
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
