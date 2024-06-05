function extractRGB(color) {
    const rgb = color.match(/\d+/g);
    return {
        r: parseInt(rgb[0]),
        g: parseInt(rgb[1]),
        b: parseInt(rgb[2])
    };
}

export function Title3D(ID, profundidad=20, oscuro=0.6){
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