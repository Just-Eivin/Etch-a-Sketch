const drawingBoard = document.getElementById('sketch-canvas');
for(let i = 0; i < 9600; i++){
    let newPixel = document.createElement('div');
    newPixel.classList.add('pixel');
    drawingBoard.appendChild(newPixel);
}

const pixelsOnBoard = document.querySelectorAll('.pixel');


let drawingMode = false;

pixelsOnBoard.forEach((pixel) => {
    pixel.addEventListener('mousedown', () => { 
        drawingMode = true;
      });
      pixel.addEventListener('mouseup', () => { 
        drawingMode = false;
      });
      pixel.addEventListener('mousemove', () => { 
        if(drawingMode) {
            pixel.style.backgroundColor = 'gray';
        }
      });
});
