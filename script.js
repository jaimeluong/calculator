// Input array to catch first number, operator, and second number
let input = [];

// Buttons nodelist
const buttons = document.querySelectorAll('.btn');
// 0,1,2,3 = add, subtract, multiply, divide
// 4,5,6,7 = 1, 2, 3, equal
// 8,9,10,11 = 4, 5, 6, clear
// 12,13,14,15 = 7, 8, 9, 0

// Display element
const display = document.querySelector('.display');

// Digit buttons
buttons[4].addEventListener('click', () => { // 1
    input.push(1);
    display.textContent = input.join('');
});
buttons[5].addEventListener('click', () => { // 2
    input.push(2);
    display.textContent = input.join('');
});
buttons[6].addEventListener('click', () => { // 3
    input.push(3);
    display.textContent = input.join('');
});
buttons[8].addEventListener('click', () => { // 4
    input.push(4);
    display.textContent = input.join('');
});
buttons[9].addEventListener('click', () => { // 5
    input.push(5);
    display.textContent = input.join('');
});
buttons[10].addEventListener('click', () => { // 6
    input.push(6);
    display.textContent = input.join('');
});
buttons[12].addEventListener('click', () => { // 7
    input.push(7);
    display.textContent = input.join('');
});
buttons[13].addEventListener('click', () => { // 8
    input.push(8);
    display.textContent = input.join('');
});
buttons[14].addEventListener('click', () => { // 9
    input.push(9);
    display.textContent = input.join('');
});
buttons[15].addEventListener('click', () => { // 0
    input.push(0);
    display.textContent = input.join('');
});

// Add button
buttons[0].addEventListener('click', () => {
    //input.push('add');
});

// Subtract button
buttons[1].addEventListener('click', () => {
    //input.push('subtract');
});

// Multiply button
buttons[2].addEventListener('click', () => {
    //input.push('multiply');
});

// Divide button
buttons[3].addEventListener('click', () => {
    //input.push('divide');
});

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