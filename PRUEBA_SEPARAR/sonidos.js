import * as V from './volumen.js';

export function mBoton(){
    const MBoton = document.getElementById("m-boton");
    const mboton = MBoton.cloneNode(true);
    mboton.volume = V.VolumenGeneral*V.VolumenEfectosSonido
    mboton.play();
}

export function mReject(){
    const Mlava = document.getElementById("m-lava");
    const mlava = Mlava.cloneNode(true);
    const Mevaporaçao = document.getElementById("m-evaporaçao");
    const mevaporaçao = Mevaporaçao.cloneNode(true);
    mlava.currentTime = 2;
    mevaporaçao.volume = V.VolumenGeneral*V.VolumenEfectosSonido;
    mlava.volume = V.VolumenGeneral*V.VolumenEfectosSonido;
    mlava.play();
    setTimeout(() =>{
        mlava.pause();
        mevaporaçao.play();
    }, 1600)
}

export function mChallenge(){
    const Mchallenge = document.getElementById("m-challenge");
    const mchallenge = Mchallenge.cloneNode(true);
    mchallenge.volume = V.VolumenGeneral*V.VolumenEfectosSonido;
    mchallenge.play();
}

export function mWin(){
    const mwin = document.getElementById("m-levelUp");
    mwin.volume = V.VolumenGeneral*V.VolumenEfectosSonido
    mwin.play();
}

export function mLose(){
    const mstrike = document.getElementById("m-strike");
    mstrike.volume = V.VolumenGeneral*V.VolumenEfectosSonido;
    mstrike.play();
    const mdamage = document.getElementById("m-damage");
    mdamage.volume = V.VolumenGeneral*V.VolumenEfectosSonido;
    mdamage.play();
}