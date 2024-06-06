import { characters } from "./characters";
import { VolumenCuriosidad, VolumenGeneral } from "./volumen";

export let selectedPerson

export function randomPerson() {
    randomNumber = Math.floor(Math.random() * Object.keys(characters).length);
    selectedPerson = characters[randomNumber];
    //selectedPerson = {name: 'Erik'};
    console.log(selectedPerson.name);
    document.getElementById('imagen-persona').innerHTML = `<img src="QEQ_imgs/${selectedPerson.name}-QuienEsQuien.jpeg">`
    generateCuriosity();
    if(curiosidadesVideo.includes(selectedPerson.name)) {
        video = document.getElementById(selectedPerson.name + '-curiosity');
        video.volume = VolumenGeneral*VolumenCuriosidad;
        video.pause();
    }
}