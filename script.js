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

// Operator buttons
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');

// Add event listeners to operator buttons
plusButton.addEventListener('click', () => {
    first = !first; // Toggle to accept first operand or second operand
    operator = 'add'; // Set operator to addition
});
minusButton.addEventListener('click', () => {
    first = !first; // Toggle to accept first operand or second operand
    operator = 'subtract'; // Set operator to addition
});
multiplyButton.addEventListener('click', () => {
    first = !first; // Toggle to accept first operand or second operand
    operator = 'multiply'; // Set operator to addition
});
divideButton.addEventListener('click', () => {
    first = !first; // Toggle to accept first operand or second operand
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

// Operate function will perform calculation
const operate = (numOne, numTwo, operator) => {
    return operator(numOne, numTwo);
}

// // Debugging
// const equal = document.querySelector('#equal');
// equal.addEventListener('click', () => {
//     console.log(firstOperand);
//     console.log(secondOperand);
//     console.log(operator);
//     console.log(first);
// });