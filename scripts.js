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
    { name: 'Cesar', img: 'QEQ_imgs/Cesar-QuienEsQuien.jpeg', moreno: true, barba: true, gafas: false, mayor25: true, pelo_largo: false, hombre: true , pelo_ondulado: false, pelo_suelto: true, pelo_rubio: false, camiseta_clara: false, ojos_claros: false},
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

const curiosidades = {
    'Adan': '< src="" alt=Curiosidad de ">',
    'Alejandro': '< src="" alt=Curiosidad de ">',
    'Cesar': '< src="" alt=Curiosidad de ">',
    'Cristian': '< src="" alt=Curiosidad de ">',
    'Desiree': '< src="" alt=Curiosidad de ">',
    'Erik': '< src="" alt=Curiosidad de ">',
    'Fran': '< src="" alt=Curiosidad de ">',
    'Gerard': '< src="" alt=Curiosidad de ">',
    'Glenn': '< src="" alt=Curiosidad de ">',
    'Irene': '< src="" alt=Curiosidad de ">',
    'Ivan': '< src="" alt=Curiosidad de ">',
    'Josep': '< src="" alt=Curiosidad de ">',
    'Josias': '< src="" alt=Curiosidad de ">',
    'Jota': '< src="" alt=Curiosidad de ">',
    'Marina': '< src="" alt=Curiosidad de ">',
    'Nando': '< src="" alt=Curiosidad de ">',
    'Sergio': '< src="" alt=Curiosidad de ">',
    'Solomon': '< src="" alt=Curiosidad de ">',
    'Yago': '< src="" alt=Curiosidad de ">',
}

let difficulty;
let selectedPerson;
let secondsLeft;
let rejects = 0;
let UltimaPantalla = 'inicio';
let stopTime = false;
let randomNumber = Math.floor(Math.random() * 19);
const musiquita = document.getElementById("musiquita");
console.log('Inspeccioname esta.');

/* ****** FUNCION AUXILIAR PARA MOVERSE ENTRE PANTALLAS ****** */
function MostrarPantalla(Pantalla){
    const pantallaModo = {
        'inicio': 'flex',
        'dificultades': 'flex',
        'game-container': 'flex',
        'win-lose-screen': 'flex',
        'curiosity-screen': 'flex',
        'Volumen-Control': 'flex'
    }
    Object.keys(pantallaModo).forEach(pantalla => {
        document.getElementById(pantalla).style.display = 'none';
      });
    document.getElementById(Pantalla).style.display = pantallaModo[Pantalla];
    if (Pantalla != 'win-lose-screen' || UltimaPantalla == 'win-lose-screen') { document
        mBoton();
    }
    if (Pantalla != 'Volumen-Control'){
        UltimaPantalla = Pantalla;
    }
    if (Pantalla == 'win-lose-screen'){
        StopTime();
    }
}

/* ****** SELECCIONAR PERSONA RANDOM ****** */
function randomPerson() {
    selectedPerson = characters[randomNumber];
    console.log(selectedPerson.name)
    document.getElementById('imagen-persona').innerHTML = `<img src="QEQ_imgs/${selectedPerson.name}-QuienEsQuien.jpeg">`
    generateCuriosity();
}

function startMusic() {
    musiquita.play();
}

/* ****** EMPEZAR MUSICA ****** */
document.addEventListener('DOMContentLoaded', startMusic());

/* ****** TEXTO 3D ****** */
function extractRGB(color) {
    const rgb = color.match(/\d+/g);
    return {
        r: parseInt(rgb[0]),
        g: parseInt(rgb[1]),
        b: parseInt(rgb[2])
    };
}

function Title3D(ID, profundidad, oscuro){
    const titulo = document.getElementById(ID);
    const style = getComputedStyle(titulo);
    const colorTitulo = style.color
    const rgb = extractRGB(colorTitulo);
    const text = titulo.innerText;
    titulo.innerHTML = '';
    for (let i = 0; i < text.length; i++){
        let index = i
        if (i > (text.length-1)/2){
            index = text.length-1-i;
        }
        if (text[i]===' '){
            titulo.innerHTML += ' ';
        }
        else{
            let shadow = 'text-shadow: '
            for (let j=1; j <= profundidad; j++)
                shadow += `${Math.floor(j-(j*2/(text.length-1))*(i))}px ${j}px 0 rgb(${Math.round((rgb.r*0.8)-(rgb.r*0.8/profundidad*(j+1))*oscuro)}, ${Math.round((rgb.g*0.8)-(rgb.g*0.8/profundidad*(j+1))*oscuro)}, ${Math.round((rgb.b*0.8)-(rgb.b*0.8/profundidad*(j+1))*oscuro)}), `;
            shadow = shadow.slice(0, -2);
            titulo.innerHTML += `<span style="position: relative; ${shadow}; z-index: ${index}">${text[i]}</span>`;
        }
    }
}
Title3D('principal', 25, 0.6);
Title3D('dificultad', 25, 0.6);

