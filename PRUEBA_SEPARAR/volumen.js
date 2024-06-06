export let VolumenGeneral = 1
export let VolumenMusica = 1
export let VolumenEfectosSonido = 1
export let VolumenCuriosidad = 1

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
        VolumenCuriosidad = 0;
    }
    else{
        CuriosidadText.innerText = 'Curiosidades: '+this.value+'%';
        VolumenCuriosidad = this.value/100;
        video.volume = VolumenGeneral*VolumenCuriosidad;
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
        video.volume = VolumenGeneral*VolumenCuriosidad;
    }
});