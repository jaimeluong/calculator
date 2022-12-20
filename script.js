// Add function
const add = (num1, num2) => {
    return num1 + num2;
}

// Subtract function
const subtract = (num1, num2) => {
    return num1 - num2;
}

// Multiply function
const multiply = (num1, num2) => {
    return num1 * num2;
}

// Divide function
const divide = (num1, num2) => {
    if(num2 !== 0) {
        return num1 / num2;
    } else {
        return 'ERROR!';
    }
}

// Operate function to be called when equal button is clicked
const operate = (operator, num1, num2) => {

}