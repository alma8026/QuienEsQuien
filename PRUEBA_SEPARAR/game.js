function selectDifficulty(selectedDifficulty) {
    difficulty = selectedDifficulty;
    rejects = 0;
    randomPerson();
    ResetTime();
    StartTime();
    generateBoard();
    clearQuestions();
    document.getElementById('confirmacion').style.display='none';
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
    const ID = ['moreno', 'barba', 'pelo_largo', 'gafas', 'mayor25', 'hombre', 'pelo_ondulado', 'pelo_suelto', 'pelo_rubio', 'camiseta_clara', 'ojos_claros']
    ID.forEach(element => {
        const pregunta = document.getElementById(`${element}`);
        pregunta.classList.remove('acertadas');
        pregunta.classList.remove('falladas');
    });
}

// Para cuando haces check a alguien
function handleCheck(index) {
    mBoton();
    choosenPerson = characters[index]
    document.getElementById('confirmacion').style.display = 'flex'
    document.getElementById('texto-cartel').innerText = `¿Estás seguro de que es ${choosenPerson.name}?`
    document.getElementById('imagen-persona-seleccionada').innerHTML = `<img src="${choosenPerson.img}">`
}

function accept(){
    if(choosenPerson.name == selectedPerson.name) {
        win();
    } else {
        lose();
    }
    MostrarPantalla('win-lose-screen');
}

function continuePlay(){
    mBoton();
    document.getElementById('confirmacion').style.display = 'none';
    if (cagon){
        mChallenge()
        document.getElementById('logro').style.display = 'flex';
        cagon = false
    }
}

// Función para pausar el video al volver al menú

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
    mLose();
}

// Generar los elementos adecuados para la situación de ganar
function win() {
    const WLS = document.getElementById('win-lose-screen');
    const textGP = document.getElementById('Ganado-Perdido');
    textGP.innerHTML = '<h1>Has ganado!</h1>';
    WLS.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    mWin();
}

/* ****** CURIOSIDAD ****** */

// Para generar la curiosidad de la persona elegida
