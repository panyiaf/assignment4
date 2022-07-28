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

function hardQuestion() {
    let base = 0;
    for (let i = 0; i < arguments.length; i++) {
        base += Number(arguments[i])
    }

    return base;
}

function getNumbers() {
    let tempNumber;
    let newNumber = 0;
    let newNewNumber;

    do {
        answer = prompt('Would you like to add a new number? (Y / N) ')
        
        if ((answer === "Y") || (answer === "y")) {
            tempNumber = Number(prompt('What number would you like to insert?'));
            String(newNumber += tempNumber + ', ')
        } else if ((answer === "N") || (answer === "n")){
            alert('Thanks for inserting numbers!')
            newNumber = newNumber.replace(/,\s*$/, "");
            console.log('this is the final number ' + newNumber)
            newNewNumber = newNumber
            return newNewNumber
        } else {
            console.log('You didnt put any numbers')
        }        
    } while (true) 
}
console.log(hardQuestion(parseFloat((getNumbers()))))
console.log(hardQuestion(03, 4, 6))