/* **************** SONIDOS **************** */
let VolumenGeneral = 1
let VolumenMusica = 1
let VolumenEfectosSonido = 1

const EfectosVolumen=document.getElementById('Efectos-Sonido-Volumen');
const EfectosText=document.getElementById('Efectos-Sonido-Texto');
EfectosVolumen.addEventListener('input', function() {
    if (this.value < '0'){
        EfectosText.innerText = 'Efectos de sonido: NO';
        VolumenEfectosSonido = 0;
    }
    else{
        EfectosText.innerText = 'Efectos de sonido: '+this.value+'%';
        VolumenEfectosSonido = this.value/100;
    }
});

const MusicaVolumen=document.getElementById('Musica-Volumen');
const MusicaText=document.getElementById('Musica-Texto');
MusicaVolumen.addEventListener('input', function() {
    if (this.value < '0'){
        MusicaText.innerText = 'Música: NO';
        VolumenMusica = 0;
    }
    else{
        MusicaText.innerText = 'Música: '+this.value+'%';
        VolumenMusica = this.value/100;
        musiquita.volume = VolumenGeneral*VolumenMusica;
    }
});

const CuriosidadVolumen=document.getElementById('Curiosidad-Volumen');
const CuriosidadText=document.getElementById('Curiosidad-Texto');
CuriosidadVolumen.addEventListener('input', function() {
    if (this.value < 0){
        CuriosidadText.innerText = 'Curiosidades: NO';
        VolumenGeneral = 0;
    }
    else{
        CuriosidadText.innerText = 'Curiosidades: '+this.value+'%';
        VolumenCuriosidad = this.value/100;
        //musiquita.volume = VolumenGeneral*VolumenCuriosidad;
    }
});

const GeneralVolumen=document.getElementById('General-Volumen');
const GeneralText=document.getElementById('General-Texto');
GeneralVolumen.addEventListener('input', function() {
    if (this.value < 0){
        GeneralText.innerText = 'Volumen general: NO';
        VolumenGeneral = 0;
    }
    else{
        GeneralText.innerText = 'Volumen general: '+this.value+'%';
        VolumenGeneral = this.value/100;
        musiquita.volume = VolumenGeneral*VolumenMusica;
    }
});

function mBoton(){
    const MBoton = document.getElementById("m-boton");
    const mboton = MBoton.cloneNode(true);
    mboton.volume = VolumenGeneral*VolumenEfectosSonido
    mboton.play();
}

function mReject(){
    const Mlava = document.getElementById("m-lava");
    const mlava = Mlava.cloneNode(true);
    const Mevaporaçao = document.getElementById("m-evaporaçao");
    const mevaporaçao = Mevaporaçao.cloneNode(true);
    mlava.currentTime = 2;
    mevaporaçao.volume = VolumenGeneral*VolumenEfectosSonido;
    mlava.volume = VolumenGeneral*VolumenEfectosSonido;
    mlava.play();
    setTimeout(() =>{
        mlava.pause();
        mevaporaçao.play();
    }, 1600)
}

function mWin(){

}

// Selección de dificultad (se guarda en la variable --> difficulty)
function selectDifficulty(selectedDifficulty) {
    difficulty = selectedDifficulty;
    randomPerson();
    ResetTime();
    StartTime();
    generateBoard();
    clearQuestions();
    MostrarPantalla('game-container');
}

// Para generar la tabla con cada persona
function generateBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';
    characters.forEach((character, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-index', index);
        card.innerHTML = `
                    <p>${character.name}</p>
                    <img src="${character.img}" alt="${character.name}">
                    <div class="card-buttons">
                        <button onclick="handleCheck(${index})" class="checkBtn">&check;</button>
                        <button onclick="handleReject(${index})" class="rejectBtn">&times;</button>
                    </div>
                    <div id="${character.name}-lava" class="card-lava" style="display: none;"></div>
                    <div id="${character.name}-roca" class="card-roca" style="display: none;"></div>
                `;
        board.appendChild(card);
    });
}
/* ****** JUEGO ****** */

// Establecer el tiempo de inicio
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

