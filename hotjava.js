// Homework

// Complete the Following Coding Questions in JavaScript.

// Question #1

// Write a function that takes a string (sentence) and an array of strings (in this example dog_names) and check if one of the list members (dog names) is in the string (sentence). Return an array of the dog names found in the array

// hint: filter, includes

// for information on includes see:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

var dogNames = ["Max","Fido","Gizmo","Nala"]
const whosAGoodBoy = (anyString) => {
    return dogNames.filter((dog) => anyString.includes(dog))
}
console.log('===================Question #1')
console.log(whosAGoodBoy("Hello, my dog is Max, and they have purple eyes!"))
console.log(whosAGoodBoy("My Dog is fast, her name is Tippi"))
console.log(whosAGoodBoy("Come here Fido and Gizmo come here"))
// //Test Cases
// let testString1 = "Hello, my dog is Max, and they have purple eyes!"
// //Expect ['Max']

// let testString2 = "My Dog is fast, her name is Tippi"
// //Expect []

// let testString3 = "Come here Fido and Gizmo come here"
// //Expect['Fido','Gizmo']

// Question #2

// Write a Function using map to convert an array of number from inches to feet

// 1 foot = 12 inches

const heightsInInches = [66, 64, 60, 52, 72, 80, 51]
// // Expect
// // [
// //   5.5,
// //   5.333333333333333,
// //   5,
// //   4.333333333333333,
// //   6,
// //   6.666666666666667,
// //   4.25
// // ]
console.log('===================Question #2')
console.log(heightsInInches.map((height => height/12)))


// Question #3

// Using the Ternary Operator and map create an array that adds is eating pizza to every name from the array tmnt that ends with o and add is being rude to any other name.

const tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]
// // expect
// // [
// //   'Leonardo is eating pizza',
// //   'Michelangelo is eating pizza',
// //   'Donatello is eating pizza',
// //   'Raphael is being rude'
// // ]
console.log('===================Question #3')
console.log(tmnt[0].slice(-1))
for(let i=0; i < tmnt.length; i++) if (tmnt[i].slice(-1) == 'o') {
    console.log(`${tmnt[i]} is eating pizza`)
    }else {
    console.log(`${tmnt[i]} is being rude`)
    }



// Question #4

// Write an arrow function to find the max number in a list. Do not use the Math.max Function.

// The List will be all positive numbers

let findAMax=[123,5436,45784,1234,34,65,234125,645,3452,13216,49]
// //Expect
// // 234125
console.log('===================Question #4')
const findLargest = (anArray) => {for (let i=1; i < anArray.length; i++){
    let largest = anArray[0]
    if (largest < anArray[i]) {
        largest = anArray[i]
    } 
    console.log(largest)
}
} 

findLargest(findAMax)
// Question #5

// At the end of the third Iteration (the third time the loop has ran) of this for Loop define the state of all the variables used in the cell

// var bingo = "B-I-N-G-O"
// var ognib = ""
// for(let i=bingo.length-1; i>=0; i--){
//     ognib+=(bingo[i])
//     //define state from this line on the third iteration
// }
// //bingo value is

// //ognib value is

// // i value is
console.log('===================Question #5')


// Question #6

// Complete 3 Codewars problems using JavaScript, start with ones you have already solved in python. Paste a link hear to the 3 questions you completed

// 1: https://www.codewars.com/kata/52597aa56021e91c93000cb0

// 2: https://www.codewars.com/kata/56747fd5cb988479af000028/javascript

// 3: