import { mBoton } from './sonidos.js';
import {StopTime } from './cronometro.js';

let UltimaPantalla = 'inicio';
let AnteriorPantalla;

export function MostrarPantalla(Pantalla){
    console.log(UltimaPantalla);
    const pantallaModo = {
        'inicio': 'flex',
        'dificultades': 'flex',
        'game-container': 'flex',
        'win-lose-screen': 'flex',
        'curiosity-screen': 'flex',
        'Volumen-Control': 'flex',
        'menu-curiosidades': 'flex',
    }
    Object.keys(pantallaModo).forEach(pantalla => {
        document.getElementById(pantalla).style.display = 'none';
      });
    document.getElementById(Pantalla).style.display = pantallaModo[Pantalla];
    if (Pantalla != 'Volumen-Control'){
        musiquita.play();
        if (Pantalla != UltimaPantalla){
            AnteriorPantalla = UltimaPantalla;
        }
        UltimaPantalla = Pantalla;
    }
    if (Pantalla != 'win-lose-screen' || (UltimaPantalla != 'game-content' && Pantalla == 'win-lose-screen')) {
        mBoton();
    }
    if (Pantalla == 'win-lose-screen'){
        StopTime();
    }
    if(curiosidadesVideo.includes(selectedPerson.name)) {
        if (Pantalla == 'curiosity-screen' || (UltimaPantalla == 'curiosity-screen' && Pantalla == 'Volumen-Control')) {
            musiquita.pause()
            video.play();
        }
        else{
            video.pause()
            video.currentTime = 0
        }
    }
}