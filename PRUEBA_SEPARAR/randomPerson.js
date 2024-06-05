function randomPerson() {
    randomNumber = Math.floor(Math.random() * 19);
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