// Actualizar el tiempo
function updateTimerDisplay(seconds) {
    if (seconds < 0){
        document.getElementById('timer').textContent = '00:00';
    }
    else{
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        document.getElementById('timer').textContent = `0${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
}

// Resetea el contador
function ResetTime() {
    const timeLimit = getTimeLimit();
    secondsLeft = timeLimit;
    updateTimerDisplay(secondsLeft);
}

function StopTime(){
    stopTime = true
}

// Inicia el contador
function StartTime(){
    let timer = setInterval(() => {
        secondsLeft--;
        updateTimerDisplay(secondsLeft);
        if (secondsLeft < 0) {
            clearInterval(timer);
            lose();
            MostrarPantalla('win-lose-screen');
        }
        else if (stopTime){
            clearInterval(timer);
            stopTime = false;
        }
    }, 1000);
}



// Evalúa la respuesta true o false de la pregunta
function askQuestion(attribute) {
    mBoton();
    if(difficulty!='easy'){
        secondsLeft -= 10;
        updateTimerDisplay(secondsLeft)
        minusTemp();
    }
    const pregunta = document.getElementById(`${attribute}`);
    if(selectedPerson[attribute]){
        pregunta.classList.add('acertadas')
    } else {
        pregunta.classList.add('falladas')
    }
    document.head.appendChild(estilo);
}

function clearQuestions(){
    const ID = [ 'moreno', 'barba', 'pelo_largo', 'gafas', 'mayor25', 'hombre', 'pelo_ondulado', 'pelo_suelto', 'pelo_rubio', 'camiseta_clara', 'ojos_claros']
    ID.forEach(element => {
        const pregunta = document.getElementById(`${element}`);
        pregunta.classList.remove('acertadas');
        pregunta.classList.remove('falladas');
    });
}

// Animacion de -10 seg
function minusTemp() {
    const restaTiempo = document.getElementById('restaTiempo');
    restaTiempo.style.display = 'block';
    setTimeout(() => {
        restaTiempo.style.display = 'none';
    }, 1000); // Oculta el texto después de 2 segundos
}

// Para cuando haces check a alguien
function handleCheck(index) {
    mBoton();
    const userConfirmed = confirm("¿Estás seguro de que esta es la persona?");
    if (userConfirmed) {
        if(index==randomNumber) {
            console.log('acertado');
            win();
        } else {
            console.log('erroneo');
            lose();
        }
        MostrarPantalla('win-lose-screen');
    }
}

// Para cuando descartas a alguien
function handleReject(index) {
    mBoton();
    rejects++;
    document.querySelector('#'+characters[index].name+"-lava").style.display = 'block';
    mReject();
    setTimeout(() => {
        document.querySelector('#'+characters[index].name+"-roca").style.display = 'block';
    }, 1600);
    if (rejects===characters.length){
        setTimeout(() =>{
            lose();
            MostrarPantalla('win-lose-screen');
        }, 3000)
    }
}

/* ****** PANTALLAS DE GANAR O PERDER ****** */

// Generar los elementos adecuados para la situación de perder
function lose() {
    const WLS = document.getElementById('win-lose-screen');
    const textGP = document.getElementById('Ganado-Perdido');
    textGP.innerHTML = '<h1>HAS PERDIDO!</h1>';
    WLS.style.backgroundColor = 'rgba(100, 0, 0, 0.2)';
}

// Generar los elementos adecuados para la situación de ganar
function win() {
    const WLS = document.getElementById('win-lose-screen');
    const textGP = document.getElementById('Ganado-Perdido');
    textGP.innerHTML = '<h1>Has ganado!</h1>';
    WLS.style.backgroundColor = 'rgba(255, 255, 255, 0)';
}

/* ****** CURIOSIDAD ****** */

// Para generar la curiosidad de la persona elegida
function generateCuriosity() {
    const curiosity = document.getElementById('curiosity-screen');
    curiosity.innerHTML = `<h1>${selectedPerson.name}</h1>
    <div><img src="" alt="curiosidad"></div><button class="icon Volumen-Icon" onclick="MostrarPantalla('Volumen-Control')"></button>`;
}

function volverAJugarCuriosity(){
    const curiosity = document.getElementById('curiosity-screen')
    curiosity.innerHTML += `<button onclick="MostrarPantalla('dificultades')">Ahora si, volver a jugar</button>`
}

function botonCuriosity(){
    const curiosity = document.getElementById('curiosity-screen')
    curiosity.innerHTML += `<button onclick="MostrarPantalla('dificultades')">Volver a jugar</button>`
}