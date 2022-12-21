// Nodelist of 10 digits, 1-0
const digits = document.querySelectorAll('.digit');

// Display text
let display = document.querySelector('.display');

// Global variables to capture number input and chosen operator
let firstOperand = []; // First number
let secondOperand = []; // Second number
let operator; // Chosen operator

// Flag to determine if the first operand or second operand is being typed in
let first = true;

// Toggle flag, to accept first operand or second operand
const toggle = () => {
    first = !first;
}

// Operator buttons
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const equalButton = document.querySelector('#equal');

// Add event listeners to operator buttons
plusButton.addEventListener('click', () => {
    toggle();
    operator = 'add'; // Set operator to addition
});
minusButton.addEventListener('click', () => {
    toggle();
    operator = 'subtract'; // Set operator to addition
});
multiplyButton.addEventListener('click', () => {
    toggle();
    operator = 'multiply'; // Set operator to addition
});
divideButton.addEventListener('click', () => {
    toggle();
    operator = 'divide'; // Set operator to addition
});

// Add event listers to each digit button
digits.forEach(build); // Call a build function on each digit button
function build(digitButton, index) { // Give an event listener that appends the correct digit
    digitButton.addEventListener('click', () => {
        if(first && index !== 9) {
            firstOperand.push(index+1);
            display.textContent = firstOperand.join('');
        } else if(first && index === 9) {
            firstOperand.push(0);
            display.textContent = firstOperand.join('');
        } else if(!first && index !== 9) {
            secondOperand.push(index+1);
            display.textContent = secondOperand.join('');
        } else {
            secondOperand.push(0);
            display.textContent = secondOperand.join('');
        }
    });
}

// Operator functions
const addition = (num1, num2) => {
    return num1 + num2;
}
const subtraction = (num1, num2) => {
    return num1 - num2;
}
const multiplication = (num1, num2) => {
    return num1 * num2;
}
const division = (num1, num2) => {
    if(num1 / num2 === Infinity) {
        return 'ERROR!';
    } else {
        return num1 / num2;
    }
}

// Operate function will perform calculation
const operate = (num1, num2, operator) => {
    if(operator === 'add') {
        display.textContent = addition(num1, num2);
    } else if (operator === 'subtract') {
        display.textContent = subtraction(num1, num2);
    } else if (operator === 'multiply') {
        display.textContent = multiplication(num1, num2);
    } else {
        display.textContent = division(num1, num2);
    }
}

// Add event listener to equal button, will perform calculation
equalButton.addEventListener('click', () => {
    operate(firstOperand.join(''), secondOperand.join(''), operator);
});

// Debugging, using clear button for now...
const clr = document.querySelector('#clear');
clr.addEventListener('click', () => {
    console.log(firstOperand);
    console.log(secondOperand);
    console.log(operator);
    console.log(first);
});