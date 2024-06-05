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
    'Adan': '<img id="Adan-curiosity" class="img-curiosity" src="Curiosidades1/Adan-curiosidad.jpg" alt="Curiosidad de Adan">',
    'Alejandro': '<video id="Alejandro-curiosity" class="img-curiosity" controls autoplay loop alt="Curiosidad de Alejandro"><source src="Curiosidades1/Alejandro-curiosidad.mp4" type="video/mp4"></video>',
    'Cesar': '<img id="Cesar-curiosity" class="img-curiosity" src="Curiosidades1/Cesar-curiosidad.jpg" alt="Curiosidad de Cesar">',
    'Cristian': '<img id="Cristian-curiosity" class="img-curiosity" src="Curiosidades1/Cristian-curiosidad.png" alt="Curiosidad de Cristian">',
    'Desiree': '<img id="Desiree-curiosity" class="img-curiosity" src="Curiosidades1/Desirée-curiosidad.JPG" alt="Curiosidad de Desirée">',
    'Erik': '<video id="Erik-curiosity" class="img-curiosity" controls autoplay loop alt="Curiosidad de Erik"><source src="Curiosidades1/Erik-curiosidad.mp4" type="video/mp4"></video>',
    'Fran': '<img id="Fran-curiosity" class="img-curiosity" src="Curiosidades1/Fran-curiosidad.jpg" alt="Curiosidad de Fran">',
    'Gerard': '<img id="Gerard-curiosity" class="img-curiosity" src="Curiosidades1/Gerard-curiosidad.jpeg" alt="Curiosidad de Gerard">',
    'Glenn': '<img id="Glenn-curiosity" class="img-curiosity" src="Curiosidades1/Glenn-curiosidad.jpg" alt="Curiosidad de Glenn">',
    'Irene': '<img id="Irene-curiosity" class="img-curiosity" src="Curiosidades1/Irene-curiosidad.jpg" alt="Curiosidad de Irene">',
    'Ivan': '<img id="Ivan-curiosity" class="img-curiosity" src="Curiosidades1/Ivan-curiosidad.gif" alt="Curiosidad de Ivan">',
    'Josep': '<img id="Josep-curiosity" class="img-curiosity" src="Curiosidades1/Josep-curiosidad.jpg" alt="Curiosidad de Josep">',
    'Josias': '<img id="Josias-curiosity" class="img-curiosity" src="Curiosidades1/Josias-curiosidad.gif" alt="Curiosidad de Josias">',
    'Jota': '<img id="Jota-curiosity" class="img-curiosity" src="Curiosidades1/Jota-curiosidad.jpeg" alt="Curiosidad de Jota">',
    'Marina': '<img id="Marina-curiosity" class="img-curiosity" src="Curiosidades1/Marina-curiosidad.jpg" alt="Curiosidad de Marina">',
    'Nando': '<img id="Nando-curiosity" class="img-curiosity" src="Curiosidades1/Nando-curiosidad.jpg" alt="Curiosidad de Nando">',
    'Sergio': '<video id="Sergio-curiosity" class="img-curiosity" controls autoplay loop alt="Curiosidad de Sergio"><source src="Curiosidades1/Sergio-curiosidad.mp4" type="video/mp4"></video>',
    'Solomon': '<img id="Solomon-curiosity" class="img-curiosity" src="Curiosidades1/Solomon-curiosidad.jpg" alt="Curiosidad de Solomon">',
    'Yago': '<img id="Yago-curiosity" class="img-curiosity" src="Curiosidades1/Yago-curiosidad.jpg" alt="Curiosidad de Yago">'
};



let difficulty;
let selectedPerson;
let choosenPerson;
let secondsLeft;
let rejects = 0;
let UltimaPantalla = 'inicio';
let stopTime = false;
let randomNumber
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
        musiquita.play();
        UltimaPantalla = Pantalla;
    }
    if (Pantalla == 'win-lose-screen'){
        StopTime();
    }
    if (Pantalla == 'curiosity-screen'){
        const curiosidad = document.getElementById('curiosidad-persona');
        characters.forEach((character, index) => {
        if (character.name === selectedPerson.name) {
            curiosidad.innerHTML = curiosidades[character.name];
        }
    });
        document.getElementById('Home-Icon').style.display = 'block';
        document.getElementById('boton-curiosidad').style.display = 'none';
    }
}
/* ****** SELECCIONAR PERSONA RANDOM ****** */
function randomPerson() {
    randomNumber = Math.floor(Math.random() * 19);
    selectedPerson = characters[randomNumber];
    console.log(selectedPerson.name);
    document.getElementById('imagen-persona').innerHTML = `<img src="QEQ_imgs/${selectedPerson.name}-QuienEsQuien.jpeg">`
    generateCuriosity();
}

