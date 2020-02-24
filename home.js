console.log('hello');

//alert('hello this is Evan');

// How to write a comment inline

// Variables
var b = 'gorillaz';
console.log(b);

var someNumber = 32;
// console.log(someNumber);



// var age = prompt('What is your age?');

// document.getElementById('someText').innerHTML = age;

// Numbers in Javascript
var num1 = 10;

// Increment num1 by 1
num1++;

// Decrement num1 by 1
num1--;
console.log(num1);

// Divide, multiply *, remainder %
console.log(num1 / 6);

//increment/decrement by 10
num1 += 10;
console.log(num1);

/* Functions
1. create a function
2. call the function
*/

// Create
function fun(){
    console.log('this is a function');
}

// Call
fun();

/* lets create a function that takes in a name and says hello followed by your name

for example

Name: "Evan"

Return: "Hello Evan"
*/


function greeting(yourName){
    
    var result = 'Hello ' + yourName; // String Concatenation
    console.log(result);
}

/* var name = prompt('what is your name?');
greeting(name);*/

// How do argurments work in functions?
// How do we add 2 numbers together in a function?

function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(num1 + num2);
}

sumNumbers(10, 10);

/* While loops

var num = 0;

while(num < 100){
    num += 1;
    console.log(num);
}
*/

// For loops
for(let num = 0; num <= 100; num++){
    console.log(num);
}

// Data types
let yourAge = 18; // number
let yourName = 'Evan' // string
let name = {first: 'Evan', last: 'French'}; // object
let truth = false; // boolean
let groceries = ['apple', 'banana', 'oranges']; // array
let random; // undefined
let nothing = null; // value null

// Strings in Javascript (common methods)
let fruit = 'banana,apple,orange,blackberry';
let moreFruits = 'banana/apple';
console.log(moreFruits);      // new line

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit[2]);
console.log(fruit.charAt(2));
console.log(fruit.split(','));        // split by a comma
console.log(fruit.split(''));         // split by character

// Array
let fruits = ['banana', 'apple', 'orange', 'pineapples'];
fruits = new Array('banana', 'apple', 'orange', 'pineapples');

console.log(fruits[2]);     // access value at index 2nd

fruits[0] = 'pear';
console.log(fruits);

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[1]);
}

// array common methods
console.log('to string', fruits.toString());
console.log(fruits.join(' - '));
console.log(fruits, fruits.pop(), fruits);

// Conditionals, Control flows, (if else)
// 18-35 is my target demographic
// && AND
// || OR
var age = 45;

let student = {
    first: 'Evan',
    last: 'French',
    age: '19',
};
if( (age >= 18) && (age <= 35) ) {
    status = 'target demo';
    console.log(status);
}
else{
    status = 'not my audience';
    console.log(status);
}

// Switch statements
// differentiate between weekeday vs. weekend
// day 0 is sunday
// day 6 --> saturday -->
// day 4 --> thursday --> weekday
switch(2){
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
}
console.log(text);

