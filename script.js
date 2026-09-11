console.log("Hello World.");
console.log("First Javascript");

const myName = "Jery A. pequitpequit";
myNumber = 99902567231,
    myAddress = "Punta Mesa Manapla";
let age = 20;

console.log("Name: " + myName);
console.log("Number: " + myNumber);
console.log("Address: " + myAddress);
console.log("Age: " + age);

//Functions
function greet(name) {
    return 'morning, ${name}';

}
console.log();

function mdas(num1, num2) {
    let mul = num1 * num2;
    let div = num1 / num2;
    let add = num1 + num2;
    let sub = num1 - num2;
    return { mul, div, add, sub };
}
console.log(mdas(5, 3));

const heading = document.querySelector("h1")

const contact = document.querySelector(".contact");
const services = document.querySelector(".services");

console.log(heading);
console.log(contact);
console.log(services);



