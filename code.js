let display = document.getElementById('display');
let num1 = null;
let operator = null;

document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (!isNaN(value)) {
            display.value += value;
        } else if (value === 'C') {
            display.value = '';
            num1 = null;
            operator = null;
        } else if (value === '=') {
            if (operator && num1 !== null) {
                const num2 = parseFloat(display.value);
                let result;
                switch (operator) {
                    case '+':
                        result = num1 + num2;
                        break;
                    case '-':
                        result = num1 - num2;
                        break;
                    case '*':
                        result = num1 * num2;
                        break;
                    case '/':
                        if (num2 === 0) {
                            display.value = 'Error';
                            return;
                        }
                        result = num1 / num2;
                        break;
                }
                display.value = result;
                num1 = null;
                operator = null;
            }
        } else {
            if (display.value === '') return;
            num1 = parseFloat(display.value);
            operator = value;
            display.value = '';
        }
    });
});
