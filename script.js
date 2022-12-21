// Nodelist of 10 digits (1,2,3,4,5,6,7,8,9,0)
const digits = document.querySelectorAll('.digit');

// Display text
let display = document.querySelector('.display');

// Global variables to capture number input and chosen operator
let firstOperand = []; // First number
let secondOperand = []; // Second number
let operator; // Chosen operator

// Flag to determine if the first operand or second operand is being typed in
let first = true;

// Toggle flag to accept either first or second operand
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
    if(first) { // Only toggle if it already has not been
        toggle();
    }
    operator = 'add'; // Set operator to addition
    plusButton.classList.add('clicked');
});
minusButton.addEventListener('click', () => {
    if(first) {
        toggle();
    }
    operator = 'subtract'; // Set operator to subtraction
    minusButton.classList.add('clicked');
});
multiplyButton.addEventListener('click', () => {
    if(first) {
        toggle();
    }
    operator = 'multiply'; // Set operator to multiplication
    multiplyButton.classList.add('clicked');
});
divideButton.addEventListener('click', () => {
    if(first) {
        toggle();
    }
    operator = 'divide'; // Set operator to division
    divideButton.classList.add('clicked');
});

// Add event listers to each digit button
digits.forEach(build); // Call a build function on each digit button to  build the event listener
function build(digitButton, index) { // Give an event listener that appends the correct digit
    digitButton.addEventListener('click', () => {
        if(first && index !== 9) { // For numbers 1-9
            firstOperand.push(index+1);
            display.textContent = firstOperand.join('');
        } else if(first && index === 9) { // Case for digit button 0 (which is last in the nodelist)
            firstOperand.push(0);
            display.textContent = firstOperand.join('');
        } else if(!first && index !== 9) { // Edit the second operand. After subsequent calculations, the first operand is already set.
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
    return parseFloat((num1 + num2).toFixed(5)); // Remove insignificant trailing zeroes and round to 5 digits
}
const subtraction = (num1, num2) => {
    return parseFloat((num1 - num2).toFixed(5));
}
const multiplication = (num1, num2) => {
    return parseFloat((num1 * num2).toFixed(5));
}
const division = (num1, num2) => {
    if(num1 / num2 === Infinity) { // Dividing by zero in JavaScript returns Infinity
        return 'ERROR!';
    } else {
        return parseFloat((num1 / num2).toFixed(5));
    }
}

// Operate function will perform calculation
const operate = (num1, num2, operator) => {
    if(operator === 'add') {
        let result = addition(parseInt(num1), parseInt(num2)); // Parse as integer to avoid string concatenation, only happened with addition
        set(result);
    } else if (operator === 'subtract') {
        let result = subtraction(num1, num2);
        set(result);
    } else if (operator === 'multiply') {
        let result = multiplication(num1, num2)
        set(result);
    } else {
        let result = division(num1, num2);
        set(result);
    }
}

// Set post-calculation parameters
const set = (result) => {
    display.textContent = result;
    firstOperand = [result];
    secondOperand = [];
}

// Add event listener to equal button, will perform calculation
equalButton.addEventListener('click', () => {
    operate(firstOperand.join(''), secondOperand.join(''), operator);
    plusButton.classList.remove('clicked');
    minusButton.classList.remove('clicked');
    multiplyButton.classList.remove('clicked');
    divideButton.classList.remove('clicked');
});

// Clear calculator when clicked, reset everything back to original parameters
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