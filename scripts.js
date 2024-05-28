/**
 * Funcionalidades:
 * 
 * Facil: 3 minutos sin restar tiempo.
 * Normal: 3 minutos restando 20 seg por pregunta.
 * Dificil: 2 minutos restando 20 seg tmb.
 * 
 * Botones con las preguntas, al hacer clic se queda en rojo o en verde dependiendo de si es true o false.
 * En cada persona saldrian dos botones de respuesta o descartar.
 * Cuando se decarte un persona una X encima.
 * Temporizador de 3 min: con cada pregunta se resta 20 seg.
 * Animacion de ganar o perder.
 * Seleccion de persona random.
 * Mejorar estilos.
 * Curiosidad al acertar la persona.
 * 
 */

// scripts.js
const characters = [
    { name: 'Adan', img: 'QEQ_imgs/Adan-QuienEsQuien.jpeg', moreno: false, barba: false, gafas: false, mayor25: false, pelo_largo: false, hombre: true, barba_larga: false, pelo_ondulado: false, pelo_suelto: true, pelo_rubio: false, camiseta_clara: false, ojos_claros: false},
    { name: 'Alejandro', img: 'QEQ_imgs/Alejandro-QuienEsQuien.jpeg', moreno: false, barba: false, gafas: false, mayor25: false, pelo_largo: false, hombre: true, barba_larga: false, pelo_ondulado: false, pelo_suelto: true, pelo_rubio: false, camiseta_clara: true, ojos_claros: true},
    { name: 'Cesar', img: 'QEQ_imgs/Cesar-QuienEsQuien.jpg', moreno: true, barba: true, gafas: false, mayor25: true, pelo_largo: false, hombre: true, barba_larga: false, pelo_ondulado: false, pelo_suelto: true, pelo_rubio: false, camiseta_clara: false, ojos_claros: false},
    { name: 'Cristian', img: 'QEQ_imgs/Cristian-QuienEsQuien.jpeg', moreno: true, barba: false, gafas: false, mayor25: true, pelo_largo: false, hombre: true, barba_larga: false, pelo_ondulado: false, pelo_suelto: true, pelo_rubio: false, camiseta_clara: false, ojos_claros: false},
    { name: 'Desiree', img: 'QEQ_imgs/Desiree-QuienEsQuien.jpeg', moreno: false, barba: false, gafas: true, mayor25: true, pelo_largo: true, hombre: false, barba_larga: false, pelo_ondulado: false, pelo_suelto: true, pelo_rubio: true, camiseta_clara: true, ojos_claros: true},
    { name: 'Erik', img: 'QEQ_imgs/Erik-QuienEsQuien.jpeg', moreno: false, barba: true, gafas: false, mayor25: true, pelo_largo: false, hombre: true, barba_larga: true, pelo_ondulado: false, pelo_suelto: true, pelo_rubio: false, camiseta_clara: true, ojos_claros: false},
    { name: 'Fran', img: 'QEQ_imgs/Fran-QuienEsQuien.jpeg', moreno: false, barba: true, gafas: false, mayor25: false, pelo_largo: false, hombre: true, barba_larga: false, pelo_ondulado: false, pelo_suelto: true, pelo_rubio: false, camiseta_clara: true, ojos_claros: false},
    { name: 'Gerard', img: 'QEQ_imgs/Gerard-QuienEsQuien.jpeg', moreno: false , barba: false , gafas: false , mayor25:false , pelo_largo: false , hombre: true , barba_larga: false , pelo_ondulado: true , pelo_suelto: true , pelo_rubio: false , camiseta_clara:true , ojos_claros:false  },
    { name: 'Glenn', img: 'QEQ_imgs/Glenn-QuienEsQuien.jpeg', moreno: true , barba: false , gafas: false , mayor25: false, pelo_largo: false, hombre: true , barba_larga:false , pelo_ondulado:false , pelo_suelto:true , pelo_rubio: false, camiseta_clara:false , ojos_claros:false  },
    { name: 'Irene', img: 'QEQ_imgs/Irene-QuienEsQuien.jpeg', moreno:false , barba: false , gafas:true , mayor25: true , pelo_largo: true, hombre: false, barba_larga:false , pelo_ondulado:true , pelo_suelto:true , pelo_rubio:false , camiseta_clara:true , ojos_claros:true  },
    { name: 'Ivan', img: 'QEQ_imgs/Ivan-QuienEsQuien.jpeg', moreno: false , barba: true , gafas: true , mayor25:true , pelo_largo: false , hombre: true , barba_larga: true , pelo_ondulado: false , pelo_suelto: true , pelo_rubio: false , camiseta_clara:true , ojos_claros:false  },
    { name: 'Josep', img: 'QEQ_imgs/Josep-QuienEsQuien.jpeg', moreno: false , barba: false , gafas: true , mayor25:false , pelo_largo: false , hombre: true , barba_larga: false , pelo_ondulado: false , pelo_suelto: true , pelo_rubio: true , camiseta_clara:true , ojos_claros:true  },
    { name: 'Josias', img: 'QEQ_imgs/Josias-QuienEsQuien.jpeg',moreno: false , barba: true , gafas: false , mayor25:true , pelo_largo: false , hombre: true , barba_larga: true , pelo_ondulado: false , pelo_suelto: true , pelo_rubio: false , camiseta_clara:false , ojos_claros:false  },
    { name: 'Jota', img: 'QEQ_imgs/Jota-QuienEsQuien.jpeg', moreno: false, barba: true , gafas: false, mayor25: true, pelo_largo: true, hombre: true, barba_larga: true, pelo_ondulado: true, pelo_suelto: false, pelo_rubio: false, camiseta_clara: true, ojos_claros: false },
    { name: 'Marina', img: 'QEQ_imgs/Marina-QuienEsQuien.jpeg', moreno: false, barba: false , gafas: true, mayor25: true, pelo_largo: true, hombre: false, barba_larga: false, pelo_ondulado: false, pelo_suelto: false, pelo_rubio: false, camiseta_clara: true, ojos_claros: false },
    { name: 'Nando', img: 'QEQ_imgs/Nando-QuienEsQuien.jpeg', moreno: false, barba: true , gafas: false, mayor25: true, pelo_largo: false, hombre: true, barba_larga: false, pelo_ondulado: false, pelo_suelto: false, pelo_rubio: false, camiseta_clara: true, ojos_claros: false },
    { name: 'Sergio', img: 'QEQ_imgs/Sergio-QuienEsQuien.jpeg', moreno: false, barba: true , gafas: true, mayor25: true, pelo_largo: true, hombre: true, barba_larga: true, pelo_ondulado: true, pelo_suelto: false, pelo_rubio: false, camiseta_clara: false, ojos_claros: false },
    { name: 'Solomon', img: 'QEQ_imgs/Solomon-QuienEsQuien.jpeg', moreno: false, barba: true , gafas: false, mayor25: false, pelo_largo: false, hombre: true, barba_larga: false, pelo_ondulado: false, pelo_suelto: true, pelo_rubio: false, camiseta_clara: true, ojos_claros: false },
    { name: 'Yago', img: 'QEQ_imgs/Yago-QuienEsQuien.jpeg', moreno: false, barba: true , gafas: true, mayor25: false, pelo_largo: false, hombre: true, barba_larga: false, pelo_ondulado: false, pelo_suelto: true, pelo_rubio: false, camiseta_clara: true, ojos_claros: true },
];

