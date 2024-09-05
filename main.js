function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLastChar() {
    const display = document.getElementById('display');
    let currentText = display.innerText;
    
    if (currentText.length > 1) {
        display.innerText = currentText.slice(0, -1);
    } else {
        display.innerText = '0'; // Reset to '0' if nothing remains
    }
}

function appendNumber(number) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperation(operation) {
    const display = document.getElementById('display');
    const lastChar = display.innerText.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        display.innerText = display.innerText.slice(0, -1) + operation;
    } else {
        display.innerText += operation;
    }
}

function appendPercentage() {
    const display = document.getElementById('display');
    const currentText = display.innerText;
    try {
        if (!currentText.includes('%')) {
            // If the text does not already have a percentage symbol
            display.innerText += '%';
        } else {
            // If it already contains a percentage symbol, evaluate the percentage
            display.innerText = eval(display.innerText.replace('%', '') + '/100');
        }
    } catch {
        display.innerText = 'Error';
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Handle percentage calculations
        let text = display.innerText;
        if (text.includes('%')) {
            text = text.replace('%', '') + '/100';
        }
        display.innerText = eval(text);
    } catch {
        display.innerText = 'Error';
    }
}
