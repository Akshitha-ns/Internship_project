let display = document.getElementById('display');

function appendValue(value) {
    display.value += value; 
}
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}

let memory = 0;

function memoryAdd() {
    try {
        memory += parseFloat(display.value);
    } catch (error) {
    }
    display.value = ''; 
}

function memoryMinus() {
    try {
        memory -= parseFloat(display.value);
    } catch (error) {
    }
    display.value = ''; 
}

function memoryRecall() {
    display.value = memory;
}
