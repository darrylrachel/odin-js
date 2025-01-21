// Understand the problem


// Plan

// * Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper.

// * What inputs will your program have? Will the user enter data or will you get input from somewhere else?

// * What’s the desired output?

// * Given your inputs, what are the steps necessary to return the desired output?



// Write a program that allows the user to enter a number, print each number between one and the number the user entered, but for numbers that divide by 3 without a remainder print Fizz instead. For numbers that divide by 5 without a remainder print Buzz and finally for numbers that divide by both 3 and 5 without a remainder print FizzBuzz.



// Pseudocode

// 1. When a user inputs a number
// 2. Loop from 1 to the entered number
// 3. If the current number is divisible by 3 then print "Fizz"
// 4. If the current number is divisible by 5 then print "Buzz"
// 5. If the current number is divisible by 3 and 5 then print "FizzBuzz"
// 6. Otherwise print the current number

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "))

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz")
  } else if (i % 3 === 0) {
    console.log("Fizz")
  } else if (i % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(i)
  }
  
  
}
