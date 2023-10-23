
/*if (stateArray[0] === true) {
    block.style.backgroundColor = colorPickerValue;
} else if (stateArray[1] === true) {
    block.style.backgroundColor = 'red';
} else {
    block.style.backgroundColor = 'white'; */


// Grid Square Generation

let numSquares = 16;
let drawingArea = document.querySelector('.drawingArea');

let isDrawing = false;

function randomColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function addEventListenerToBlock(block) {
    block.addEventListener('mouseup', () => {
        isDrawing = false;
    })

    block.addEventListener('mousedown', () => {
        isDrawing = true;
        chooseBlockColor(block)
        })
    
    block.addEventListener('mouseover', () => {
        if (isDrawing) {
            chooseBlockColor(block);
        }
    })
    }

function chooseBlockColor(block) {
    if (stateArray[0]) {
        block.style.backgroundColor = colorPickerValue;
    } else if (stateArray[1]) {
        let selectedRandomColor = '#' + randomColor();
        block.style.backgroundColor = selectedRandomColor;
    } else {
        block.style.backgroundColor = 'white';
    }
}


function generateGridSquares() {
    
    for (let i = 0; i < numSquares; i++) {
        let div = document.createElement('div');
        div.classList.add('mainrow');

        for (let i = 0; i < numSquares; i++) {
            let subdiv = document.createElement('div');
            subdiv.classList.add('subcolumn');
            subdiv.classList.add('drawingblock');
            div.appendChild(subdiv);
            addEventListenerToBlock(subdiv);
        }

        drawingArea.appendChild(div);
    }
}

// Code Running
generateGridSquares();
let mainSquares = document.querySelectorAll('.subcolumn');



// Slider Controlling Grid Squares Code

let slider = document.querySelector('.squareslider');
let sliderText = document.querySelector('.sliderText');

sliderText.textContent = slider.value + ' x ' + slider.value

slider.addEventListener('input', () => {
    numSquares = slider.value;
    sliderText.textContent = slider.value + ' x ' + slider.value;

    while (drawingArea.firstChild) {
        drawingArea.removeChild(drawingArea.lastChild);
    }

    generateGridSquares();
    mainSquares = document.querySelectorAll('.subcolumn');
})





// index of array: colorpickerstate, rgbmodestate, erasermodestate
let stateArray = [true, false, false];

let colorPicker = document.querySelector('.colorPicker');
let rgbMode = document.querySelector('.rgbmode');
let eraserMode = document.querySelector('.eraser');
let resetMode = document.querySelector('.reset');
let colorPickerValue = colorPicker.value;

colorPicker.addEventListener('input', () => {
    colorPickerValue = colorPicker.value;
})

colorPicker.addEventListener('click', () => {
    for (let i = 0; i < stateArray.length; i++) {
        stateArray[i] = false;
    }
    stateArray[0] = true;
})

rgbMode.addEventListener('click', (e) => {
    for (let i = 0; i < stateArray.length; i++) {
        stateArray[i] = false;
    }
    stateArray[1] = true;
})

eraserMode.addEventListener('click', () => {
    for (let i = 0; i < stateArray.length; i++) {
        stateArray[i] = false;
    }
    stateArray[2] = true;
})

resetMode.addEventListener('click', () => {
    for (let square of mainSquares) {
        square.style.backgroundColor = 'white';
    }
})







