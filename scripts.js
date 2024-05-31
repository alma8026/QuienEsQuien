/**
 * Funcionalidades:
 * 
 * Facil: 3 minutos sin restar tiempo. ✓
 * Normal: 3 minutos restando 20 seg por pregunta. ✓
 * Dificil: 2 minutos restando 20 seg tmb. ✓
 * 
 * Botones con las preguntas, al hacer clic se queda en rojo o en verde dependiendo de si es true o false. ✓
 * 
 * En cada persona saldrian dos botones de respuesta o descartar. ✓
 * 
 * Cuando se decarte un persona una X encima. ✓
 * 
 * Temporizador de 3 min: con cada pregunta se resta 20 seg. ✓
 * 
 * Animacion de ganar o perder.
 * Seleccion de persona random. ✓
 * 
 * Mejorar estilos.
 * Curiosidad al acertar la persona.
 * poner menu de inicio con jugar o no.
 * 
 */

// scripts.js
const characters = [
    { name: 'Adan', img: 'QEQ_imgs/Adan-QuienEsQuien.jpeg', moreno: false, barba: false, gafas: false, mayor25: false, pelo_largo: false, hombre: true , pelo_ondulado: false, pelo_suelto: true, pelo_rubio: false, camiseta_clara: false, ojos_claros: false},
    { name: 'Alejandro', img: 'QEQ_imgs/Alejandro-QuienEsQuien.jpeg', moreno: false, barba: false, gafas: false, mayor25: false, pelo_largo: false, hombre: true , pelo_ondulado: false, pelo_suelto: true, pelo_rubio: false, camiseta_clara: true, ojos_claros: true},
    { name: 'Cesar', img: 'QEQ_imgs/Cesar-QuienEsQuien.jpg', moreno: true, barba: true, gafas: false, mayor25: true, pelo_largo: false, hombre: true , pelo_ondulado: false, pelo_suelto: true, pelo_rubio: false, camiseta_clara: false, ojos_claros: false},
    { name: 'Cristian', img: 'QEQ_imgs/Cristian-QuienEsQuien.jpeg', moreno: true, barba: false, gafas: false, mayor25: true, pelo_largo: false, hombre: true , pelo_ondulado: false, pelo_suelto: true, pelo_rubio: false, camiseta_clara: false, ojos_claros: false},
    { name: 'Desiree', img: 'QEQ_imgs/Desiree-QuienEsQuien.jpeg', moreno: false, barba: false, gafas: true, mayor25: true, pelo_largo: true, hombre: false , pelo_ondulado: false, pelo_suelto: true, pelo_rubio: true, camiseta_clara: true, ojos_claros: true},
    { name: 'Erik', img: 'QEQ_imgs/Erik-QuienEsQuien.jpeg', moreno: false, barba: true, gafas: false, mayor25: true, pelo_largo: false, hombre: true , pelo_ondulado: false, pelo_suelto: true, pelo_rubio: false, camiseta_clara: true, ojos_claros: false},
    { name: 'Fran', img: 'QEQ_imgs/Fran-QuienEsQuien.jpeg', moreno: false, barba: true, gafas: false, mayor25: false, pelo_largo: false, hombre: true , pelo_ondulado: false, pelo_suelto: true, pelo_rubio: false, camiseta_clara: true, ojos_claros: false},
    { name: 'Gerard', img: 'QEQ_imgs/Gerard-QuienEsQuien.jpeg', moreno: false , barba: false , gafas: false , mayor25:false , pelo_largo: false , hombre: true , pelo_ondulado: true , pelo_suelto: true , pelo_rubio: false , camiseta_clara:true , ojos_claros:false  },
    { name: 'Glenn', img: 'QEQ_imgs/Glenn-QuienEsQuien.jpeg', moreno: true , barba: false , gafas: false , mayor25: false, pelo_largo: false, hombre: true ,  pelo_ondulado:false , pelo_suelto:true , pelo_rubio: false, camiseta_clara:false , ojos_claros:false  },
    { name: 'Irene', img: 'QEQ_imgs/Irene-QuienEsQuien.jpeg', moreno:false , barba: false , gafas:true , mayor25: true , pelo_largo: true, hombre: false,  pelo_ondulado:true , pelo_suelto:true , pelo_rubio:false , camiseta_clara:true , ojos_claros:true  },
    { name: 'Ivan', img: 'QEQ_imgs/Ivan-QuienEsQuien.jpeg', moreno: false , barba: true , gafas: true , mayor25:true , pelo_largo: false , hombre: true , pelo_ondulado: false , pelo_suelto: true , pelo_rubio: false , camiseta_clara:true , ojos_claros:false  },
    { name: 'Josep', img: 'QEQ_imgs/Josep-QuienEsQuien.jpeg', moreno: false , barba: false , gafas: true , mayor25:false , pelo_largo: false , hombre: true , pelo_ondulado: false , pelo_suelto: true , pelo_rubio: true , camiseta_clara:true , ojos_claros:true  },
    { name: 'Josias', img: 'QEQ_imgs/Josias-QuienEsQuien.jpeg',moreno: false , barba: true , gafas: false , mayor25:true , pelo_largo: false , hombre: true , pelo_ondulado: false , pelo_suelto: true , pelo_rubio: false , camiseta_clara:false , ojos_claros:false  },
    { name: 'Jota', img: 'QEQ_imgs/Jota-QuienEsQuien.jpeg', moreno: false, barba: true , gafas: false, mayor25: true, pelo_largo: true, hombre: true , pelo_ondulado: true, pelo_suelto: false, pelo_rubio: false, camiseta_clara: true, ojos_claros: false },
    { name: 'Marina', img: 'QEQ_imgs/Marina-QuienEsQuien.jpeg', moreno: false, barba: false , gafas: true, mayor25: true, pelo_largo: true, hombre: false , pelo_ondulado: false, pelo_suelto: false, pelo_rubio: false, camiseta_clara: true, ojos_claros: false },
    { name: 'Nando', img: 'QEQ_imgs/Nando-QuienEsQuien.jpeg', moreno: false, barba: true , gafas: false, mayor25: true, pelo_largo: false, hombre: true , pelo_ondulado: false, pelo_suelto: false, pelo_rubio: false, camiseta_clara: true, ojos_claros: false },
    { name: 'Sergio', img: 'QEQ_imgs/Sergio-QuienEsQuien.jpeg', moreno: false, barba: true , gafas: true, mayor25: true, pelo_largo: true, hombre: true , pelo_ondulado: true, pelo_suelto: false, pelo_rubio: false, camiseta_clara: false, ojos_claros: false },
    { name: 'Solomon', img: 'QEQ_imgs/Solomon-QuienEsQuien.jpeg', moreno: false, barba: true , gafas: false, mayor25: false, pelo_largo: false, hombre: true , pelo_ondulado: false, pelo_suelto: true, pelo_rubio: false, camiseta_clara: true, ojos_claros: true },
    { name: 'Yago', img: 'QEQ_imgs/Yago-QuienEsQuien.jpeg', moreno: false, barba: true , gafas: true, mayor25: false, pelo_largo: false, hombre: true , pelo_ondulado: false, pelo_suelto: true, pelo_rubio: false, camiseta_clara: true, ojos_claros: true },
];

