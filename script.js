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

// Equal and clear buttons
const equalButton = document.querySelector('#equal');
const clearButton = document.querySelector('#clear');

// Add event listeners to operator buttons
plusButton.addEventListener('click', () => {
    if(first) {
        toggle();
    }
    operator = 'add'; // Set operator to addition
});
minusButton.addEventListener('click', () => {
    if(first) {
        toggle();
    }
    operator = 'subtract'; // Set operator to addition
});
multiplyButton.addEventListener('click', () => {
    if(first) {
        toggle();
    }
    operator = 'multiply'; // Set operator to addition
});
divideButton.addEventListener('click', () => {
    if(first) {
        toggle();
    }
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
    return parseFloat((num1 + num2).toFixed(5));
}
const subtraction = (num1, num2) => {
    return parseFloat((num1 - num2).toFixed(5));
}
const multiplication = (num1, num2) => {
    return parseFloat((num1 * num2).toFixed(5));
}
const division = (num1, num2) => {
    if(num1 / num2 === Infinity) {
        return 'ERROR!';
    } else {
        return parseFloat((num1 / num2).toFixed(5));
    }
}

// Operate function will perform calculation
const operate = (num1, num2, operator) => {
    if(operator === 'add') {
        let result = addition(parseInt(num1), parseInt(num2));
        display.textContent = result;
        firstOperand = [result];
        secondOperand = [];
    } else if (operator === 'subtract') {
        let result = subtraction(num1, num2);
        display.textContent = result;
        firstOperand = [result];
        secondOperand = [];
    } else if (operator === 'multiply') {
        let result = multiplication(num1, num2)
        display.textContent = result;
        firstOperand = [result];
        secondOperand = [];
    } else {
        let result = division(num1, num2);
        display.textContent = result;
        firstOperand = [result];
        secondOperand = [];
    }
}

// Add event listener to equal button, will perform calculation
equalButton.addEventListener('click', () => {
    operate(firstOperand.join(''), secondOperand.join(''), operator);
});

// Clear calculator when clicked
clearButton.addEventListener('click', () => {
    firstOperand = [];
    secondOperand = [];
    operator = '';
    first = true;
    display.textContent = '';
})

// // Debugging purposes only
// addEventListener('keydown', () => {
//     console.log(firstOperand);
//     console.log(secondOperand);
//     console.log(operator);
//     console.log(first);
// });