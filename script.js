const drawingBoard = document.getElementById('sketch-canvas');
for (let i = 0; i < 2368; i++) {
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
        if (drawingMode) {
            pixel.classList.add('painted');

        }
    });
    pixel.addEventListener('click', () => {
        pixel.classList.add('painted');
    });
});

const shakeButton = document.querySelector('.shake-button');
const sketchBoard = document.getElementById('sketch-container');

shakeButton.addEventListener('click', () => {
    clearAndShake();
})

function clearPixel(array) {
    let randomPosition = Math.floor((Math.random() * array.length));
    array[randomPosition].classList.remove('painted');
}

function clearAndShake() {
    let i = document.querySelectorAll('.painted').length;
    if(i == 0){
        return;
    }
    sketchBoard.classList.add('shake');
    let myInt = setInterval(() => {
        let paintedPixels = document.querySelectorAll('.painted');
        clearPixel(paintedPixels);
        i--;
        if(i == 0) {
            clearInterval(myInt);
            sketchBoard.classList.remove('shake');
        }
    }, 10);
}

