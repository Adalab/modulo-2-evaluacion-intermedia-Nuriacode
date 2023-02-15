'use strict';

const newNumber = document.querySelector('.js_number');
const btn = document.querySelector('.js_button');
const pista = document.querySelector('.js_pista');
const attempt = document.querySelector('.js_intentos');
let newAttempt = 0;

//funcion sacar un número en la consola

function getRandomNumber (max) {
    const num = Math.ceil(Math.random() * max);
    return num;
};

const numRandom = getRandomNumber(100);
console.log(numRandom);

//funcion mensaje

const writeMens = (mens) => {
    pista.innerHTML = mens;
}


//función compara número

function compareNumber() {
    const valueNewNunber = parseInt(newNumber.value);
    addAttempt (valueNewNunber);

    if (isNaN(valueNewNunber)){
        writeMens("Por favor, introduce un número");}
    else if ( valueNewNunber < 1 ||valueNewNunber > 100){
            writeMens( "El número debe estar entre 1 y 100");}
    else if (valueNewNunber < numRandom){
        writeMens( "Número demasiado bajo, prueba otra vez");}
    else if (valueNewNunber > numRandom){
        writeMens( "Número demasiado alto, prueba otra vez");}
    else if (valueNewNunber === numRandom) {writeMens( "¡¡Has ganado campeona!!");
    }
   
}



//función añadir intentos
 function addAttempt(){
    newAttempt ++;
    attempt.innerHTML = `Número de intentos: ${newAttempt}`;
 }


//función manejadora
function handleClickBtn (event) {
    event.preventDefault()
    compareNumber ();
}


//evento click cuando se introduzca un número nuevo
btn.addEventListener ('click', (handleClickBtn)); 