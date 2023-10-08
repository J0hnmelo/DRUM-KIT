'use strict'; //mostrar más praticas como erro

const criarDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add("letter");
    div.textContent = texto;
    div.id = texto;
    document.querySelector("#container").appendChild(div)
}

const sons = {
    'A' : 'boom.wav',
    'S' : 'clap.wav',
    'D' : 'hihat.wav',
    'F' : 'kick.wav',
    'G' : 'openhat.wav',
    'H' : 'ride.wav',
    'J' : 'snare.wav',
    'K' : 'tink.wav',
    'L' : 'tom.wav'
}
const exibir = (sons) => Object.keys(sons).forEach(criarDiv)

exibir(sons);

const tocarSom = (letter) => {
    const audio = new Audio(`./sons/${sons[letter]}`);
    audio.play();
}

const addAnimation = (letter) => document.getElementById(letter).classList.add("active");
const removeAnimation = (letter) => {
    setTimeout(() => {
        document.getElementById(letter).classList.remove("active");
    }, 500);
}
const activeDiv = (event) => {
    const letter = event.type == "click" ? event.target.id : event.key.toUpperCase();
    const letterExist = sons.hasOwnProperty(letter);
    if(letterExist){
        addAnimation(letter);
        tocarSom(letter);
        removeAnimation(letter);
    }
}
document.querySelector("#container").addEventListener("click", activeDiv);
window.addEventListener("keydown",activeDiv)