let difficulty;
let selectedPerson;
let secondsLeft;
let randomNumber;

function showDifficulties() {
    document.querySelector('#inicio').style.display = 'none';
    document.querySelector('#dificultades').style.display = 'flex';
}

// Selección de dificultad (se guarda en la variable --> difficulty)
function selectDifficulty(selectedDifficulty) {
    difficulty = selectedDifficulty;
    generateBoard();
    startGame();
}

// Para generar la tabla con cada persona
function generateBoard() {
    const board = document.getElementById('board');
    characters.forEach((character, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-index', index);
        card.innerHTML = `
                    <p>${character.name}</p>
                    <img src="${character.img}" alt="${character.name}">
                    <div class="card-buttons">
                        <button onclick="handleCheck(${index})" class="checkBtn" style="background-color: green; margin: 5px;">&check;</button>
                        <button onclick="handleReject(${index})" class="rejectBtn" style="background-color: red; margin: 5px;">&times;</button>
                    </div>
                    <div id="${character.name}-lava" class="card-lava" style="display: none;"></div> <!-- Agrega el contenedor para la lava -->
                    <div id="${character.name}-roca" class="card-roca" style="display: none;"></div> <!-- Agrega el contenedor para la roca -->
                `;
        board.appendChild(card);
    });
}

