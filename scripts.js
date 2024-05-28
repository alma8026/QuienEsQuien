/**
 * Funcionalidades:
 * Menu de inicio para elegir la dificultad:
 * Facil: 3 minutos sin restar tiempo.
 * Normal: 3 minutos restando 20 seg por pregunta.
 * Dificil: 2 minutos restando 20 seg tmb.
 * Botones con las preguntas.
 * Temporizador de 3 min: con cada pregunta se resta 20 seg.
 * Animacion de ganar o perder.
 * Mejorar estilos.
 * xdnsadnsidsakaskdkaskdakdkasdka
 */
//asjdhakdhkjahskjdhkjashdk
// scripts.js
const characters = [
    { name: 'Alice', img: 'https://randomuser.me/api/portraits/women/1.jpg', rubio: true, moreno: false, pelirrojo: false, barba: false, sombrero: false, piercings: false, tatuajes: false, pelolargo: true, gafas: false, bigote: false },
    { name: 'Bob', img: 'https://randomuser.me/api/portraits/men/1.jpg', rubio: false, moreno: true, pelirrojo: false, barba: true, sombrero: true, piercings: false, tatuajes: true, pelolargo: false, gafas: false, bigote: true },
    { name: 'Charlie', img: 'https://i.imgur.com/abc123.jpg', rubio: false, moreno: false, pelirrojo: true, barba: false, sombrero: false, piercings: true, tatuajes: false, pelolargo: true, gafas: false, bigote: false },
    { name: 'Diana', img: 'https://i.imgur.com/abc123.jpg', rubio: false, moreno: true, pelirrojo: false, barba: false, sombrero: true, piercings: false, tatuajes: true, pelolargo: true, gafas: true, bigote: false },
    { name: 'Edward', img: 'https://i.imgur.com/abc123.jpg', rubio: true, moreno: false, pelirrojo: false, barba: true, sombrero: false, piercings: true, tatuajes: false, pelolargo: false, gafas: false, bigote: false },
    { name: 'Fiona', img: 'https://i.imgur.com/abc123.jpg', rubio: false, moreno: true, pelirrojo: false, barba: false, sombrero: true, piercings: true, tatuajes: true, pelolargo: true, gafas: false, bigote: false },
    { name: 'George', img: 'https://i.imgur.com/abc123.jpg', rubio: false, moreno: true, pelirrojo: false, barba: true, sombrero: false, piercings: false, tatuajes: false, pelolargo: false, gafas: true, bigote: false },
    { name: 'Hannah', img: 'https://i.imgur.com/abc123.jpg', rubio: true, moreno: false, pelirrojo: false, barba: false, sombrero: true, piercings: false, tatuajes: true, pelolargo: true, gafas: false, bigote: false },
    { name: 'Ian', img: 'https://i.imgur.com/abc123.jpg', rubio: false, moreno: false, pelirrojo: true, barba: true, sombrero: false, piercings: true, tatuajes: false, pelolargo: false, gafas: true, bigote: false },
    { name: 'Julia', img: 'https://i.imgur.com/abc123.jpg', rubio: true, moreno: false, pelirrojo: false, barba: false, sombrero: false, piercings: false, tatuajes: true, pelolargo: true, gafas: false, bigote: false },
    // Añadir 15 personajes más con diferentes atributos
    { name: 'Kevin', img: 'https://i.imgur.com/abc123.jpg', rubio: false, moreno: true, pelirrojo: false, barba: false, sombrero: false, piercings: true, tatuajes: false, pelolargo: false, gafas: false, bigote: false },
    { name: 'Laura', img: 'https://i.imgur.com/abc123.jpg', rubio: true, moreno: false, pelirrojo: false, barba: false, sombrero: false, piercings: false, tatuajes: false, pelolargo: true, gafas: true, bigote: false },
    { name: 'Mike', img: 'https://i.imgur.com/abc123.jpg', rubio: false, moreno: true, pelirrojo: false, barba: true, sombrero: true, piercings: false, tatuajes: true, pelolargo: false, gafas: false, bigote: true },
    { name: 'Nina', img: 'https://i.imgur.com/abc123.jpg', rubio: false, moreno: false, pelirrojo: true, barba: false, sombrero: false, piercings: true, tatuajes: false, pelolargo: true, gafas: true, bigote: false },
    { name: 'Oscar', img: 'https://i.imgur.com/abc123.jpg', rubio: true, moreno: false, pelirrojo: false, barba: true, sombrero: false, piercings: true, tatuajes: false, pelolargo: false, gafas: false, bigote: true },
    { name: 'Paula', img: 'https://i.imgur.com/abc123.jpg', rubio: false, moreno: true, pelirrojo: false, barba: false, sombrero: true, piercings: false, tatuajes: true, pelolargo: true, gafas: true, bigote: false },
    { name: 'Quentin', img: 'https://i.imgur.com/abc123.jpg', rubio: true, moreno: false, pelirrojo: false, barba: true, sombrero: false, piercings: false, tatuajes: false, pelolargo: false, gafas: false, bigote: true },
    { name: 'Rachel', img: 'https://i.imgur.com/abc123.jpg', rubio: false, moreno: true, pelirrojo: false, barba: false, sombrero: true, piercings: true, tatuajes: true, pelolargo: true, gafas: false, bigote: false },
    { name: 'Sam', img: 'https://i.imgur.com/abc123.jpg', rubio: true, moreno: false, pelirrojo: false, barba: true, sombrero: false, piercings: false, tatuajes: false, pelolargo: false, gafas: false, bigote: false },
    { name: 'Tina', img: 'https://i.imgur.com/abc123.jpg', rubio: false, moreno: true, pelirrojo: false, barba: false, sombrero: true, piercings: true, tatuajes: true, pelolargo: true, gafas: true, bigote: false },
    { name: 'Uma', img: 'https://i.imgur.com/abc123.jpg', rubio: true, moreno: false, pelirrojo: false, barba: false, sombrero: false, piercings: true, tatuajes: false, pelolargo: true, gafas: false, bigote: false },
    { name: 'Victor', img: 'https://i.imgur.com/abc123.jpg', rubio: false, moreno: true, pelirrojo: false, barba: true, sombrero: false, piercings: false, tatuajes: false, pelolargo: false, gafas: true, bigote: true },
    { name: 'Wendy', img: 'https://i.imgur.com/abc123.jpg', rubio: true, moreno: false, pelirrojo: false, barba: false, sombrero: true, piercings: false, tatuajes: true, pelolargo: true, gafas: false, bigote: false },
    { name: 'Xavier', img: 'https://i.imgur.com/abc123.jpg', rubio: false, moreno: true, pelirrojo: false, barba: true, sombrero: false, piercings: true, tatuajes: false, pelolargo: false, gafas: true, bigote: false },
    { name: 'Yara', img: 'https://i.imgur.com/abc123.jpg', rubio: true, moreno: false, pelirrojo: false, barba: false, sombrero: true, piercings: false, tatuajes: false, pelolargo: true, gafas: false, bigote: false },
    { name: 'Zane', img: 'https://i.imgur.com/abc123.jpg', rubio: false, moreno: true, pelirrojo: false, barba: true, sombrero: false, piercings: true, tatuajes: false, pelolargo: false, gafas: false, bigote: true },
];
// prueba
function generateBoard() {
    const board = document.getElementById('board');
    characters.forEach((character, index) => {     
        const card = document.createElement('div');
        card.classList.add('card');    
        card.setAttribute('data-index', index);
        card.innerHTML = `<img src="${character.img}" alt="${character.name}"><p>${character.name}</p>`;
        board.appendChild(card);
    });
}

function askQuestion(attribute) {
    characters.forEach((character, index) => {
        const card = document.querySelector(`.card[data-index="${index}"]`);
        if (!character[attribute]) {
            card.classList.add('inactive');
        }
    });
}

document.addEventListener('DOMContentLoaded', generateBoard);
