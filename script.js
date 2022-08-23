const drawingBoard = document.getElementById('sketch-canvas');

for(let i = 0; i < 9600; i++){
    let newPixel = document.createElement('div');
    newPixel.classList.add('pixel');
    drawingBoard.appendChild(newPixel);
}