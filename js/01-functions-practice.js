//STEP 1
// function halfNumber(number) {
//     return (`Half of ${number} is ${number / 2}.`);
// };
// console.log(halfNumber(5));

//STEP 2
// function squareNumber(number) {
//     return (`The result of squaring the number ${number} is ${number**2}.`);
// };
// console.log(squareNumber(5));

//STEP 3
// function percentOf(firstNumber, secondNumber) {
//     return `${firstNumber} is ${(firstNumber/secondNumber)*100}% of ${secondNumber}.`
// }
// console.log(percentOf(2,5));


//STEP 4
// function findModulus(firstNumber, secondNumber) {
//     return (`${secondNumber%firstNumber} is the modulus of ${firstNumber} and ${secondNumber}.`)
// }
// console.log(findModulus(4, 10))


//STEP 5

// Create a JavaScript function that accepts a certain amount of numbers as parameters. Those numbers should be collected using a prompt and the numbers should be delimited by commas. Once the values are collected, find the sum of all of the numbers combined. You will need to use a function, loop, arguments object, and several type conversion global functions to accomplish this task.

function hardQuestion(number) {
    let base = 0;
    for (let i = 0; i < arguments.length; i++) {
        base += Number(arguments[i])
    }

    return base;
}
console.log(hardQuestion(Number(prompt('Please insert numbers separated by a commas'))));