/* ****** EMPEZAR MUSICA ****** */
// document.addEventListener('DOMContentLoaded', musiquita.play());

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
    const texto = document.getElementById(ID);
    const style = getComputedStyle(texto);
    const colorTitulo = style.color
    const rgb = extractRGB(colorTitulo);
    const text = texto.innerText;
    texto.innerHTML = '';
    for (let i = 0; i < text.length; i++){
        let index = i
        if (i > (text.length-1)/2){
            index = text.length-1-i;
        }
        if (text[i]===' '){
            texto.innerHTML += ' ';
        }
        else{
            let shadow = 'text-shadow: '
            for (let j=1; j <= profundidad; j++)
                shadow += `${Math.floor(j-(j*2/(text.length-1))*(i))}px ${j}px 0 rgb(${Math.round((rgb.r*0.8)-(rgb.r*0.8/profundidad*(j+1))*oscuro)}, ${Math.round((rgb.g*0.8)-(rgb.g*0.8/profundidad*(j+1))*oscuro)}, ${Math.round((rgb.b*0.8)-(rgb.b*0.8/profundidad*(j+1))*oscuro)}), `;
            shadow = shadow.slice(0, -2);
            texto.innerHTML += `<span style="position: relative; ${shadow}; z-index: ${index}">${text[i]}</span>`;
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
    rejects = 0;
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
    stopTime = false;
}

function StopTime(){
    stopTime = true
}

// Inicia el contador
function StartTime(){
    let timer = setInterval(() => {
        //console.log('-1s -> ' + stopTime);
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

// Animacion de -10 seg
function minusTemp() {
    const restaTiempo = document.getElementById('restaTiempo');
    const RestaTiempo = restaTiempo.cloneNode(true);
    const timer = document.getElementById('timer-buttons');
    timer.appendChild(RestaTiempo)
    RestaTiempo.style.display = 'block';
    setTimeout(() => {
        RestaTiempo.style.display = 'none';
        timer.removeChild(RestaTiempo);
    }, 1000); // Oculta el texto después de 2 segundos
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
    //document.head.appendChild(estilo);
}

function clearQuestions(){
    const ID = [ 'moreno', 'barba', 'pelo_largo', 'gafas', 'mayor25', 'hombre', 'pelo_ondulado', 'pelo_suelto', 'pelo_rubio', 'camiseta_clara', 'ojos_claros']
    ID.forEach(element => {
        const pregunta = document.getElementById(`${element}`);
        pregunta.classList.remove('acertadas');
        pregunta.classList.remove('falladas');
    });
}

// Para cuando haces check a alguien
function getConfirmation() {
    return new Promise((resolve, reject) => {
        document.getElementById('custom-alert').style.display = 'flex';

        document.getElementById('yes-button').addEventListener('click', function onYes() {
            document.getElementById('custom-alert').style.display = 'none';
            resolve(true);
            document.getElementById('yes-button').removeEventListener('click', onYes);
        });

        document.getElementById('no-button').addEventListener('click', function onNo() {
            document.getElementById('custom-alert').style.display = 'none';
            resolve(false);
            document.getElementById('no-button').removeEventListener('click', onNo);
        });
    });
}
async function handleCheck(index) {
    const userConfirmed = await getConfirmation();
    
    if (userConfirmed) {
        //console.log(index);
        mBoton();
        if(index == randomNumber) {
            win();
        } else {
            lose();
        }
        MostrarPantalla('win-lose-screen');
    } else {
        alert('Cagón');
    }
}

// Función para pausar el video al volver al menú
function pausarVideoSiNecesario() {
    if(selectedPerson.name == 'Alejandro' || selectedPerson.name == 'Erik' || selectedPerson.name == 'Sergio') {
        const video = document.getElementById(selectedPerson.name + '-curiosity');
        video.pause();
        //console.log('paused ' + selectedPerson.name + '-curiosity');
    }
}

// Event listener para el icono de inicio
document.getElementById('Home-Icon').addEventListener('click', function() {
    pausarVideoSiNecesario();
});

// Event listener para el botón de curiosidad
document.getElementById('boton-curiosidad').addEventListener('click', function() {
    pausarVideoSiNecesario();
});

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
    textGP.innerHTML = '<h1>Has perdido!</h1>';
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
    const nombrePersona = document.getElementById('nombre-persona');
    nombrePersona.innerText = `${selectedPerson.name}`;
    Title3D('nombre-persona', 15, 0.6);
}

function volverAJugarCuriosity(){
    document.getElementById('boton-curiosidad').style.display = 'block';
    document.getElementById('Home-Icon').style.display = 'none';
}
