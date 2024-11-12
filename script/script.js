"use strict";
// recuperiamo elementi da html
const startButton = document.getElementById("start");
const checkButton = document.getElementById("check");
const addButton = document.getElementById("add");
const timerSection = document.getElementById("timer");
const numberSection = document.getElementById("numbers");
const guessSection = document.getElementById("guess")
const inputSection = document.getElementById("input");
const resultSection = document.getElementById("resultSection");
const numContainer = document.getElementById("numCont");
const timerDiv = document.getElementById("time");
// costanti js
let numCounter = 5;
let seconds = 29;
const numbersArray = [];
const guessArray = [];
let rightGuess = 0;

addButton.addEventListener('click', function(){
    numCounter += 1
    return numCounter;
})

startButton.addEventListener('click', function(){
    setTimeout(function (){
            guessSection.classList.remove("d-none");
            numberSection.classList.add("d-none");
            for(let i = 0 ; i < numCounter ; i++){
                let inputGuess = document.createElement("input");
                let typeInput = document.createAttribute("type");
                inputGuess.getAttribute(typeInput);
                inputGuess.classList.add("inputGuess")
                inputGuess.id = i;
                inputGuess.type = "number";
                inputGuess.name = "numero"
                inputSection.appendChild(inputGuess);
            }
        }, 31000)
        setInterval(function(){
            if(seconds >= 0){
                timerDiv.innerHTML = seconds--;        
            }else{
                timerDiv.classList.add("d-none")
            }
            if(seconds <= 2){
                timerDiv.classList.add("text-danger");
            }
        }, 1000);
        numContainer.innerHTML = "";
        for(let i = 0; i < numCounter ; i++){
            const number = document.createElement("div");
            number.innerHTML = randomize(1, 100);
            numContainer.appendChild(number);
            number.classList.add("m-4", "fw-bold", "fs-4")
            numbersArray.push(number.innerHTML);
        }
})

    // DOPO 30 SECONDI
checkButton.addEventListener('click', function(){
    for(let i = 1 ; i < numCounter ; i++){
        guessArray.push(inputGuess.value[i])
        if(numbersArray.includes(guessArray[i])){
           rightGuess += 1 
        }
    }
    const result = document.createElement("div")
    result.innerHTML = `Bravo, hai indovinato ${rightGuess} numeri su ${numCounter}!`
    result.classList.add('result', "fs-3", "fw-bold")
    resultSection.appendChild(result);
        

})