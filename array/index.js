/* task 1
define const name = " javascript". 
write a code snippet that uses template literals to generate the following message
"the length of the word 'javascript' is 10 characters."
 answer*/
const name = "javascript";
const result = `The length of the word ${name} is 10 characters.`

console.log(result);

/**
write a function greet that takes a name parameter with a default value of "friend".
The function should return a greeting message like "hello, [name]!
 answer */

let greet = "good night";
let name2 = "reuben";

console.log(`hello ${name2}`);

/* task 4
define a string const message = "welcome to javascript  ES6!" write code to

convert it to lowercase
find the position of the word "javascript"
replace "javascript" with "ES6"
 answer */

let message = "WELCOME TO JAVASCRIPT  ES6!"

console.log(message.toLowerCase());
console.log(message.indexOf("JAVASCRIPT"));

let get = "Welcome to javascript";

console.log(get.replace("Welcome", "to", "ES6"));


/* task 5
create an array const numbers = [3, 6, 9, 12, 15, 18, 21]. 
use an arrow function with the filter() method to create a new array with only number greater than 10.
 answer*/

const numbers = [3, 6, 9, 12, 15, 18, 21];
const greaterthanten = numbers.filter(num => num > 10) 

console.log(greaterthanten);


/* task 6
define a string const message = "welcome to javascript  ES6!" write code to

convert it to lowercase
find the position of the word "javascript"
replace "javascript" with "ES6"                   this question was repeated//
 answer
*/

let message1 = "WELCOME TO JAVASCRIPT  ES6!"

console.log(message.toLowerCase());
console.log(message.indexOf("JAVASCRIPT"));

let get1 = "Welcome to javascript";

console.log(get.replace("Welcome", "to", "ES6"))


/* task 7
create two arrays const arr1 = [1, 2, 3] and const arr2 = [4, 5, 6].
use the spread operator to merge them into a single array and log the result
 answer*/

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

let merge = [...arr1, ...arr2];
console.log(merge);

/* task 9
Given the array const items = ["apple", "banana", "cherry"], use the map() 
function to return a new array where each item is capitalized.
 answer*/

const items = ["apple", "banana", "cherry"];
const capitalizeditems = items.map(item => item.toUpperCase());

console.log(items);

/* task 10
create an array const scores = [10, 15, 20, 25].
write a function using the reduce() method to calculate the total score.
 answer*/

const scores = [10, 15, 20, 25];

const totalScore = scores.reduce((total, score) => total + score, 0);
console.log(totalScore)
