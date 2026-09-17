let num1 = Number(prompt("Enter a number:"));
let num2 = Number(prompt("Enter another number:"));
let num3 = Number(prompt("Enter a third number:"));

let average = (num1 + num2 + num3) / 3;

let sentence = "The average of " + num1 + ", " + num2 + ", and " + num3 + " is " + average;
document.getElementById("average").textContent = sentence;
console.log(sentence);

const animal = "cat";
const color = "orange";
let name = prompt("What is the cat's name?");

document.getElementById("sentence").textContent = "This is an " + color + " " + animal + " named " + name + ".";
console.log(name);

let currentDate = new Date();
document.getElementById("date").textContent = currentDate.toDateString();
console.log(currentDate);