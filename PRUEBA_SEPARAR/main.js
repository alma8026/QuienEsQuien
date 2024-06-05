import {Title3D} from './titulo3D.js';
Title3D('principal');
Title3D('dificultad');

import * as MP from './MostrarPantalla.js';
window.MostrarPantalla = MP.MostrarPantalla
window.UltimaPantalla = MP.UltimaPantalla



let video

let cagon = true;

let difficulty;
let selectedPerson;
let choosenPerson;
let secondsLeft;
let rejects = 0;
let stopTime = false;
let randomNumber;
const musiquita = document.getElementById("musiquita");
console.log('Inspeccioname esta.');
