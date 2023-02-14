'use strict';

const newNumber = document.querySelector('.js_number');
const btn = document.querySelector('.js_button');
const pista = document.querySelector('.js_pista');
const intentos = document.querySelector('.js_intentos');


//funcion sacar un número en la consola

function getRandomNumber () {
    const num = Math.ceil(Math.random() * 100);
    return num;
};

const numRandom = getRandomNumber();
console.log(numRandom);



//función compara número

function compareNumber() {
    const valueNewNunber = newNumber.value;

    if (valueNewNunber > 100) {
            pista.innerHTML = "El número debe estar entre 1 y 100";}
    else if (valueNewNunber < numRandom){
        pista.innerHTML = "Número demasiado bajo, prueba otra vez";}
    else if (valueNewNunber > numRandom){
        pista.innerHTML = "Número demasiado alto, prueba otra vez";}
    else if ( valueNewNunber == numRandom) {
    pista.innerHTML = "¡¡Has ganado campeona!!";}
}


//función añadir intentos


 function addAttempt(){
    
 }


//función manejadora
function handleClickBtn (event) {
    event.preventDefault()
    
    compareNumber ();

    addAttempt ();

}


//evento click cuando se introduzca un número nuevo
btn.addEventListener ('click', (handleClickBtn)); 