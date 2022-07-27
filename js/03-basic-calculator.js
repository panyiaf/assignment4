// IMPORT THE MODULE
import * as calculate from "/modules/calculator.js";

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
let firstNumber = Number(prompt('What is your first number?'));
let secondNumber = Number(prompt('What is your second number?'));
let operation = String(prompt('Would you like to add, subtract, multiply, or divide?'));

console.log(firstNumber);
console.log(secondNumber)
console.log(operation)

// CHECK TO SEE WHAT OPERATION THEY'RE USING
switch (operation) {
    case 'add':
        
        break;
    case 'subtract':
        
        break;
    case 'multiply':
        
        break;
    case 'divide':
        
        break;
    default:
        alert('You didnt select the correct options');
}

// CALL THE APPROPRIATE FUNCTION