function handleCheck(index) {
    // Para cuando haces check a alguien
    const userConfirmed = confirm("¿Estás seguro de que esta es la persona?");
    if (userConfirmed) {
        if(index==randomNumber) {
            console.log('acertado');
            winScreen();
        } else {
            console.log('erroneo');
            loseScreen();
        }
    }
}

function handleReject(index) {
    // Para cuando descartas a alguien
    document.querySelector('#'+characters[index].name+"-lava").style.display = 'block';
    setTimeout(() => {
        document.querySelector('#'+characters[index].name+"-roca").style.display = 'block';
        
      }, 1600);
}

// Se muestra la tabla y empieza el contador
function startGame() {
    // Mostrar la sección de juego
    document.querySelector('#dificultades').style.display = 'none';
    document.querySelector('#game-container').style.display = 'flex';
    // Reiniciar el temporizador
    resetTimer();
}

function resetTimer() {
    const timeLimit = getTimeLimit();
    secondsLeft = timeLimit;
    updateTimerDisplay(secondsLeft);
    let timer = setInterval(() => {
        secondsLeft--;
        updateTimerDisplay(secondsLeft);
        if (secondsLeft <= 0) {
            clearInterval(timer);
            loseScreen();
        }
    }, 1000);
}

function loseScreen() {
    document.querySelector('#lose-screen').style.display = 'block';
    document.querySelector('#game-container').style.display = 'none';
    document.querySelector('#timer-container').style.display = 'none';
}

function winScreen() {
    document.querySelector('#win-screen').style.display = 'block';
    document.querySelector('#game-container').style.display = 'none';
    document.querySelector('#timer-container').style.display = 'none';
}

function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    document.getElementById('timer').textContent = `0${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function getTimeLimit() {
    switch (difficulty) {
        case 'easy':
            return 180; 
        case 'normal':
            return 180; 
        case 'hard':
            return 120;
    }
}

function minusTemp() {
        const restaTiempo = document.getElementById('restaTiempo');
        restaTiempo.style.display = 'block';
        setTimeout(() => {
            restaTiempo.style.display = 'none';
        }, 1000); // Oculta el texto después de 2 segundos
}

function askQuestion(attribute) {
    if(difficulty!='easy'){
        secondsLeft -= 10;
        minusTemp();
    }
    if(selectedPerson[attribute]){
        document.querySelector('.btn_' + attribute).style.backgroundColor = 'green';
    } else {
        document.querySelector('.btn_' + attribute).style.backgroundColor = 'red';
    }
}

function randomPerson() {
    console.log('Inspeccioname esta.')
    randomNumber = Math.floor(Math.random() * 19);
    selectedPerson = characters[randomNumber];
}

function goToCuriosity() {
    document.querySelector('#curiosity-screen').style.display = 'block';
    document.querySelector('#win-screen').style.display = 'none';
    document.querySelector('#lose-screen').style.display = 'none';
}

// Para generar la curiosidad de la persona elegida
function generateCuriosity() {
    const curiosity = document.getElementById('curiosity-screen');
    
        card.innerHTML = `<h1>Curiosidad de ${selectedPerson.name}</h1>
        <div><img src="" alt="imagen de curiosidad"></div>`;
        curiosity.appendChild(card);
}

document.addEventListener('DOMContentLoaded', randomPerson);