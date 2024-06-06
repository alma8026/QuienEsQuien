import { characters } from "./characters";
import { VolumenCuriosidad, VolumenGeneral } from "./volumen";

const textoCuriosidades = {
    'Ivan': 'Soy adulto pero no ejerzo',
    'Josias': 'Sou eu de novo',
    'Sergio': 'La vida me ha dado muchos palos, y más que me voy a llevar'
}

export const curiosidadesVideo = ['Alejandro', 'Erik', 'Sergio'];
const personasTextoCuriosidades = ['Ivan', 'Josias', 'Sergio']

export function generateCuriosity(Persona=selectedPerson.name) {
    const nombrePersona = document.getElementById('nombre-persona');
    nombrePersona.innerText = Persona;
    const textoCuriosidad = document.getElementById('texto-curiosidad');
    if (personasTextoCuriosidades.includes(Persona)){
        textoCuriosidad.innerText = textoCuriosidades[Persona];
    }
    else{
        textoCuriosidad.innerText = '';
    }
    document.getElementById('curiosidad-persona').innerHTML = curiosidades[Persona];
    Title3D('nombre-persona', 15, 0.6);
}

export function volverAJugarCuriosity(){
    document.getElementById('boton-curiosidad').style.display = 'block';
    document.getElementById('Home-Icon').style.display = 'none';
}
export function goCuriosity(){
    document.getElementById('boton-curiosidad').style.display = 'none';
    document.getElementById('Home-Icon').style.display = 'block';
}

/* ****** MENÚ CURIOSIDADES ****** */

export function generateMenuCuriosidades(){
    const menuCuriosidades = document.getElementById('menu-curiosidades');
    menuCuriosidades.innerHTML = `<button class="icon Volumen-Icon" onclick="MostrarPantalla('Volumen-Control')"></button><button class="icon Back-Icon" onclick="MostrarPantalla('inicio')"></button>`;
    characters.forEach((character) => {
        menuCuriosidades.innerHTML += `<button onclick="generateCuriosity('${character.name}');changeselectedPerson('${character.name}');MostrarPantalla('curiosity-screen')">${character.name}</button>`
        });
}

export function changeselectedPerson(character){
    console.log(VolumenGeneral,VolumenCuriosidad)
    selectedPerson = {name: character}
    if(curiosidadesVideo.includes(character)) {
        video = document.getElementById(character + '-curiosity');
        video.volume = VolumenGeneral*VolumenCuriosidad;
        video.pause();
    }
}