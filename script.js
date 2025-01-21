console.log('Hello World!')

// Variables
    let name = "Darryl";
    let surname = "Rachel";

    console.log(name);
    console.log(surname);

    let age = 11;
    console.log(age)

    age = 54;
    console.log(age);

    const pi = 3.14;
    // pi = 10;

    console.log(pi);

// Numbers
// The building blocks of programming logic
console.log(23 + 97) // 120
console.log(2 + 36 + 2000 + 47 + 56 + 98) // 2239
console.log( (4 + 6 + 9) / 77 ) // 0.24675324675324675

let a = 10
console.log(a) // 10

console.log(9 * a) // 90

let b = 7 * a
console.log(b)

const max = 57
let actual = max - 13
let percentage = actual / max // 0.7719298245614035

/**
 * The code below tells the browser to ask you for a number
 * then if that number is `6`, it returns `true` otherwise it returns `false`
 * 
 * Change this code so it returns `true` when the number is greater than or equal to 10, and false if it is less than 10
 */

// number = Number(prompt("enter a number"));

// function numberChecker() {
// 	if(number >= 6) {
// 		return true;
// 	} else if (number < 10) {
// 		return false;
// 	}
// }

// console.log(numberChecker());

// Functions
function favoriteAnimal(animal) {
  return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('Owl'))

function add7(num) {
  return num + 7
}
console.log(add7(7)) // 14

function multiply(x, y) {
  return x * y
}
console.log(multiply(2, 3)) // 6

// REMEMBER THESE ONE
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
console.log(capitalize("darryl"))

function lastLetter(string) {
  return string.slice(-1)
}
console.log(lastLetter('Hello'))

function anotherLastLetter(last) {
  return last[last.length - 1]
}
console.log(anotherLastLetter('World'))