let difficulty;
let selectedPerson;
const timeLimit = getTimeLimit();
let secondsLeft = timeLimit;

function selectDifficulty(selectedDifficulty) {
    difficulty = selectedDifficulty;
    startGame();
}

function startGame() {
    // Mostrar la sección de juego
    document.querySelector('.game-container').style.display = 'block';
    document.querySelector('.menu-container').style.display = 'none';

    // Reiniciar el temporizador
    resetTimer();
}

function resetTimer() {
    let timer = setInterval(() => {
        secondsLeft--;
        document.getElementById('timer').textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timer);
            // Aquí puedes agregar la lógica para cuando se acabe el tiempo
            alert('¡Se acabó el tiempo!');
        }
    }, 1000);
}

function getTimeLimit() {
    switch (difficulty) {
        case 'easy':
            return 61; // 60 segundos para la dificultad fácil
        case 'normal':
            return 46; // 45 segundos para la dificultad normal
        case 'hard':
            return 31; // 30 segundos para la dificultad difícil
        default:
            return 61; // Por defecto, la dificultad fácil
    }
}

function askQuestion(attribute) {
    secondsLeft -= 10;
    
}

function randomPerson() {
    console.log('Inspeccioname esta.')
    const randomNumber = Math.floor(Math.random() * 19);
    selectedPerson = characters[randomNumber];
}

document.addEventListener('DOMContentLoaded', randomPerson);