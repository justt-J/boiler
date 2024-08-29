let fname = "John";
console.log(`Hello, ${fname}!`);  // Template literal

let person = { name: "John", age: 30 };

let { name, age } = person;  // Destructuring

console.log(name)

let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5];  // Spread operator
